import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(req) {
  try {
    const { name, email, phone_number, subject, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false, // 🔥 THIS FIXES YOUR ERROR
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Subject: ${subject}`,
      html: `
        <h3>New Contact Message</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone_number}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
    });

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200 }
    );

  } catch (error) {
    console.error("MAIL ERROR:", error);

    return new Response(
      JSON.stringify({ success: false }),
      { status: 500 }
    );
  }
}
