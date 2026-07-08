import AnimateIn from '@/components/ui/AnimateIn';
import { LeadForm } from '@/components/shared/LeadForm';

export default function ReadyToBuildCTA() {
  return (
    <section id="dev-access" className="scroll-mt-24 bg-slate-950 pb-24 pt-4 lg:pb-28">
      <div className="app-container">
        <AnimateIn>
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-primary px-6 py-16 text-center sm:px-12 lg:py-20">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'radial-gradient(50% 60% at 50% 0%, rgba(255,255,255,0.22), transparent 70%)',
              }}
            />
            <div className="relative mx-auto flex max-w-xl flex-col items-center">
              <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
                Start building with Renuir.
              </h2>
              <p className="mt-4 text-[17px] leading-relaxed text-white/80">
                Request access and we&apos;ll set you up with sandbox keys and
                the full API reference.
              </p>
              <div className="mt-8 flex w-full justify-center">
                <LeadForm
                  source="developer"
                  variant="dark"
                  cta="Request API access"
                  placeholder="Enter your work email"
                  successMessage="Thanks. We'll send sandbox keys and docs shortly."
                />
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
