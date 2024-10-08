import { NextRequest, NextResponse } from 'next/server';
import {
  dashboardMiddleware,
  dashboardMiddlewareConfig,
  groupsMiddleware,
  groupsMiddlewareConfig,
  signinMiddleware,
  signinMiddlewareConfig,
} from './middlewares';

export default function middleware(req: NextRequest) {
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

const combinedMatcher = [
  ...signinMiddlewareConfig,
  ...dashboardMiddlewareConfig,
  ...groupsMiddlewareConfig,
];

export const config = {
  matcher: combinedMatcher,
};
