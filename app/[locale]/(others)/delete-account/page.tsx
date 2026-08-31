import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/shared/legal/LegalPageLayout";
import { languageAlternates, SITE_URL } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const german = locale === "de";

  return {
    title: german ? "Renuir-Konto löschen" : "Delete your Renuir account",
    description: german
      ? "So beantragst du die Löschung deines Renuir-Kontos und deiner zugehörigen Daten."
      : "How to request deletion of your Renuir account and associated data.",
    alternates: {
      canonical: `${SITE_URL}/${locale}/delete-account`,
      languages: languageAlternates("/delete-account"),
    },
  };
}

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
            ? "Dein Konto wird für 14 Tage zur Löschung vorgemerkt. Während dieser Frist kannst du die Löschung im Datenschutzbereich der App widerrufen. Danach wird dein Konto deaktiviert und deine personenbezogenen Kontodaten werden innerhalb von bis zu 30 Tagen gelöscht oder anonymisiert."
            : "Your account is scheduled for deletion with a 14-day grace period. During that period, you can cancel the request from the app's Privacy screen. Afterward, the account is disabled and your personal account data is deleted or anonymized within up to 30 days."}
        </p>
        <p>
          {german
            ? "Bestimmte Daten werden nur so lange aufbewahrt, wie es für Sicherheit, Betrugsprävention oder gesetzliche Pflichten erforderlich ist: Fundmeldungen und Fotos 12 Monate nach Abschluss oder 6 Monate nach Ablauf ungelöster Fälle, Chats 6 Monate nach Anspruchsabschluss, technische Protokolle 90 Tage und Zahlungsunterlagen 10 Jahre gemäß § 147 AO. Eine rechtliche Sicherungsanordnung betrifft nur die davon erfassten Unterlagen und endet nach ihrer Aufhebung."
            : "Some records are retained only as needed for safety, fraud prevention, or legal obligations: item reports and photos for 12 months after resolution or 6 months after an unresolved report expires; chats for 6 months after claim resolution; technical logs for 90 days; and payment records for 10 years under German tax law (§ 147 AO). A legal preservation hold applies only to affected records and ends when the hold is released."}
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
