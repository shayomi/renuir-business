import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import AnimateIn from "@/components/ui/AnimateIn";
import Nav from "../shared/navbar/Nav";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="/images/about/abouthero.svg"
        alt="Hero background"
        fill
        priority
        className="object-cover"
      />
      <Nav />
      <div className="relative app-container py-40 flex flex-col items-center text-center">
        <AnimateIn>
          <Typography
            variant="extraLargeText"
            className="mt-8  text-black font-normal"
          >
            We&apos;re here to help
          </Typography>
        </AnimateIn>

        <AnimateIn delay={0.08}>
          <Typography
            variant="lead"
            className="mx-auto mt-6 max-w-lg text-black/80"
          >
            Renuir exists to help people recover what they’ve lost, without
            panic, pressure, or uncertainty.
          </Typography>
        </AnimateIn>

        <AnimateIn delay={0.12}>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button
              variant="dark"
              size="lg"
              className="flex items-center gap-3 rounded-full px-6"
            >
              <Image
                src="/images/icons/googleplayicon.svg"
                alt="Google Play"
                width={20}
                height={20}
              />
              Google Play
            </Button>

            <Button
              variant="dark"
              size="lg"
              className="flex items-center gap-3 rounded-full px-6"
            >
              <Image
                src="/images/icons/appleicon.svg"
                alt="Apple Store"
                width={20}
                height={20}
              />
              Apple Store
            </Button>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
