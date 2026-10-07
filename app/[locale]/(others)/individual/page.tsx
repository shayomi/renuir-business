import { pageMetadata } from "@/lib/page-metadata";
import { IndividualHero } from "@/components/indiviuals/individualHero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { RecoveryFAQ } from "@/components/home/RecoveryFAQ";
import TrustCoreSection from "@/components/indiviuals/TrustCoreSection";

const SECTIONS = [
  { Component: IndividualHero, className: "" },
  { Component: HowItWorks, className: "" },
  { Component: RecoveryFAQ, className: "" },
  { Component: TrustCoreSection, className: "" },
];

export default function IndividualPage() {
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
  return pageMetadata(locale, "/individual");
}
