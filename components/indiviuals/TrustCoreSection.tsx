import { Store, IdCard, Database, ScrollText } from "lucide-react";
import { Typography } from "@/components/ui/typography";
import AnimateIn from "@/components/ui/AnimateIn";

const trustItems = [
  {
    title: "Verified venues only",
    description: "Items are logged by trusted businesses and institutions.",
    icon: Store,
    iconWrapperClass: "bg-[#E8E9F0]",
    iconClass: "text-[#3557FF]",
  },
  {
    title: "Ownership checks",
    description: "Claims require proof to prevent misuse.",
    icon: IdCard,
    iconWrapperClass: "bg-[#E8E9F0]",
    iconClass: "text-[#8B3A4F]",
  },
  {
    title: "No public personal data",
    description: "Your details are shared only when necessary.",
    icon: Database,
    iconWrapperClass: "bg-[#E8E9F0]",
    iconClass: "text-[#B7791F]",
  },
  {
    title: "Clear audit trail",
    description: "Every action is logged for accountability.",
    icon: ScrollText,
    iconWrapperClass: "bg-[#E8E9F0]",
    iconClass: "text-[#4F7F1F]",
  },
];

export default function TrustCoreSection() {
  return (
    <section className="w-full overflow-hidden rounded-b-[40px] bg-[#F3F3F4] py-20 lg:py-24">
      <div className="app-container">
        <div className="grid gap-y-14 lg:grid-cols-[1.05fr_1fr] lg:gap-x-24">
          <AnimateIn>
            <div className="max-w-[520px]">
              <Typography
                variant="h1"
                className="max-w-[470px] text-[48px] font-semibold leading-[0.98] tracking-[-0.04em] text-[#191C24] sm:text-[60px] lg:text-[52px]"
              >
                Built with trust at the core.
              </Typography>

              <Typography
                variant="div"
                className="mt-8 max-w-[520px] text-[27px] leading-[1.15] tracking-[-0.03em] text-[#2D313A] sm:text-[30px] lg:text-[28px]"
              >
                Renuir replaces the chaos of lost-and-found with a verifiable,
                secure system.
              </Typography>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-1 gap-x-14 gap-y-16 sm:grid-cols-2 lg:pt-1">
            {trustItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <AnimateIn key={item.title} delay={index * 0.04}>
                  <div className="max-w-[272px]">
                    <div
                      className={`flex h-[42px] w-[42px] items-center justify-center ${item.iconWrapperClass}`}
                    >
                      <Icon className={`h-5 w-5 stroke-[2] ${item.iconClass}`} />
                    </div>

                    <Typography
                      variant="h4"
                      className="mt-4 text-[22px] font-semibold leading-[1.05] tracking-[-0.035em] text-[#1B1E27]"
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      variant="div"
                      className="mt-4 text-[18px] leading-[1.08] tracking-[-0.025em] text-[#5C6270]"
                    >
                      {item.description}
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
