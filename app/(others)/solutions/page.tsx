import Image from "@/components/solutions/Image";
import { SolutionHero } from "@/components/solutions/SolutionHero";
import { ManageChaos } from "@/components/solutions/ManageChaos";
import TestimonialsSection from "@/components/solutions/Testimonial";
import { Sectors } from "@/components/about/Sectors";

const SECTIONS = [
  { Component: SolutionHero, className: "" },
  { Component: Image, className: "mt-[-124]" },
  { Component: ManageChaos, className: "mt-24" },
  { Component: TestimonialsSection, className: "mt-16" },
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
