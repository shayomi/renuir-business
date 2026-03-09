import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import AnimateIn from "@/components/ui/AnimateIn";
import { team } from "../data/team";
import { TeamCard } from "./TeamCard";

export function Team() {
  const featured = team.filter((m) => m.featured);
  const rest = team.filter((m) => !m.featured);

  return (
    <section className=" bg-[#020617] py-24 md:py-48">
      <div className="app-container ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <AnimateIn>
            <div className="max-w-md">
              <Typography variant="h2" className="tracking-tightest text-white">
                Meet Our Team
              </Typography>

              <Typography variant="lead" className="mt-4 text-white">
                At RENUIR, we’re a small but mighty team driven by a shared
                passion to transform the lost and found experience.
              </Typography>

              <Button
                size="lg"
                variant="secondary"
                className="mt-8 rounded-full px-6"
              >
                Get in touch
              </Button>
            </div>
          </AnimateIn>

          <div className="space-y-8 mt-12">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {featured.map((member, index) => (
                <AnimateIn key={member.name} delay={index * 0.04}>
                  <TeamCard {...member} />
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-24">
          {rest.map((member, index) => (
            <AnimateIn key={member.name} delay={index * 0.03}>
              <TeamCard {...member} />
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
