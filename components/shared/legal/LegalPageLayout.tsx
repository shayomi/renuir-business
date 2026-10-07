import { getTranslations } from "next-intl/server";
import Nav from "@/components/shared/navbar/Nav";
import { Typography } from "@/components/ui/typography";
import { LegalArticle } from "@/components/shared/legal/LegalArticle";

interface LegalPageLayoutProps {
  title: string;
  lastUpdated?: string;
  description?: string;
  children: React.ReactNode;
}

export async function LegalPageLayout({
  title,
  lastUpdated,
  description,
  children,
}: LegalPageLayoutProps) {
  const t = await getTranslations("common");
  return (
    <>
      <Nav />
      <main id="main-content" className="app-container py-10 sm:py-12 lg:py-14">
        <div className="mx-auto max-w-5xl">
          <header className="mb-9 max-w-[70ch] sm:mb-10">
            <Typography variant="h1" className="mb-4">
              {title}
            </Typography>
            {description && <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">{description}</p>}
            {lastUpdated && <span className="inline-flex items-center rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground">
              {lastUpdated}
            </span>}
          </header>

          <LegalArticle onThisPageLabel={t("onThisPage")}>
            {children}
          </LegalArticle>
        </div>
      </main>
    </>
  );
}
