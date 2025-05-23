import { ContactForm } from '@/components/contact-form';
import { Button } from '@/components/ui/button';
import AnimatedOnScroll from '@/components/utils/animated-on-scroll';
import { Mail, MessageSquare, Phone } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contacto - Hablemos de tus AI Super Powers',
  description: 'Contacta con Aijolot para explorar cómo la IA puede potenciar tu eCommerce. ¡Habla con Leo IA o envíanos un mensaje!',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
      <AnimatedOnScroll animation="fadeInUp">
        <header className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-sora font-bold mb-4">
            Hablemos de tus AI Super Powers
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            La forma más rápida e inteligente de explorar tu potencial con IA es hablando con Leo IA. O, si lo prefieres, déjanos un mensaje y te contactaremos.
          </p>
        </header>
      </AnimatedOnScroll>

      <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-start">
        <AnimatedOnScroll animation="fadeInLeft" className="space-y-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-sora font-semibold mb-6 text-primary flex items-center">
              <MessageSquare className="w-8 h-8 mr-3" />
              Chatea con Leo IA (Recomendado)
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Para consultas rápidas, diagnósticos preliminares o simplemente para explorar ideas, Leo IA es tu mejor opción. Obtén respuestas instantáneas y asesoramiento personalizado 24/7.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full md:w-auto text-lg px-8 py-6">
              <Link href="/ai-agent">Iniciar Chat con Leo IA</Link>
            </Button>
          </div>

          <div className="pt-8 border-t border-border">
            <h3 className="text-xl font-sora font-semibold mb-4">Otras Formas de Contacto</h3>
            <div className="space-y-3">
              <p className="flex items-center text-muted-foreground">
                <Mail className="w-5 h-5 mr-3 text-primary" />
                <a href="mailto:contacto@aijolot.com" className="hover:text-primary transition-colors">contacto@aijolot.com</a>
              </p>
              {/* <p className="flex items-center text-muted-foreground">
                <Phone className="w-5 h-5 mr-3 text-primary" />
                <span>+34 123 456 789 (Si es estratégico)</span>
              </p> */}
            </div>
          </div>
        </AnimatedOnScroll>

        <AnimatedOnScroll animation="fadeInRight" delay={100}>
          <div className="p-8 bg-card rounded-lg shadow-xl border border-border">
            <h2 className="text-2xl md:text-3xl font-sora font-semibold mb-8 text-center lg:text-left">
              Envíanos un Mensaje
            </h2>
            <ContactForm />
          </div>
        </AnimatedOnScroll>
      </div>

      <AnimatedOnScroll animation="fadeInUp" delay={200}>
        <section className="mt-16 text-center py-10 bg-background rounded-lg">
          <h2 className="text-2xl font-sora font-semibold mb-4">¿Qué Esperar Después?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Si nos envías un mensaje a través del formulario o por email, nuestro equipo se pondrá en contacto contigo en un plazo de 24-48 horas hábiles para discutir tus necesidades. Si chateas con Leo IA, ¡la conversación empieza ya!
          </p>
        </section>
      </AnimatedOnScroll>
    </div>
  );
}
