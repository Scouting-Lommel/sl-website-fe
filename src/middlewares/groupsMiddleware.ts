import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { checkOrganisationPermission } from '@/lib/helpers/checkOrganisationPermission';

export async function groupsMiddleware(req: NextRequest) {
  const token = await getToken({ req });
  const url: string = req.nextUrl.pathname;
  const origin = req.nextUrl.origin;

  const signInRedirect = NextResponse.redirect(`${origin}/api/auth/signin`);
  const unauthorizedRedirect = NextResponse.redirect(`${origin}/geen-toegang`);

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

  if (!token.email) {
    console.error('Token exists but email is missing');
    return unauthorizedRedirect;
  }

  try {
    const response = await fetch(
      `${origin}/api/auth/get-org-unit?email=${encodeURIComponent(token.email)}`,
    );

    const contentType = response.headers.get('content-type');
    if (!response.ok) {
      console.error(`API response not OK: ${response.status} ${response.statusText}`);
      return unauthorizedRedirect;
    }

    if (!contentType || !contentType.includes('application/json')) {
      console.error(`Unexpected content type: ${contentType}`);
      return unauthorizedRedirect;
    }

    const data = await response.json();

    if (!data?.orgUnitPath) {
      console.error(`Invalid orgUnitPath: ${data?.orgUnitPath}`);
      return unauthorizedRedirect;
    }

    if (getGroup() && checkOrganisationPermission(data.orgUnitPath, `groups:${getGroup()}`)) {
      return NextResponse.next();
    }

    if (!getGroup() && checkOrganisationPermission(data.orgUnitPath, 'groups')) {
      return NextResponse.next();
    }
  } catch (error: any) {
    console.error(`Error fetching org unit data: ${error.message}`, error);
    return unauthorizedRedirect;
  }

  return unauthorizedRedirect;
}

export const groupsMiddlewareConfig = ['/dashboard/takken', '/dashboard/takken/(.*)'];
