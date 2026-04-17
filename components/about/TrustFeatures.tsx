"use client";

import { useTranslations } from "next-intl";
import { Typography } from "../ui/typography";
import AnimateIn from "@/components/ui/AnimateIn";
import { TrustFeature } from "./TrustFeature";

export function TrustFeatures() {
  const t = useTranslations('about.trust');
  const features = [
    {
      title: t('feature1Title'),
      description: t('feature1Desc'),
      image: "/images/icons/house.svg",
    },
    {
      title: t('feature2Title'),
      description: t('feature2Desc'),
      image: "/images/icons/card.svg",
    },
    {
      title: t('feature3Title'),
      description: t('feature3Desc'),
      image: "/images/icons/database.svg",
    },
    {
      title: t('feature4Title'),
      description: t('feature4Desc'),
      image: "/images/icons/signpost.svg",
    },
  ];

  return (
    <section className="py-16 sm:py-24 lg:py-32">
      <div className="app-container">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start justify-between">
          <AnimateIn>
            <div className="max-w-lg">
              <Typography variant="h1" className="mb-4">
                {t('headline')}
              </Typography>
              <Typography variant="lead">
                {t('subtitle')}
              </Typography>
            </div>
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <AnimateIn key={feature.title} delay={index * 0.04}>
                <TrustFeature {...feature} />
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
