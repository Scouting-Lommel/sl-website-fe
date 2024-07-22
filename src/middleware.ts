import { NextRequest, NextResponse } from 'next/server';
import {
  signinMiddleware,
  dashboardMiddleware,
  groupsMiddleware,
  signinMiddlewareConfig,
  dashboardMiddlewareConfig,
  groupsMiddlewareConfig,
} from './middlewares';

export function middleware(req: NextRequest) {
  const url: string = req.nextUrl.pathname;

  if (signinMiddlewareConfig.some((item: string) => new RegExp(`^${item}$`).test(url))) {
    return signinMiddleware(req);
  }

  if (dashboardMiddlewareConfig.some((item: string) => new RegExp(`^${item}$`).test(url))) {
    return dashboardMiddleware(req);
  }

  if (groupsMiddlewareConfig.some((item: string) => new RegExp(`^${item}$`).test(url))) {
    return groupsMiddleware(req);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [...signinMiddlewareConfig, ...dashboardMiddlewareConfig, ...groupsMiddlewareConfig],
};
