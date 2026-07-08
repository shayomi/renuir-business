import { Typography } from "@/components/ui/typography";
import { LeadForm } from "@/components/shared/LeadForm";
import Nav from "../shared/navbar/Nav";
import { BetaBanner } from "../shared/BetaBanner";
import AnimateIn from "@/components/ui/AnimateIn";
import { getTranslations } from "next-intl/server";

export async function SolutionHero() {
  const t = await getTranslations("solutions.hero");

  return (
    <section className="relative overflow-hidden bg-background">
      {/* Own identity: soft brand wash, no shared About hero art */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-0"
      >
        <div className="absolute -top-40 left-1/2 h-[560px] w-[880px] -translate-x-1/2 rounded-full bg-primary/[0.08] blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="relative z-10">
        <Nav />
        <BetaBanner
          message={t("betaBanner")}
          linkText={t("joinWaitlist")}
          linkHref="/#waitlist"
        />
        <div className="app-container flex flex-col items-center pt-12 pb-24 text-center sm:pt-16 sm:pb-32 lg:pt-24 lg:pb-40">
          <AnimateIn>
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              {t("eyebrow")}
            </span>
          </AnimateIn>
          <AnimateIn delay={0.08}>
            <Typography
              variant="extraLargeText"
              className="mt-6 max-w-3xl font-medium text-foreground"
            >
              {t("headline")}
            </Typography>
          </AnimateIn>
          <AnimateIn delay={0.12}>
            <Typography
              variant="lead"
              className="mx-auto mt-6 max-w-2xl text-muted-foreground"
            >
              {t("subtitle")}
            </Typography>
          </AnimateIn>
          <AnimateIn delay={0.16} className="mt-10 flex justify-center sm:mt-12">
            <LeadForm
              source="demo"
              cta={t("cta")}
              placeholder={t("emailPlaceholder")}
              successMessage={t("demoSuccess")}
            />
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <Typography
              variant="smallText"
              className="mx-auto mt-5 max-w-xl text-muted-foreground"
            >
              {t("socialProof")}
            </Typography>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
