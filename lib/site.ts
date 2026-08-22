import { locales } from '@/i18n/config';

/** Canonical production origin. Override with NEXT_PUBLIC_SITE_URL at deploy time. */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://renuir.com'
).replace(/\/$/, '');

/**
 * The site is indexable by default. Set SITE_NOINDEX=true on staging to keep
 * it out of search while production gets indexed.
 */
export const shouldIndex = process.env.SITE_NOINDEX !== 'true';

/** Top-level routes (locale is prefixed per entry). */
export const ROUTES = [
  '',
  '/solutions',
  '/individual',
  '/developer',
  '/about-us',
  '/privacy',
  '/support',
  '/terms',
  '/delete-account',
  '/accessibility',
  '/imprint',
] as const;

/** Build the hreflang alternates map for a given route across every locale. */
export function languageAlternates(route: string): Record<string, string> {
  return Object.fromEntries(
    locales.map((locale) => [locale, `${SITE_URL}/${locale}${route}`]),
  );
}

export { locales };
