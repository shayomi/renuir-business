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
      lastUpdated={german ? "Stand: 22. August 2026" : "Last updated: August 22, 2026"}
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
            ? "Dein Konto wird für 14 Tage zur Löschung vorgemerkt. Während dieser Frist kannst du die Löschung im Datenschutzbereich der App widerrufen. Danach werden dein Konto und die zugehörigen Daten gemäß unserer Datenschutzrichtlinie gelöscht oder anonymisiert; gesetzlich aufzubewahrende Nachweise bleiben nur für die vorgeschriebene Frist erhalten."
            : "Your account is scheduled for deletion with a 14-day grace period. During that period, you can cancel the request from the app's Privacy screen. Afterward, your account and associated data are deleted or anonymized according to our Privacy Policy; records required by law are retained only for the applicable period."}
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
