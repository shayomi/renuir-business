import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import AnimateIn from '@/components/ui/AnimateIn';
import { StoreDownloads } from '@/components/shared/StoreDownloads';
import { AppMockup } from '@/components/shared/AppMockup';
import Nav from './HomeNav';
import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';

export function HomeHero() {
  const t = useTranslations('home.hero');
  return (
    <section className="overflow-hidden bg-slate-950 text-white">
      <Nav />
      <div className="app-container grid items-center gap-10 py-10 sm:py-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 lg:py-12">
        <AnimateIn>
          <div className="max-w-xl">
            <h1 className="text-balance text-[2.75rem] font-medium leading-[1.04] tracking-[-0.035em] sm:text-6xl lg:text-[4.5rem]">
              <span className="block text-white/75">{t('line1')}</span>
              <span className="mt-2 block">{t('line2')}</span>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-white/75">{t('subtitle')}</p>
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4">
              <Button asChild size="lg" variant="secondary" className="rounded-full bg-white text-slate-950 hover:bg-white/90">
                <Link href="/#how-it-works">{t('ctaDownload')}<ArrowRight className="size-4" /></Link>
              </Button>
              <Link href="/solutions" className="text-sm font-medium text-white/85 underline-offset-4 hover:underline">{t('ctaBusiness')}</Link>
            </div>
            <div className="mt-7 max-w-md"><StoreDownloads dark compact /></div>
          </div>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <AppMockup screen="discover" priority sizes="(max-width: 639px) 230px, 250px" className="mx-auto w-[230px] sm:w-[250px] lg:mr-8" />
        </AnimateIn>
      </div>
    </section>
  );
}
