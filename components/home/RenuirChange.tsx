import { Typography } from "../ui/typography";
import AnimateIn from "@/components/ui/AnimateIn";
import { useTranslations } from "next-intl";

const RenuirChange = () => {
  const t = useTranslations("home.change");
  return (
    <section className="bg-primary-50/60 dark:bg-primary/5">
      <div className="app-container py-16 sm:py-24 lg:py-32">
        <AnimateIn className="flex flex-col items-center gap-4">
          <Typography variant="h2" className="max-w-2xl text-center">
            {t("headline")}
          </Typography>
          <Typography
            variant="lead"
            className="mt-2 max-w-xl text-center leading-relaxed sm:mt-4 sm:leading-8"
          >
            {t("body")}
            <br />
            <strong className="text-foreground">{t("punchline")}</strong>
          </Typography>
        </AnimateIn>
      </div>
    </section>
  );
};

export default RenuirChange;
