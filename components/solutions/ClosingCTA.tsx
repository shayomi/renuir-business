import { Typography } from "@/components/ui/typography";
import AnimateIn from "@/components/ui/AnimateIn";
import { BusinessContactForm } from "@/components/shared/BusinessContactForm";
import { Check } from "lucide-react";
import { getTranslations } from "next-intl/server";

export async function ClosingCTA() {
  const t = await getTranslations("solutions.closing");
  const POINTS = [t("point1"), t("point2"), t("point3")];
  return (
    <section id="contact" className="scroll-mt-24 bg-background pb-20 pt-4 sm:pb-28">
      <div className="app-container">
        <div className="grid gap-12 rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:p-14">
          <AnimateIn>
            <div>
              <span className="text-[12px] font-medium uppercase tracking-[0.16em] text-primary">
                {t("eyebrow")}
              </span>
              <Typography variant="h2" className="mt-4 font-medium text-foreground tracking-tight">
                {t("headline")}
              </Typography>
              <Typography variant="mutedText" className="mt-4 max-w-md text-muted-foreground">
                {t("subtitle")}
              </Typography>

              <ul className="mt-8 space-y-3">
                {POINTS.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Check className="size-3" strokeWidth={3} />
                    </span>
                    <span className="text-[15px] text-muted-foreground">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <BusinessContactForm source="demo" cta={t("formCta")} />
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
