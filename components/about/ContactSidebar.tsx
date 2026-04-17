"use client";

import { useTranslations } from "next-intl";
import { Mail, Phone, MapPin, Twitter, Globe, Github } from "lucide-react";
import { Typography } from "@/components/ui/typography";

export function ContactSidebar() {
  const t = useTranslations('about.contact.sidebar');

  const socialLinks = [
    { Icon: Twitter, href: "https://x.com/renuirapp", label: "X" },
    { Icon: Globe, href: "https://renuir.com", label: "Website" },
    { Icon: Github, href: "https://github.com/renuir", label: "GitHub" },
  ];

  return (
    <div className="relative bg-gradient-to-b from-slate-900 to-slate-950 p-8 sm:p-10 text-white rounded-2xl lg:rounded-none lg:rounded-l-3xl">
      <Typography
        variant="h5"
        className="uppercase tracking-wider text-white/60 text-xs"
      >
        {t('title')}
      </Typography>

      <div className="mt-8 space-y-6">
        <div className="flex gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/15">
            <Mail className="h-4.5 w-4.5 text-primary-500" />
          </div>
          <div>
            <Typography variant="smallText" className="text-white/60 font-medium">
              {t('emailLabel')}
            </Typography>
            <p className="mt-1 text-sm text-white/80">
              {t('email1')}
              <br />
              {t('email2')}
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/15">
            <Phone className="h-4.5 w-4.5 text-primary-500" />
          </div>
          <div>
            <Typography variant="smallText" className="text-white/60 font-medium">
              {t('phoneLabel')}
            </Typography>
            <p className="mt-1 text-sm text-white/80">
              {t('phone')}
              <br />
              <span className="text-white/60">{t('phoneHours')}</span>
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-5 flex items-center gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/15">
            <MapPin className="h-4.5 w-4.5 text-primary-500" />
          </div>
          <Typography variant="smallText" className="text-white/70">
            {t('location')}
          </Typography>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-white/10">
        <Typography variant="smallText" className="text-white/60 font-medium">
          {t('followUs')}
        </Typography>
        <div className="mt-3 flex gap-2">
          {socialLinks.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/8 text-white/60 hover:bg-white/15 hover:text-white transition-colors"
            >
              <Icon className="h-4.5 w-4.5" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
