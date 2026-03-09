import Image from "next/image";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import AnimateIn from "@/components/ui/AnimateIn";

const features = [
  "Local visibility when it matters",
  "Ownership checks that protect both sides",
  "Safe messaging and guided handover",
  "Optional delivery through partners",
];

const ForIndividual = () => {
  return (
    <section className="app-container grid items-center gap-16 py-24 lg:grid-cols-2">
      <AnimateIn>
        <div>
        <span className="inline-flex items-center rounded-full border px-4 py-1 text-xs font-medium text-muted-foreground">
          FOR INDIVIDUALS
        </span>

        <Typography variant="h1" className="mt-6 max-w-xl font-medium">
          For people who lost something.
        </Typography>

        <Typography variant="mutedText" className="mt-4 max-w-xl text-base">
          The Renuir app is live. Post a lost item, respond to matches, and
          recover what&apos;s yours without stress.
        </Typography>

        <ul className="mt-8 space-y-4">
          {features.map((item) => (
            <li key={item} className="flex items-center gap-3">
              <span className="flex h-5 w-5 items-center justify-center rounded-full border border-green-600 text-green-600">
                ✓
              </span>
              <Typography
                variant="smallText"
                className="text-muted-foreground font-normal"
              >
                {item}
              </Typography>
            </li>
          ))}
        </ul>

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
        </div>
      </AnimateIn>

      <AnimateIn delay={0.1}>
        <div className="relative mx-auto w-full max-w-md">
          <Image
            src="/images/home/individual.png"
            alt="Renuir mobile app"
            width={620}
            height={860}
            priority
            className="mx-auto"
          />
        </div>
      </AnimateIn>
    </section>
  );
};

export default ForIndividual;
