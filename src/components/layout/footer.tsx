// src/components/layout/footer.tsx
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

export function Footer() {
  return (
    <footer className="mt-auto border-t border-primary/40 bg-primary text-primary-foreground"> {/* CAMBIO: Fondo, texto */}
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div>
            <h3 className="text-lg font-sora font-semibold text-primary-foreground">Aijolot</h3> {/* CAMBIO: Texto */}
            <p className="text-sm text-primary-foreground/80 mt-2"> {/* CAMBIO: Texto con opacidad */}
              AI Solutions for eCommerce.
            </p>
          </div>
          <nav className="flex flex-col space-y-2 md:items-center">
            <h4 className="font-semibold text-primary-foreground">Quick Links</h4> {/* CAMBIO: Texto */}
            <Link href="/services" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">Servicios</Link> {/* CAMBIO: Texto y hover */}
            <Link href="/contact" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">Contacto</Link> {/* CAMBIO: Texto y hover */}
            <Link href="/ai-agent" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">Habla con Leo IA</Link> {/* CAMBIO: Texto y hover */}
          </nav>
          <nav className="flex flex-col space-y-2 md:items-end">
            <h4 className="font-semibold text-primary-foreground">Legal</h4> {/* CAMBIO: Texto */}
            <Link href="/privacy-policy" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">Política de Privacidad</Link> {/* CAMBIO: Texto y hover */}
            <Link href="/terms-conditions" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">Términos y Condiciones</Link> {/* CAMBIO: Texto y hover */}
            <Link href="/cookie-policy" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">Política de Cookies</Link> {/* CAMBIO: Texto y hover */}
          </nav>
        </div>
        <Separator className="my-6 bg-primary-foreground/40" /> {/* CAMBIO: Separador con opacidad */}
        <div className="text-center text-sm text-primary-foreground/60"> {/* CAMBIO: Texto con opacidad */}
          © {new Date().getFullYear()} Aijolot. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
