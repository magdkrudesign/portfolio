import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // Using Resend or any email service — for now we log and return success.
    // To wire up a real email service, install `resend` and add your API key:
    //
    // import { Resend } from "resend";
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "Portfolio <noreply@yourdomain.com>",
    //   to: "magdalena.kruk.design@gmail.com",
    //   subject: `New message from ${name}`,
    //   text: `From: ${name} <${email}>\n\n${message}`,
    // });

    console.log("Contact form submission:", { name, email, message });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
