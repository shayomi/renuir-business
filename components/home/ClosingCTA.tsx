import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export async function ClosingCTA() {
  const t = await getTranslations('home.closing');
  return <section className="border-t border-border py-14 sm:py-20"><div className="app-container flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between"><div className="max-w-xl"><h2 className="text-balance text-3xl font-medium tracking-tight">{t('headline')}</h2><p className="mt-3 max-w-md text-base leading-relaxed text-muted-foreground">{t('subtitle')}</p></div><Button asChild size="lg" className="shrink-0 self-start rounded-full"><Link href="/individual">{t('leadCta')}<ArrowRight className="size-4" /></Link></Button></div></section>;
}
