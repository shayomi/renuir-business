"use client";

import React from "react";
import { Typography } from "../ui/typography";
import AnimateIn from "@/components/ui/AnimateIn";
import { useTranslations } from 'next-intl';

const RenuirChange = () => {
  const t = useTranslations('home.change');
  return (
    <section className="bg-primary-50/60 dark:bg-primary/5">
      <div className="app-container py-16 sm:py-24 lg:py-32">
        <AnimateIn className="flex flex-col gap-4 items-center">
          <Typography variant="h2" className="text-center max-w-2xl">
            {t('headline')}
          </Typography>
          <Typography
            variant="lead"
            className="mt-2 sm:mt-4 max-w-xl leading-relaxed sm:leading-8 text-center"
          >
            {t('body')}
            <br />
            <strong>{t('punchline')}</strong>
          </Typography>
        </AnimateIn>
      </div>
    </section>
  );
};

export default RenuirChange;
