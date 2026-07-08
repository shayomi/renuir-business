import { NextRequest, NextResponse } from 'next/server';
import createIntlMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const intlMiddleware = createIntlMiddleware(routing);

function isAuthenticated(request: NextRequest): boolean {
  const expectedUser = process.env.SITE_USER;
  const expectedPassword = process.env.SITE_PASSWORD;

  // No credentials configured => the gate is off, allow everyone through.
  // (Must be checked BEFORE the header check, otherwise a request with no
  // Authorization header is rejected even when no gate is configured.)
  if (!expectedUser || !expectedPassword) {
    return true;
  }

  const authHeader = request.headers.get('authorization');
  if (!authHeader?.startsWith('Basic ')) {
    return false;
  }

  const base64Credentials = authHeader.split(' ')[1];
  const credentials = atob(base64Credentials);
  const [user, password] = credentials.split(':');

  return user === expectedUser && password === expectedPassword;
}

export default function middleware(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return new NextResponse('Authentication required', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Renuir"',
      },
    });
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ['/', '/(de|en|ar|es|fr|pl|pt|tr)/:path*'],
};
