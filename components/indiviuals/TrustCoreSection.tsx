"use client";

import { Store, IdCard, Database, ScrollText } from "lucide-react";
import { Typography } from "@/components/ui/typography";
import AnimateIn from "@/components/ui/AnimateIn";
import { useTranslations } from "next-intl";

export default function TrustCoreSection() {
  const t = useTranslations("individual.trust");

  const trustItems = [
    {
      title: t("feature1Title"),
      description: t("feature1Desc"),
      icon: Store,
      iconWrapperClass: "bg-primary-50 dark:bg-primary/15",
      iconClass: "text-primary",
    },
    {
      title: t("feature2Title"),
      description: t("feature2Desc"),
      icon: IdCard,
      iconWrapperClass: "bg-rose-50 dark:bg-rose-500/15",
      iconClass: "text-rose-600 dark:text-rose-400",
    },
    {
      title: t("feature3Title"),
      description: t("feature3Desc"),
      icon: Database,
      iconWrapperClass: "bg-amber-50 dark:bg-amber-500/15",
      iconClass: "text-amber-600 dark:text-amber-400",
    },
    {
      title: t("feature4Title"),
      description: t("feature4Desc"),
      icon: ScrollText,
      iconWrapperClass: "bg-emerald-50 dark:bg-emerald-500/15",
      iconClass: "text-emerald-600 dark:text-emerald-400",
    },
  ];

  return (
    <section className="w-full bg-muted py-16 sm:py-24 lg:py-32">
      <div className="app-container">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-x-20">
          <AnimateIn>
            <div className="max-w-lg">
              <Typography
                variant="h1"
                className="font-semibold tracking-tight text-foreground"
              >
                {t("headline")}
              </Typography>

              <Typography
                variant="lead"
                className="mt-4 sm:mt-6 lg:mt-8 text-muted-foreground"
              >
                {t("subtitle")}
              </Typography>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-1 gap-8 sm:gap-10 sm:grid-cols-2 lg:gap-x-12 lg:gap-y-12">
            {trustItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <AnimateIn key={item.title} delay={index * 0.04}>
                  <div className="max-w-[272px]">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-lg ${item.iconWrapperClass}`}
                    >
                      <Icon className={`h-5 w-5 stroke-[2] ${item.iconClass}`} />
                    </div>

                    <Typography variant="h4" className="mt-4 text-foreground">
                      {item.title}
                    </Typography>

                    <Typography
                      variant="mutedText"
                      className="mt-2 sm:mt-3 text-muted-foreground"
                    >
                      {item.description}
                    </Typography>
                  </div>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
