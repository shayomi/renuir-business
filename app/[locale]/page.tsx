import DeveloperPlatform from "@/components/home/DeveloperPlatform";

import ForIndividual from "@/components/home/ForIndividual";
import { HomeHero } from "@/components/home/HomeHero";
import { HowItWorks } from "@/components/home/HowItWorks";
import PrivateBeta from "@/components/home/PrivateBeta";
import RenuirChange from "@/components/home/RenuirChange";

const SECTIONS = [
  { Component: HomeHero, className: "" },
  { Component: RenuirChange, className: "" },
  { Component: HowItWorks, className: "" },
  { Component: ForIndividual, className: "" },
  { Component: PrivateBeta, className: "" },
  { Component: DeveloperPlatform, className: "" },
];

export default function Home() {
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
