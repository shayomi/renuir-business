"use client";

import Image from "next/image";
import { ScanLine, Truck, Lock } from "lucide-react";
import { Typography } from "@/components/ui/typography";
import AnimateIn from "@/components/ui/AnimateIn";
import { cn } from "@/lib/utils";
import { useTranslations } from 'next-intl';

function IconBox({
  icon: Icon,
  className,
}: {
  icon: React.ElementType;
  className: string;
}) {
  return (
    <div
      className={cn(
        "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl",
        className,
      )}
    >
      <Icon className="h-5 w-5" />
    </div>
  );
}

export function ManageChaos() {
  const t = useTranslations('solutions.manage');
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="app-container">
        <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-10 sm:gap-12 lg:gap-16 items-center">
          <div>
            <AnimateIn>
              <Typography
                variant="h2"
                className="text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground max-w-md mb-8 sm:mb-10 leading-tight"
              >
                {t('headline')}
              </Typography>
            </AnimateIn>

            <div className="flex flex-col gap-4">
              <AnimateIn delay={0.04}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 items-center rounded-2xl border border-sky-100 dark:border-sky-900/30 shadow-sm px-5 sm:px-6 py-5 sm:py-6 bg-gradient-to-r from-card via-sky-100/60 to-sky-100/80 dark:from-card dark:via-sky-900/20 dark:to-sky-900/30">
                  <div className="flex flex-col gap-4">
                    <IconBox
                      icon={ScanLine}
                      className="bg-blue-50 dark:bg-blue-500/15 text-blue-500"
                    />
                    <div>
                      <Typography
                        variant="h5"
                        className="text-base font-semibold text-foreground"
                      >
                        {t('feature1Title')}
                      </Typography>
                      <Typography
                        variant="mutedText"
                        className="mt-2 text-sm leading-relaxed"
                      >
                        {t('feature1Desc')}
                      </Typography>
                    </div>
                  </div>

                  <div className="relative h-36 w-full rounded-xl overflow-hidden mt-4 sm:mt-0">
                    <Image
                      src="/images/solution/chaosimg2.png"
                      alt={t('cvPreviewAlt')}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </AnimateIn>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <AnimateIn delay={0.1}>
                  <div className="flex flex-col gap-4 rounded-2xl border border-border/60 bg-card shadow-sm p-5 sm:p-6">
                    <IconBox
                      icon={Truck}
                      className="bg-orange-50 dark:bg-orange-500/15 text-orange-500"
                    />
                    <div>
                      <Typography
                        variant="h5"
                        className="text-base font-semibold text-foreground"
                      >
                        {t('feature2Title')}
                      </Typography>
                      <Typography
                        variant="mutedText"
                        className="mt-2 text-sm leading-relaxed"
                      >
                        {t('feature2Desc')}
                      </Typography>
                    </div>
                  </div>
                </AnimateIn>

                <AnimateIn delay={0.14}>
                  <div className="flex flex-col gap-4 rounded-2xl border border-border/60 bg-card shadow-sm p-5 sm:p-6">
                    <IconBox icon={Lock} className="bg-green-50 dark:bg-green-500/15 text-green-500" />
                    <div>
                      <Typography
                        variant="h5"
                        className="text-base font-semibold text-foreground"
                      >
                        {t('feature3Title')}
                      </Typography>
                      <Typography
                        variant="mutedText"
                        className="mt-2 text-sm leading-relaxed"
                      >
                        {t('feature3Desc')}
                      </Typography>
                    </div>
                  </div>
                </AnimateIn>
              </div>
            </div>
          </div>

          <AnimateIn delay={0.1}>
            <div className="relative h-[400px] sm:h-[480px] lg:h-[560px] w-full">
              <Image
                src="/images/solution/chaosimg1.png"
                alt={t('mobileAppAlt')}
                fill
                className="object-contain"
              />
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
