"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { Link } from "@/i18n/navigation";
import Nav from "../shared/navbar/Nav";
import { BetaBanner } from "../shared/BetaBanner";
import AnimateIn from "@/components/ui/AnimateIn";
import { useTranslations } from 'next-intl';

export function IndividualHero() {
  const t = useTranslations('individual.hero');
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
      <BetaBanner
        message={t('betaBanner')}
        linkText={t('joinWaitlist')}
        linkHref="/#waitlist"
      />
      <div className="relative app-container py-12 sm:py-16 lg:py-24 flex flex-col lg:flex-row gap-8 lg:gap-12 justify-between items-center">
        <AnimateIn>
          <div className="flex flex-col items-start gap-4 max-w-xl">
            <Typography
              variant="smallText"
              className="text-muted-foreground uppercase tracking-wider"
            >
              {t('eyebrow')}
            </Typography>
            <Typography
              variant="h1"
              className="text-foreground font-medium"
            >
              {t('headline')}
            </Typography>

            <Typography
              variant="lead"
              className="mt-2 max-w-md text-foreground/80"
            >
              {t('subtitle')}
            </Typography>

            <div className="mt-6 sm:mt-8 flex flex-wrap gap-3">
              <Link href="/#waitlist">
                <Button
                  variant="dark"
                  size="lg"
                  className="flex items-center gap-3 rounded-full px-6"
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
                  className="flex items-center gap-3 rounded-full px-6"
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
          </div>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <div>
            <Image
              src="/images/solution/indivialheroimg.png"
              alt={t('appScreensAlt')}
              width={640}
              height={480}
              className="rounded-2xl w-full max-w-md lg:max-w-lg h-auto"
            />
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
