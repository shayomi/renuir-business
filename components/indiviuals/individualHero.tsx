"use client";

import Image from "next/image";
import { Typography } from "@/components/ui/typography";
import { LeadForm } from "@/components/shared/LeadForm";
import Nav from "../shared/navbar/Nav";
import { BetaBanner } from "../shared/BetaBanner";
import AnimateIn from "@/components/ui/AnimateIn";
import { useTranslations } from "next-intl";

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
      <BetaBanner
        message={t("betaBanner")}
        linkText={t("joinWaitlist")}
        linkHref="/#waitlist"
      />

      <div className="relative app-container grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1fr_1.1fr] lg:gap-8 lg:py-24">
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

            <div className="mt-6 w-full max-w-md sm:mt-8">
              <LeadForm
                source="waitlist"
                cta="Join the waitlist"
                placeholder="Enter your email"
                variant="light"
              />
              <div className="mt-2 flex items-center gap-2.5 text-muted-foreground">
                <Image
                  src="/images/icons/appleicon.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="opacity-60"
                />
                <Image
                  src="/images/icons/googleplayicon.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="opacity-60"
                />
                <Typography variant="smallText" className="text-muted-foreground">
                  Coming to iOS and Android at launch.
                </Typography>
              </div>
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
            <Image
              src="/images/solution/indivialheroimg.png"
              alt={t("appScreensAlt")}
              width={900}
              height={720}
              priority
              className="relative w-full max-w-lg drop-shadow-[0_30px_60px_rgba(15,23,42,0.16)] lg:max-w-[38rem] xl:max-w-[42rem]"
            />
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
