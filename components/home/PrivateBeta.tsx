import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import AnimateIn from "@/components/ui/AnimateIn";
import { getFeatures } from "../data/homefeatures";
import { useTranslations } from "next-intl";

const PrivateBeta = () => {
  const t = useTranslations("home.privateBeta");
  const features = getFeatures(t);
  return (
    <section className="bg-slate-950">
      <div className="app-container grid grid-cols-1 items-center gap-10 py-16 sm:gap-12 sm:py-24 lg:grid-cols-2 lg:gap-16 lg:py-32">
        <AnimateIn>
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {t("badge")}
            </span>

            <Typography variant="h2" className="mt-5 text-white sm:mt-6">
              {t("headline")}
            </Typography>

            <Typography variant="p" className="mt-4 text-white/75 sm:mt-6">
              {t("subtitle")}
            </Typography>

            <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 backdrop-blur sm:p-6"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 sm:mb-4">
                    <Image
                      src={feature.icon}
                      alt=""
                      width={18}
                      height={18}
                    />
                  </div>

                  <Typography variant="h6" className="text-white">
                    {feature.title}
                  </Typography>

                  <Typography variant="mutedText" className="mt-2 text-white/60">
                    {feature.description}
                  </Typography>
                </div>
              ))}
            </div>

            <Link href="/solutions">
              <Button
                size="lg"
                variant="secondary"
                className="mt-8 rounded-full sm:mt-10"
              >
                {t("cta")}
              </Button>
            </Link>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <div className="flex items-center justify-center lg:justify-end">
            <Image
              src="/images/home/privatebetaimg.png"
              alt={t("imageAlt")}
              width={600}
              height={700}
              priority
              className="h-auto w-full max-w-md object-contain lg:max-w-full"
            />
          </div>
        </AnimateIn>
      </div>
    </section>
  );
};

export default PrivateBeta;
