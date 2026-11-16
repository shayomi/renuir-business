'use client';

import Image from 'next/image';
import { useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { useEffect, useRef, useState } from 'react';
import navigation from './navigation.json';
import type { Locale } from '@/i18n/config';

const languages: Record<Locale, string> = {de:'Deutsch',en:'English',es:'Español',fr:'Français',pl:'Polski',pt:'Português',tr:'Türkçe',ar:'العربية'};

export default function ProductNav() {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const content = navigation[locale] ?? navigation.de;
  const [open, setOpen] = useState(false);
  const languageRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const close = (event: MouseEvent) => { if (event.target instanceof Node && !languageRef.current?.contains(event.target)) setOpen(false); };
    const escape = (event: KeyboardEvent) => { if (event.key === 'Escape') {setOpen(false);buttonRef.current?.focus();} };
    document.addEventListener('click', close);
    document.addEventListener('keydown', escape);
    return () => {document.removeEventListener('click', close);document.removeEventListener('keydown', escape);};
  }, []);
  return <div className="supplied-design shared-navigation" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
    <header className="nav"><div className="wrap">
      <Link className="brand" href="/" aria-label="Renuir"><Image src="/images/product/wm-white.png" alt="Renuir" width={94} height={30} priority /></Link>
      <nav aria-label="Renuir"><ul>{content.links.map(link => <li key={link.href}><Link href={`/${link.href}`}>{link.label}</Link></li>)}</ul></nav>
      <div className="actions"><div className="lang" ref={languageRef}>
        <button ref={buttonRef} className="lang-btn" type="button" aria-label={`${locale.toUpperCase()} — ${languages[locale]}`} aria-expanded={open} aria-controls="site-languages" onClick={() => setOpen(!open)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c5 5 5 13 0 18-5-5-5-13 0-18"/></svg>
          <span>{locale.toUpperCase()}</span>
        </button>
        <ul className="lang-menu" id="site-languages" hidden={!open}>{Object.entries(languages).map(([code,label]) => <li key={code}><Link href={pathname} locale={code as Locale} lang={code} hrefLang={code} aria-current={code===locale?'true':undefined} onClick={() => setOpen(false)}><span>{label}</span><small>{code.toUpperCase()}</small></Link></li>)}</ul>
      </div><Link className="btn btn-white" href="/#get">{content.cta}</Link></div>
    </div></header>
  </div>;
}
