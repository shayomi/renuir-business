import * as React from "react";
import { Search, BadgeCheck, RefreshCcw, Sigma } from "lucide-react";
import { Typography } from "@/components/ui/typography";
import AnimateIn from "@/components/ui/AnimateIn";

const steps = [
  {
    title: "Report or Search",
    description:
      "Describe what you lost, or search items reported by nearby venues and locations.",
    icon: Search,
    iconWrapperClass: "bg-[#ECECF2]",
    iconClass: "text-[#111827]",
  },
  {
    title: "Smart Matching",
    description:
      "Get notified when there's a match. Renuir compares photos, locations, and descriptions.",
    icon: Sigma,
    iconWrapperClass: "bg-[#ECECF2]",
    iconClass: "text-[#3557FF]",
  },
  {
    title: "Verify Ownership",
    description:
      "Answer verification questions or upload proof so only the rightful owner can claim an item.",
    icon: BadgeCheck,
    iconWrapperClass: "bg-[#F5EEDC]",
    iconClass: "text-[#B7791F]",
  },
  {
    title: "Get it Back",
    description: "Arrange a secure pickup or choose delivery when available.",
    icon: RefreshCcw,
    iconWrapperClass: "bg-[#C9EE8A]",
    iconClass: "text-[#3F6F1F]",
  },
];

export default function Overview() {
  return (
    <section className="w-full overflow-hidden rounded-b-[36px]  lg:rounded-b-[42px]">
      <div className="mx-auto app-container  py-16  sm:py-20 lg:px-24 lg:py-32">
        <div className="grid gap-y-14 lg:grid-cols-[1.05fr_1fr] lg:gap-x-24">
          <AnimateIn>
            <div className="max-w-130">
              <Typography
                variant="h1"
                className="max-w-117.5 text-[48px] font-semibold leading-[0.98] tracking-[-0.04em] text-[#191C24] sm:text-[60px] lg:text-[52px]"
              >
                We helps you recover your item
              </Typography>

              <Typography
                variant="div"
                className="mt-8 max-w-130 text-[27px] leading-[1.15] tracking-[-0.03em] text-[#5C6270] sm:text-[30px] lg:text-[28px]"
              >
                We&apos;ve simplified the chaos of lost-and-found into four guided
                steps.
              </Typography>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-1 gap-x-14 gap-y-16 sm:grid-cols-2 lg:pt-1">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <AnimateIn key={step.title} delay={index * 0.04}>
                  <div className="max-w-68">
                    <div
                      className={`flex h-10.5 w-10.5 items-center justify-center ${step.iconWrapperClass}`}
                    >
                      <Icon
                        className={`h-6 w-6 stroke-[2.2] ${step.iconClass}`}
                      />
                    </div>

                    <Typography
                      variant="h4"
                      className="mt-4 text-[22px] font-semibold leading-[1.05] tracking-[-0.035em] text-[#1B1E27]"
                    >
                      {step.title}
                    </Typography>

                    <Typography
                      variant="div"
                      className="mt-4 text-[18px] leading-[1.08] tracking-[-0.025em] text-[#5C6270]"
                    >
                      {step.description}
                    </Typography>
                  </div>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
