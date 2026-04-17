"use client";

import { useTranslations } from "next-intl";
import { ContactForm } from "./ContactForm";
import { ContactSidebar } from "./ContactSidebar";
import { Typography } from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge";
import AnimateIn from "@/components/ui/AnimateIn";

export function ContactSection() {
  const t = useTranslations('about.contact');
  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-28 scroll-mt-20">
      <div className="app-container text-center">
        <AnimateIn>
          <Badge
            variant="default"
            className="mx-auto bg-primary/20 text-primary mb-4 sm:mb-6 rounded-full px-4 py-1"
          >
            {t('badge')}
          </Badge>

          <Typography
            variant="h1"
            className="mx-auto max-w-3xl text-foreground tracking-tightest"
          >
            {t('headline')}
          </Typography>

          <Typography
            variant="mutedText"
            className="mx-auto mt-3 sm:mt-4 max-w-lg lg:max-w-2xl text-muted-foreground"
          >
            {t('subtitle')}
          </Typography>
        </AnimateIn>
      </div>

      <div className="app-container mt-10 sm:mt-16 lg:mt-20">
        <AnimateIn>
          <div className="grid overflow-hidden border border-border/60 rounded-2xl sm:rounded-3xl bg-card shadow-xl lg:grid-cols-[380px_1fr]">
            <ContactSidebar />
            <ContactForm />
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
