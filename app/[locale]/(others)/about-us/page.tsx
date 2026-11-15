import { pageMetadata } from "@/lib/page-metadata";
import { AboutHero } from "@/components/about/AboutHero";
import { Mission } from "@/components/about/Mission";
import { ContactSection } from "@/components/about/ContactSection";

const SECTIONS = [
  { Component: AboutHero, className: "" },
  { Component: Mission, className: "" },
  { Component: ContactSection, className: "" },
];

export default function AboutPage() {
  return (
    <main id="main-content" className="overflow-hidden">
      {SECTIONS.map(({ Component, className }, index) => (
        <section key={index} className={className}>
          <Component />
        </section>
      ))}
    </main>
  );
}

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  return pageMetadata(locale, "/about-us");
}
