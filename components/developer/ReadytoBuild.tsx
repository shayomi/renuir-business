"use client";

import * as React from "react";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { ArrowRight } from "lucide-react";
import AnimateIn from "@/components/ui/AnimateIn";
import { useTranslations } from "next-intl";

export default function ReadyToBuildCTA() {
  const t = useTranslations("developer.ready");
  return (
    <section className="bg-slate-950 pt-8 sm:pt-12 pb-16 sm:pb-20 lg:pb-24">
      <div className="app-container">
        <AnimateIn>
          <div className="relative overflow-hidden rounded-2xl border border-white/8 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent px-6 sm:px-10 lg:px-14 py-10 sm:py-14 lg:py-16 text-center">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px]" />
            </div>

            <div className="relative flex flex-col items-center">
              <Typography variant="h1" className="text-white max-w-lg">
                {t("headline")}
              </Typography>

              <Typography variant="lead" className="mt-3 sm:mt-4 max-w-lg text-white/65">
                {t("subtitle")}
              </Typography>

              <div className="mt-6 sm:mt-8 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
                <Link href="/#waitlist">
                  <Button className="rounded-full bg-primary px-7 h-11 text-sm font-medium text-white hover:bg-primary/90 w-full sm:w-auto">
                    {t("ctaPrimary")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>

                <Button
                  variant="ghost"
                  className="rounded-full border border-white/10 px-7 h-11 text-sm font-medium text-white/70 hover:bg-white/5 hover:text-white w-full sm:w-auto"
                >
                  {t("ctaSecondary")}
                </Button>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
