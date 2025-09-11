import { NextRequest, NextResponse } from 'next/server';
import { deleteFile } from '@/lib/api/files/api';
import { addFile } from '@/lib/api/groups/api';

export const POST = async (request: NextRequest): Promise<NextResponse> => {
  const { action, data } = await request.json();

  try {
    switch (action) {
      case 'create':
        await addFile(data.id, data.files);
        break;
      case 'delete':
        await deleteFile(data);
        break;
      default:
        return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true }, { status: 200 });
};
