"use client";

import { useEffect } from "react";
import { useLocale } from "next-intl";
import type { Locale } from "@/i18n/config";
import { getKlaroConfig } from "@/lib/klaro-config";
import "klaro/dist/klaro.css";

export function CookieConsent() {
  const locale = useLocale() as Locale;

  useEffect(() => {
    const config = getKlaroConfig(locale);

    // Assign config to window for Klaro to pick up
    (window as unknown as Record<string, unknown>).klaroConfig = config;

    // Dynamic import of Klaro
    import("klaro").then((klaro) => {
      klaro.setup(config);
    });
  }, [locale]);

  return <div id="klaro" />;
}
