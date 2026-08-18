import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const rateLimit = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000;
const MAX_REQUESTS = 5;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

    const now = Date.now();
    const userRequests = rateLimit.get(ip) || [];
    const recentRequests = userRequests.filter((time) => now - time < RATE_LIMIT_WINDOW);

    if (recentRequests.length >= MAX_REQUESTS) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 },
      );
    }

    recentRequests.push(now);
    rateLimit.set(ip, recentRequests);

    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const sanitizedName = String(name).trim().slice(0, 100);
    const sanitizedEmail = String(email).trim().slice(0, 254);
    const sanitizedMessage = String(message).trim().slice(0, 2000);

    if (!emailPattern.test(sanitizedEmail)) {
      return NextResponse.json({ error: "Please provide a valid email address" }, { status: 400 });
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("Email configuration missing");
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: sanitizedEmail,
      subject: `Portfolio Contact: ${sanitizedName}`,
      text: `
Name: ${sanitizedName}
Email: ${sanitizedEmail}
Message: ${sanitizedMessage}
IP Address: ${ip}
Time: ${new Date().toISOString()}
      `.trim(),
      html: `
<h3>New Contact Form Submission</h3>
<p><strong>Name:</strong> ${sanitizedName}</p>
<p><strong>Email:</strong> ${sanitizedEmail}</p>
<p><strong>Message:</strong></p>
<p>${sanitizedMessage.replace(/\n/g, "<br>")}</p>
<hr>
<p><small>IP Address: ${ip}</small></p>
<p><small>Time: ${new Date().toISOString()}</small></p>
      `.trim(),
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 },
    );
  }
}
