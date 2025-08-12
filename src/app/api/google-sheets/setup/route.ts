import { NextResponse } from 'next/server';
import { createSheetHeaders } from '@/lib/services/google-sheets';

export const POST = async (): Promise<NextResponse> => {
  try {
    await createSheetHeaders();

    return NextResponse.json(
      { message: 'Google Sheet headers created successfully' },
      { status: 200 },
    );
  } catch (error) {
    console.error('Error setting up Google Sheet:', error);
    return NextResponse.json({ error: 'Failed to setup Google Sheet' }, { status: 500 });
  }
};
