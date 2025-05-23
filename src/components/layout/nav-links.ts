export type NavLink = {
  href: string;
  label: string;
};

export const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Servicios IA' },
  { href: '/how-we-start', label: 'Cómo Empezamos' },
  { href: '/about', label: 'Nosotros' },
  { href: '/blog', label: 'Recursos/Blog' },
  { href: '/contact', label: 'Contacto' },
  { href: '/ai-agent', label: 'Leo IA (Aijolot)' },
];
