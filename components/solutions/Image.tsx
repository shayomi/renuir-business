"use client";

import React from "react";
import NextImage from "next/image";
import { Typography } from "../ui/typography";
import AnimateIn from "@/components/ui/AnimateIn";
import { useTranslations } from 'next-intl';

const SolutionImage = () => {
  const t = useTranslations('solutions.costs');
  return (
    <section className="relative z-10">
      <AnimateIn>
        <div className="app-container">
          <NextImage
            src="/images/solution/solutionhero.png"
            alt={t('dashboardAlt')}
            width={1280}
            height={720}
            className="rounded-2xl w-full h-auto"
          />
        </div>
      </AnimateIn>

      <div className="app-container mt-12 sm:mt-16 lg:mt-24">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start lg:items-center">
          <AnimateIn>
            <div className="flex-1">
              <Typography
                variant="h1"
                className="font-medium text-foreground"
              >
                {t('headline')}
              </Typography>
              <Typography
                variant="lead"
                className="font-normal mt-4 sm:mt-6 text-muted-foreground"
              >
                {t('subtitle')}
              </Typography>
              <ul className="mt-5 sm:mt-6 list-disc px-4 space-y-2.5">
                <li>
                  <Typography variant="smallText" className="text-muted-foreground font-normal">
                    {t('bullet1')}
                  </Typography>
                </li>
                <li>
                  <Typography variant="smallText" className="text-muted-foreground font-normal">
                    {t('bullet2')}
                  </Typography>
                </li>
                <li>
                  <Typography variant="smallText" className="text-muted-foreground font-normal">
                    {t('bullet3')}
                  </Typography>
                </li>
              </ul>
            </div>
          </AnimateIn>
          <AnimateIn delay={0.12}>
            <div className="flex-1">
              <NextImage
                src="/images/solution/manuallogs.png"
                alt={t('manualLogsAlt')}
                width={640}
                height={480}
                className="rounded-2xl w-full h-auto"
              />
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
};

export default SolutionImage;
