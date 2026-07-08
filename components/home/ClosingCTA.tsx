import { Typography } from "@/components/ui/typography";
import AnimateIn from "@/components/ui/AnimateIn";
import { LeadForm } from "@/components/shared/LeadForm";

export function ClosingCTA() {
  return (
    <section className="bg-primary-50/60 dark:bg-primary/5">
      <div className="app-container py-16 sm:py-24 lg:py-32">
        <AnimateIn className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Private beta
          </span>

          <Typography variant="h2" className="mt-5 text-foreground sm:mt-6">
            Become an early Renuir partner
          </Typography>

          <Typography variant="lead" className="mt-3 max-w-xl text-muted-foreground sm:mt-4">
            We are onboarding a small group of venues and teams. Leave your work
            email and we will reach out to set up a walkthrough.
          </Typography>

          <div className="mt-8 flex justify-center sm:mt-10">
            <LeadForm
              source="waitlist"
              cta="Request access"
              placeholder="Enter your work email"
              variant="light"
              className="mx-auto"
            />
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
