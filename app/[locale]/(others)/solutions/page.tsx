import Image from "@/components/solutions/Image";
import { SolutionHero } from "@/components/solutions/SolutionHero";
import { ManageChaos } from "@/components/solutions/ManageChaos";
import TestimonialsSection from "@/components/solutions/Testimonial";
import { Sectors } from "@/components/about/Sectors";

const SECTIONS = [
  { Component: SolutionHero, className: "" },
  { Component: Image, className: "-mt-20 sm:-mt-24 lg:-mt-32" },
  { Component: ManageChaos, className: "" },
  { Component: TestimonialsSection, className: "" },
  { Component: Sectors, className: "" },
];

export default function SolutionsPage() {
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
