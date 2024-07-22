import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function signinMiddleware(req: NextRequest) {
  const token = await getToken({ req });

  if (token) {
    return NextResponse.redirect(`${process.env.SITE_URL}/dashboard`);
  }

  if (!req.nextUrl.search.includes('callbackUrl=')) {
    return NextResponse.redirect(
      `${process.env.SITE_URL}/inloggen?callbackUrl=${process.env.SITE_URL}`,
    );
  }

  return NextResponse.next();
}

export const signinMiddlewareConfig = ['/inloggen'];
