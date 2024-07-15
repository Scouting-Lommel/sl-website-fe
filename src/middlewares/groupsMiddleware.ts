import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function groupsMiddleware(req: NextRequest) {
  const token = await getToken({ req });

  if (!token) {
    return NextResponse.redirect(`${process.env.SITE_URL}/api/auth/signin`);
  }

  try {
    const response = await fetch(
      `${process.env.SITE_URL}/api/auth/get-org-unit?email=${token.email}`,
    );

    const contentType = response.headers.get('content-type');
    if (!response.ok) {
      return NextResponse.redirect(`${process.env.SITE_URL}/geen-toegang`);
    }

    if (!contentType || !contentType.includes('application/json')) {
      return NextResponse.redirect(`${process.env.SITE_URL}/geen-toegang`);
    }

    const data = await response.json();

    if (!data.orgUnitPath.startsWith('/Leiding') && data.orgUnitPath !== '/') {
      return NextResponse.redirect(`${process.env.SITE_URL}/geen-toegang`);
    }
  } catch (error: any) {
    console.error(`Error fetching org unit data: ${error.message}`);
    return NextResponse.redirect(`${process.env.SITE_URL}/geen-toegang`);
  }

  return NextResponse.next();
}

export const groupsMiddlewareConfig = ['/dashboard/takken'];
