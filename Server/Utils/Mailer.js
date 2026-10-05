import nodemailer from "nodemailer"
import path from "path"
import { fileURLToPath } from "url"
import { contactEmailTemplate } from "./MailTemplate.js"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const sendContactEmails = async ({  name, mobile, email, notes }) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  })

  const html = contactEmailTemplate({ name, mobile, email, notes })

  // 1. Notify admin
  await transporter.sendMail({
    from: `"Website Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.ADMIN_EMAIL,
    subject: `New Contact Form Submission from ${name}`,
    html,
    attachments: [
      {
        filename: "Logo.png",
        path: path.join(__dirname, "../assets/Logo.png"),
        cid: "Logo" // must match src="cid:logo" in the template
      }
    ]
  })

  // 2. Confirm to customer - same template
  await transporter.sendMail({
    from: `"KR Industries Support" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "We received your message",
    html,
    attachments: [
      {
        filename: "Logo.png",
        path: path.join(__dirname, "../assets/Logo.png"),
        cid: "Logo" // must match src="cid:logo" in the template
      }
    ]
  })
}