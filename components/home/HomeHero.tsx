import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import AnimateIn from "@/components/ui/AnimateIn";
import { LeadForm } from "@/components/shared/LeadForm";
import Nav from "./HomeNav";
import { useTranslations } from "next-intl";

export function HomeHero() {
  const t = useTranslations("home.hero");
  return (
    <section className="relative overflow-hidden bg-slate-950">
      <Image
        src="/images/home/renuir-bg.png"
        alt=""
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-slate-950/55" />

      <div className="relative">
        <Nav />
      </div>

      <div className="relative app-container grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:py-28">
        {/* Copy */}
        <div className="max-w-xl text-center lg:text-left">
          <AnimateIn>
            <Typography variant="extraLargeText" className="text-white">
              <span className="block font-normal text-white/70">{t("line1")}</span>
              <span className="block tracking-tightest">{t("line2")}</span>
            </Typography>
          </AnimateIn>

          <AnimateIn delay={0.06}>
            <Typography
              variant="lead"
              className="mx-auto mt-5 max-w-md text-white/80 lg:mx-0"
            >
              {t("subtitle")}
            </Typography>
          </AnimateIn>

          <AnimateIn delay={0.12}>
            <div
              id="waitlist"
              className="mt-8 flex scroll-mt-24 flex-col items-center gap-4 sm:flex-row lg:items-start"
            >
              <div className="w-full max-w-md">
                <LeadForm
                  source="waitlist"
                  cta={t("waitlistCta")}
                  placeholder={t("waitlistPlaceholder")}
                  variant="dark"
                />
              </div>
            </div>
            <div className="mt-4 flex justify-center lg:justify-start">
              <Link href="/solutions">
                <Button
                  size="lg"
                  variant="ghost"
                  className="rounded-full border border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
                >
                  {t("ctaBusiness")}
                </Button>
              </Link>
            </div>
          </AnimateIn>
        </div>

        {/* Product device */}
        <AnimateIn delay={0.16}>
          <div className="relative flex justify-center lg:justify-end">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(50% 45% at 55% 45%, color-mix(in oklch, var(--primary) 45%, transparent), transparent 70%)",
                filter: "blur(30px)",
              }}
            />
            <Image
              src="/images/home/hero-app.png"
              alt="The Renuir app home screen"
              width={733}
              height={1475}
              priority
              className="relative w-[62%] max-w-[280px] drop-shadow-[0_40px_90px_rgba(0,0,0,0.55)] sm:max-w-[300px] lg:w-[80%] lg:max-w-[360px]"
            />
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
