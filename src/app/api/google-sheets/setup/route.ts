import { NextResponse } from 'next/server';
import { getCacheHeaders } from '@/lib/api/cache';
import { createSheetHeaders } from '@/lib/services/google-sheets';

export const POST = async (): Promise<NextResponse> => {
  try {
    await createSheetHeaders();

    return NextResponse.json(
      { message: 'Google Sheet headers created successfully' },
      {
        status: 200,
        headers: getCacheHeaders('WRITE'),
      },
    );
  } catch (error) {
    console.error('Error setting up Google Sheet:', error);
    return NextResponse.json(
      { error: 'Failed to setup Google Sheet' },
      {
        status: 500,
        headers: getCacheHeaders('WRITE'),
      },
    );
  }
};
