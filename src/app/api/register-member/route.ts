import { NextRequest, NextResponse } from 'next/server';
import { getCacheHeaders } from '@/lib/api/cache';
import { handleCaptcha } from '@/lib/api/forms/handle-captcha';
import { handleSendEmail } from '@/lib/api/forms/handle-send-email';
import { registerMemberWithGoogleSheets } from '@/lib/api/register/api';

export const POST = async (request: NextRequest): Promise<NextResponse> => {
  const { email, captchaToken, member } = await request.json();

  // Turnstile request
  const captchaResponse = await handleCaptcha(captchaToken);
  if (captchaResponse) {
    return captchaResponse;
  }

  // Create user request and save to Google Sheets
  try {
    await registerMemberWithGoogleSheets(member);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Something went wrong while registering member.' },
      {
        status: 500,
        headers: getCacheHeaders('WRITE'),
      },
    );
  }

  // Mailgun request
  const sendEmailResponse = await handleSendEmail(email);

  // Add caching headers for successful registration
  if (sendEmailResponse.status === 200) {
    return NextResponse.json(
      { success: true, message: 'Member registered successfully' },
      {
        status: 200,
        headers: getCacheHeaders('WRITE'),
      },
    );
  }

  return sendEmailResponse;
};
