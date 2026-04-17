import { DeveloperHero } from "@/components/developer/DeveloperHero";
import DeveloperPlatformSection from "@/components/developer/Documentation";
import ReadyToBuildCTA from "@/components/developer/ReadytoBuild";

const SECTIONS = [
  { Component: DeveloperHero, className: "" },
  { Component: DeveloperPlatformSection, className: "" },
  { Component: ReadyToBuildCTA, className: "" },
];

export default function DeveloperPage() {
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
