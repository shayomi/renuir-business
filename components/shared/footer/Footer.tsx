'use client';

import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import styles from '@/components/product/Product.module.css';

export default function Footer() {
  const t = useTranslations('footer');
  return <footer className={styles.footer}>
    <div className={styles.wrap}>
      <div className={styles.footerTop}>
        <Link href="/"><Image src="/images/product/wm-blue.png" alt="Renuir" width={112} height={36} /></Link>
        <p>{t('tagline')}</p>
        <a href="mailto:info@renuir.com">info@renuir.com ↗</a>
      </div>
      <nav className={styles.footerLinks} aria-label={t('legal')}>
        {([['/about-us', 'company'], ['/support', 'support'], ['/privacy', 'privacy'], ['/terms', 'terms'], ['/delete-account', 'deleteAccount'], ['/cookies', 'cookies'], ['/imprint', 'imprint'], ['/accessibility', 'accessibility']] as const).map(([href, key]) => <Link key={href} href={href}>{t(key)}</Link>)}
      </nav>
      <div className={styles.footerBottom}><span>{t('copyright')}</span><button type="button" onClick={() => window.dispatchEvent(new Event('renuir-open-consent'))}>{t('cookieSettings')}</button><a href="https://linkedin.com/company/renuir" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></div>
    </div>
  </footer>;
}
