"use client";

import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import AnimateIn from "@/components/ui/AnimateIn";

import { SectorCard } from "./SectorCard";
import { getSectors } from "../data/sectorData";

export function Sectors() {
  const t = useTranslations('about.sectors');
  return (
    <section className="py-16 sm:py-24 lg:py-32">
      <div className="app-container">
        <AnimateIn>
          <Typography
            variant="h1"
            className="mb-10 sm:mb-12 lg:mb-16 text-center font-medium tracking-tightest"
          >
            {t('headline')}
          </Typography>
        </AnimateIn>

        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {getSectors(t).map((sector, index) => (
            <AnimateIn key={sector.title} delay={index * 0.04}>
              <SectorCard {...sector} />
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
