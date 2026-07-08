import AnimateIn from "@/components/ui/AnimateIn";
import {
  ArrowRight,
  ArrowDown,
  Boxes,
  ScanLine,
  Sparkles,
  BadgeCheck,
  PackageCheck,
  Webhook,
} from "lucide-react";

const PIPELINE = [
  { Icon: ScanLine, label: "Intake", meta: "categorize, tag, index" },
  { Icon: Sparkles, label: "Match", meta: "vision + similarity" },
  { Icon: BadgeCheck, label: "Verify", meta: "secure claim" },
  { Icon: PackageCheck, label: "Return", meta: "handover + log" },
];

function NodeCard({
  eyebrow,
  Icon,
  title,
  code,
  desc,
  accent = false,
}: {
  eyebrow: string;
  Icon: typeof Boxes;
  title: string;
  code: string;
  desc: string;
  accent?: boolean;
}) {
  return (
    <div
      className={
        "flex w-full flex-col rounded-2xl border bg-white/[0.02] p-6 " +
        (accent ? "border-primary/30" : "border-white/[0.08]")
      }
    >
      <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/40">
        {eyebrow}
      </span>
      <div className="mt-4 flex items-center gap-3">
        <span
          className={
            "flex size-10 items-center justify-center rounded-xl " +
            (accent ? "bg-primary text-white" : "bg-primary/12 text-primary-400 ring-1 ring-primary/15")
          }
        >
          <Icon className="size-5" strokeWidth={1.75} />
        </span>
        <h3 className="text-[17px] font-medium text-white">{title}</h3>
      </div>
      <code className="mt-4 block overflow-x-auto rounded-lg border border-white/[0.08] bg-black/30 px-3 py-2 font-mono text-[12.5px] text-white/60">
        {code}
      </code>
      <p className="mt-3 text-[14px] leading-relaxed text-white/55">{desc}</p>
    </div>
  );
}

function Connector() {
  return (
    <div
      aria-hidden
      className="flex shrink-0 items-center justify-center text-primary-400"
    >
      <ArrowRight className="hidden size-6 lg:block" strokeWidth={2} />
      <ArrowDown className="size-6 lg:hidden" strokeWidth={2} />
    </div>
  );
}

export function DeveloperConnect() {
  return (
    <section className="bg-slate-950 py-20 text-white lg:py-28">
      <div className="app-container">
        <AnimateIn className="max-w-2xl">
          <span className="text-[12px] font-medium uppercase tracking-[0.16em] text-primary-400">
            How it connects
          </span>
          <h2 className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl">
            One API between your systems and every item.
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-white/60">
            Push items from anywhere you already run. Renuir handles matching and
            verification, then calls your endpoint back when there is something to
            act on.
          </p>
        </AnimateIn>

        {/* Orchestration diagram */}
        <AnimateIn delay={0.1} className="mt-14">
          <div className="flex flex-col items-stretch gap-4 lg:flex-row lg:items-center">
            <NodeCard
              eyebrow="Your systems"
              Icon={Boxes}
              title="Send items"
              code="POST /v1/items"
              desc="Your app, PMS, kiosk, or website reports found items in one call."
            />

            <Connector />

            {/* Center: the pipeline */}
            <div className="w-full rounded-2xl border border-primary/30 bg-primary/[0.05] p-6 lg:min-w-[300px]">
              <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-primary-400">
                Renuir
              </span>
              <div className="mt-4 flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-white">
                  <Sparkles className="size-5" strokeWidth={1.75} />
                </span>
                <h3 className="font-mono text-[15px] font-medium text-white">
                  api.renuir.com
                </h3>
              </div>

              <div className="mt-5 space-y-0">
                {PIPELINE.map((p, i) => (
                  <div key={p.label} className="relative flex items-center gap-3 py-2.5">
                    {i < PIPELINE.length - 1 && (
                      <span
                        aria-hidden
                        className="absolute bottom-0 left-[15px] top-[34px] w-px bg-primary/20"
                      />
                    )}
                    <span className="relative z-10 flex size-8 items-center justify-center rounded-lg bg-white/[0.06] text-primary-400">
                      <p.Icon className="size-4" strokeWidth={1.75} />
                    </span>
                    <span className="flex flex-1 items-baseline justify-between gap-3">
                      <span className="text-[15px] font-medium text-white">{p.label}</span>
                      <span className="font-mono text-[11.5px] text-white/40">{p.meta}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <Connector />

            <NodeCard
              eyebrow="Your endpoint"
              Icon={Webhook}
              title="Get called back"
              code={'{ "event": "match.found" }'}
              desc="A signed webhook hits your server the moment an item is matched or claimed."
            />
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
