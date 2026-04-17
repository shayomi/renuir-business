"use client";

import Image from "next/image";
import { Typography } from "@/components/ui/typography";
import AnimateIn from "@/components/ui/AnimateIn";
import { Badge } from "../ui/badge";
import { useTranslations } from 'next-intl';

export function HowItWorks() {
  const t = useTranslations('home.howItWorks');

  const steps = [
    {
      number: "01",
      icon: "/images/icons/fileicon.svg",
      title: t('step1Title'),
      desc: t('step1Desc'),
      accent: "bg-primary-50 dark:bg-primary/15 border-primary-100 dark:border-primary/20 text-primary-600",
      numberColor: "text-primary-500",
    },
    {
      number: "02",
      icon: "/images/icons/checkicon.svg",
      title: t('step2Title'),
      desc: t('step2Desc'),
      accent: "bg-emerald-50 dark:bg-emerald-500/15 border-emerald-100 dark:border-emerald-500/20 text-emerald-600 dark:text-emerald-400",
      numberColor: "text-emerald-400",
    },
    {
      number: "03",
      icon: "/images/icons/refreshicon.svg",
      title: t('step3Title'),
      desc: t('step3Desc'),
      accent: "bg-amber-50 dark:bg-amber-500/15 border-amber-100 dark:border-amber-500/20 text-amber-600 dark:text-amber-400",
      numberColor: "text-amber-400",
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/60 to-background pointer-events-none" />

      <div className="app-container relative">
        <AnimateIn>
          <div className="text-center max-w-2xl mx-auto">
            <div className="mb-4 sm:mb-5 flex justify-center">
              <Badge
                variant="secondary"
                className="rounded-full px-4 py-1.5 text-primary font-medium text-xs tracking-wide uppercase"
              >
                {t('badge')}
              </Badge>
            </div>

            <Typography variant="h2" className="text-foreground">
              {t('headline')}
            </Typography>

            <Typography variant="lead" className="mt-3 sm:mt-4 text-muted-foreground">
              {t('subtitle')}
            </Typography>
          </div>
        </AnimateIn>

        <div className="relative mt-14 sm:mt-18 lg:mt-24">
          {/* Connecting line */}
          <div className="absolute top-[3.25rem] left-[16.67%] right-[16.67%] hidden md:block">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>

          <div className="grid grid-cols-1 gap-10 sm:gap-12 md:grid-cols-3 md:gap-6 lg:gap-10">
            {steps.map((step, i) => (
              <AnimateIn key={step.number} delay={i * 0.08}>
                <div className="relative z-10 text-center">
                  <div className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
                    <div className="flex items-center justify-center gap-4 mb-5 sm:mb-6">
                      <div className={`flex h-14 w-14 items-center justify-center rounded-xl border ${step.accent}`}>
                        <Image src={step.icon} alt="" width={24} height={24} className="w-6 h-6" />
                      </div>
                      <span className={`text-3xl sm:text-4xl font-bold ${step.numberColor} tabular-nums tracking-tight select-none`}>
                        {step.number}
                      </span>
                    </div>

                    <Typography variant="h4" className="text-foreground mb-2 sm:mb-3">
                      {step.title}
                    </Typography>

                    <Typography variant="mutedText" className="text-muted-foreground leading-relaxed">
                      {step.desc}
                    </Typography>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
