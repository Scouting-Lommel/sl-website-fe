import { NextRequest, NextResponse } from 'next/server';
import { handleCaptcha } from '@/lib/api/forms/handleCaptcha';
import { handleSendEmail } from '@/lib/api/forms/handleSendEmail';
import { registerMember } from '@/lib/api/register/api';

export const POST = async (request: NextRequest): Promise<NextResponse> => {
  const { email, captchaToken, member } = await request.json();

  // Turnstile request
  const captchaResponse = await handleCaptcha(captchaToken);
  if (captchaResponse) {
    return captchaResponse;
  }

  // Create user request
  try {
    await registerMember(member);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Something went wrong while registering member.' },
      { status: 500 },
    );
  }

  // Mailgun request
  const sendEmailResponse = await handleSendEmail(email);
  return sendEmailResponse;
};
