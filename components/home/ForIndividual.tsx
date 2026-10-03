import { Check } from "lucide-react";
import { Typography } from "@/components/ui/typography";
import { StoreDownloads } from "@/components/shared/StoreDownloads";
import AnimateIn from "@/components/ui/AnimateIn";
import { useTranslations } from "next-intl";
import { AppShowcase } from "@/components/shared/AppMockup";

const ForIndividual = () => {
  const t = useTranslations("home.forIndividual");

  const features = [t("feature1"), t("feature2"), t("feature3"), t("feature4")];
  return (
    <section className="app-container grid items-center gap-10 py-16 sm:gap-12 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
      <AnimateIn>
        <div>
          <span className="inline-flex items-center rounded-full border border-border px-4 py-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            {t("badge")}
          </span>

          <Typography variant="h2" className="mt-5 max-w-xl sm:mt-6">
            {t("headline")}
          </Typography>

          <Typography variant="lead" className="mt-3 max-w-xl text-muted-foreground sm:mt-4">
            {t("subtitle")}
          </Typography>

          <ul className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
            {features.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <Typography variant="smallText" className="font-normal text-foreground">
                  {item}
                </Typography>
              </li>
            ))}
          </ul>

          <div className="mt-8 sm:mt-10"><StoreDownloads /></div>
        </div>
      </AnimateIn>

      <AnimateIn delay={0.1}>
        <AppShowcase variant="recovery" />
      </AnimateIn>
    </section>
  );
};

export default ForIndividual;
