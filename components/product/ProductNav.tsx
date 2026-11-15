'use client';

import Image from 'next/image';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { LanguageSwitcher } from '@/components/shared/LanguageSwitcher';
import { getProductContent } from './content';
import styles from './Product.module.css';

export default function ProductNav() {
  const c = getProductContent(useLocale());
  return <header className={styles.nav}>
    <nav className={styles.navInner} aria-label="Renuir">
      <Link href="/" className={styles.brand}><Image src="/images/product/wm-blue.png" alt="Renuir" width={112} height={36} priority /></Link>
      <div className={styles.navLinks}><Link href="/#how-it-works">{c.how}</Link><Link href="/#safety">{c.safety}</Link><Link href="/support">{c.support}</Link></div>
      <LanguageSwitcher />
    </nav>
  </header>;
}
