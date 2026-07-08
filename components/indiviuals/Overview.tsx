"use client";

import * as React from "react";
import { Search, Sparkles, ShieldCheck, PackageCheck } from "lucide-react";
import { Typography } from "@/components/ui/typography";
import AnimateIn from "@/components/ui/AnimateIn";
import { useTranslations } from "next-intl";

const stepIcons = [Search, Sparkles, ShieldCheck, PackageCheck];

export default function Overview() {
  const t = useTranslations("individual.overview");

  const steps = stepIcons.map((Icon, i) => ({
    Icon,
    number: String(i + 1).padStart(2, "0"),
    title: t(`step${i + 1}Title` as "step1Title" | "step2Title" | "step3Title" | "step4Title"),
    description: t(
      `step${i + 1}Desc` as "step1Desc" | "step2Desc" | "step3Desc" | "step4Desc",
    ),
  }));

  return (
    <section className="w-full">
      <div className="app-container py-16 sm:py-24 lg:py-32">
        <AnimateIn>
          <div className="max-w-xl">
            <Typography variant="h2" className="text-foreground">
              {t("headline")}
            </Typography>
            <Typography variant="lead" className="mt-4 sm:mt-6 text-muted-foreground">
              {t("subtitle")}
            </Typography>
          </div>
        </AnimateIn>

        <div className="relative mt-12 sm:mt-16 lg:mt-20">
          {/* connective line running through the numbered badges */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-[1.375rem] top-0 hidden h-full w-px bg-gradient-to-b from-primary/30 via-border to-transparent lg:left-0 lg:top-[1.375rem] lg:h-px lg:w-full lg:bg-gradient-to-r"
          />

          <ol className="grid gap-10 sm:gap-12 lg:grid-cols-4 lg:gap-8">
            {steps.map((step, index) => {
              const Icon = step.Icon;
              return (
                <AnimateIn key={step.title} delay={index * 0.08}>
                  <li className="relative flex gap-5 pl-0 lg:block lg:pl-0">
                    <div className="relative z-10 flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white shadow-soft">
                      {step.number}
                    </div>
                    <div className="lg:mt-6">
                      <div className="flex items-center gap-2">
                        <Icon className="size-4 text-primary" strokeWidth={2} />
                        <Typography variant="h3" className="text-foreground">
                          {step.title}
                        </Typography>
                      </div>
                      <Typography
                        variant="mutedText"
                        className="mt-2 sm:mt-3 max-w-[280px] text-muted-foreground"
                      >
                        {step.description}
                      </Typography>
                    </div>
                  </li>
                </AnimateIn>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
