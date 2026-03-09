import * as React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Typography } from "@/components/ui/typography";
import AnimateIn from "@/components/ui/AnimateIn";

export default function ReadyToBuildCTA() {
  return (
    <section className="w-full bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-36">
        <AnimateIn className="flex flex-col items-center text-center">
          <Badge
            variant="secondary"
            className="rounded-full bg-primary-100 text-primary-700 px-3 py-1 text-xs font-medium"
          >
            Testimonials
          </Badge>

          <Typography
            variant="h1"
            className="mt-6 text-[44px] leading-[1.05] tracking-tight sm:text-6xl"
          >
            Ready to build?
          </Typography>

          <Typography
            variant="div"
            className="mt-5 max-w-2xl text-balance text-lg leading-7 text-muted-foreground sm:text-xl"
          >
            Headless integration for item reporting, matching logic, and
            <br className="hidden sm:block" />
            claim verification.
          </Typography>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Button className="h-12 rounded-full bg-[#2E62FF] px-7 text-sm font-medium text-white shadow-md hover:bg-[#2E62FF]/90">
              Get API Keys
            </Button>

            <Button
              variant="secondary"
              className="h-12 rounded-full border border-border bg-muted/40 px-7 text-sm font-medium text-foreground shadow-sm hover:bg-muted/60"
            >
              Read Documentation
            </Button>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
