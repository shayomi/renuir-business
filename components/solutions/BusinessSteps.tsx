import Image from "next/image";
import { Typography } from "@/components/ui/typography";
import AnimateIn from "@/components/ui/AnimateIn";
import { useTranslations } from "next-intl";

export function BusinessSteps() {
  const t = useTranslations("solutions.steps");

  const STEPS = [
    { number: "01", image: "/images/solution/mobile1.png", title: t("step1Title"), desc: t("step1Desc") },
    { number: "02", image: "/images/solution/mobile2.png", title: t("step2Title"), desc: t("step2Desc") },
    { number: "03", image: "/images/solution/mobile3.png", title: t("step3Title"), desc: t("step3Desc") },
    { number: "04", image: "/images/solution/mobile4.png", title: t("step4Title"), desc: t("step4Desc") },
  ];

  return (
    <section className="relative overflow-hidden py-20 sm:py-28 lg:py-32">
      <div className="app-container relative">
        <AnimateIn>
          <div className="max-w-2xl">
            <span className="text-[12px] font-medium uppercase tracking-[0.16em] text-primary">
              {t("badge")}
            </span>
            <Typography variant="h2" className="mt-4 text-foreground tracking-tight">
              {t("headline")}
            </Typography>
            <Typography variant="lead" className="mt-4 text-muted-foreground">
              {t("subtitle")}
            </Typography>
          </div>
        </AnimateIn>

        {/* Contained flow panel */}
        <AnimateIn delay={0.08} className="mt-14 sm:mt-16">
          <div className="rounded-[2rem] border border-border bg-card p-6 shadow-soft sm:p-10 lg:p-12">
            <div className="relative grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
              {/* connective rail */}
              <div
                aria-hidden
                className="absolute left-0 right-0 top-5 hidden h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent lg:block"
              />
              {STEPS.map((step, i) => (
                <AnimateIn key={step.number} delay={i * 0.08}>
                  <div className="relative flex flex-col">
                    {/* numbered node */}
                    <div className="flex items-center gap-3">
                      <span className="relative z-10 flex size-10 items-center justify-center rounded-full bg-primary font-mono text-[13px] font-semibold text-white shadow-brand">
                        {step.number}
                      </span>
                      <Typography variant="h5" className="text-foreground">
                        {step.title}
                      </Typography>
                    </div>

                    <Typography
                      variant="mutedText"
                      className="mt-3 text-[14.5px] leading-relaxed text-muted-foreground"
                    >
                      {step.desc}
                    </Typography>

                    {/* device */}
                    <div className="relative mt-7 overflow-hidden rounded-[1.25rem] bg-gradient-to-b from-primary/[0.07] to-transparent pt-6">
                      <Image
                        src={step.image}
                        alt={step.title}
                        width={720}
                        height={1180}
                        className="mx-auto w-[82%] max-w-[210px] drop-shadow-[0_18px_36px_rgba(15,23,42,0.13)]"
                      />
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
