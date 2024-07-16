import { NextRequest, NextResponse } from 'next/server';
import {
  dashboardMiddleware,
  groupsMiddleware,
  dashboardMiddlewareConfig,
  groupsMiddlewareConfig,
} from './middlewares';

export function middleware(req: NextRequest) {
  const url: string = req.nextUrl.pathname;

  if (dashboardMiddlewareConfig.some((item) => new RegExp(`^${item}$`).test(url))) {
    return dashboardMiddleware(req);
  }

  if (groupsMiddlewareConfig.some((item) => new RegExp(`^${item}$`).test(url))) {
    return groupsMiddleware(req);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [...dashboardMiddlewareConfig, ...groupsMiddlewareConfig],
};
