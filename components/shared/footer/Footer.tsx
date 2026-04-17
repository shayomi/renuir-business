"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Youtube } from "lucide-react";
import AnimateIn from "@/components/ui/AnimateIn";
import { useTranslations } from 'next-intl';

const Footer = () => {
  const t = useTranslations('footer');

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white" role="contentinfo">
      <div className="app-container py-16 sm:py-20 lg:py-24">
        <AnimateIn>
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl">
            <Image
              src="/images/home/glossybg.svg"
              alt=""
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/10 backdrop-blur-md" />

            <div className="relative grid divide-y divide-white/20 lg:grid-cols-2 lg:divide-x lg:divide-y-0">
              <div className="flex flex-col gap-3 items-center px-6 sm:px-8 py-10 sm:py-14 lg:py-16 text-center">
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
                    className="mt-3 sm:mt-4 rounded-full px-8"
                  >
                    {t('forBusinessCta')}
                  </Button>
                </Link>
              </div>

              <div className="flex flex-col gap-3 items-center px-6 sm:px-8 py-10 sm:py-14 lg:py-16 text-center">
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
                    className="mt-3 sm:mt-4 rounded-full px-8"
                  >
                    {t('forIndividualsCta')}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>

      <div className="relative app-container pb-10 sm:pb-16 lg:pb-20">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
          <span className="select-none text-[120px] sm:text-[200px] lg:text-[300px] font-semibold text-white/[0.02]">
            Renuir
          </span>
        </div>
        <AnimateIn>
          <div className="flex flex-col gap-8 sm:gap-10 lg:flex-row lg:gap-4 justify-between items-start">
            <div className="max-w-sm">
              <Image
                src="/images/icons/renuirlogo.png"
                alt="Renuir"
                width={140}
                height={40}
                className="mb-5 sm:mb-6"
              />

              <Typography variant="p" className="text-white/65 text-sm leading-relaxed">
                {t('tagline')}
              </Typography>
            </div>

            <div className="grid gap-10 sm:gap-12 grid-cols-2">
              <div>
                <Typography
                  variant="smallText"
                  className="mb-4 uppercase tracking-wider text-white/50 text-xs font-medium"
                >
                  {t('company')}
                </Typography>

                <ul className="space-y-3 text-sm text-white/70 mt-4">
                  <li>
                    <Link href="/solutions" className="hover:text-white transition-colors">{t('forBusinesses')}</Link>
                  </li>
                  <li>
                    <Link href="/individual" className="hover:text-white transition-colors">{t('forConsumers')}</Link>
                  </li>
                  <li>
                    <Link href="/developer" className="hover:text-white transition-colors">{t('developersLink')}</Link>
                  </li>
                  <li>
                    <Link href="/about-us#contact" className="hover:text-white transition-colors">{t('contactLink')}</Link>
                  </li>
                </ul>
              </div>

              <div>
                <Typography
                  variant="smallText"
                  className="mb-4 uppercase tracking-wider text-white/50 text-xs font-medium"
                >
                  {t('legal')}
                </Typography>

                <ul className="space-y-3 text-sm text-white/70 mt-4">
                  <li>
                    <Link href="/privacy" className="hover:text-white transition-colors">{t('privacy')}</Link>
                  </li>
                  <li>
                    <Link href="/terms" className="hover:text-white transition-colors">{t('terms')}</Link>
                  </li>
                  <li>
                    <Link href="/cookies" className="hover:text-white transition-colors">{t('cookies')}</Link>
                  </li>
                  <li>
                    <Link href="/imprint" className="hover:text-white transition-colors">{t('imprint')}</Link>
                  </li>
                  <li>
                    <Link href="/accessibility" className="hover:text-white transition-colors">{t('accessibility')}</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4 mt-10 sm:mt-12 pt-8 border-t border-white/10">
            <Typography variant="mutedText" className="text-white/55">
              {t('copyright')}
            </Typography>

            <div className="flex items-center gap-3">
              <a
                href="https://x.com/renuirapp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-white/60 hover:text-white hover:bg-white/8 transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>

              <a
                href="https://linkedin.com/company/renuir"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-white/60 hover:text-white hover:bg-white/8 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>

              <a
                href="https://youtube.com/@renuir"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-white/60 hover:text-white hover:bg-white/8 transition-colors"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>
        </AnimateIn>
      </div>
    </footer>
  );
};

export default Footer;
