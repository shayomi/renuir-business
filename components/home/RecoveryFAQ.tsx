import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { Plus } from 'lucide-react';

export async function RecoveryFAQ() {
  const t = await getTranslations('home.faq');
  return <section className="py-16 sm:py-20"><div className="app-container grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
    <div><h2 className="text-balance text-3xl font-medium tracking-tight sm:text-4xl">{t('headline')}</h2><p className="mt-5 max-w-xs text-base leading-relaxed text-muted-foreground">{t('help')}</p><Link href="/support" className="mt-3 inline-flex min-h-11 items-center font-medium text-primary underline-offset-4 hover:underline">{t('helpCta')}</Link></div>
    <div className="divide-y divide-border border-y border-border">{Array.from({length: 6}, (_, i) => i + 1).map(i => <details key={i} className="group py-5"><summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-lg font-medium marker:content-none focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">{t(`q${i}`)}<Plus aria-hidden className="mt-1 size-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-45" /></summary><p className="mt-3 pr-8 text-base leading-relaxed text-muted-foreground">{t(`a${i}`)}</p></details>)}</div>
  </div></section>;
}
