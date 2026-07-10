'use client';

import { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';

const CONSENT_KEY = 'renuir-cookie-consent';

function hasAnalyticsConsent(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return false;
    return JSON.parse(raw)?.analytics === true;
  } catch {
    return false;
  }
}

/**
 * Loads Vercel Analytics ONLY after the visitor grants analytics consent via
 * the cookie banner. Reacts live to consent changes (the banner dispatches
 * 'renuir-consent-change' on save), so accepting activates it immediately and
 * withdrawing stops it on the next navigation.
 */
export function ConsentedAnalytics() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const update = () => setEnabled(hasAnalyticsConsent());
    update();
    window.addEventListener('renuir-consent-change', update);
    return () => window.removeEventListener('renuir-consent-change', update);
  }, []);

  return enabled ? <Analytics /> : null;
}
