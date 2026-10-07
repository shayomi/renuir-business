import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { appStoreLinks } from '@/lib/app-stores';
import { cn } from '@/lib/utils';

export function StoreDownloads({ dark = false, compact = false }: { dark?: boolean; compact?: boolean }) {
  const t = useTranslations('downloads');
  const stores = [
    { name: 'App Store', icon: '/images/icons/appleicon.svg', href: appStoreLinks.apple },
    { name: 'Google Play', icon: '/images/icons/googleplayicon.svg', href: appStoreLinks.google },
  ];
  const available = stores.some(store => !!store.href);
  const classes = cn('inline-flex items-center justify-center gap-2.5 rounded-xl font-medium focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary', compact ? 'min-h-10 px-3.5 text-sm' : 'min-h-12 px-5 text-base', dark ? 'bg-white/10 text-white ring-1 ring-white/20' : 'bg-slate-950 text-white');
  return <div>
    <div className="flex flex-wrap gap-3">{stores.map(store => {
      const content = <><Image src={store.icon} alt="" width={18} height={18} />{store.name}</>;
      return store.href ? <a key={store.name} href={store.href} className={cn(classes, 'transition hover:opacity-85')} target="_blank" rel="noopener noreferrer">{content}</a> : <button key={store.name} type="button" disabled aria-label={`${store.name}: ${t('unavailable')}`} className={cn(classes, 'cursor-not-allowed opacity-60')}>{content}</button>;
    })}</div>
    <p className={cn('mt-3 max-w-sm text-sm leading-relaxed', dark ? 'text-white/70' : 'text-muted-foreground')}>{available ? t('platforms') : t('status')}</p>
  </div>;
}
