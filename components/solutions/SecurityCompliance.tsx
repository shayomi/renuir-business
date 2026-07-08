import { Typography } from "@/components/ui/typography";
import AnimateIn from "@/components/ui/AnimateIn";
import { Link2, ShieldCheck, Trash2, Lock } from "lucide-react";
import { getTranslations } from "next-intl/server";

export async function SecurityCompliance() {
  const t = await getTranslations("solutions.security");
  const ITEMS = [
    { icon: Link2, title: t("item1Title"), desc: t("item1Desc") },
    { icon: ShieldCheck, title: t("item2Title"), desc: t("item2Desc") },
    { icon: Trash2, title: t("item3Title"), desc: t("item3Desc") },
    { icon: Lock, title: t("item4Title"), desc: t("item4Desc") },
  ];
  return (
    <section className="bg-card py-20 sm:py-28">
      <div className="app-container">
        <div className="mx-auto max-w-2xl text-center">
          <AnimateIn>
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              {t("eyebrow")}
            </span>
            <Typography
              variant="h2"
              className="mt-6 font-medium text-foreground"
            >
              {t("headline")}
            </Typography>
            <Typography variant="lead" className="mt-5 text-muted-foreground">
              {t("subtitle")}
            </Typography>
          </AnimateIn>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
          {ITEMS.map(({ icon: Icon, title, desc }, index) => (
            <AnimateIn key={title} delay={0.05 + index * 0.05}>
              <div className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-background p-6 shadow-soft">
                <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="size-5" strokeWidth={2} />
                </span>
                <div>
                  <Typography
                    variant="h5"
                    as="h3"
                    className="text-base font-semibold text-foreground"
                  >
                    {title}
                  </Typography>
                  <Typography
                    variant="mutedText"
                    className="mt-2 leading-relaxed"
                  >
                    {desc}
                  </Typography>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
