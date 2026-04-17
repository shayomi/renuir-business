import Nav from "@/components/shared/navbar/Nav";
import { Typography } from "@/components/ui/typography";

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export function LegalPageLayout({
  title,
  lastUpdated,
  children,
}: LegalPageLayoutProps) {
  return (
    <>
      <Nav />
      <main className="app-container py-12 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <Typography variant="h1" className="mb-2">
            {title}
          </Typography>
          <Typography variant="mutedText" className="mb-10 sm:mb-12">
            {lastUpdated}
          </Typography>
          <div className="prose max-w-none prose-headings:font-semibold prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground prose-a:text-primary prose-a:no-underline hover:prose-a:underline dark:prose-invert">
            {children}
          </div>
        </div>
      </main>
    </>
  );
}
