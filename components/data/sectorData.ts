export const getSectors = (t: (key: string) => string) => [
  {
    title: t('airport'),
    description: t('airportDesc'),
    image: "/images/about/airport.png",
    icon: "/images/icons/airport.svg",
  },
  {
    title: t('hotel'),
    description: t('hotelDesc'),
    image: "/images/about/hotel.png",
    icon: "/images/icons/hotels.svg",
  },
  {
    title: t('retail'),
    description: t('retailDesc'),
    image: "/images/about/retail.png",
    icon: "/images/icons/retail.svg",
  },
  {
    title: t('university'),
    description: t('universityDesc'),
    image: "/images/about/school.png",
    icon: "/images/icons/school.svg",
  },
];
