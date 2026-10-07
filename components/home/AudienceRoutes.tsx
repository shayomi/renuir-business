import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { ArrowRight } from 'lucide-react';

export async function AudienceRoutes() {
  const t = await getTranslations('home.roles');
  return <section className="border-b border-border py-12 sm:py-16"><div className="app-container">
    <h2 className="text-balance text-2xl font-medium tracking-tight sm:text-3xl">{t('headline')}</h2>
    <div className="mt-8 grid gap-8 sm:grid-cols-2 sm:gap-12">
      {['lost', 'found'].map(role => <div key={role}>
        <h3 className="text-xl font-medium">{t(`${role}Title`)}</h3>
        <p className="mt-2 max-w-sm text-base leading-relaxed text-muted-foreground">{t(`${role}Body`)}</p>
        <Link href="/#how-it-works" className="mt-4 inline-flex min-h-11 items-center gap-2 font-medium text-primary hover:underline underline-offset-4">{t('cta')}<ArrowRight className="size-4" /></Link>
      </div>)}
    </div>
  </div></section>;
}
