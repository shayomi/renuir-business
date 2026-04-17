import { AboutHero } from "@/components/about/AboutHero";
import { ContactSection } from "@/components/about/ContactSection";
import { Sectors } from "@/components/about/Sectors";
import { Team } from "@/components/about/Team";
import { TrustFeatures } from "@/components/about/TrustFeatures";

const SECTIONS = [
  { Component: AboutHero, className: "" },
  { Component: Team, className: "" },
  { Component: TrustFeatures, className: "" },
  { Component: ContactSection, className: "" },
  { Component: Sectors, className: "" },
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
