"use client";

import { Link } from "@/i18n/navigation";
import { Typography } from "@/components/ui/typography";
import { useTranslations } from "next-intl";

interface BetaBannerProps {
  message: string;
  linkText: string;
  linkHref?: string;
}

export function BetaBanner({ message, linkText, linkHref = "/#waitlist" }: BetaBannerProps) {
  const tc = useTranslations("common");
  return (
    <div className="relative w-full bg-primary/95 backdrop-blur-sm text-white">
      <div className="app-container py-2.5 sm:py-3">
        <div className="flex flex-col sm:flex-row gap-1.5 sm:gap-3 items-center justify-center">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-5 items-center rounded-full bg-white/20 px-2 text-[10px] font-semibold uppercase tracking-wider">
              {tc("beta")}
            </span>
            <Typography variant="smallText" className="text-white/90 text-center">
              {message}
            </Typography>
          </div>
          <Link
            href={linkHref}
            className="text-sm font-medium text-white underline underline-offset-2 decoration-white/40 hover:decoration-white transition-colors shrink-0"
          >
            {linkText}
          </Link>
        </div>
      </div>
    </div>
  );
}
