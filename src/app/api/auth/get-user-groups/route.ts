import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_ADMIN_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY!.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/admin.directory.user.readonly'],
    });

    const service = google.admin({ version: 'directory_v1', auth: await auth.getClient() });

    const { data } = await service.users.get({
      userKey: email,
    });

    console.log(`User data: ${JSON.stringify(data)}`);
    const orgUnitPath = data.orgUnitPath;
    console.log(`User's Org Unit Path: ${orgUnitPath}`);

    return NextResponse.json({ orgUnitPath });
  } catch (error: any) {
    console.error(`Error fetching user's org unit: ${error.message}`);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
