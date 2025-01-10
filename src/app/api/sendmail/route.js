import { sendEmail } from "@/utils/SendEmail";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    { message: "Hi! This is a test GET response" },
    { status: 200 }
  );
}

export async function POST(request) {
  try {
    const body = await request.json();
    console.log(body);

    const emailContent = `
    <div style="font-family: Arial, sans-serif; color: #333;">
        <h2 style="color: #2c3e50;">Contact Form Submission</h2>
        <p><strong style="color: #3498db;">Name:</strong> ${body.name}</p>
        <p><strong style="color: #3498db;">Email:</strong> ${body.email}</p>
        <p><strong style="color: #3498db;">Message:</strong> ${body.message}</p>
    </div>
    `;

    await sendEmail('rahmanhusain899@gmail.com',emailContent, body.name);
    /* await new Promise(resolve => setTimeout(resolve, 2000)); */
    return NextResponse.json(
      {
        message: "Mail Send Successfully!",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send Email" },
      { status: 500 }
    );
  }
}
