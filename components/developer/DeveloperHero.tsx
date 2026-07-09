import Nav from '../home/HomeNav';
import { BetaBanner } from '../shared/BetaBanner';
import AnimateIn from '@/components/ui/AnimateIn';
import { LeadForm } from '@/components/shared/LeadForm';
import { CodeWindow, kw, str, com } from './CodeWindow';
import { getTranslations } from 'next-intl/server';

export async function DeveloperHero() {
  const t = await getTranslations('developer.hero');
  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-primary/10 blur-[130px]" />
      </div>

      <Nav />
      <BetaBanner
        message={t('bannerMessage')}
        linkText={t('bannerLink')}
        linkHref="#dev-access"
      />

      <div className="relative app-container grid grid-cols-1 items-center gap-12 pt-14 pb-16 sm:pt-20 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pt-24 lg:pb-24">
        <div className="min-w-0">
          <AnimateIn>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-white/60">
              {t('devEyebrow')}
            </span>
          </AnimateIn>

          <AnimateIn delay={0.06}>
            <h1 className="mt-6 max-w-xl text-4xl font-medium leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
              {t('devHeadlineLine1')}
              <br />
              {t('devHeadlineLine2')}
            </h1>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <p className="mt-5 max-w-md text-[17px] leading-relaxed text-white/65">
              {t('devSubtitle')}
            </p>
          </AnimateIn>

          <AnimateIn delay={0.14} className="mt-8">
            <LeadForm
              source="developer"
              variant="dark"
              cta={t('leadCta')}
              placeholder={t('leadPlaceholder')}
              successMessage={t('leadSuccess')}
            />
          </AnimateIn>

          <AnimateIn delay={0.18}>
            <p className="mt-1 text-[13px] text-white/45">
              {t('betaNote')}
            </p>
          </AnimateIn>
        </div>

        <AnimateIn delay={0.16} className="min-w-0 lg:pl-4">
          <CodeWindow endpoint="POST api.renuir.com/v1/items">
            {kw('const')} client {com('=')} {kw('new')} RenuirClient({'{'}
            {'\n'}
            {'  '}apiKey: process.env.RENUIR_KEY,
            {'\n'}
            {'}'});
            {'\n\n'}
            {com('// Report a found item, we do the matching')}
            {'\n'}
            {kw('const')} item {com('=')} {kw('await')} client.items.create({'{'}
            {'\n'}
            {'  '}type: {str('"electronics"')},
            {'\n'}
            {'  '}brand: {str('"Apple"')},
            {'\n'}
            {'  '}photo: upload,
            {'\n'}
            {'  '}foundAt: {str('"Terminal 2, Gate 14"')},
            {'\n'}
            {'}'});
            {'\n\n'}
            item.status; {com('// "matching"')}
          </CodeWindow>
        </AnimateIn>
      </div>
    </section>
  );
}
