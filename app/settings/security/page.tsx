import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cancel account deletion | Renuir',
  robots: { index: false, follow: false },
};

export default function CancelDeletionHelpPage() {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: '#f5f6fa', color: '#171923', fontFamily: 'system-ui, sans-serif' }}>
        <main style={{ maxWidth: 560, margin: '48px auto', padding: '32px 24px', background: '#fff', borderRadius: 20, lineHeight: 1.65 }}>
          <Link href="/" style={{ color: '#2937f0', fontWeight: 700, textDecoration: 'none' }}>Renuir</Link>
          <h1 style={{ lineHeight: 1.2 }}>Cancel account deletion</h1>
          <p>Opening this page does not cancel your deletion request.</p>
          <p>To keep your account, complete these steps in the Renuir app before the deletion date shown in your email:</p>
          <ol style={{ paddingLeft: 24 }}>
            <li>Open Renuir and sign in to the account you scheduled for deletion.</li>
            <li>Open <strong>Profile → Legal → Data Processing (GDPR)</strong>.</li>
            <li>Tap <strong>Cancel pending deletion</strong>.</li>
            <li>Wait for the app to confirm <strong>Deletion cancelled</strong>.</li>
          </ol>
          <p>If you cannot sign in or cannot find the cancellation option, contact <a href="mailto:datenschutz@renuir.com">datenschutz@renuir.com</a> for help. Do not send your password or verification codes.</p>
          <p style={{ color: '#555', fontSize: 14 }}>This page cannot check your account status. If you have already cancelled, check the confirmation in the app.</p>
        </main>
      </body>
    </html>
  );
}
