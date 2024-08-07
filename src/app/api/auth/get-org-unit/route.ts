import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';
import { JWT } from 'google-auth-library';

const admin = google.admin('directory_v1');

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get('email');

  if (!email) {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 });
  }

  try {
    const auth = new JWT({
      email: process.env.GOOGLE_ADMIN_SERVICE_ACCOUNT!,
      subject: process.env.GOOGLE_ADMIN_EMAIL!,
      key: process.env.GOOGLE_ADMIN_PRIVATE_KEY!.replace(/\\n/g, '\n'),
      keyId: process.env.GOOGLE_ADMIN_KEY_ID,
      scopes: ['https://www.googleapis.com/auth/admin.directory.user.readonly'],
    });

    const response = await admin.users.get({
      userKey: email,
      auth,
    });

    const orgUnitPath = response.data.orgUnitPath;

    return NextResponse.json({ orgUnitPath });
  } catch (error: any) {
    console.error(`Error fetching org unit data: ${error.message}`);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
