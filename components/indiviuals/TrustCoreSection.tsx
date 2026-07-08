"use client";

import { Lock, BadgeCheck, FileCheck, EyeOff, History } from "lucide-react";
import { Typography } from "@/components/ui/typography";
import { LeadForm } from "@/components/shared/LeadForm";
import AnimateIn from "@/components/ui/AnimateIn";
import { useTranslations } from "next-intl";

const featureIcons = [BadgeCheck, FileCheck, EyeOff, History];

export default function TrustCoreSection() {
  const t = useTranslations("individual.trust");

  const features = featureIcons.map((Icon, i) => ({
    Icon,
    title: t(`feature${i + 1}Title` as "feature1Title" | "feature2Title" | "feature3Title" | "feature4Title"),
    description: t(
      `feature${i + 1}Desc` as "feature1Desc" | "feature2Desc" | "feature3Desc" | "feature4Desc",
    ),
  }));

  return (
    <section className="w-full py-16 sm:py-24 lg:py-32">
      <div className="app-container">
        <AnimateIn>
          <div className="overflow-hidden rounded-3xl bg-card shadow-elevated ring-1 ring-border">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              {/* privacy intro rail */}
              <div className="border-b border-border bg-primary/5 p-8 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-primary text-white shadow-soft">
                  <Lock className="size-5" strokeWidth={2} />
                </div>
                <Typography variant="h2" className="mt-6 text-foreground">
                  {t("headline")}
                </Typography>
                <Typography variant="lead" className="mt-4 text-muted-foreground">
                  {t("subtitle")}
                </Typography>
              </div>

              {/* privacy guarantees as a checklist */}
              <div className="p-8 sm:p-10 lg:p-12">
                <ul className="flex flex-col">
                  {features.map((feature, index) => {
                    const Icon = feature.Icon;
                    return (
                      <li
                        key={feature.title}
                        className={`flex gap-4 py-5 first:pt-0 last:pb-0 ${
                          index !== 0 ? "border-t border-border" : ""
                        }`}
                      >
                        <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                          <Icon className="size-[18px]" strokeWidth={2} />
                        </div>
                        <div>
                          <Typography variant="h4" className="text-foreground">
                            {feature.title}
                          </Typography>
                          <Typography
                            variant="mutedText"
                            className="mt-1.5 text-muted-foreground"
                          >
                            {feature.description}
                          </Typography>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            {/* honest closing CTA */}
            <div className="flex flex-col items-start gap-4 border-t border-border px-8 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-12">
              <Typography variant="largeText" className="text-foreground">
                Be one of the first to try Renuir.
              </Typography>
              <LeadForm
                source="waitlist"
                cta="Join the beta"
                placeholder="Enter your email"
                variant="light"
                className="max-w-sm"
              />
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
