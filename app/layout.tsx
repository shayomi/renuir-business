import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/shared/footer/Footer";
import PageTransition from "@/components/shared/animation/PageTransition";

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
      "Lost it? Renuir it. One report is all it takes. We search everywhere so you don’t have to.",
    type: "website",
    locale: "en_US",
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
    languages: {
      "en-US": "/en-US",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-transparent">
        {/* <Nav /> */}
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
