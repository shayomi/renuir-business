import Image from "next/image";
import { ScanLine, Truck, Lock } from "lucide-react";
import { Typography } from "@/components/ui/typography";
import AnimateIn from "@/components/ui/AnimateIn";
import { cn } from "@/lib/utils";

function IconBox({
  icon: Icon,
  className,
}: {
  icon: React.ElementType;
  className: string;
}) {
  return (
    <div
      className={cn(
        "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl",
        className,
      )}
    >
      <Icon className="h-5 w-5" />
    </div>
  );
}

export function ManageChaos() {
  return (
    <section className="bg-white py-24">
      <div className="app-container">
        <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-16 items-center">
          {/* LEFT COLUMN */}
          <div>
            <AnimateIn>
              <Typography
                variant="h2"
                className="text-4xl lg:text-5xl font-medium text-foreground max-w-md mb-10 leading-tight"
              >
                Everything you need to manage chaos.
              </Typography>
            </AnimateIn>

            <div className="flex flex-col gap-4">
              {/* Card 1 — Computer Vision Intake (full width, two-col internal) */}
              <AnimateIn delay={0.04}>
                <div className="grid grid-cols-2 gap-2 items-center rounded-2xl border border-sky-100 shadow-sm px-6 py-6 bg-linear-to-r from-white via-sky-100/160 to-sky-100/80">
                  <div className="flex flex-col gap-4">
                    <IconBox
                      icon={ScanLine}
                      className="bg-blue-50 text-blue-500"
                    />
                    <div>
                      <Typography
                        variant="h5"
                        className="text-base font-semibold text-foreground"
                      >
                        Computer Vision Intake
                      </Typography>
                      <Typography
                        variant="mutedText"
                        className="mt-2 text-sm leading-relaxed"
                      >
                        Staff can log items in seconds just by taking a photo. Our
                        AI automatically identifies category, brand, color, and
                        condition.
                      </Typography>
                    </div>
                  </div>

                  {/* Mini card skeleton image placeholder */}
                  <div className="relative h-36 w-full rounded-xl overflow-hidden ">
                    <Image
                      src="/images/solution/chaosimg2.png"
                      alt="Computer vision card preview"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </AnimateIn>

              {/* Bottom row — two cards */}
              <div className="grid grid-cols-2 gap-4">
                {/* Card 2 — Automated Logistics */}
                <AnimateIn delay={0.1}>
                  <div className="flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white shadow-sm p-6">
                    <IconBox
                      icon={Truck}
                      className="bg-orange-50 text-orange-500"
                    />
                    <div>
                      <Typography
                        variant="h5"
                        className="text-base font-semibold text-foreground"
                      >
                        Automated Logistics
                      </Typography>
                      <Typography
                        variant="mutedText"
                        className="mt-2 text-sm leading-relaxed"
                      >
                        One-click shipping label generation. We handle the courier
                        integration.
                      </Typography>
                    </div>
                  </div>
                </AnimateIn>

                {/* Card 3 — Audit & Compliance */}
                <AnimateIn delay={0.14}>
                  <div className="flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white shadow-sm p-6">
                    <IconBox icon={Lock} className="bg-green-50 text-green-500" />
                    <div>
                      <Typography
                        variant="h5"
                        className="text-base font-semibold text-foreground"
                      >
                        Audit &amp; Compliance
                      </Typography>
                      <Typography
                        variant="mutedText"
                        className="mt-2 text-sm leading-relaxed"
                      >
                        Full chain of custody logs. Automated disposal workflows
                        after retention period.
                      </Typography>
                    </div>
                  </div>
                </AnimateIn>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN — phone + QR combined image */}
          <AnimateIn delay={0.1}>
            <div className="relative h-[560px] w-full">
              <Image
                src="/images/solution/chaosimg1.png"
                alt="Renuir mobile app"
                fill
                className="object-contain"
              />
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
