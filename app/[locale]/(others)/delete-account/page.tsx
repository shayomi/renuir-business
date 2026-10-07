import { pageMetadata } from "@/lib/page-metadata";
import { LegalPageLayout } from "@/components/shared/legal/LegalPageLayout";
export default async function DeleteAccountPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const german = locale === "de";

  return (
    <LegalPageLayout
      title={german ? "Renuir-Konto löschen" : "Delete your Renuir account"}
      lastUpdated={german ? "Stand: 31. August 2026" : "Last updated: August 31, 2026"}
    >
      <section>
        <h2>{german ? "In der App löschen" : "Delete in the app"}</h2>
        <p>
          {german
            ? "Öffne Renuir und gehe zu Profil → Einstellungen → Sicherheit → Konto löschen. Bestätige die Anfrage mit der angezeigten Sicherheitsprüfung."
            : "Open Renuir and go to Profile → Settings → Security → Delete Account. Complete the security check shown in the app to confirm your request."}
        </p>
      </section>
      <section>
        <h2>{german ? "Was danach passiert" : "What happens next"}</h2>
        <p>
          {german
            ? "Dein Konto wird für 14 Tage zur Löschung vorgemerkt und pausiert. Während dieser Frist kannst du die Löschung unter Einstellungen → Sicherheit abbrechen. Nach Ablauf der Frist wird dein Konto endgültig gelöscht, sofern keine gesetzliche Aufbewahrungspflicht oder offene Zahlung die Löschung verhindert."
            : "Your account is paused and scheduled for deletion with a 14-day grace period. You can cancel the request in Settings → Security during that period. After the grace period, your account is permanently deleted unless a legal preservation obligation or an unresolved payment prevents deletion."}
        </p>
        <p>
          {german
            ? "Wir speichern personenbezogene Daten nur so lange, wie es für den Betrieb des Dienstes erforderlich ist. Bei einer Kontolöschung gilt eine Frist von 14 Tagen vor der endgültigen Entfernung. Abgeschlossene Fund- und Verlustmeldungen werden normalerweise nach 60 Tagen entfernt. Nachrichten, Ansprüche, Moderations-, Zahlungs-, Steuer-, Sicherheits-, Betrugspräventions- und rechtliche Unterlagen können länger aufbewahrt werden, soweit dies gesetzlich vorgeschrieben, für Streitfälle oder zum Schutz des Dienstes erforderlich ist. Eine rechtliche Sicherungsanordnung gilt nur für die betroffenen Unterlagen."
            : "We keep personal data only as long as needed to operate the service. Account deletion requests enter a 14-day grace period before permanent removal. Resolved item reports are normally removed after 60 days. Messages, claims, moderation, payment, tax, security, fraud-prevention and legal records may be retained longer where required by law, needed for disputes or necessary to protect the service. Any legal preservation hold applies only to the affected records."}
        </p>
        <p>
          <a href={`/${locale}/privacy`}>
            {german ? "Vollständige Datenschutzrichtlinie lesen" : "Read the full Privacy Policy"}
          </a>
        </p>
      </section>
      <section>
        <h2>{german ? "Du kannst die App nicht öffnen?" : "Can't access the app?"}</h2>
        <p>
          {german
            ? "Schreibe von der E-Mail-Adresse deines Renuir-Kontos an privacy@renuir.com. Gib niemals dein Passwort, Einmalcodes oder Ausweisdokumente per E-Mail weiter. Wir führen vor der Bearbeitung eine Identitätsprüfung durch."
            : "Email privacy@renuir.com from the address associated with your Renuir account. Never send your password, one-time codes, or identity documents by email. We will complete an identity check before processing the request."}
        </p>
      </section>
    </LegalPageLayout>
  );
}

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  return pageMetadata(locale, "/delete-account");
}
