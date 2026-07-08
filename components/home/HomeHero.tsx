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
      <div className="absolute inset-0 bg-slate-950/40" />

      <div className="relative">
        <Nav />
      </div>

      <div className="relative app-container py-20 sm:py-28 lg:py-36 flex flex-col items-center text-center">
        <AnimateIn>
          <Typography variant="extraLargeText" className="text-white">
            <span className="block font-normal text-white/70">{t("line1")}</span>
            <span className="block tracking-tightest">{t("line2")}</span>
          </Typography>
        </AnimateIn>

        <AnimateIn delay={0.06}>
          <Typography
            variant="lead"
            className="mx-auto mt-5 sm:mt-6 max-w-xl text-white/80"
          >
            {t("subtitle")}
          </Typography>
        </AnimateIn>

        <AnimateIn delay={0.12}>
          <div
            id="waitlist"
            className="mt-8 sm:mt-10 flex w-full scroll-mt-24 flex-col items-center gap-4"
          >
            <LeadForm
              source="waitlist"
              cta="Request access"
              placeholder="Enter your work email"
              variant="dark"
              className="mx-auto"
            />

            <Link href="/solutions">
              <Button size="lg" variant="secondary" className="rounded-full">
                {t("ctaBusiness")}
              </Button>
            </Link>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
