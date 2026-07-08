"use client";

import { useEffect, useRef, useState } from "react";

interface TocItem {
  id: string;
  text: string;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 60);
}

interface LegalArticleProps {
  children: React.ReactNode;
  disclaimer?: string;
  onThisPageLabel: string;
}

/**
 * Renders legal prose in a comfortable reading measure and derives an
 * anchored table of contents from the rendered <h2> headings. Because the
 * TOC is built from the DOM at runtime, it works for every locale without
 * any per-page or per-language wiring.
 */
export function LegalArticle({
  children,
  disclaimer,
  onThisPageLabel,
}: LegalArticleProps) {
  const articleRef = useRef<HTMLDivElement>(null);
  const [toc, setToc] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const root = articleRef.current;
    if (!root) return;

    const headings = Array.from(root.querySelectorAll("h2"));
    const seen = new Set<string>();
    const items: TocItem[] = headings.map((h) => {
      const base = slugify(h.textContent ?? "");
      let id = base || "section";
      let i = 2;
      while (seen.has(id)) id = `${base}-${i++}`;
      seen.add(id);
      h.id = id;
      h.classList.add("scroll-mt-28");
      return { id, text: h.textContent ?? "" };
    });
    setToc(items);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-96px 0px -70% 0px", threshold: 0 },
    );
    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, [children]);

  return (
    <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_15rem] lg:gap-12">
      <div>
        <div
          ref={articleRef}
          className="prose max-w-[70ch] prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-foreground prose-h2:mt-14 prose-h2:mb-4 prose-h2:text-[1.375rem] prose-h2:border-t prose-h2:border-border prose-h2:pt-10 first:prose-h2:mt-0 first:prose-h2:border-t-0 first:prose-h2:pt-0 prose-p:text-muted-foreground prose-p:leading-[1.75] prose-li:text-muted-foreground prose-li:leading-[1.7] prose-li:my-1.5 prose-a:text-primary prose-a:font-medium prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground dark:prose-invert"
        >
          {children}
        </div>

        {disclaimer ? (
          <aside
            role="note"
            className="shadow-soft mt-16 max-w-[70ch] rounded-2xl border border-border bg-muted/40 p-6"
          >
            <p className="text-sm leading-relaxed text-muted-foreground">
              {disclaimer}
            </p>
          </aside>
        ) : null}
      </div>

      {toc.length > 1 && (
        <nav
          aria-label={onThisPageLabel}
          className="hidden lg:block"
        >
          <div className="sticky top-28">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              {onThisPageLabel}
            </p>
            <ul className="space-y-2.5 border-l border-border">
              {toc.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`-ml-px block border-l-2 pl-4 text-sm leading-snug transition-colors ${
                      activeId === item.id
                        ? "border-primary font-medium text-foreground"
                        : "border-transparent text-muted-foreground hover:border-border hover:text-foreground"
                    }`}
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}
    </div>
  );
}
