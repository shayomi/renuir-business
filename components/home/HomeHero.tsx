"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import AnimateIn from "@/components/ui/AnimateIn";
import Nav from "./HomeNav";
import { useTranslations } from 'next-intl';

export function HomeHero() {
  const t = useTranslations('home.hero');
  return (
    <section className="relative overflow-hidden">
      <Image
        src="/images/home/renuir-bg.png"
        alt=""
        fill
        priority
        className="object-cover"
      />
      <div className="relative">
        <Nav />
      </div>

      <div className="relative app-container py-20 sm:py-28 lg:py-36 flex flex-col text-center">
        <AnimateIn>
          <Typography
            variant="extraLargeText"
            className="text-white/80 font-normal"
          >
            {t('line1')}
          </Typography>
        </AnimateIn>

        <AnimateIn delay={0.06}>
          <Typography
            variant="extraLargeText"
            className="tracking-tightest text-white"
          >
            {t('line2')}
          </Typography>
        </AnimateIn>

        <AnimateIn delay={0.12}>
          <Typography
            variant="lead"
            className="mx-auto mt-5 sm:mt-6 max-w-lg text-white/80"
          >
            {t('subtitle')}
          </Typography>
        </AnimateIn>

        <AnimateIn delay={0.16}>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link href="/solutions" className="w-full sm:w-auto">
              <Button size="lg" variant="secondary" className="rounded-full px-8 w-full">
                {t('ctaBusiness')}
              </Button>
            </Link>

            <Link href="/#waitlist" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="rounded-full bg-primary px-8 text-primary-foreground hover:bg-primary/90 w-full"
              >
                {t('ctaDownload')}
              </Button>
            </Link>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
