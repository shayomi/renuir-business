import { LegalPageLayout } from "@/components/shared/legal/LegalPageLayout";

export default async function SupportPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const german = locale === "de";

  return (
    <LegalPageLayout
      title={german ? "Renuir-Support" : "Renuir Support"}
      lastUpdated={german ? "Stand: 22. August 2026" : "Last updated: August 22, 2026"}
    >
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
