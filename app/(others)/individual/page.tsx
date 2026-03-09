import { IndividualHero } from "@/components/indiviuals/individualHero";
import Overview from "@/components/indiviuals/Overview";
import Purpose from "@/components/indiviuals/Purpose";
import TrustCoreSection from "@/components/indiviuals/TrustCoreSection";

const SECTIONS = [
  { Component: IndividualHero, className: "" },
  { Component: Overview, className: "" },
  { Component: Purpose, className: "" },
  { Component: TrustCoreSection, className: "mt-12" },
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      {SECTIONS.map(({ Component, className }, index) => (
        <section key={index} className={className}>
          <Component />
        </section>
      ))}
    </main>
  );
}
