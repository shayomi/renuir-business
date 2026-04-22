import { NextRequest, NextResponse } from 'next/server';
import createIntlMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const intlMiddleware = createIntlMiddleware(routing);

function isAuthenticated(request: NextRequest): boolean {
  const authHeader = request.headers.get('authorization');

  if (!authHeader?.startsWith('Basic ')) {
    return false;
  }

  const base64Credentials = authHeader.split(' ')[1];
  const credentials = atob(base64Credentials);
  const [user, password] = credentials.split(':');

  const expectedUser = process.env.SITE_USER;
  const expectedPassword = process.env.SITE_PASSWORD;

  // If no credentials configured, allow through
  if (!expectedUser || !expectedPassword) {
    return true;
  }

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
