// src/components/layout/nav-links.ts
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
  { href: '/#soluciones-ia', label: 'Servicios IA' }, // CAMBIO: Apunta al ID de la sección
  {
    label: 'Acerca de',
    isDropdown: true,
    subLinks: [
      { href: '/about', label: 'Nosotros' },
      { href: '/contact', label: 'Contacto' },
      { href: '/blog', label: 'Recursos' },
    ],
  },
];
