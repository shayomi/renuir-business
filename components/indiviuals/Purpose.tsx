"use client";

import Image from "next/image";
import { Typography } from "@/components/ui/typography";
import AnimateIn from "@/components/ui/AnimateIn";
import { useTranslations } from 'next-intl';

const itemImages = [
  "/images/solution/mobile1.png",
  "/images/solution/mobile2.png",
  "/images/solution/mobile3.png",
  "/images/solution/mobile4.png",
];

export default function Purpose() {
  const t = useTranslations('individual.purpose');

  const items = itemImages.map((image, i) => ({
    id: String(i + 1),
    title: t(`card${i + 1}Title` as 'card1Title' | 'card2Title' | 'card3Title' | 'card4Title'),
    description: t(`card${i + 1}Desc` as 'card1Desc' | 'card2Desc' | 'card3Desc' | 'card4Desc'),
    image,
  }));

  return (
    <section className="w-full py-16 sm:py-24 lg:py-32">
      <div className="app-container">
        <AnimateIn>
          <div className="mb-10 sm:mb-12 lg:mb-16 flex justify-center text-center">
            <Typography
              variant="h1"
              className="max-w-2xl font-medium text-foreground"
            >
              {t('headline')}
            </Typography>
          </div>
        </AnimateIn>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
          {items.map((item, index) => (
            <AnimateIn key={item.id} delay={index * 0.05}>
              <div className="flex min-h-[320px] sm:min-h-[380px] lg:min-h-[420px] items-stretch justify-between gap-4 sm:gap-6 lg:gap-10 overflow-hidden rounded-2xl sm:rounded-3xl bg-muted px-5 sm:px-6 lg:px-8 pt-5 sm:pt-6">
                <div className="flex max-w-[260px] flex-1 flex-col justify-between pb-6 sm:pb-8">
                  <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-foreground text-sm font-semibold text-background">
                    {item.id}
                  </div>

                  <div>
                    <Typography
                      variant="h3"
                      className="font-semibold text-foreground"
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      variant="mutedText"
                      className="mt-3 sm:mt-4 text-muted-foreground"
                    >
                      {item.description}
                    </Typography>
                  </div>
                </div>

                <div className="flex shrink-0 items-end">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={200}
                    height={360}
                    className="h-[240px] sm:h-[300px] lg:h-[360px] w-auto object-cover"
                  />
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
