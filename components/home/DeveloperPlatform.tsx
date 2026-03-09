import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import AnimateIn from "@/components/ui/AnimateIn";
import { Badge } from "../ui/badge";

const DeveloperPlatform = () => {
  return (
    <section className="bg-white">
      <div className="app-container grid items-center gap-16 py-28 lg:grid-cols-2">
        <AnimateIn>
          <div className="max-w-xl">
          <Badge variant="default"> &gt;_ Developer platform</Badge>

          <Typography variant="h1" className="mt-6">
            Build on our trusted infrastructure.
          </Typography>

          <Typography variant="p" className="mt-6 text-muted-foreground">
            Renuir provides powerful API solutions and full white-label
            capabilities for enterprise businesses that need total control.
          </Typography>

          <div className="mt-10 space-y-4">
            <div className="flex gap-4 rounded-2xl bg-muted p-5">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gray-700">
                <Image
                  src="/images/icons/api.svg"
                  alt="icon"
                  width={18}
                  height={18}
                />
              </div>

              <div>
                <Typography variant="h6">Renuir API</Typography>
                <Typography variant="mutedText" className="mt-1">
                  Headless integration for item reporting, matching logic, and
                  claim verification.
                </Typography>
              </div>
            </div>

            <div className="flex gap-4 rounded-2xl bg-muted p-5">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gray-700">
                <Image
                  src="/images/icons/paint.svg"
                  alt="icon"
                  width={18}
                  height={18}
                />
              </div>

              <div>
                <Typography variant="h6">Whitelabel Solution</Typography>
                <Typography variant="mutedText" className="mt-1">
                  Deploy a fully branded instance on your custom domain in
                  minutes.
                </Typography>
              </div>
            </div>
          </div>

          <Button
            size="lg"
            variant="outline"
            className="mt-10 rounded-full px-8"
          >
            Explore Renuir API
          </Button>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <div className="relative">
            <Image
              src="/images/home/developer.png"
              alt="Renuir Developer Platform"
              width={720}
              height={520}
              priority
              className="rounded-2xl"
            />
          </div>
        </AnimateIn>
      </div>
    </section>
  );
};

export default DeveloperPlatform;
