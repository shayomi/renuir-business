"use client";

import * as React from "react";
import { Search, BadgeCheck, RefreshCcw, Sigma } from "lucide-react";
import { Typography } from "@/components/ui/typography";
import AnimateIn from "@/components/ui/AnimateIn";
import { useTranslations } from 'next-intl';

const stepIcons = [
  { icon: Search, iconWrapperClass: "bg-muted", iconClass: "text-foreground" },
  { icon: Sigma, iconWrapperClass: "bg-primary-50 dark:bg-primary/15", iconClass: "text-primary" },
  { icon: BadgeCheck, iconWrapperClass: "bg-amber-50 dark:bg-amber-500/15", iconClass: "text-amber-600 dark:text-amber-400" },
  { icon: RefreshCcw, iconWrapperClass: "bg-emerald-50 dark:bg-emerald-500/15", iconClass: "text-emerald-600 dark:text-emerald-400" },
];

export default function Overview() {
  const t = useTranslations('individual.overview');

  const steps = stepIcons.map((s, i) => ({
    ...s,
    title: t(`step${i + 1}Title` as 'step1Title' | 'step2Title' | 'step3Title' | 'step4Title'),
    description: t(`step${i + 1}Desc` as 'step1Desc' | 'step2Desc' | 'step3Desc' | 'step4Desc'),
  }));

  return (
    <section className="w-full">
      <div className="app-container py-16 sm:py-24 lg:py-32">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-x-20">
          <AnimateIn>
            <div className="max-w-lg">
              <Typography
                variant="h1"
                className="font-semibold tracking-tight text-foreground"
              >
                {t('headline')}
              </Typography>

              <Typography
                variant="lead"
                className="mt-4 sm:mt-6 lg:mt-8 text-muted-foreground"
              >
                {t('subtitle')}
              </Typography>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-1 gap-8 sm:gap-10 sm:grid-cols-2 lg:gap-x-12 lg:gap-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <AnimateIn key={step.title} delay={index * 0.04}>
                  <div className="max-w-[272px]">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-lg ${step.iconWrapperClass}`}
                    >
                      <Icon
                        className={`h-5 w-5 stroke-[2] ${step.iconClass}`}
                      />
                    </div>

                    <Typography variant="h4" className="mt-4 text-foreground">
                      {step.title}
                    </Typography>

                    <Typography
                      variant="mutedText"
                      className="mt-2 sm:mt-3 text-muted-foreground"
                    >
                      {step.description}
                    </Typography>
                  </div>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
