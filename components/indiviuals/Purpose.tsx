/* eslint-disable @next/next/no-img-element */
import { Typography } from "@/components/ui/typography";
import AnimateIn from "@/components/ui/AnimateIn";

const items = [
  {
    id: "1",
    title: "Report lost items in minutes",
    description: "Add photos and details once. Renuir does the rest.",
    image: "/images/solution/mobile1.png",
  },
  {
    id: "2",
    title: "Automatic matching",
    description:
      "Lost and found items are continuously compared for relevance.",
    image: "/images/solution/mobile2.png",
  },
  {
    id: "3",
    title: "Chat with the venue",
    description: "Once approved, message directly to arrange next steps.",
    image: "/images/solution/mobile3.png",
  },
  {
    id: "4",
    title: "Flexible return options",
    description: "Collect in person or receive delivery where supported.",
    image: "/images/solution/mobile4.png",
  },
];

export default function Purpose() {
  return (
    <section className="w-full rounded-b-[40px] b py-20">
      <div className="app-container">
        <AnimateIn>
          <div className="mb-16 flex justify-center text-center">
            <Typography
              variant="h1"
              className="max-w-180 text-[44px] font-medium leading-[1.1] text-[#1F2228]"
            >
              Designed to solve real-life problems
            </Typography>
          </div>
        </AnimateIn>

        <div className="grid gap-8 md:grid-cols-2">
          {items.map((item, index) => (
            <AnimateIn key={item.id} delay={index * 0.05}>
              <div className="flex min-h-105 items-stretch justify-between gap-10 overflow-hidden rounded-[28px] bg-[#E9EAED] px-6 pt-6 md:px-8 md:pt-6">
                {/* Left side */}
                <div className="flex max-w-65 flex-1 flex-col justify-between pb-8">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1F2228] text-sm font-semibold text-white">
                    {item.id}
                  </div>

                  <div>
                    <Typography
                      variant="h3"
                      className="text-[28px] font-semibold leading-[1.05] tracking-[-0.03em] text-[#1F2228]"
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      variant="p"
                      className="mt-4 text-[16px] leading-[1.2] text-[#6B7280]"
                    >
                      {item.description}
                    </Typography>
                  </div>
                </div>

                {/* Right side image */}
                <div className="flex shrink-0 items-end">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-90 w-auto object-cover md:h-97.5 lg:h-102.5"
                  />
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
