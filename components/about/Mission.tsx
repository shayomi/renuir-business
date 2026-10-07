import { Typography } from "@/components/ui/typography";
import AnimateIn from "@/components/ui/AnimateIn";
import { getTranslations } from "next-intl/server";

export async function Mission() {
  const t = await getTranslations("about.mission");
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


      </div>
    </section>
  );
}
