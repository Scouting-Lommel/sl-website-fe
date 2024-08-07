import { NextRequest, NextResponse } from 'next/server';
import { deleteFile } from '@/lib/api/files/api';
import { addFile } from '@/lib/api/groups/api';

export async function POST(request: NextRequest) {
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
    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
