export const getMenuItems = (t: (key: string) => string) => [
  { name: t('home'), href: '/' },
  { name: t('about'), href: '/about-us' },
  {
    name: t('solutions'),
    href: '/solutions',
    children: [
      { name: t('enterprise'), href: '/solutions' },
      { name: t('individual'), href: '/individual' },
    ],
  },
  { name: t('developers'), href: '/developer' },
];
