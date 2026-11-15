import en from './en.json';
import de from './de.json';
import ar from './ar.json';
import es from './es.json';
import fr from './fr.json';
import pl from './pl.json';
import pt from './pt.json';
import tr from './tr.json';
import type { Locale } from '@/i18n/config';

export const productContent: Record<Locale, typeof en> = { en, de, ar, es, fr, pl, pt, tr };
export function getProductContent(locale: string) {
  return productContent[locale as Locale] ?? de;
}
