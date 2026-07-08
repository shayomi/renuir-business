import { DeveloperHero } from "@/components/developer/DeveloperHero";
import { DeveloperConnect } from "@/components/developer/DeveloperConnect";
import { DeveloperStory } from "@/components/developer/DeveloperStory";
import ReadyToBuildCTA from "@/components/developer/ReadytoBuild";

const SECTIONS = [
  { Component: DeveloperHero, className: "" },
  { Component: DeveloperConnect, className: "" },
  { Component: DeveloperStory, className: "" },
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
