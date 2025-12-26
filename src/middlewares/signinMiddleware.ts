import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { getSiteUrl } from '@/lib/helpers/getSiteUrl';

export async function signinMiddleware(req: NextRequest) {
  const token = await getToken({ req });
  const origin = await getSiteUrl(req);

  if (token) {
    return NextResponse.redirect(`${origin}/dashboard`);
  }

  if (!req.nextUrl.search.includes('callbackUrl=')) {
    return NextResponse.redirect(`${origin}/inloggen?callbackUrl=${origin}`);
  }

  return NextResponse.next();
}

export const signinMiddlewareConfig = ['/inloggen'];
