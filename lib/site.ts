import { locales } from '@/i18n/config';

/** Canonical production origin. Override with NEXT_PUBLIC_SITE_URL at deploy time. */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://renuir.com'
).replace(/\/$/, '');

/**
 * The site is indexable by default. It stays private when a basic-auth gate is
 * configured (SITE_USER) or when SITE_NOINDEX is explicitly set — so staging
 * stays dark while production gets indexed.
 */
export const shouldIndex =
  !process.env.SITE_USER && process.env.SITE_NOINDEX !== 'true';

/** Top-level routes (locale is prefixed per entry). */
export const ROUTES = ['', '/solutions', '/individual', '/developer', '/about-us'] as const;

/** Build the hreflang alternates map for a given route across every locale. */
export function languageAlternates(route: string): Record<string, string> {
  return Object.fromEntries(
    locales.map((locale) => [locale, `${SITE_URL}/${locale}${route}`]),
  );
}

export { locales };
