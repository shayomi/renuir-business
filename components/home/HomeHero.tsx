import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import AnimateIn from "@/components/ui/AnimateIn";
import Nav from "./HomeNav";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="/images/home/renuir-bg.png"
        alt="Hero background"
        fill
        priority
        className="object-cover"
      />
      <div className="relative mt-12">
        {" "}
        <Nav />
      </div>

      <div className="relative app-container py-40 flex flex-col text-center">
        <AnimateIn>
          <Typography
            variant="extraLargeText"
            className="mt-8  text-white/80 font-normal"
          >
            Lost &amp; Found,
          </Typography>
        </AnimateIn>

        <AnimateIn delay={0.06}>
          <Typography
            variant="extraLargeText"
            className="tracking-tightest text-white"
          >
            Reimagined.
          </Typography>
        </AnimateIn>

        <AnimateIn delay={0.12}>
          <Typography
            variant="lead"
            className="mx-auto mt-6 max-w-lg text-white/80"
          >
            A secure platform connecting venues and people. Recover items with
            dignity, speed, and transparency.
          </Typography>
        </AnimateIn>

        <AnimateIn delay={0.16}>
          <div className="mt-18 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" variant="secondary" className="rounded-full px-8">
              Business Solutions
            </Button>

            <Button
              size="lg"
              className="rounded-full bg-primary px-8 text-primary-foreground hover:bg-primary/90"
            >
              Download the app
            </Button>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
