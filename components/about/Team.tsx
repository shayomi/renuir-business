"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import AnimateIn from "@/components/ui/AnimateIn";
import { getTeam } from "../data/team";
import { TeamCard } from "./TeamCard";

export function Team() {
  const t = useTranslations('about.team');
  const team = getTeam(t);
  const featured = team.filter((m) => m.featured);
  const rest = team.filter((m) => !m.featured);

  return (
    <section className="bg-slate-950 py-16 sm:py-24 lg:py-32">
      <div className="app-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <AnimateIn>
            <div className="max-w-md">
              <Typography variant="h2" className="tracking-tightest text-white">
                {t('headline')}
              </Typography>

              <Typography variant="lead" className="mt-4 text-white/80">
                {t('subtitle')}
              </Typography>

              <Link href="/#waitlist">
                <Button
                  size="lg"
                  variant="secondary"
                  className="mt-6 sm:mt-8 rounded-full"
                >
                  {t('cta')}
                </Button>
              </Link>
            </div>
          </AnimateIn>

          <div className="mt-4 lg:mt-0">
            <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2">
              {featured.map((member, index) => (
                <AnimateIn key={member.name} delay={index * 0.04}>
                  <TeamCard {...member} />
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-12 sm:mt-16 lg:mt-20">
          {rest.map((member, index) => (
            <AnimateIn key={member.name} delay={index * 0.03}>
              <TeamCard {...member} />
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
