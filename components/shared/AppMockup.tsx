import Image from 'next/image';
import { useLocale } from 'next-intl';
import { cn } from '@/lib/utils';
import styles from './AppMockup.module.css';

export type AppScreen = 'discover' | 'report' | 'matches' | 'chat' | 'ownership' | 'handover';

const descriptions: Record<'en' | 'de', Record<AppScreen, string>> = {
  en: {
    discover: 'Renuir nearby discovery: Berlin map, distance control and lost-and-found filters',
    report: 'Renuir photo report: add an item photo and continue to the details',
    matches: 'Renuir matches: compare lost and found wallet photos side by side',
    chat: 'Renuir messages: talk with a finder and arrange a meeting',
    ownership: 'Renuir ownership check: provide identifying details and supporting documents',
    handover: 'Renuir handover: confirmed meeting details and return confirmation',
  },
  de: {
    discover: 'Renuir Umgebungssuche: Berliner Karte, Entfernung und Filter für Verlust- und Fundmeldungen',
    report: 'Renuir Fotomeldung: Foto eines Gegenstands hinzufügen und Details ergänzen',
    matches: 'Renuir Treffer: Fotos einer verlorenen und gefundenen Geldbörse vergleichen',
    chat: 'Renuir Nachrichten: mit einer Finderin schreiben und ein Treffen vereinbaren',
    ownership: 'Renuir Eigentumsprüfung: besondere Merkmale und unterstützende Dokumente angeben',
    handover: 'Renuir Übergabe: bestätigter Treffpunkt und Rückgabebestätigung',
  },
};

interface AppMockupProps {
  screen: AppScreen;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

/** The current Figma app screens, presented without baked-in marketing copy. */
export function AppMockup({
  screen,
  className,
  priority = false,
  sizes = '(max-width: 639px) 240px, 300px',
}: AppMockupProps) {
  const locale = useLocale() === 'de' ? 'de' : 'en';

  return (
    <figure className={cn(styles.mockup, className)} data-app-screen={screen} data-app-locale={locale}>
      <div className={styles.device}>
        <div className={styles.screen}>
          <Image
            src={`/images/app-ui/${locale}/${screen}.png`}
            alt={descriptions[locale][screen]}
            width={1170}
            height={2532}
            sizes={sizes}
            priority={priority}
            className={styles.image}
          />
        </div>
      </div>
    </figure>
  );
}

interface AppShowcaseProps {
  variant?: 'discovery' | 'recovery';
  priority?: boolean;
  className?: string;
}

export function AppShowcase({ variant = 'discovery', priority = false, className }: AppShowcaseProps) {
  return (
    <div className={cn(styles.showcase, className)}>
      <div className={styles.backdrop} aria-hidden="true" />
      <AppMockup
        screen={variant === 'discovery' ? 'matches' : 'chat'}
        className={styles.secondary}
        sizes="(max-width: 639px) 42vw, (max-width: 1023px) 230px, 250px"
      />
      <AppMockup
        screen={variant === 'discovery' ? 'discover' : 'matches'}
        className={styles.primary}
        priority={priority}
        sizes="(max-width: 639px) 52vw, (max-width: 1023px) 290px, 310px"
      />
    </div>
  );
}
