import AnimateIn from '@/components/ui/AnimateIn';
import {
  Boxes,
  Sparkles,
  ShieldCheck,
  Webhook,
  Braces,
  Palette,
  Package,
  KeyRound,
  Radio,
  BadgeCheck,
} from 'lucide-react';

const VALUE = [
  {
    Icon: Boxes,
    title: 'Headless by design',
    desc: 'Every capability is one API call. No Renuir UI required, so your brand stays front and center.',
  },
  {
    Icon: Sparkles,
    title: 'The matching engine, exposed',
    desc: 'The same computer vision and matching that runs Renuir, available as a single endpoint.',
  },
  {
    Icon: ShieldCheck,
    title: 'Compliance built in',
    desc: 'Chain of custody, retention rules, and GDPR handling ship with the API, not as an afterthought.',
  },
];

const STEPS = [
  {
    n: '01',
    Icon: KeyRound,
    title: 'Get your keys',
    desc: 'Create a project and generate a sandbox key. Start testing without a sales call.',
    code: 'export RENUIR_KEY=rk_test_…',
  },
  {
    n: '02',
    Icon: Boxes,
    title: 'Report items',
    desc: 'Send found or lost items with a photo. We categorize, tag, and index each one.',
    code: 'client.items.create({ photo, foundAt })',
  },
  {
    n: '03',
    Icon: Radio,
    title: 'Get matched',
    desc: 'When a lost report matches a found item, we notify your webhook in real time.',
    code: 'POST /webhook  { event: "match.found" }',
  },
  {
    n: '04',
    Icon: BadgeCheck,
    title: 'Confirm the return',
    desc: 'Verify ownership and close the loop with a one-time secure handover code.',
    code: 'client.claims.verify(claimId)',
  },
];

const CAPABILITIES = [
  {
    Icon: Braces,
    title: 'REST API',
    desc: 'Items, matches, claims, chat, and returns. Predictable resources, cursor pagination, idempotency keys.',
  },
  {
    Icon: Webhook,
    title: 'Webhooks',
    desc: 'Real-time events for matches, claim status, and handovers. Signed payloads, automatic retries.',
  },
  {
    Icon: Palette,
    title: 'White-label',
    desc: 'Run a fully branded recovery flow on your own domain, powered entirely by the API.',
  },
  {
    Icon: Package,
    title: 'SDKs',
    desc: 'Official client libraries for Node, Python, Go, and Swift arriving at launch.',
  },
];

const SECURITY = [
  'EU data residency and GDPR-compliant handling',
  'Full chain of custody on every item and claim',
  'Scoped keys, rotation, and complete audit logs',
];

function SectionEyebrow({ children }: { children: string }) {
  return (
    <span className="text-[12px] font-medium uppercase tracking-[0.16em] text-primary-400">
      {children}
    </span>
  );
}

function IconTile({ Icon }: { Icon: typeof Boxes }) {
  return (
    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/12 text-primary-400 ring-1 ring-primary/15">
      <Icon className="h-5 w-5" strokeWidth={1.75} />
    </span>
  );
}

export function DeveloperStory() {
  return (
    <div className="bg-slate-950 text-white">
      {/* Why */}
      <section className="app-container border-t border-white/[0.06] py-20 lg:py-28">
        <AnimateIn className="max-w-2xl">
          <SectionEyebrow>Why Renuir</SectionEyebrow>
          <h2 className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl">
            Don&apos;t build recovery infrastructure from scratch.
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-white/60">
            Matching, verification, and chain of custody are hard to get right.
            We already did. You get the endpoints.
          </p>
        </AnimateIn>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {VALUE.map((v, i) => (
            <AnimateIn key={v.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7">
                <IconTile Icon={v.Icon} />
                <h3 className="mt-6 text-[19px] font-medium">{v.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-white/55">
                  {v.desc}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="app-container border-t border-white/[0.06] py-20 lg:py-28">
        <AnimateIn className="max-w-2xl">
          <SectionEyebrow>How it works</SectionEyebrow>
          <h2 className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl">
            From key to first match in an afternoon.
          </h2>
        </AnimateIn>

        <div className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-2">
          {STEPS.map((s, i) => (
            <AnimateIn key={s.n} delay={i * 0.06}>
              <div className="flex gap-5">
                <div className="flex flex-col items-center">
                  <IconTile Icon={s.Icon} />
                  {i < STEPS.length - 1 && (
                    <span className="mt-3 hidden w-px flex-1 bg-gradient-to-b from-primary/30 to-transparent md:block" />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-[13px] text-primary-400">
                      {s.n}
                    </span>
                    <h3 className="text-[19px] font-medium">{s.title}</h3>
                  </div>
                  <p className="mt-2 text-[15px] leading-relaxed text-white/55">
                    {s.desc}
                  </p>
                  <div className="mt-4 overflow-x-auto rounded-lg border border-white/[0.08] bg-black/30 px-4 py-2.5">
                    <code className="whitespace-pre font-mono text-[12.5px] text-white/60">
                      {s.code}
                    </code>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* What you get */}
      <section className="app-container border-t border-white/[0.06] py-20 lg:py-28">
        <AnimateIn className="max-w-2xl">
          <SectionEyebrow>What you get</SectionEyebrow>
          <h2 className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl">
            The full platform, as endpoints.
          </h2>
        </AnimateIn>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {CAPABILITIES.map((c, i) => (
            <AnimateIn key={c.title} delay={i * 0.06}>
              <div className="flex h-full gap-5 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7">
                <IconTile Icon={c.Icon} />
                <div>
                  <h3 className="text-[19px] font-medium">{c.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-white/55">
                    {c.desc}
                  </p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* Security */}
      <section className="app-container border-t border-white/[0.06] py-20 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <AnimateIn>
            <SectionEyebrow>Security</SectionEyebrow>
            <h2 className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl">
              Enterprise-grade from the first call.
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.08}>
            <ul className="divide-y divide-white/[0.08]">
              {SECURITY.map((s) => (
                <li key={s} className="flex items-center gap-4 py-4">
                  <ShieldCheck
                    className="h-5 w-5 shrink-0 text-primary-400"
                    strokeWidth={1.75}
                  />
                  <span className="text-[16px] text-white/75">{s}</span>
                </li>
              ))}
            </ul>
          </AnimateIn>
        </div>
      </section>
    </div>
  );
}
