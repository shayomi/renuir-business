import NextImage from "next/image";
import { Typography } from "../ui/typography";
import AnimateIn from "@/components/ui/AnimateIn";
import { ShieldAlert, Clock, Archive } from "lucide-react";
import { getTranslations } from "next-intl/server";

const SolutionImage = async () => {
  const t = await getTranslations("solutions.costs");

  const costs = [
    { icon: ShieldAlert, text: t("bullet1") },
    { icon: Clock, text: t("bullet2") },
    { icon: Archive, text: t("bullet3") },
  ];

  return (
    <section className="relative z-10 bg-background">
      <AnimateIn>
        <div className="app-container">
          <div className="overflow-hidden rounded-3xl border border-border shadow-elevated">
            <NextImage
              src="/images/solution/solutionhero.png"
              alt={t("dashboardAlt")}
              width={1280}
              height={720}
              className="h-auto w-full"
              priority
            />
          </div>
        </div>
      </AnimateIn>

      <div className="app-container mt-16 sm:mt-20 lg:mt-28">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <AnimateIn>
            <div>
              <Typography
                variant="h2"
                className="font-medium text-foreground"
              >
                {t("headline")}
              </Typography>
              <Typography
                variant="lead"
                className="mt-5 font-normal text-muted-foreground"
              >
                {t("subtitle")}
              </Typography>

              <ul className="mt-8 flex flex-col gap-3">
                {costs.map(({ icon: Icon, text }) => (
                  <li
                    key={text}
                    className="flex items-start gap-4 rounded-2xl border border-border bg-card p-4 shadow-soft sm:p-5"
                  >
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="size-5" strokeWidth={2} />
                    </span>
                    <Typography
                      variant="smallText"
                      className="pt-1 font-normal text-foreground"
                    >
                      {text}
                    </Typography>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.12}>
            <div className="overflow-hidden rounded-3xl border border-border shadow-soft">
              <NextImage
                src="/images/solution/manuallogs.png"
                alt={t("manualLogsAlt")}
                width={640}
                height={480}
                className="h-auto w-full"
              />
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
};

export default SolutionImage;
