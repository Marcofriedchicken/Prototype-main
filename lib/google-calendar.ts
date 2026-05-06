import { google } from "googleapis"

const SCOPES = ["https://www.googleapis.com/auth/calendar"]

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

export function getCalendarClient() {
  const clientEmail = getRequiredEnv("GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL")
  const privateKey = getPrivateKey()

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: SCOPES,
  })

  return google.calendar({ version: "v3", auth })
}

export function getCalendarId() {
  return getRequiredEnv("GOOGLE_CALENDAR_ID")
}
