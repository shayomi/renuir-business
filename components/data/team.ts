export interface TeamMember {
  name: string;
  role: string;
  image?: string;
  linkedin?: string;
  featured?: boolean;
}

export const getTeam = (t: (key: string) => string): TeamMember[] => [
  {
    name: "Opeyemi",
    role: t('role1'),
    featured: true,
  },
  {
    name: "Chimezie",
    role: t('role2'),
    featured: true,
  },
  {
    name: "Sayo",
    role: t('role3'),
  },
  {
    name: "Emmanuel",
    role: t('role4'),
  },
  {
    name: "Emika",
    role: t('role5'),
  },
  {
    name: "Solahudeen",
    role: t('role6'),
  },
];
