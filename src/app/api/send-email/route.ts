import { NextRequest, NextResponse } from 'next/server';
import { handleCaptcha } from '@/lib/api/forms/handleCaptcha';
import { handleSendEmail } from '@/lib/api/forms/handleSendEmail';

export const POST = async (request: NextRequest): Promise<NextResponse> => {
  const { email, captchaToken } = await request.json();

  // Turnstile request
  const captchaResponse = await handleCaptcha(captchaToken);
  if (captchaResponse) {
    return captchaResponse;
  }

  // Mailgun request
  const sendEmailResponse = await handleSendEmail(email);
  return sendEmailResponse;
};
