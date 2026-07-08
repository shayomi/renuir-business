import SolutionImage from "@/components/solutions/Image";
import { SolutionHero } from "@/components/solutions/SolutionHero";
import { BusinessSteps } from "@/components/solutions/BusinessSteps";
import { ManageChaos } from "@/components/solutions/ManageChaos";
import { SecurityCompliance } from "@/components/solutions/SecurityCompliance";
import TestimonialsSection from "@/components/solutions/Testimonial";
import { ClosingCTA } from "@/components/solutions/ClosingCTA";

const SECTIONS = [
  { Component: SolutionHero, className: "" },
  { Component: SolutionImage, className: "-mt-12 sm:-mt-16 lg:-mt-24" },
  { Component: BusinessSteps, className: "" },
  { Component: ManageChaos, className: "" },
  { Component: SecurityCompliance, className: "" },
  { Component: TestimonialsSection, className: "" },
  { Component: ClosingCTA, className: "" },
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
