import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { checkOrganisationPermission } from '@/lib/helpers/checkOrganisationPermission';

export async function groupsMiddleware(req: NextRequest) {
  const token = await getToken({ req });
  const url: string = req.nextUrl.pathname;

  const signInRedirect = NextResponse.redirect(`${process.env.SITE_URL}/api/auth/signin`);
  const unauthorizedRedirect = NextResponse.redirect(`${process.env.SITE_URL}/geen-toegang`);

  const getGroup = () => {
    const regex = new RegExp(`/dashboard/takken/(.*)`);
    const match = url.match(regex);
    if (!match) {
      return null;
    }
    return match[1];
  };

  if (!token) {
    return signInRedirect;
  }

  try {
    const response = await fetch(
      `${process.env.SITE_URL}/api/auth/get-org-unit?email=${token.email}`,
    );

    const contentType = response.headers.get('content-type');
    if (!response.ok) {
      return unauthorizedRedirect;
    }

    if (!contentType || !contentType.includes('application/json')) {
      return unauthorizedRedirect;
    }

    const data = await response.json();

    if (getGroup() && checkOrganisationPermission(data.orgUnitPath, `groups:${getGroup()}`)) {
      return NextResponse.next();
    }

    if (!getGroup() && checkOrganisationPermission(data.orgUnitPath, 'groups')) {
      return NextResponse.next();
    }
  } catch (error: any) {
    console.error(`Error fetching org unit data: ${error.message}`);
    return unauthorizedRedirect;
  }

  return unauthorizedRedirect;
}

export const groupsMiddlewareConfig = ['/dashboard/takken', '/dashboard/takken/(.*)'];
