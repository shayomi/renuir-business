// components/about/UsedAcrossSectors.tsx
import { Typography } from "@/components/ui/typography";
import AnimateIn from "@/components/ui/AnimateIn";

import { SectorCard } from "./SectorCard";
import { sectors } from "../data/sectorData";

export function Sectors() {
  return (
    <section className="py-8 sm:py-36">
      <div className="app-container">
        <AnimateIn>
          <Typography
            variant="h1"
            className="mb-16 text-center font-medium tracking-tightest"
          >
            Used across sectors.
          </Typography>
        </AnimateIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {sectors.map((sector, index) => (
            <AnimateIn key={sector.title} delay={index * 0.04}>
              <SectorCard {...sector} />
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
