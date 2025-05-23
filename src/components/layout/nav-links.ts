export type NavLinkItem = {
  href: string;
  label: string;
};

export type NavLinkGroup = {
  label: string;
  href?: string; // Used for top-level links that are not dropdowns
  isDropdown?: boolean;
  subLinks?: NavLinkItem[];
};

export const navLinks: NavLinkGroup[] = [
  { href: '/', label: 'Inicio' },
  { href: '/services', label: 'Servicios IA' },
  {
    label: 'Acerca de',
    isDropdown: true,
    subLinks: [
      { href: '/about', label: 'Nosotros' },
      { href: '/contact', label: 'Contacto' },
      { href: '/blog', label: 'Recursos' }, // Changed from "Recursos/Blog" to "Recursos" for dropdown
    ],
  },
];
