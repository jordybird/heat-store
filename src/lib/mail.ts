import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  host: process.env.GMAIL_HOST || "smtp.gmail.com",
  port: parseInt(process.env.GMAIL_PORT || "465"),
  secure: process.env.GMAIL_SECURE === "true",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
})

export async function sendWelcomeEmail(to: string, fullName: string) {
  return transporter.sendMail({
    from: `"Higher Up Smoke" <${process.env.GMAIL_USER}>`,
    to,
    subject: "Welcome to Higher Up Smoke!",
    html: `
      <h2>Welcome, ${fullName}!</h2>
      <p>We’re excited to have you join us.</p>
      <p>Thanks for signing up with Higher Up Smoke. Your next journey awaits.</p>
      <p>– The Higher Up Smoke Team</p>
    `,
  })
}
