/* eslint-disable @next/next/no-img-element */
import { Typography } from "@/components/ui/typography";
import AnimateIn from "@/components/ui/AnimateIn";

import { Badge } from "../ui/badge";

export function HowItWorks() {
  return (
    <section className="relative  py-28">
      <div className="app-container text-center">
        <AnimateIn>
          <div className="mb-6 flex justify-center">
            <Badge
              variant="secondary"
              className="rounded-full px-4 py-1 text-primary"
            >
              Process
            </Badge>
          </div>

          <Typography variant="h2" className="text-gray-800">
            How Renuir works
          </Typography>

          <Typography
            variant="mutedText"
            className="mx-auto mt-4 max-w-lg text-gray-800"
          >
            One system for lost items across people and places. It works quietly
            in the background.
          </Typography>
        </AnimateIn>

        <div className="relative mt-20 grid grid-cols-1 gap-16 md:grid-cols-3">
          <div className="absolute left-1/2 top-6 hidden h-px w-[70%] -translate-x-1/2 bg-gray-200 md:block" />

          <AnimateIn delay={0.04}>
            <Step
              iconSrc="/images/icons/fileicon.svg"
              title="Items are posted"
              description="Lost or found items are logged by individuals or by venues using AI intake."
            />
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <Step
              iconSrc="/images/icons/checkicon.svg"
              title="Responsible matching"
              description="Our engine matches details, location, and time. Ownership is verified without assumptions."
            />
          </AnimateIn>

          <AnimateIn delay={0.16}>
            <Step
              iconSrc="/images/icons/refreshicon.svg"
              title="Safe return"
              description="People connect through guided chat to arrange a secure delivery."
            />
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

function Step({
  iconSrc,
  title,
  description,
}: {
  iconSrc: string;
  title: string;
  description: string;
}) {
  return (
    <div className="relative z-10 text-center">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#F0F2FF]">
        <img src={iconSrc} alt={title} width={20} height={20} />
      </div>

      <Typography variant="h5" className="mt-6 text-black">
        {title}
      </Typography>

      <Typography variant="mutedText" className="mt-3 text-gray-800">
        {description}
      </Typography>
    </div>
  );
}
