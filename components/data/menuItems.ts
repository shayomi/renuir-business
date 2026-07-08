export interface MenuItem {
  name: string;
  href: string;
  children?: { name: string; href: string }[];
}

export const getMenuItems = (t: (key: string) => string): MenuItem[] => [
  { name: t('home'), href: '/' },
  { name: t('solutions'), href: '/solutions' },
  { name: t('individual'), href: '/individual' },
  { name: t('developers'), href: '/developer' },
  { name: t('about'), href: '/about-us' },
];
