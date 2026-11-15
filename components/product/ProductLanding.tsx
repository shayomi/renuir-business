import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import ProductNav from './ProductNav';
import { getProductContent } from './content';
import { StoreDownloads } from '@/components/shared/StoreDownloads';
import styles from './Product.module.css';

export default function ProductLanding({ locale }: { locale: string }) {
  const c = getProductContent(locale);
  const picture = (number: number, alt: string, priority = false) => <Image
    src={`/images/product/${locale}/ph${number}.webp`} alt={alt} width={860} height={1364}
    sizes="(max-width: 600px) 260px, (max-width: 1000px) 300px, 350px"
    className={styles.phone} priority={priority} />;
  return <div className={styles.site}>
    <ProductNav />
    <main id="main-content">
      <section className={`${styles.wrap} ${styles.hero}`}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Renuir</p>
          <h1>{c.title}</h1><p className={styles.intro}>{c.intro}</p>
          <a className={styles.primary} href="#how-it-works">{c.explore}<span aria-hidden>↗</span></a>
          <p className={styles.availability}>{c.availability}</p>
        </div>
        <figure className={styles.heroVisual}><div className={styles.orbit} aria-hidden /><div className={styles.heroPhone}>{picture(1, c.matchTitle, true)}</div><figcaption>{c.preview}</figcaption></figure>
      </section>
      <div className={styles.statement}><div className={styles.wrap}><span aria-hidden>↳</span><p>{c.eyebrow}</p></div></div>
      <section id="how-it-works" className={`${styles.wrap} ${styles.flow}`}>
        <header className={styles.sectionHead}><p className={styles.eyebrow}>{c.how}</p><h2>{c.flowTitle}</h2><p>{c.flowIntro}</p></header>
        <article className={styles.feature}>
          <div className={styles.featureCopy}><span className={styles.number}>01 /</span><h3>{c.postTitle}</h3><p>{c.postBody}</p></div>
          <figure className={styles.featureVisual}>{picture(2, c.postTitle)}<figcaption>{c.preview}</figcaption></figure>
        </article>
        <article className={`${styles.feature} ${styles.reverse}`}>
          <div className={styles.featureCopy}><span className={styles.number}>02 /</span><h3>{c.matchTitle}</h3><p>{c.matchBody}</p></div>
          <figure className={styles.featureVisual}>{picture(3, c.matchTitle)}<figcaption>{c.preview}</figcaption></figure>
        </article>
        <div className={styles.returnGrid}>
          <article><div className={styles.returnText}><span className={styles.number}>03 /</span><h3>{c.chatTitle}</h3><p>{c.chatBody}</p></div><figure>{picture(4, c.chatTitle)}<figcaption>{c.preview}</figcaption></figure></article>
          <article><div className={styles.returnText}><span className={styles.number}>04 /</span><h3>{c.handoverTitle}</h3><p>{c.handoverBody}</p></div><figure>{picture(5, c.handoverTitle)}<figcaption>{c.preview}</figcaption></figure></article>
        </div>
      </section>
      <section id="safety" className={styles.safety}><div className={styles.wrap}><p className={styles.eyebrow}>{c.safety}</p><h2>{c.safetyTitle}</h2><p>{c.safetyBody}</p><Link href="/support">{c.support} <span aria-hidden>↗</span></Link></div></section>
      <section className={`${styles.wrap} ${styles.pets}`}><div className={styles.featureCopy}><p className={styles.eyebrow}>{c.features}</p><h2>{c.petsTitle}</h2><p>{c.petsBody}</p></div><figure className={styles.petVisual}>{picture(6, c.petsTitle)}<figcaption>{c.preview}</figcaption></figure></section>
      <section id="download" className={styles.closing}><div className={styles.wrap}><h2>{c.closingTitle}</h2><p>{c.closingBody}</p><StoreDownloads /><div className={styles.contact}><span>{c.contactTitle}</span><a href="mailto:info@renuir.com">{c.contact} <span aria-hidden>↗</span></a></div></div></section>
    </main>
  </div>;
}
