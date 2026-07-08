import createIntlMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

// Locale routing only. The basic-auth gate has been removed so the site is
// publicly accessible (and indexable per robots/metadata).
export default createIntlMiddleware(routing);

export const config = {
  matcher: ['/', '/(de|en|ar|es|fr|pl|pt|tr)/:path*'],
};
