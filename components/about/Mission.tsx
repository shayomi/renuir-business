import { Typography } from "@/components/ui/typography";
import AnimateIn from "@/components/ui/AnimateIn";

const STATS = [
  { value: "1", label: "Platform for every lost item, from log to return" },
  { value: "24h", label: "Target response on every partner demo request" },
  { value: "GDPR", label: "Built to EU data-protection standards from day one" },
];

export function Mission() {
  return (
    <section className="py-16 sm:py-24 lg:py-28">
      <div className="app-container">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:items-start">
          <AnimateIn>
            <div>
              <Typography
                variant="mutedText"
                className="uppercase tracking-wider text-primary text-xs font-medium"
              >
                Why we exist
              </Typography>
              <Typography variant="h2" as="h2" className="mt-4 tracking-tight">
                Lost property is broken. We are fixing the plumbing.
              </Typography>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.08}>
            <div className="max-w-xl space-y-5 text-muted-foreground">
              <Typography variant="lead" className="text-foreground/90">
                Every day, venues collect items nobody can trace back to an
                owner, and people give up on things they could have recovered.
              </Typography>
              <p className="text-[15px] leading-relaxed">
                Renuir gives venues one place to log found items, verify who
                really owns them, and hand them back without exposing anyone&apos;s
                personal data. We are a small team building this carefully,
                starting with a handful of design partners in Berlin.
              </p>
            </div>
          </AnimateIn>
        </div>

        <AnimateIn delay={0.12}>
          <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {STATS.map((stat) => (
              <div
                key={stat.value}
                className="rounded-2xl border border-border bg-card p-6 shadow-soft"
              >
                <Typography variant="h2" as="p" className="text-primary">
                  {stat.value}
                </Typography>
                <Typography variant="mutedText" className="mt-2">
                  {stat.label}
                </Typography>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
