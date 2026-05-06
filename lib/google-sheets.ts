import { google } from "googleapis"
import { format } from "date-fns"

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"]

function getRequiredEnv(name: string): string {
  const value = process.env[name]
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`)
  }
  return value
}

function getPrivateKey() {
  return getRequiredEnv("GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY").replace(/\\n/g, "\n")
}

export function getSheetsClient() {
  const clientEmail = getRequiredEnv("GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL")
  const privateKey = getPrivateKey()

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: SCOPES,
  })

  return google.sheets({ version: "v4", auth })
}

export function getSheetId() {
  return getRequiredEnv("GOOGLE_SHEET_ID")
}

type BookingRowData = {
  bookingId: string
  dateSubmitted: string
  customerName: string
  customerEmail: string
  customerPhone: string
  service: string
  addons: string
  totalAmount: string
  vehicle: string
  appointmentDate: string
  appointmentTime: string
}

export async function appendBookingToSheet(data: BookingRowData): Promise<void> {
  try {
    const sheets = getSheetsClient()
    const sheetId = getSheetId()

    const values = [
      [
        data.bookingId,
        data.dateSubmitted,
        data.customerName,
        data.customerEmail,
        data.customerPhone,
        data.service,
        data.addons,
        data.totalAmount,
        data.vehicle,
        data.appointmentDate,
        data.appointmentTime,
      ],
    ]

    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: "Sheet1!A:K",
      valueInputOption: "RAW",
      requestBody: {
        values,
      },
    })

    console.log("✓ Booking appended to Google Sheet:", data.bookingId)
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : "Unknown error"
    console.error("✗ Google Sheets API failed:", errorMsg)
    console.error("Full error:", error)
    // Silently fail - booking continues even if sheet append fails
  }
}

export function generateBookingId(): string {
  const now = new Date()
  const dateStr = format(now, "MMM").toUpperCase() + format(now, "dd")
  
  // Generate counter based on timestamp (simple approach for unique IDs within a day)
  const hours = format(now, "HH")
  const minutes = format(now, "mm")
  const seconds = format(now, "ss")
  const counter = String(parseInt(hours + minutes + seconds) % 100)
    .padStart(2, "0")

  return `WD-${dateStr}-${counter}`
}

export function formatAddons(addons: Array<{ name: string; price: number }>): string {
  if (addons.length === 0) return "None"
  return addons.map((addon) => `${addon.name} (₱${addon.price.toLocaleString()})`).join(", ")
}

export function formatVehicle(vehicle: { make: string; model?: string; year?: string; type: string }): string {
  const year = vehicle.year ? `${vehicle.year} ` : ""
  const model = vehicle.model ? ` ${vehicle.model}` : ""
  return `${year}${vehicle.make}${model} (${vehicle.type})`
}

export function formatAppointmentDate(dateStr: string): string {
  const [year, month, day] = dateStr.split("-")
  const date = new Date(`${year}-${month}-${day}`)
  return format(date, "MMMM dd, yyyy")
}

export function formatAppointmentTime(timeStr: string): string {
  const [hours, minutes] = timeStr.split(":")
  const date = new Date()
  date.setHours(parseInt(hours), parseInt(minutes), 0)
  return format(date, "h:mm a")
}
