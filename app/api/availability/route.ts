import { NextResponse } from "next/server"
import { getCalendarClient, getCalendarId } from "@/lib/google-calendar"

// Monday-Friday: 6am to 6pm
const WEEKDAY_SLOTS = [
  "06:00",
  "07:00",
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
]

// Saturday-Sunday: 9am to 5pm
const WEEKEND_SLOTS = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
]

function getSlotHoursForDate(dateStr: string): string[] {
  const date = new Date(`${dateStr}T00:00:00+08:00`)
  const dayOfWeek = date.getDay()
  // 0 = Sunday, 6 = Saturday
  return dayOfWeek === 0 || dayOfWeek === 6 ? WEEKEND_SLOTS : WEEKDAY_SLOTS
}

const GOOGLE_ENV_KEYS = [
  "GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL",
  "GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY",
  "GOOGLE_CALENDAR_ID",
]

function toIso(dateStr: string, time: string) {
  return `${dateStr}T${time}:00+08:00`
}

function overlaps(startA: string, endA: string, startB: string, endB: string) {
  return startA < endB && endA > startB
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const date = searchParams.get("date")

    if (!date) {
      return NextResponse.json({ error: "Missing date query parameter." }, { status: 400 })
    }

    const hasGoogleConfig = GOOGLE_ENV_KEYS.every((key) => Boolean(process.env[key]))
    const slotHours = getSlotHoursForDate(date)
    if (!hasGoogleConfig) {
      return NextResponse.json({
        date,
        slots: slotHours,
        fallback: true,
        message: "Google Calendar is not configured yet. Showing default slots.",
      })
    }

    const calendar = getCalendarClient()
    const calendarId = getCalendarId()

    const dayStart = `${date}T00:00:00+08:00`
    const dayEnd = `${date}T23:59:59+08:00`

    // Get all events for the day to count bay occupancy
    const eventsResponse = await calendar.events.list({
      calendarId,
      timeMin: dayStart,
      timeMax: dayEnd,
      singleEvents: true,
      orderBy: 'startTime',
    })

    const events = eventsResponse.data.items || []

    const availableSlots = slotHours.filter((slotStart) => {
      const start = toIso(date, slotStart)
      const [hour] = slotStart.split(":")
      const endHour = Number(hour) + 1
      const end = toIso(date, `${String(endHour).padStart(2, "0")}:00`)

      // Count how many events overlap with this slot
      const overlappingEvents = events.filter((event) => {
        if (!event.start?.dateTime || !event.end?.dateTime) return false
        return overlaps(start, end, event.start.dateTime, event.end.dateTime)
      })

      // Available if fewer than 4 bays are occupied
      return overlappingEvents.length < 4
    })

    return NextResponse.json({ date, slots: availableSlots })
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to load availability from Google Calendar."
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
