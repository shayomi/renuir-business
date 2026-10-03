import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { appStoreLinks } from '@/lib/app-stores';
import { cn } from '@/lib/utils';

export function StoreDownloads({ dark = false }: { dark?: boolean }) {
  const t = useTranslations('downloads');
  const stores = [
    { name: 'App Store', icon: '/images/icons/appleicon.svg', href: appStoreLinks.apple },
    { name: 'Google Play', icon: '/images/icons/googleplayicon.svg', href: appStoreLinks.google },
  ];
  const classes = 'inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl bg-slate-950 px-6 py-3 text-base font-medium text-white ring-1 ring-white/20';
  return (
    <div>
      <div className="flex flex-wrap gap-3">
        {stores.map((store) => {
          const content = <><Image src={store.icon} alt="" width={22} height={22} />{store.name}</>;
          return store.href ? (
            <a key={store.name} href={store.href} className={cn(classes, 'transition hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary')} target="_blank" rel="noopener noreferrer">{content}</a>
          ) : (
            <button key={store.name} type="button" disabled aria-label={`${store.name}: ${t('unavailable')}`} title={t('unavailable')} className={cn(classes, 'cursor-not-allowed opacity-70')}>{content}</button>
          );
        })}
      </div>
      <p className={cn('mt-3 text-sm', dark ? 'text-white/65' : 'text-muted-foreground')}>{t('platforms')}</p>
    </div>
  );
}
