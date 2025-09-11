import { NextRequest, NextResponse } from 'next/server';
import { updateActivity, deleteActivity, createActivity } from '@/lib/api/activities/api';

export const POST = async (request: NextRequest): Promise<NextResponse> => {
  const { action, data } = await request.json();

  console.log('Activity API:', action, data);

  try {
    let result;
    switch (action) {
      case 'create':
        result = await createActivity(data);
        console.log('Create activity result:', result);
        break;
      case 'update':
        result = await updateActivity(data);
        console.log('Update activity result:', result);
        break;
      case 'delete':
        result = await deleteActivity(data);
        console.log('Delete activity result:', result);
        break;
      default:
        return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
    }

    // Validate that the operation actually succeeded
    if (!result) {
      throw new Error(`Failed to ${action} activity: No result returned`);
    }

    return NextResponse.json({ success: true, data: result });
  } catch (error: any) {
    console.error(`Activity API Error (${action}):`, error);
    return NextResponse.json(
      {
        error: error.message || 'Unknown error occurred',
        action,
        data: data ? { ...data, groupId: data.groupId ? '[REDACTED]' : undefined } : undefined,
      },
      { status: 500 },
    );
  }
};
