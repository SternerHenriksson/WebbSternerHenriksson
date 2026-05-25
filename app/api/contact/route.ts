import nodemailer from "nodemailer"
import { NextRequest } from "next/server"

export async function POST(req: NextRequest) {
  const { namn, email, foretag, omrade, meddelande } = await req.json()

  if (!namn || !email || !meddelande) {
    return Response.json({ error: "Obligatoriska fält saknas." }, { status: 400 })
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  await transporter.sendMail({
    from: `"${namn}" <${process.env.SMTP_USER}>`,
    replyTo: email,
    to: "webbsternerhenriksson@gmail.com",
    subject: `Nytt meddelande via hemsidan — ${omrade}`,
    text: [
      `Namn: ${namn}`,
      `E-post: ${email}`,
      `Företag: ${foretag || "—"}`,
      `Område: ${omrade}`,
      ``,
      meddelande,
    ].join("\n"),
    html: `
      <table style="font-family:sans-serif;font-size:15px;color:#3A4452;max-width:560px">
        <tr><td style="padding:0 0 8px"><strong>Namn:</strong> ${namn}</td></tr>
        <tr><td style="padding:0 0 8px"><strong>E-post:</strong> <a href="mailto:${email}">${email}</a></td></tr>
        <tr><td style="padding:0 0 8px"><strong>Företag:</strong> ${foretag || "—"}</td></tr>
        <tr><td style="padding:0 0 24px"><strong>Område:</strong> ${omrade}</td></tr>
        <tr><td style="padding:16px;background:#F5F2EC;border-left:3px solid #B89968;white-space:pre-wrap">${meddelande}</td></tr>
      </table>
    `,
  })

  return Response.json({ ok: true })
}
