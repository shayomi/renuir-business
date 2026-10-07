import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { SITE_URL, shouldIndex, languageAlternates } from "@/lib/site";
import "../globals.css";
import Footer from "@/components/shared/footer/Footer";
import { CookieConsent } from "@/components/shared/CookieConsent";
import { ConsentedAnalytics } from "@/components/shared/ConsentedAnalytics";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home.hero" });
  const description = t("subtitle");

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: locale === "de" ? "Renuir: Verloren & Gefunden" : "Renuir: Lost & Found",
      template: "%s | Renuir",
    },
    description,
    authors: [{ name: "Renuir" }],
    applicationName: "Renuir",
    openGraph: {
      title: locale === "de" ? "Renuir: Verloren & Gefunden" : "Renuir: Lost & Found",
      description,
      type: "website",
      siteName: "Renuir",
      url: `${SITE_URL}/${locale}`,
      locale,
    },
    twitter: {
      title: locale === "de" ? "Renuir: Verloren & Gefunden" : "Renuir: Lost & Found",
      description,
      card: "summary_large_image",
    },
    alternates: {
      canonical: `${SITE_URL}/${locale}`,
      languages: languageAlternates(""),
    },
    robots: shouldIndex
      ? { index: true, follow: true, googleBot: { index: true, follow: true } }
      : { index: false, follow: false, googleBot: { index: false, follow: false } },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();
  const t = await getTranslations("nav");
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body className="antialiased bg-background">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-white focus:outline-none"
        >
          {t("skip")}
        </a>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
          <Footer />
          <CookieConsent />
          <ConsentedAnalytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
