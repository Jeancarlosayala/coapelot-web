import { ContactForm } from '@/components/contact-form';
import { Button } from '@/components/ui/button';
import AnimatedOnScroll from '@/components/utils/animated-on-scroll';
import { Mail, MessageSquare, Phone } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Contacto - Conecta con Aijolot',
  description: 'Contacta con Aijolot para explorar cómo la IA puede potenciar tu eCommerce. ¡Habla con nuestros expertos o envíanos un mensaje!',
};

export default function ContactPage() {
  return (
    <main>
      {/* Hero Banner Section */}
      <section className="w-full py-20 md:py-32 relative bg-muted overflow-hidden">
        {/* Background SVG similar to other service pages */}
        <div className="absolute inset-0 z-0 opacity-50">
          <svg 
            className="w-full h-full" 
            viewBox="0 0 1200 800"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Network pattern */}
            <line x1="100" y1="100" x2="300" y2="150" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.3" />
            <line x1="300" y1="150" x2="500" y2="100" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.3" />
            <line x1="500" y1="100" x2="700" y2="150" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.3" />
            <line x1="700" y1="150" x2="900" y2="100" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.3" />
            <line x1="300" y1="150" x2="200" y2="300" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.3" />
            <line x1="500" y1="100" x2="600" y2="250" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.3" />
            <line x1="700" y1="150" x2="800" y2="300" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.3" />
            
            <circle cx="100" cy="100" r="8" fill="hsl(var(--accent))" className="animate-pulse-light delay-0" />
            <circle cx="300" cy="150" r="10" fill="hsl(var(--accent))" className="animate-pulse-light delay-300" />
            <circle cx="500" cy="100" r="9" fill="hsl(var(--accent))" className="animate-pulse-light delay-600" />
            <circle cx="700" cy="150" r="11" fill="hsl(var(--accent))" className="animate-pulse-light delay-900" />
            <circle cx="900" cy="100" r="8" fill="hsl(var(--accent))" className="animate-pulse-light delay-1200" />
            <circle cx="200" cy="300" r="10" fill="hsl(var(--accent))" className="animate-pulse-light delay-1500" />
            <circle cx="600" cy="250" r="9" fill="hsl(var(--accent))" className="animate-pulse-light delay-1800" />
            <circle cx="800" cy="300" r="12" fill="hsl(var(--accent))" className="animate-pulse-light delay-2100" />
          </svg>
        </div>

        {/* Decorative gradient blobs */}
        <div className="absolute top-[-10%] left-[-15%] w-2/5 h-2/5 bg-accent/20 rounded-full filter blur-3xl opacity-40 animate-pulse z-10"></div>
        <div className="absolute bottom-[-10%] right-[-15%] w-2/5 h-2/5 bg-accent/15 rounded-full filter blur-3xl opacity-30 animate-pulse animation-delay-2000 z-10"></div>

        <div className="container mx-auto px-6 relative z-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col justify-center space-y-6 text-center md:text-left">
            <AnimatedOnScroll animation="fadeInUp">
              <p className="text-sm font-bold text-primary uppercase tracking-widest">Contacta con Aijolot</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-sora font-extrabold tracking-tight text-foreground">
                Conectemos y Potenciemos tu eCommerce
              </h1>
            </AnimatedOnScroll>
            <AnimatedOnScroll animation="fadeInUp" delay={200}>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto md:mx-0">
                Estamos aquí para transformar tus desafíos de eCommerce en oportunidades con IA. Habla con nuestros expertos o envíanos un mensaje para comenzar tu transformación digital.
              </p>
            </AnimatedOnScroll>
            <AnimatedOnScroll animation="fadeInUp" delay={400}>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
                <Button asChild size="lg" className="rounded-lg text-base font-bold transition-transform hover:scale-105 h-14 px-8 bg-cyan-400 text-blue-900 shine-button">
                  <Link href="/ai-agent">
                    Hablar con Aijolot
                  </Link>
                </Button>
              </div>
            </AnimatedOnScroll>
          </div>
          <AnimatedOnScroll animation="zoomIn" delay={300} className="flex justify-center items-center">
            <Image
              src="/aijolot_hero.png"
              alt="Ilustración de contacto con expertos en IA"
              width={850}
              height={680}
              className="w-full max-w-2xl drop-shadow-[0_20px_50px_rgba(40,199,240,0.4)] rounded-lg"
            />
          </AnimatedOnScroll>
        </div>
      </section>

      {/* Main Content Section */}
      <div className="relative bg-muted overflow-hidden">
        <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">

      <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-start">
          <AnimatedOnScroll animation="fadeInLeft" className="space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-sora font-semibold mb-6 text-primary flex items-center">
                <MessageSquare className="w-8 h-8 mr-3" />
                Habla con Nuestros Agente de IA
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Para consultas rápidas, diagnósticos preliminares o simplemente para explorar ideas, nuestro agente de IA Aijolot es tu mejor opción. Obtén respuestas instantáneas y asesoramiento personalizado 24/7.
              </p>
              <Button asChild size="lg" className="rounded-lg text-base font-bold transition-transform hover:scale-105 h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground shine-button">
                <Link href="/ai-agent">Iniciar Chat con Aijolot</Link>
              </Button>
            </div>

            <div className="pt-8 border-t border-border">
              <h3 className="text-xl font-sora font-semibold mb-4">Otras Formas de Contacto</h3>
              <div className="space-y-4">
                <p className="flex items-center text-muted-foreground">
                  <Mail className="w-5 h-5 mr-3 text-primary" />
                  <a href="mailto:hola@aijolot.ai" className="hover:text-primary transition-colors text-lg">hola@aijolot.ai</a>
                </p>
                <p className="flex items-center text-muted-foreground">
                  <svg className="w-5 h-5 mr-3 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  <a 
                    href="https://wa.me/533317248987" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-primary transition-colors text-lg"
                  >
                    +53 3317248987
                  </a>
                </p>
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
                Si nos envías un mensaje a través del formulario o por email, nuestro equipo de Aijolot se pondrá en contacto contigo en un plazo de 24-48 horas hábiles para discutir tus necesidades. Si chateas con nuestros expertos IA, ¡la conversación empieza ya!
              </p>
            </section>
          </AnimatedOnScroll>
        </div>
      </div>
    </main>
  );
}
