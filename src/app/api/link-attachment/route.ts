import { NextRequest, NextResponse } from 'next/server';
import { editLinks } from '@/lib/api/groups/api';

export const POST = async (request: NextRequest): Promise<NextResponse> => {
  const { data } = await request.json();

  try {
    await editLinks(data.id, data.links);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
