import { NextRequest, NextResponse } from 'next/server';
import {
  dashboardMiddleware,
  groupsMiddleware,
  dashboardMiddlewareConfig,
  groupsMiddlewareConfig,
} from './middlewares';

export function middleware(req: NextRequest) {
  const url: string = req.nextUrl.pathname;

  if (dashboardMiddlewareConfig.includes(url)) {
    return dashboardMiddleware(req);
  }

  if (groupsMiddlewareConfig.includes(url)) {
    return groupsMiddleware(req);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [...dashboardMiddlewareConfig, ...groupsMiddlewareConfig],
};
