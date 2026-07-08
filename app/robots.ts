import type { MetadataRoute } from 'next';
import { SITE_URL, shouldIndex } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  if (!shouldIndex) {
    return { rules: { userAgent: '*', disallow: '/' } };
  }

  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
