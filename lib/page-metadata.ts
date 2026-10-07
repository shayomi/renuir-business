import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { SITE_URL, languageAlternates } from './site';

const pages: Record<string, [string, string, string, string]> = {
  '/solutions': ['Lost and found for businesses', 'Fundsachen für Unternehmen', 'Explore item reporting, possible matches and coordinated returns for your team.', 'Fundmeldungen, mögliche Treffer und abgestimmte Rückgaben für Ihr Team.'],
  '/individual': ['Lost something? Start here', 'Verloren oder gefunden? Hier geht’s weiter', 'Report a loss or a find, compare possible matches and arrange a return with Renuir.', 'Verlust oder Fund melden, mögliche Treffer vergleichen und eine Rückgabe mit Renuir vereinbaren.'],
  '/developer': ['Developer integrations', 'Integrationen für Entwickler', 'Discuss Renuir API access, supported workflows and integration requirements.', 'API-Zugang, unterstützte Abläufe und Integrationsanforderungen mit Renuir besprechen.'],
  '/about-us': ['About Renuir', 'Über Renuir', 'Why we are building a clearer way to connect finders and owners.', 'Warum wir Finder und Eigentümer einfacher zusammenbringen möchten.'],
  '/support': ['Help and support', 'Hilfe und Support', 'Get help with item reports, possible matches, handovers and your Renuir account.', 'Hilfe zu Meldungen, möglichen Treffern, Übergaben und deinem Renuir-Konto.'],
  '/delete-account': ['Delete your account', 'Konto löschen', 'How to request deletion of your Renuir account and associated data.', 'So beantragst du die Löschung deines Renuir-Kontos und zugehöriger Daten.'],
};
const legalNamespaces: Record<string, string> = {'/privacy':'legal.privacy', '/terms':'legal.terms', '/cookies':'legal.cookies', '/accessibility':'legal.accessibility', '/imprint':'legal.imprint'};

export async function pageMetadata(locale: string, route: string): Promise<Metadata> {
  const german = locale === 'de';
  const entry = pages[route];
  let title = entry?.[german ? 1 : 0] ?? 'Renuir';
  let description = entry?.[german ? 3 : 2] ?? '';
  if (legalNamespaces[route]) {
    const t = await getTranslations({locale, namespace: legalNamespaces[route]});
    title = t('title');
    description = title;
  }
  const url = `${SITE_URL}/${locale}${route}`;
  return {metadataBase:new URL(SITE_URL), title, description, alternates: {canonical:url, languages:languageAlternates(route)},
    openGraph:{title:`${title} | Renuir`, description, url, locale, type:'website', siteName:'Renuir'},
    twitter:{title:`${title} | Renuir`, description, card:'summary_large_image'}};
}
