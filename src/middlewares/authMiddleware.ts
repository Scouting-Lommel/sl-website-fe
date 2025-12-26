import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function authMiddleware(req: NextRequest) {
  const token = await getToken({ req });
  const origin = req.nextUrl.origin;

  if (!token) {
    return NextResponse.redirect(`${origin}/api/auth/signin`);
  }

  if (!token.email) {
    console.error('Token exists but email is missing');
    return NextResponse.redirect(`${origin}/geen-toegang`);
  }

  try {
    const response = await fetch(
      `${origin}/api/auth/get-org-unit?email=${encodeURIComponent(token.email)}`,
    );

    const contentType = response.headers.get('content-type');
    if (!response.ok) {
      console.error(`API response not OK: ${response.status} ${response.statusText}`);
      return NextResponse.redirect(`${origin}/geen-toegang`);
    }

    if (!contentType || !contentType.includes('application/json')) {
      console.error(`Unexpected content type: ${contentType}`);
      return NextResponse.redirect(`${origin}/geen-toegang`);
    }

    const data = await response.json();

    if (!data?.orgUnitPath || !data.orgUnitPath.startsWith('/')) {
      console.error(`Invalid orgUnitPath: ${data?.orgUnitPath}`);
      return NextResponse.redirect(`${origin}/geen-toegang`);
    }
  } catch (error: any) {
    console.error(`Error fetching org unit data: ${error.message}`, error);
    return NextResponse.redirect(`${origin}/geen-toegang`);
  }

  return NextResponse.next();
}

export const authMiddlewareConfig = ['/dashboard', '/playground'];
