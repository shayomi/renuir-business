import createIntlMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { routing } from './i18n/routing';

// Locale routing only. The basic-auth gate has been removed so the site is
// publicly accessible (and indexable per robots/metadata).
const intlMiddleware = createIntlMiddleware(routing);

export default function middleware(request: NextRequest) {
  // Shared post links are intentionally locale-neutral. Rewrite them to the
  // English route while keeping the public URL stable for sharing and SEO.
  if (request.nextUrl.pathname.startsWith('/post/')) {
    const url = request.nextUrl.clone();
    url.pathname = `/en${request.nextUrl.pathname}`;
    return NextResponse.rewrite(url);
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ['/', '/post/:path*', '/(de|en|ar|es|fr|pl|pt|tr)/:path*'],
};
