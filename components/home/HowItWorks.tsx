import Image from "next/image";
import { Typography } from "@/components/ui/typography";
import AnimateIn from "@/components/ui/AnimateIn";
import { useTranslations } from "next-intl";

export function HowItWorks() {
  const t = useTranslations("home.howItWorks");

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

        <div className="mt-16 grid gap-x-6 gap-y-12 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <AnimateIn key={step.number} delay={i * 0.08}>
              <div className="flex flex-col">
                {/* Device well */}
                <div className="relative overflow-hidden rounded-[1.5rem] bg-gradient-to-b from-primary/[0.08] to-transparent pt-7">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-x-6 top-5 bottom-0 rounded-t-[1.5rem] bg-primary/[0.04]"
                  />
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={720}
                    height={1180}
                    className="relative mx-auto w-[78%] max-w-[220px] drop-shadow-[0_20px_40px_rgba(15,23,42,0.13)]"
                  />
                </div>

                {/* Label */}
                <div className="mt-6 flex items-baseline gap-2.5">
                  <span className="font-mono text-[13px] font-medium text-primary">
                    {step.number}
                  </span>
                  <Typography variant="h5" className="text-foreground">
                    {step.title}
                  </Typography>
                </div>
                <Typography
                  variant="mutedText"
                  className="mt-2 text-[14.5px] leading-relaxed text-muted-foreground"
                >
                  {step.desc}
                </Typography>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
