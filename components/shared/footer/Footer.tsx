"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter } from "lucide-react";
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
                    className="mt-3 sm:mt-4 rounded-full"
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
                    className="mt-3 sm:mt-4 rounded-full"
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
            <div className="flex flex-col items-center gap-1 sm:flex-row sm:gap-4">
              <Typography variant="mutedText" className="text-white/55">
                {t('copyright')}
              </Typography>
              <button
                type="button"
                onClick={() =>
                  window.dispatchEvent(new Event('renuir-open-consent'))
                }
                className="text-sm text-white/55 underline-offset-2 transition-colors hover:text-white hover:underline"
              >
                {t('cookieSettings')}
              </button>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://x.com/renuirug"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="flex h-10 w-10 items-center justify-center rounded-lg text-white/60 hover:text-white hover:bg-white/8 transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>

              <a
                href="https://linkedin.com/company/renuir"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-lg text-white/60 hover:text-white hover:bg-white/8 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>

              <a
                href="https://www.tiktok.com/@renuir_app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="flex h-10 w-10 items-center justify-center rounded-lg text-white/60 hover:text-white hover:bg-white/8 transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                  className="h-4 w-4"
                >
                  <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
            </div>
          </div>
        </AnimateIn>
      </div>
    </footer>
  );
};

export default Footer;
