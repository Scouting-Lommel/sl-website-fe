import { NextResponse } from 'next/server';

export const handleCaptcha = async (captchaToken: string): Promise<NextResponse | undefined> => {
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
};
