import { Sectors } from "@/components/about/Sectors";
import { DeveloperHero } from "@/components/developer/DeveloperHero";
import DeveloperPlatformSection from "@/components/developer/Documentation";
import ReadyToBuildCTA from "@/components/developer/ReadytoBuild";

const SECTIONS = [
  { Component: DeveloperHero, className: "" },
  { Component: DeveloperPlatformSection, className: "" },
  { Component: ReadyToBuildCTA, className: "" },
  { Component: Sectors, className: "mt-12" },
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
