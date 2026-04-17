export const getFeatures = (t: (key: string) => string) => [
  {
    title: t('feature1Title'),
    description: t('feature1Desc'),
    icon: '/images/icons/staff.svg',
  },
  {
    title: t('feature2Title'),
    description: t('feature2Desc'),
    icon: '/images/icons/shield.svg',
  },
  {
    title: t('feature3Title'),
    description: t('feature3Desc'),
    icon: '/images/icons/qr.svg',
  },
  {
    title: t('feature4Title'),
    description: t('feature4Desc'),
    icon: '/images/icons/dashboard.svg',
  },
];
