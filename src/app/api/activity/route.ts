import { NextRequest, NextResponse } from 'next/server';
import { updateActivity, deleteActivity, createActivity } from '@/lib/api/activities/api';

export async function POST(request: NextRequest) {
  const { action, data } = await request.json();

  try {
    switch (action) {
      case 'create':
        await createActivity(data);
        break;
      case 'update':
        await updateActivity(data);
        break;
      case 'delete':
        await deleteActivity(data);
        break;
      default:
        return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
    }
    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
