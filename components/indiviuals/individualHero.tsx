"use client";

import Image from "next/image";
import { Typography } from "@/components/ui/typography";
import { StoreDownloads } from "@/components/shared/StoreDownloads";
import Nav from "../shared/navbar/Nav";
import AnimateIn from "@/components/ui/AnimateIn";
import { useTranslations } from "next-intl";
import { AppMockup } from "@/components/shared/AppMockup";

export function IndividualHero() {
  const t = useTranslations("individual.hero");

  return (
    <section className="relative overflow-hidden">
      {/* Subtle topographic texture */}
      <Image
        src="/images/about/abouthero.svg"
        alt=""
        fill
        priority
        className="object-cover"
      />

      <Nav />

      <div className="relative app-container grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1fr_1.1fr] lg:gap-8 lg:py-16">
        {/* Copy */}
        <AnimateIn>
          <div className="flex max-w-xl flex-col items-start gap-4">
            <span className="text-[12px] font-medium uppercase tracking-[0.16em] text-primary">
              {t("eyebrow")}
            </span>
            <Typography variant="h1" className="text-foreground font-medium tracking-tight">
              {t("headline")}
            </Typography>
            <Typography variant="lead" className="mt-1 max-w-md text-muted-foreground">
              {t("subtitle")}
            </Typography>

            <div id="download" className="mt-6 w-full scroll-mt-28 sm:mt-8">
              <StoreDownloads />
            </div>
          </div>
        </AnimateIn>

        {/* Device showcase */}
        <AnimateIn delay={0.12}>
          <div className="relative flex justify-center lg:justify-end">
            {/* ambient brand glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-0"
              style={{
                background:
                  "radial-gradient(50% 50% at 60% 45%, color-mix(in oklch, var(--primary) 22%, transparent), transparent 72%)",
                filter: "blur(24px)",
              }}
            />
            <AppMockup screen="discover" priority sizes="260px" className="mx-auto w-[240px] sm:w-[260px]" />
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
