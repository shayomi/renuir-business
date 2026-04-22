import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";
import Footer from "@/components/shared/footer/Footer";
import { CookieConsent } from "@/components/shared/CookieConsent";
import { ThemeProvider } from "@/components/shared/ThemeProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://renuir.com"),
  title: {
    default: "Renuir",
    template: "%s | Renuir",
  },
  description:
    "Renuir is the modern lost & found platform that actually works. Report once, and we search everywhere in real time to help you recover lost items with speed, dignity, and privacy.",
  keywords: [
    "Renuir",
    "Lost and Found",
    "Lost Items",
    "Find My Item",
    "Airports Lost and Found",
    "Hotels Lost and Found",
    "AI Lost and Found",
    "Recovery Platform",
    "Privacy First",
    "Item Recovery",
  ],
  authors: [{ name: "Sayo Adegoroye" }],
  openGraph: {
    title: {
      default: "Renuir",
      template: "%s | Renuir",
    },
    description:
      "Lost it? Renuir it. One report is all it takes. We search everywhere so you don't have to.",
    type: "website",
    siteName: "Renuir",
  },
  twitter: {
    title: {
      default: "Renuir",
      template: "%s | Renuir",
    },
    description:
      "The modern lost & found platform that actually works. Report once. Get notified. Get it back.",
    card: "summary_large_image",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

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
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body className="antialiased bg-background">
        <ThemeProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-white focus:outline-none"
          >
            Skip to main content
          </a>
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
            <Footer />
            <CookieConsent />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
