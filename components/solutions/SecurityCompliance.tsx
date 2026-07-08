import { Typography } from "@/components/ui/typography";
import AnimateIn from "@/components/ui/AnimateIn";
import { Link2, ShieldCheck, Trash2, Lock } from "lucide-react";

const ITEMS = [
  {
    icon: Link2,
    title: "Chain of custody",
    desc: "Every scan, handover, and claim is time-stamped and attributed to a staff member. Export a complete history for any item on request.",
  },
  {
    icon: ShieldCheck,
    title: "GDPR by design",
    desc: "Data is stored in the EU. Personal details stay private until a match is verified, and access is scoped to the venues that need it.",
  },
  {
    icon: Trash2,
    title: "Retention and disposal",
    desc: "Set a retention period per item type. Renuir runs the disposal or donation workflow automatically when it expires, with a logged record.",
  },
  {
    icon: Lock,
    title: "Verified claims only",
    desc: "Ownership questions and evidence checks run before release, so items only go to the person who can prove the item is theirs.",
  },
];

export function SecurityCompliance() {
  return (
    <section className="bg-card py-20 sm:py-28">
      <div className="app-container">
        <div className="mx-auto max-w-2xl text-center">
          <AnimateIn>
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              Security and compliance
            </span>
            <Typography
              variant="h2"
              className="mt-6 font-medium text-foreground"
            >
              Built for airports, transit, and regulated venues.
            </Typography>
            <Typography variant="lead" className="mt-5 text-muted-foreground">
              The teams that hold other people&rsquo;s property need to prove
              how it was handled. Renuir keeps that record for you.
            </Typography>
          </AnimateIn>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
          {ITEMS.map(({ icon: Icon, title, desc }, index) => (
            <AnimateIn key={title} delay={0.05 + index * 0.05}>
              <div className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-background p-6 shadow-soft">
                <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="size-5" strokeWidth={2} />
                </span>
                <div>
                  <Typography
                    variant="h5"
                    as="h3"
                    className="text-base font-semibold text-foreground"
                  >
                    {title}
                  </Typography>
                  <Typography
                    variant="mutedText"
                    className="mt-2 leading-relaxed"
                  >
                    {desc}
                  </Typography>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
