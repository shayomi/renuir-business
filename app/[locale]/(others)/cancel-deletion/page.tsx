import { LegalPageLayout } from '@/components/shared/legal/LegalPageLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = { robots: { index: false, follow: false } };

export default async function CancelDeletionPage({ params }: { params: Promise<{locale: string}> }) {
  const { locale } = await params;
  const de = locale === 'de';
  return <LegalPageLayout title={de ? 'Kontolöschung abbrechen' : 'Cancel account deletion'}>
    <section>
      <h2>{de ? 'In der Renuir-App' : 'In the Renuir app'}</h2>
      <p>{de ? 'Das Öffnen dieser Seite bricht deine Löschanfrage nicht ab. Führe diese Schritte vor dem Löschdatum aus, das in deiner E-Mail steht:' : 'Opening this page does not cancel your deletion request. Complete these steps before the deletion date shown in your email:'}</p>
      <ol>
        <li>{de ? 'Öffne Renuir und melde dich bei dem zur Löschung vorgemerkten Konto an.' : 'Open Renuir and sign in to the account scheduled for deletion.'}</li>
        <li>{de ? 'Öffne Profil → Rechtliches → Datenverarbeitung (DSGVO).' : 'Open Profile → Legal → Data Processing (GDPR).'}</li>
        <li>{de ? 'Scrolle nach unten und tippe auf die Option zum Abbrechen der ausstehenden Löschung.' : 'Scroll down and tap Cancel pending deletion.'}</li>
        <li>{de ? 'Warte auf die Bestätigung in der App, dass die Löschung abgebrochen wurde.' : 'Wait for the app to confirm Deletion cancelled.'}</li>
      </ol>
    </section>
    <section>
      <h2>{de ? 'Du brauchst Hilfe?' : 'Need help?'}</h2>
      <p>{de ? 'Wenn du dich nicht anmelden kannst oder die Option nicht findest, kontaktiere uns. Sende keine Passwörter oder Einmalcodes.' : 'If you cannot sign in or find the cancellation option, contact us. Do not send passwords or verification codes.'}</p>
      <p><a href="mailto:privacy@renuir.com">privacy@renuir.com</a></p>
      <p>{de ? 'Diese Website kann deinen Kontostatus nicht prüfen. Wenn du die Löschung bereits abgebrochen hast, prüfe die Bestätigung in der App.' : 'This website cannot check your account status. If you already cancelled, check the confirmation in the app.'}</p>
    </section>
  </LegalPageLayout>;
}
