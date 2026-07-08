import Image from "next/image";
import { ScanLine, Truck, ShieldCheck } from "lucide-react";
import { Typography } from "@/components/ui/typography";
import AnimateIn from "@/components/ui/AnimateIn";
import { getTranslations } from "next-intl/server";

export async function ManageChaos() {
  const t = await getTranslations("solutions.manage");

  const features = [
    { icon: ScanLine, title: t("feature1Title"), desc: t("feature1Desc") },
    { icon: Truck, title: t("feature2Title"), desc: t("feature2Desc") },
    { icon: ShieldCheck, title: t("feature3Title"), desc: t("feature3Desc") },
  ];

  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="app-container">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <AnimateIn>
            <div className="relative mx-auto h-[420px] w-full max-w-md sm:h-[500px] lg:h-[560px] lg:max-w-none">
              <Image
                src="/images/solution/chaosimg1.png"
                alt={t("mobileAppAlt")}
                fill
                className="object-contain"
              />
            </div>
          </AnimateIn>

          <div>
            <AnimateIn>
              <Typography
                variant="h2"
                className="mb-10 max-w-md font-medium leading-tight text-foreground"
              >
                {t("headline")}
              </Typography>
            </AnimateIn>

            <div className="flex flex-col gap-4">
              {features.map(({ icon: Icon, title, desc }, index) => (
                <AnimateIn key={title} delay={0.06 + index * 0.06}>
                  <div className="flex items-start gap-5 rounded-2xl border border-border bg-card p-5 shadow-soft sm:p-6">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
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
        </div>
      </div>
    </section>
  );
}
