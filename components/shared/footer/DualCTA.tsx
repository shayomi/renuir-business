import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";

const DualCTA = () => {
  return (
    <section className="bg-[#020617] py-24">
      <div className="app-container">
        <div className="relative overflow-hidden rounded-3xl">
          <Image
            src="/images/home/glossybg.svg"
            alt="Glossy background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/10 backdrop-blur-md" />

          <div className="relative grid divide-y divide-white/20 lg:grid-cols-2 lg:divide-x lg:divide-y-0">
            <div className="flex flex-col gap-3 items-center px-8 py-16 text-center">
              <Typography variant="h2" className="text-white">
                For Business
              </Typography>

              <Typography variant="lead" className=" text-white/80">
                Modernize your lost-and-found desk.
              </Typography>

              <Button
                size="lg"
                variant="secondary"
                className="mt-4 rounded-full px-8"
              >
                Request a demo
              </Button>
            </div>

            <div className="flex flex-col gap-3 items-center px-8 py-16 text-center">
              <Typography variant="h2" className="text-white">
                For individuals
              </Typography>

              <Typography variant="lead" className=" text-white/80">
                Download the app to get started.
              </Typography>

              <Button
                size="lg"
                variant="secondary"
                className="mt-4 rounded-full px-8"
              >
                Download the app
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DualCTA;
