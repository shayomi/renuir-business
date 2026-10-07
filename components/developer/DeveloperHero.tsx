import Nav from '../home/HomeNav';
import AnimateIn from '@/components/ui/AnimateIn';
import { LeadForm } from '@/components/shared/LeadForm';
import { getTranslations } from 'next-intl/server';

export async function DeveloperHero() {
  const t = await getTranslations('developer.hero');
  const flow = await getTranslations('developer.story');
  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-primary/10 blur-[130px]" />
      </div>

      <Nav />

      <div className="relative app-container grid grid-cols-1 items-center gap-12 pt-14 pb-16 sm:pt-20 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pt-16 lg:pb-16">
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
              {t('accessNote')}
            </p>
          </AnimateIn>
        </div>

        <AnimateIn delay={0.16} className="min-w-0 lg:pl-4">
          <div className="border-y border-white/15 py-8">
            <h2 className="text-2xl font-medium text-white">{flow('whyHeadline')}</h2>
            <p className="mt-4 leading-relaxed text-white/70">{flow('whySubtitle')}</p>
            <ol className="mt-8 divide-y divide-white/15">{[2,3,4].map(i => <li key={i} className="flex items-center gap-4 py-5 text-lg text-white"><span className="text-primary-300 tabular-nums">0{i-1}</span>{flow(`step${i}Title`)}</li>)}</ol>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
