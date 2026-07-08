import { cn } from '@/lib/utils';

interface CodeWindowProps {
  endpoint: string;
  children: React.ReactNode;
  className?: string;
}

/** A tasteful terminal/editor frame used as the developer page's signature visual. */
export function CodeWindow({ endpoint, children, className }: CodeWindowProps) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-elevated',
        className,
      )}
    >
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
        <div className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-full bg-white/15" />
          <span className="h-3 w-3 rounded-full bg-white/10" />
          <span className="h-3 w-3 rounded-full bg-white/10" />
        </div>
        <span className="font-mono text-xs text-white/40">{endpoint}</span>
        <div className="w-14" />
      </div>
      <pre className="overflow-x-auto px-6 py-5 text-[13px] leading-6 text-white/80">
        <code className="font-mono">{children}</code>
      </pre>
    </div>
  );
}

/* Small syntax-color helpers so snippets read cleanly. */
export const kw = (s: string) => <span className="text-primary-400">{s}</span>;
export const str = (s: string) => <span className="text-sky-300/90">{s}</span>;
export const com = (s: string) => <span className="text-white/35">{s}</span>;
export const dim = (s: string) => <span className="text-white/45">{s}</span>;
