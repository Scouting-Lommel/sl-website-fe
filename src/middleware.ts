import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
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
      return NextResponse.redirect(`${process.env.SITE_URL}/unauthorized`);
    }

    if (!contentType || !contentType.includes('application/json')) {
      return NextResponse.redirect(`${process.env.SITE_URL}/unauthorized`);
    }

    const data = await response.json();
    console.log(`Org unit data: ${JSON.stringify(data)}`);

    // Add your org unit check logic here
    // if (data.orgUnitPath !== '/desired/orgunit/path') {
    //   return NextResponse.redirect(`${process.env.SITE_URL}/unauthorized`);
    // }
  } catch (error: any) {
    console.error(`Error fetching org unit data: ${error.message}`);
    return NextResponse.redirect(`${process.env.SITE_URL}/unauthorized`);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
};
