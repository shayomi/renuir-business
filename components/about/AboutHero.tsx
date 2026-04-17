"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import AnimateIn from "@/components/ui/AnimateIn";
import Nav from "../shared/navbar/Nav";

export function AboutHero() {
  const t = useTranslations('about.hero');
  return (
    <section className="relative overflow-hidden">
      <Image
        src="/images/about/abouthero.svg"
        alt=""
        fill
        priority
        className="object-cover dark:opacity-20"
      />
      <Nav />
      <div className="relative app-container py-16 sm:py-24 lg:py-32 flex flex-col items-center text-center">
        <AnimateIn>
          <Typography
            variant="extraLargeText"
            className="text-foreground font-normal"
          >
            {t('headline')}
          </Typography>
        </AnimateIn>

        <AnimateIn delay={0.08}>
          <Typography
            variant="lead"
            className="mx-auto mt-4 sm:mt-6 max-w-lg text-foreground/80"
          >
            {t('subtitle')}
          </Typography>
        </AnimateIn>

        <AnimateIn delay={0.12}>
          <div className="mt-8 sm:mt-10 flex flex-wrap gap-3">
            <Link href="/#waitlist">
              <Button
                variant="dark"
                size="lg"
                className="rounded-full"
              >
                <Image
                  src="/images/icons/googleplayicon.svg"
                  alt="Google Play"
                  width={20}
                  height={20}
                />
                {t('googlePlay')}
              </Button>
            </Link>

            <Link href="/#waitlist">
              <Button
                variant="dark"
                size="lg"
                className="rounded-full"
              >
                <Image
                  src="/images/icons/appleicon.svg"
                  alt="Apple Store"
                  width={20}
                  height={20}
                />
                {t('appleStore')}
              </Button>
            </Link>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
