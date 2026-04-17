"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import AnimateIn from "@/components/ui/AnimateIn";
import { Badge } from "../ui/badge";
import { useTranslations } from 'next-intl';

const DeveloperPlatform = () => {
  const t = useTranslations('home.developer');
  return (
    <section className="bg-background">
      <div className="app-container grid items-center gap-10 sm:gap-12 lg:gap-16 py-16 sm:py-24 lg:py-28 lg:grid-cols-2">
        <AnimateIn>
          <div className="max-w-xl">
            <Badge variant="default">{t('badge')}</Badge>

            <Typography variant="h1" className="mt-5 sm:mt-6">
              {t('headline')}
            </Typography>

            <Typography variant="p" className="mt-4 sm:mt-6 text-muted-foreground">
              {t('subtitle')}
            </Typography>

            <div className="mt-8 sm:mt-10 space-y-3 sm:space-y-4">
              <div className="flex gap-4 rounded-2xl bg-muted p-4 sm:p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-foreground">
                  <Image
                    src="/images/icons/api.svg"
                    alt="icon"
                    width={18}
                    height={18}
                  />
                </div>

                <div>
                  <Typography variant="h6">{t('apiTitle')}</Typography>
                  <Typography variant="mutedText" className="mt-1">
                    {t('apiDesc')}
                  </Typography>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl bg-muted p-4 sm:p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-foreground">
                  <Image
                    src="/images/icons/paint.svg"
                    alt="icon"
                    width={18}
                    height={18}
                  />
                </div>

                <div>
                  <Typography variant="h6">{t('whitelabelTitle')}</Typography>
                  <Typography variant="mutedText" className="mt-1">
                    {t('whitelabelDesc')}
                  </Typography>
                </div>
              </div>
            </div>

            <Link href="/developer">
              <Button
                size="lg"
                variant="outline"
                className="mt-8 sm:mt-10 rounded-full px-8"
              >
                {t('cta')}
              </Button>
            </Link>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <div className="relative">
            <Image
              src="/images/home/developer.png"
              alt="Renuir Developer Platform"
              width={720}
              height={520}
              priority
              className="rounded-2xl"
            />
          </div>
        </AnimateIn>
      </div>
    </section>
  );
};

export default DeveloperPlatform;
