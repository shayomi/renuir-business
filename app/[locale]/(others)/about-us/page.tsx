import { AboutHero } from "@/components/about/AboutHero";
import { Mission } from "@/components/about/Mission";
import { ContactSection } from "@/components/about/ContactSection";
import { Sectors } from "@/components/about/Sectors";
import { Team } from "@/components/about/Team";
import { TrustFeatures } from "@/components/about/TrustFeatures";

const SECTIONS = [
  { Component: AboutHero, className: "" },
  { Component: Mission, className: "" },
  { Component: Sectors, className: "" },
  { Component: TrustFeatures, className: "" },
  { Component: Team, className: "" },
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
