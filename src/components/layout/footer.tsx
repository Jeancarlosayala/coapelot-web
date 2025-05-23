import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border/40 bg-background">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div>
            <h3 className="text-lg font-sora font-semibold text-primary">Aijolot</h3>
            <p className="text-sm text-muted-foreground mt-2">
              AI Solutions for eCommerce.
            </p>
          </div>
          <nav className="flex flex-col space-y-2 md:items-center">
            <h4 className="font-semibold text-foreground/90">Quick Links</h4>
            <Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Servicios</Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contacto</Link>
            <Link href="/ai-agent" className="text-sm text-muted-foreground hover:text-primary transition-colors">Habla con Leo IA</Link>
          </nav>
          <nav className="flex flex-col space-y-2 md:items-end">
            <h4 className="font-semibold text-foreground/90">Legal</h4>
            <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Política de Privacidad</Link>
            <Link href="/terms-conditions" className="text-sm text-muted-foreground hover:text-primary transition-colors">Términos y Condiciones</Link>
            <Link href="/cookie-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Política de Cookies</Link>
          </nav>
        </div>
        <Separator className="my-6" />
        <div className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Aijolot. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
