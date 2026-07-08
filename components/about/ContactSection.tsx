"use client";

import { useTranslations } from "next-intl";
import { Mail, MapPin, Clock } from "lucide-react";
import { Typography } from "@/components/ui/typography";
import AnimateIn from "@/components/ui/AnimateIn";
import { BusinessContactForm } from "@/components/shared/BusinessContactForm";

const DETAILS = [
  { Icon: Mail, label: "Email", value: "sales@renuir.com" },
  { Icon: Clock, label: "Response time", value: "Within one business day" },
  { Icon: MapPin, label: "Based in", value: "Berlin, Germany" },
];

export function ContactSection() {
  const t = useTranslations("about.contact");

  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-28">
      <div className="app-container grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <AnimateIn>
          <div className="lg:sticky lg:top-28">
            <span className="text-[12px] font-medium uppercase tracking-[0.16em] text-primary">
              {t("badge")}
            </span>
            <Typography
              variant="h2"
              className="mt-4 text-foreground tracking-tight"
            >
              {t("headline")}
            </Typography>
            <Typography
              variant="mutedText"
              className="mt-4 max-w-md text-muted-foreground"
            >
              {t("subtitle")}
            </Typography>

            <ul className="mt-8 space-y-4">
              {DETAILS.map(({ Icon, label, value }) => (
                <li key={label} className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <span>
                    <span className="block text-[13px] text-muted-foreground">
                      {label}
                    </span>
                    <span className="block text-[15px] font-medium text-foreground">
                      {value}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8 lg:p-10">
            <BusinessContactForm source="contact" cta="Send message" />
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
