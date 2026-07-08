import { Typography } from "@/components/ui/typography";
import AnimateIn from "@/components/ui/AnimateIn";
import { getTranslations } from "next-intl/server";

export async function Mission() {
  const t = await getTranslations("about.mission");
  const STATS = [
    { value: "1", label: t("stat1Label") },
    { value: "24h", label: t("stat2Label") },
    { value: "GDPR", label: t("stat3Label") },
  ];
  return (
    <section className="py-16 sm:py-24 lg:py-28">
      <div className="app-container">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:items-start">
          <AnimateIn>
            <div>
              <Typography
                variant="mutedText"
                className="uppercase tracking-wider text-primary text-xs font-medium"
              >
                {t("eyebrow")}
              </Typography>
              <Typography variant="h2" as="h2" className="mt-4 tracking-tight">
                {t("headline")}
              </Typography>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.08}>
            <div className="max-w-xl space-y-5 text-muted-foreground">
              <Typography variant="lead" className="text-foreground/90">
                {t("lead")}
              </Typography>
              <p className="text-[15px] leading-relaxed">
                {t("body")}
              </p>
            </div>
          </AnimateIn>
        </div>

        <AnimateIn delay={0.12}>
          <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {STATS.map((stat) => (
              <div
                key={stat.value}
                className="rounded-2xl border border-border bg-card p-6 shadow-soft"
              >
                <Typography variant="h2" as="p" className="text-primary">
                  {stat.value}
                </Typography>
                <Typography variant="mutedText" className="mt-2">
                  {stat.label}
                </Typography>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
