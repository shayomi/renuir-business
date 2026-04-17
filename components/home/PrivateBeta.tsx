"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import AnimateIn from "@/components/ui/AnimateIn";
import { getFeatures } from "../data/homefeatures";
import { useTranslations } from 'next-intl';

const PrivateBeta = () => {
  const t = useTranslations('home.privateBeta');
  const features = getFeatures(t);
  return (
    <section className="bg-slate-950">
      <div className="app-container grid gap-10 sm:gap-12 lg:gap-16 py-16 sm:py-24 lg:py-32 grid-cols-1 lg:grid-cols-2 items-center">
        <AnimateIn>
          <div className="max-w-xl">
            <span className="inline-flex rounded-full bg-amber-400/20 px-4 py-1 text-sm font-medium text-amber-300">
              {t('badge')}
            </span>

            <Typography variant="h2" className="mt-5 sm:mt-6 text-white">
              {t('headline')}
            </Typography>

            <Typography variant="p" className="mt-4 sm:mt-6 text-white/75">
              {t('subtitle')}
            </Typography>

            <div className="mt-8 sm:mt-10 grid gap-4 sm:gap-6 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl bg-white/5 p-5 sm:p-6 backdrop-blur"
                >
                  <div className="mb-3 sm:mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={18}
                      height={18}
                    />
                  </div>

                  <Typography variant="h6" className="text-white">
                    {feature.title}
                  </Typography>

                  <Typography
                    variant="mutedText"
                    className="mt-2 text-white/60"
                  >
                    {feature.description}
                  </Typography>
                </div>
              ))}
            </div>

            <Link href="/#waitlist">
              <Button
                size="lg"
                variant="secondary"
                className="mt-8 sm:mt-10 rounded-full"
              >
                {t('cta')}
              </Button>
            </Link>
          </div>
        </AnimateIn>

        <div className="flex items-center justify-center lg:justify-end">
          <Image
            src="/images/home/privatebetaimg.png"
            alt={t('imageAlt')}
            width={600}
            height={700}
            priority
            className="w-full max-w-md lg:max-w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default PrivateBeta;
