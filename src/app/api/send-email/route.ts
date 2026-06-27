import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, checkIn, checkOut, guests, message } =
      await req.json();

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email required" }, { status: 400 });
    }

    const body = [
      "New Booking Request — Pari Ghar Guest House",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "—"}`,
      `Check-in: ${checkIn || "—"}`,
      `Check-out: ${checkOut || "—"}`,
      `Guests: ${guests || "—"}`,
      `Message: ${message || "—"}`,
    ].join("\n");

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: "parighar@gmail.com",
      subject: `Booking Request from ${name}`,
      text: body,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to send email. Please email parighar@gmail.com directly." },
      { status: 500 }
    );
  }
}
