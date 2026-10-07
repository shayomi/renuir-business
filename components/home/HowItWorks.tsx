'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { AppMockup, type AppScreen } from '@/components/shared/AppMockup';
import AnimateIn from '@/components/ui/AnimateIn';
import { ArrowRight, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const screens: AppScreen[] = ['report', 'matches', 'ownership', 'handover'];

export function HowItWorks() {
  const t = useTranslations('home.howItWorks');
  const roles = useTranslations('home.roles');
  const [active, setActive] = useState(0);
  const [journey, setJourney] = useState<'lost' | 'found'>('lost');
  useEffect(() => {
    const syncJourney = () => {
      if (window.location.hash === '#lost-steps' || window.location.hash === '#found-steps') {
        setJourney(window.location.hash === '#found-steps' ? 'found' : 'lost');
        setActive(0);
      }
    };
    syncJourney();
    window.addEventListener('hashchange', syncJourney);
    return () => window.removeEventListener('hashchange', syncJourney);
  }, []);
  const steps = screens.map((screen, index) => ({ screen, title: t.has(`${journey}Step${index + 1}Title`) ? t(`${journey}Step${index + 1}Title`) : t(`step${index + 1}Title`), description: t.has(`${journey}Step${index + 1}Desc`) ? t(`${journey}Step${index + 1}Desc`) : t(`step${index + 1}Desc`) }));
  return (
    <section id="how-it-works" className="scroll-mt-24 py-12 sm:py-16 lg:py-20">
      <div className="app-container">
        <span id="lost-steps" className="block scroll-mt-24" aria-hidden />
        <span id="found-steps" className="block scroll-mt-24" aria-hidden />
        <AnimateIn><div className="max-w-2xl">
          <h2 className="text-balance text-3xl font-medium tracking-tight sm:text-4xl">{t('headline')}</h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">{t('subtitle')}</p>
        </div></AnimateIn>
        <div className="mt-6 flex flex-wrap gap-3" aria-label={roles('headline')}>
          {(['lost', 'found'] as const).map(role => <button key={role} type="button" aria-pressed={journey === role} onClick={() => {setJourney(role); setActive(0); window.history.replaceState(window.history.state, '', `#${role}-steps`);}} className={cn('min-h-11 rounded-full border px-5 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary', journey === role ? 'border-primary bg-primary text-white' : 'border-border bg-background text-foreground hover:bg-muted')}>{roles(`${role}Title`)}</button>)}
        </div>
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-20">
          <div className="grid divide-y divide-border">
            {steps.map((step, index) => <button key={step.screen} type="button" onClick={() => setActive(index)} aria-pressed={active === index} aria-controls="recovery-preview" className="group flex gap-5 py-6 text-start focus-visible:rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
              <span className={cn('mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-medium', active === index ? 'bg-primary text-white' : 'bg-muted text-muted-foreground')}>{index === 3 ? <Check className="size-4" /> : index + 1}</span>
              <span className="min-w-0 flex-1"><span className={cn('block text-xl font-medium', active === index ? 'text-primary' : 'text-foreground')}>{step.title}</span><span className="mt-2 block max-w-md text-base leading-relaxed text-muted-foreground">{step.description}</span></span>
              <ArrowRight aria-hidden className={cn('mt-1 size-5 shrink-0 transition-transform group-hover:translate-x-1', active === index ? 'text-primary' : 'text-muted-foreground')} />
            </button>)}
          </div>
          <div id="recovery-preview" className="flex flex-col items-center rounded-2xl bg-muted/65 px-6 py-8" aria-label={steps[active].title}>
            <AppMockup screen={steps[active].screen} sizes="260px" className="w-[240px] max-w-full sm:w-[260px]" />
            <p className="mt-6 text-sm font-medium text-muted-foreground" aria-live="polite">{steps[active].title}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
