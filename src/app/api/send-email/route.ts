import { NextRequest, NextResponse } from 'next/server';
import { getCacheHeaders } from '@/lib/api/cache';
import { handleCaptcha } from '@/lib/api/forms/handle-captcha';
import { handleSendEmail } from '@/lib/api/forms/handle-send-email';

export const POST = async (request: NextRequest): Promise<NextResponse> => {
  const { email, captchaToken } = await request.json();

  // Turnstile request
  const captchaResponse = await handleCaptcha(captchaToken);
  if (captchaResponse) {
    return captchaResponse;
  }

  // Mailgun request
  const sendEmailResponse = await handleSendEmail(email);

  // Add caching headers
  if (sendEmailResponse.status === 200) {
    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      {
        status: 200,
        headers: getCacheHeaders('WRITE'),
      },
    );
  }

  return sendEmailResponse;
};
