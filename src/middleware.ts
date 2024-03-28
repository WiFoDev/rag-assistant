import { NextResponse } from 'next/server';
import NextAuth from 'next-auth';

import {
  API_AUTH_PREFIX,
  API_PUBLIC_ENDPOINTS,
  AUTH_ROUTES,
  DEFAULT_LOGIN_REDIRECT,
  PUBLIC_ROUTES,
} from './routes';
import authConfig from '../auth.config';

const { auth } = NextAuth(authConfig);

export default auth(req => {
  const { nextUrl } = req;
  const isLoggedIn = Boolean(req.auth);
  const signInUrl = new URL('/api/auth/signin', nextUrl);
  signInUrl.searchParams.set('callbackUrl', nextUrl.toString());

  const isApiAuthRoute = nextUrl.pathname.startsWith(API_AUTH_PREFIX);
  const isApiPublicEndpoint = API_PUBLIC_ENDPOINTS.includes(nextUrl.pathname);
  const isPublicRoute = PUBLIC_ROUTES.includes(nextUrl.pathname);
  const isAuthRoute = AUTH_ROUTES.includes(nextUrl.pathname);

  if (isApiAuthRoute || isApiPublicEndpoint) return NextResponse.next();

  if (isAuthRoute) {
    if (isLoggedIn)
      return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    return NextResponse.next();
  }

  if (!isLoggedIn && !isPublicRoute) return NextResponse.redirect(signInUrl);

  return NextResponse.next();
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
