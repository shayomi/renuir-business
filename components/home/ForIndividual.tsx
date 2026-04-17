"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import AnimateIn from "@/components/ui/AnimateIn";
import { useTranslations } from 'next-intl';

const ForIndividual = () => {
  const t = useTranslations('home.forIndividual');

  const features = [t('feature1'), t('feature2'), t('feature3'), t('feature4')];
  return (
    <section className="app-container grid items-center gap-10 sm:gap-12 lg:gap-16 py-16 sm:py-20 lg:py-24 lg:grid-cols-2">
      <AnimateIn>
        <div>
          <span className="inline-flex items-center rounded-full border px-4 py-1 text-xs font-medium text-muted-foreground">
            {t('badge')}
          </span>

          <Typography variant="h1" className="mt-5 sm:mt-6 max-w-xl font-medium">
            {t('headline')}
          </Typography>

          <Typography variant="mutedText" className="mt-3 sm:mt-4 max-w-xl text-base">
            {t('subtitle')}
          </Typography>

          <ul className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
            {features.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-green-600 dark:border-green-400 text-green-600 dark:text-green-400 text-xs">
                  ✓
                </span>
                <Typography
                  variant="smallText"
                  className="text-muted-foreground font-normal"
                >
                  {item}
                </Typography>
              </li>
            ))}
          </ul>

          <div className="mt-8 sm:mt-10 flex flex-wrap gap-3">
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
        <div className="relative mx-auto w-full max-w-md">
          <Image
            src="/images/home/individual.png"
            alt={t('appAlt')}
            width={620}
            height={860}
            priority
            className="mx-auto"
          />
        </div>
      </AnimateIn>
    </section>
  );
};

export default ForIndividual;
