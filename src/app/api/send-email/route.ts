import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest): Promise<NextResponse> {
  const { email, captchaToken } = await request.json();

  // Turnstile request
  const formData = new FormData();

  formData.append('secret', process.env.TURNSTILE_SECRET_KEY!);
  formData.append('response', captchaToken!);

  const captchaRequest = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    body: formData,
    method: 'POST',
  });

  const captchaResult = await captchaRequest.json();
  if (!captchaResult.success) {
    return NextResponse.json({ error: captchaResult }, { status: 422 });
  }

  // Sendgrid Mail request
  try {
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    await sgMail.send(email);
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: `Error when sending email: ${error}` }, { status: 500 });
  }
}
