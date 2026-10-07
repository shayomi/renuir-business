import { Plus } from "lucide-react";
import { pageMetadata } from "@/lib/page-metadata";
import { getTranslations } from "next-intl/server";
import { LegalPageLayout } from "@/components/shared/legal/LegalPageLayout";

export default async function SupportPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const german = locale === "de";
  const faq = await getTranslations("home.faq");

  return (
    <LegalPageLayout
      title={german ? "Renuir-Support" : "Renuir Support"}
      description={german ? "Hilfe zu Meldungen, möglichen Treffern, Übergaben und deinem Konto." : "Help with reports, possible matches, handovers and your account."}
    >
      <section>
        <h2>{faq("headline")}</h2>
        <div className="support-faq">
          {[1, 2, 3, 4].map(i => (
            <details key={i} className="group border-b border-border">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-5 py-4 font-medium marker:content-none focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
                {faq(`q${i}`)}
                <Plus aria-hidden className="size-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-45" />
              </summary>
              <p>{faq(`a${i}`)}</p>
            </details>
          ))}
        </div>
      </section>
      <section>
        <h2>{german ? "Wir helfen dir" : "We're here to help"}</h2>
        <p>
          {german
            ? "Bei Problemen mit deinem Konto, Beiträgen, Verifizierung, Zahlungen, Benachrichtigungen oder einer Übergabe erreichst du unser Support-Team unter info@renuir.com."
            : "For help with your account, posts, verification, payments, notifications, or a handover, contact our support team at info@renuir.com."}
        </p>
        <p><a href="mailto:info@renuir.com">info@renuir.com</a></p>
      </section>
      <section>
        <h2>{german ? "Direkt in der App" : "Contact us in the app"}</h2>
        <p>
          {german
            ? "Öffne Profil → Einstellungen → Hilfe & Support → Support kontaktieren. So können wir deine Anfrage schneller dem richtigen Bereich zuordnen."
            : "Open Profile → Settings → Help & Support → Contact Support. This helps us route your request to the right team more quickly."}
        </p>
      </section>
      <section>
        <h2>{german ? "Sicherheit" : "Keep your account safe"}</h2>
        <p>
          {german
            ? "Sende niemals Passwörter, Einmalcodes, vollständige Ausweisdokumente oder Zahlungsdaten per E-Mail. Renuir wird dich nicht nach deinem Passwort oder einem Einmalcode fragen."
            : "Never send passwords, one-time codes, complete identity documents, or payment-card details by email. Renuir will never ask for your password or one-time code."}
        </p>
      </section>
      <section>
        <h2>{german ? "Datenschutz und Kontolöschung" : "Privacy and account deletion"}</h2>
        <p>
          {german
            ? "Für Datenschutzanfragen schreibe an privacy@renuir.com. Eine Anleitung zur Kontolöschung findest du auf unserer Seite „Konto löschen“."
            : "For privacy requests, email privacy@renuir.com. Instructions for deleting your account are available on our Delete Account page."}
        </p>
        <p><a href={`/${locale}/delete-account`}>{german ? "Konto löschen" : "Delete Account"}</a></p>
      </section>
    </LegalPageLayout>
  );
}

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  return pageMetadata(locale, "/support");
}
