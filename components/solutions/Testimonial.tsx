import { Typography } from "@/components/ui/typography";
import AnimateIn from "@/components/ui/AnimateIn";
import { Plane, Building2, GraduationCap } from "lucide-react";
import { getTranslations } from "next-intl/server";

const PARTNERS = [
  {
    icon: Plane,
    label: "Airports and transit",
    desc: "High-volume hubs where items cross borders and every handover has to be accounted for.",
  },
  {
    icon: Building2,
    label: "Hotels and hospitality",
    desc: "Front-desk teams that want a discreet, guest-friendly way to return belongings.",
  },
  {
    icon: GraduationCap,
    label: "Campuses and venues",
    desc: "Large sites with thousands of daily visitors and a single lost property desk.",
  },
];

export default async function TestimonialsSection() {
  const t = await getTranslations("solutions.testimonials");

  return (
    <section className="w-full bg-background">
      <div className="app-container py-20 sm:py-28 lg:py-32">
        <div className="flex flex-col items-center text-center">
          <AnimateIn>
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              {t("badge")}
            </span>
            <div className="mt-6 max-w-3xl">
              <Typography variant="h2" className="text-balance text-foreground">
                {t("headline")}
              </Typography>
              <Typography variant="lead" className="mt-5 text-balance text-muted-foreground">
                {t("subtitle")}
              </Typography>
            </div>
          </AnimateIn>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {PARTNERS.map(({ icon: Icon, label, desc }, index) => (
            <AnimateIn key={label} delay={index * 0.06}>
              <div className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft">
                <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="size-5" strokeWidth={2} />
                </span>
                <div>
                  <Typography
                    variant="h5"
                    as="h3"
                    className="text-base font-semibold text-foreground"
                  >
                    {label}
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

        <AnimateIn delay={0.2}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-muted-foreground">
            We are not sharing customer logos yet. During the beta we would
            rather earn the results than borrow someone else&rsquo;s.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
