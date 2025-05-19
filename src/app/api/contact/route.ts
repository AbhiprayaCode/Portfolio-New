import { Resend } from 'resend';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const { name, email, phone, message, userInfo } = await request.json();

  try {
    const data = await resend.emails.send({
      from: `${name} <onboarding@resend.dev>`, // Kamu bisa custom domain di dashboard Resend
      to: [process.env.EMAIL_TO!],
      subject: `Website Contact Form: ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br/>${message}</p>
        <pre><strong>User Info:</strong> ${JSON.stringify(userInfo, null, 2)}</pre>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Resend error:', error);
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
  }
}