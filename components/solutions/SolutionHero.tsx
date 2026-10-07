import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import { Typography } from "@/components/ui/typography";
import { LeadForm } from "@/components/shared/LeadForm";
import Nav from "../shared/navbar/Nav";
import AnimateIn from "@/components/ui/AnimateIn";
import { getTranslations } from "next-intl/server";

export async function SolutionHero() {
  const t = await getTranslations("solutions.hero");
  const nav = await getTranslations("nav");

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
        <div className="app-container flex flex-col items-center pt-12 pb-24 text-center sm:pt-16 sm:pb-32 lg:pt-14 lg:pb-28">
          <AnimateIn>
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              {t("eyebrow")}
            </span>
          </AnimateIn>
          <AnimateIn delay={0.08}>
            <Typography
              variant="h1"
              className="mt-6 max-w-3xl text-balance text-4xl sm:text-5xl lg:text-6xl font-medium text-foreground"
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
          <Link href="/developer" className="mt-3 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline">{nav("developers")}<ArrowRight aria-hidden className="size-4" /></Link>
        </div>
      </div>
    </section>
  );
}
