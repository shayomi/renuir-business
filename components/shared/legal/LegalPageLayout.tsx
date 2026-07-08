import Nav from "@/components/shared/navbar/Nav";
import { Typography } from "@/components/ui/typography";
import { LegalArticle } from "@/components/shared/legal/LegalArticle";

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

const ON_THIS_PAGE = "On this page";

export function LegalPageLayout({
  title,
  lastUpdated,
  children,
}: LegalPageLayoutProps) {
  return (
    <>
      <Nav />
      <main className="app-container py-12 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <header className="mb-12 max-w-[70ch] sm:mb-16">
            <Typography variant="h1" className="mb-4">
              {title}
            </Typography>
            <span className="inline-flex items-center rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground">
              {lastUpdated}
            </span>
          </header>

          <LegalArticle onThisPageLabel={ON_THIS_PAGE}>
            {children}
          </LegalArticle>
        </div>
      </main>
    </>
  );
}
