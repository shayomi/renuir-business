import type { Metadata } from 'next';
import ProductLanding from '@/components/product/ProductLanding';
import { getProductContent } from '@/components/product/content';
import { SITE_URL, languageAlternates } from '@/lib/site';

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <ProductLanding locale={locale} />;
}
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const c = getProductContent(locale);
  return { title: c.title, description: c.intro, alternates: { canonical: `${SITE_URL}/${locale}`, languages: languageAlternates('') }, openGraph: { title: c.title, description: c.intro }, twitter: { title: c.title, description: c.intro } };
}
