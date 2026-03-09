import { Typography } from "../ui/typography";
import AnimateIn from "@/components/ui/AnimateIn";
import { TrustFeature } from "./TrustFeature";

export function TrustFeatures() {
  const features = [
    {
      title: "Verified venues only",
      description: "Items are logged by trusted businesses and institutions.",
      image: "/images/icons/house.svg",
    },
    {
      title: "Ownership checks",
      description: "Claims require proof to prevent misuse.",
      image: "/images/icons/card.svg",
    },
    {
      title: "No public personal data",
      description: "Your details are shared only when necessary.",
      image: "/images/icons/database.svg",
    },
    {
      title: "Clear audit trail",
      description: "Every action is logged for accountability.",
      image: "/images/icons/signpost.svg",
    },
  ];

  return (
    <section className="py-36 bg-[#3F7F8FC]">
      <div className="app-container">
        <div className="flex flex-col md:flex-row gap-4 items-start justify-between">
          <AnimateIn>
            <div className="max-w-lg mx-auto items-start">
              <Typography variant="h1" className="mb-4">
                Built with trust at the core
              </Typography>
              <Typography variant="lead">
                Renuir replaces the chaos of lost-and-found with a verifiable,
                secure system.
              </Typography>
            </div>
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <AnimateIn key={feature.title} delay={index * 0.04}>
                <TrustFeature {...feature} />
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
