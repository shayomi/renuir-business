import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { AppMockup } from '@/components/shared/AppMockup';

export async function BusinessBridge() {
  const t = await getTranslations('home.privateBeta');
  const nav = await getTranslations('nav');
  return <section className="bg-slate-950 py-16 text-white sm:py-20"><div className="app-container grid items-center gap-10 lg:grid-cols-[1.3fr_0.7fr]">
    <div className="max-w-xl"><h2 className="text-balance text-3xl font-medium tracking-tight sm:text-4xl">{t('headline')}</h2><p className="mt-5 max-w-lg text-lg leading-relaxed text-white/75">{t('subtitle')}</p>
      <div className="mt-7 flex flex-wrap items-center gap-6"><Button asChild size="lg" variant="secondary" className="rounded-full"><Link href="/solutions">{t('cta')}<ArrowRight className="size-4" /></Link></Button><Link href="/developer" className="text-sm font-medium text-white/80 underline-offset-4 hover:underline">{nav('developers')}</Link></div>
    </div>
    <div className="mx-auto lg:ml-auto"><AppMockup screen="ownership" sizes="210px" className="w-[210px]" /></div>
  </div></section>;
}
