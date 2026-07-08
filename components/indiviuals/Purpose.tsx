"use client";

import Image from "next/image";
import { PhoneOff, BellRing, MessageSquare, Truck } from "lucide-react";
import { Typography } from "@/components/ui/typography";
import AnimateIn from "@/components/ui/AnimateIn";
import { fadeInLeft, fadeInRight } from "@/lib/animations";
import { useTranslations } from "next-intl";

const cardMeta = [
  { image: "/images/solution/mobile1.png", Icon: PhoneOff },
  { image: "/images/solution/mobile2.png", Icon: BellRing },
  { image: "/images/solution/mobile3.png", Icon: MessageSquare },
  { image: "/images/solution/mobile4.png", Icon: Truck },
];

export default function Purpose() {
  const t = useTranslations("individual.purpose");

  const items = cardMeta.map((meta, i) => ({
    ...meta,
    title: t(`card${i + 1}Title` as "card1Title" | "card2Title" | "card3Title" | "card4Title"),
    description: t(
      `card${i + 1}Desc` as "card1Desc" | "card2Desc" | "card3Desc" | "card4Desc",
    ),
  }));

  return (
    <section className="w-full bg-muted py-16 sm:py-24 lg:py-32">
      <div className="app-container">
        <AnimateIn>
          <Typography variant="h2" className="max-w-xl text-foreground">
            {t("headline")}
          </Typography>
        </AnimateIn>

        <div className="mt-12 sm:mt-16 lg:mt-20 flex flex-col gap-6 sm:gap-8">
          {items.map((item, index) => {
            const Icon = item.Icon;
            const reversed = index % 2 === 1;
            return (
              <AnimateIn
                key={item.title}
                variants={reversed ? fadeInRight : fadeInLeft}
              >
                <div
                  className={`flex flex-col items-center gap-6 overflow-hidden rounded-3xl bg-card p-6 shadow-soft ring-1 ring-border sm:gap-10 sm:p-8 lg:p-10 ${
                    reversed ? "lg:flex-row-reverse" : "lg:flex-row"
                  }`}
                >
                  <div className="flex-1">
                    <div className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="size-5" strokeWidth={2} />
                    </div>
                    <Typography variant="h3" className="mt-5 text-foreground">
                      {item.title}
                    </Typography>
                    <Typography
                      variant="lead"
                      className="mt-3 max-w-md text-muted-foreground"
                    >
                      {item.description}
                    </Typography>
                  </div>

                  <div className="flex w-full shrink-0 justify-center lg:w-auto">
                    <Image
                      src={item.image}
                      alt=""
                      width={220}
                      height={400}
                      className="h-[240px] w-auto object-contain sm:h-[300px] lg:h-[320px]"
                    />
                  </div>
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
