import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { Resend } from "resend"

export async function POST() {
  try {
    const {
      RESEND_API_KEY,
      RESEND_FROM_EMAIL,
      BOOKING_OWNER_EMAIL,
      BOOKING_OWNER_EMAIL_ADDRESS,
      TEST_EMAIL_TO,
      TEST_EMAIL_RECIPIENT,
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASS,
      SMTP_FROM,
    } = process.env

    const FALLBACK_OWNER_EMAIL = "waynesdetailing2026@gmail.com"
    const ownerEmail = BOOKING_OWNER_EMAIL || BOOKING_OWNER_EMAIL_ADDRESS || FALLBACK_OWNER_EMAIL
    const testRecipient = TEST_EMAIL_TO || TEST_EMAIL_RECIPIENT || ownerEmail

    if (RESEND_API_KEY && RESEND_FROM_EMAIL && testRecipient) {
      const resend = new Resend(RESEND_API_KEY)
      await resend.emails.send({
        from: RESEND_FROM_EMAIL,
        to: testRecipient,
        subject: "Wayne's Detailing - Test Email",
        text: "Success. Resend is configured correctly.",
      })
      return NextResponse.json({ ok: true, provider: "resend" })
    }

    if (SMTP_HOST && SMTP_PORT && SMTP_USER && SMTP_PASS && SMTP_FROM && testRecipient) {
      const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: Number(SMTP_PORT),
        secure: Number(SMTP_PORT) === 465,
        auth: {
          user: SMTP_USER,
          pass: SMTP_PASS,
        },
      })
      await transporter.sendMail({
        from: SMTP_FROM,
        to: testRecipient,
        subject: "Wayne's Detailing - Test Email",
        text: "Success. SMTP is configured correctly.",
      })
      return NextResponse.json({ ok: true, provider: "smtp" })
    }

    return NextResponse.json(
      {
        ok: false,
        error:
          "No email provider/recipient configured. Add RESEND_* or SMTP_* and set TEST_EMAIL_TO (or BOOKING_OWNER_EMAIL) in .env.local.",
        debug: {
          hasResendKey: Boolean(RESEND_API_KEY),
          hasResendFrom: Boolean(RESEND_FROM_EMAIL),
          hasSmtpHost: Boolean(SMTP_HOST),
          hasSmtpUser: Boolean(SMTP_USER),
          hasTestRecipient: Boolean(testRecipient),
        },
      },
      { status: 400 },
    )
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to send test email."
    return NextResponse.json({ ok: false, error: message }, { status: 500 })
  }
}
