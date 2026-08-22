import type { MetadataRoute } from 'next';
import { SITE_URL, ROUTES, languageAlternates } from '@/lib/site';
import { defaultLocale } from '@/i18n/config';

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${SITE_URL}/${defaultLocale}${route}`,
    lastModified: new Date('2026-08-22'),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
    alternates: { languages: languageAlternates(route) },
  }));
}
