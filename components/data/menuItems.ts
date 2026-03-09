export const menuItems = [
  { name: "Home", href: "/" },
  { name: "About us", href: "/about-us" },
  {
    name: "Solutions",
    href: "/solutions", // optional (used if you want click-through too)
    children: [
      { name: "Enterprise", href: "/solutions" },
      { name: "Individual", href: "/individual" },
    ],
  },
  { name: "Developers", href: "/developer" },
];
