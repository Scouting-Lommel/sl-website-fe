import { NextRequest, NextResponse } from 'next/server';
import {
  authMiddleware,
  authMiddlewareConfig,
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

  if (authMiddlewareConfig.some((item: string) => new RegExp(`^${item}$`).test(url))) {
    return authMiddleware(req);
  }

  if (groupsMiddlewareConfig.some((item: string) => new RegExp(`^${item}$`).test(url))) {
    return groupsMiddleware(req);
  }

  return NextResponse.next();
}
