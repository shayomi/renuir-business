"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { useTranslations } from "next-intl";

const DualCTA = () => {
  const t = useTranslations('footer');
  return (
    <section className="bg-slate-950 py-24">
      <div className="app-container">
        <div className="relative overflow-hidden rounded-3xl">
          <Image
            src="/images/home/glossybg.svg"
            alt=""
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/10 backdrop-blur-md" />

          <div className="relative grid divide-y divide-white/20 lg:grid-cols-2 lg:divide-x lg:divide-y-0">
            <div className="flex flex-col gap-3 items-center px-8 py-16 text-center">
              <Typography variant="h2" className="text-white">
                {t('forBusiness')}
              </Typography>

              <Typography variant="lead" className="text-white/80">
                {t('forBusinessDesc')}
              </Typography>

              <Link href="/solutions">
                <Button
                  size="lg"
                  variant="secondary"
                  className="mt-4 rounded-full px-8"
                >
                  {t('forBusinessCta')}
                </Button>
              </Link>
            </div>

            <div className="flex flex-col gap-3 items-center px-8 py-16 text-center">
              <Typography variant="h2" className="text-white">
                {t('forIndividuals')}
              </Typography>

              <Typography variant="lead" className="text-white/80">
                {t('forIndividualsDesc')}
              </Typography>

              <Link href="/#waitlist">
                <Button
                  size="lg"
                  variant="secondary"
                  className="mt-4 rounded-full px-8"
                >
                  {t('forIndividualsCta')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DualCTA;
