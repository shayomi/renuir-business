export interface MenuItem {
  name: string;
  href: string;
  children?: { name: string; href: string }[];
}

export const getMenuItems = (t: (key: string) => string): MenuItem[] => [
  { name: t('home'), href: '/#how-it-works' },
  { name: t('solutions'), href: '/solutions' },
  { name: t('about'), href: '/about-us' },
  { name: t('help'), href: '/support' },
];
