export interface TeamMember {
  name: string;
  role: string;
  image?: string;
  imageClassName?: string;
  linkedin?: string;
  featured?: boolean;
}

export const getTeam = (t: (key: string) => string): TeamMember[] => [
  {
    name: "Opeyemi",
    role: t('role1'),
    image: "/images/about/opeyemi-headshot.png",
    featured: true,
  },
  {
    name: "Chimezie",
    role: t('role2'),
    image: "/images/about/chimezie-headshot.jpg",
    imageClassName: "scale-[1.24]",
    featured: true,
  },
  {
    name: "Sayo",
    role: t('role3'),
    image: "/images/about/sayo-headshot.jpg",
    imageClassName: "scale-[1.05]",
  },
  {
    name: "Emmanuel",
    role: t('role4'),
    image: "/images/about/emmanuel-headshot.jpg",
  },
  {
    name: "Emika",
    role: t('role5'),
  },
  {
    name: "Solahudeen",
    role: t('role6'),
  },
  {
    name: "Michael",
    role: t('role7'),
    image: "/images/about/michael-headshot.jpg",
  },
];
