import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest): Promise<NextResponse> {
  const { action, data } = await request.json();

  try {
    switch (action) {
      case 'create':
        console.log('Create attachment link', data);
        break;
      case 'delete':
        console.log('Delete attachment link', data);
        break;
      default:
        return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
    }
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
