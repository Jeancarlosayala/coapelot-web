// src/app/page.tsx
import { HeroSection } from '@/components/hero-section';
import { PainPointsSection } from '@/components/sections/pain-points-section';
import { OurValuesSection } from '@/components/sections/our-values-section';
import { ServicesCarouselSection } from '@/components/sections/services-carousel-section';
import { TechStackSection } from '@/components/sections/tech-stack-section';
import { KeyResultsSection } from '@/components/sections/key-results-section';
import { Button } from '@/components/ui/button';
import AnimatedOnScroll from '@/components/utils/animated-on-scroll';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PainPointsSection />
      <OurValuesSection />
      <ServicesCarouselSection />
      <TechStackSection />

      {/* INICIO DE CAMBIO: Sección Diagnóstico IA Estratégico con SVG de fondo */}
      <section className="relative py-10 md:py-12 bg-muted overflow-hidden"> {/* Asegura `relative` y `overflow-hidden` */}
        {/* Fondo generado con SVG - similar al Hero, ajustado para el color del acento */}
        <div className="absolute inset-0 z-0 opacity-60"> {/* Opacidad ajustada para sutilidad */}
          <svg 
            className="w-full h-full" 
            viewBox="0 0 1200 700" 
            preserveAspectRatio="xMidYMid slice" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Líneas de Conexión: en color de acento con stroke-opacity */}
            <line x1="100" y1="100" x2="250" y2="150" stroke="hsl(var(--accent))" strokeWidth="2" strokeOpacity="0.4" className="animate-fade-in-line delay-100" />
            <line x1="250" y1="150" x2="400" y2="100" stroke="hsl(var(--accent))" strokeWidth="2" strokeOpacity="0.4" className="animate-fade-in-line delay-200" />
            <line x1="400" y1="100" x2="550" y2="150" stroke="hsl(var(--accent))" strokeWidth="2" strokeOpacity="0.4" className="animate-fade-in-line delay-300" />
            <line x1="250" y1="150" x2="200" y2="300" stroke="hsl(var(--accent))" strokeWidth="2" strokeOpacity="0.4" className="animate-fade-in-line delay-400" />
            <line x1="400" y1="100" x2="500" y2="250" stroke="hsl(var(--accent))" strokeWidth="2" strokeOpacity="0.4" className="animate-fade-in-line delay-500" />
            <line x1="200" y1="300" x2="350" y2="400" stroke="hsl(var(--accent))" strokeWidth="2" strokeOpacity="0.4" className="animate-fade-in-line delay-600" />
            <line x1="500" y1="250" x2="650" y2="350" stroke="hsl(var(--accent))" strokeWidth="2" strokeOpacity="0.4" className="animate-fade-in-line delay-700" />
            <line x1="350" y1="400" x2="550" y2="500" stroke="hsl(var(--accent))" strokeWidth="2" strokeOpacity="0.4" className="animate-fade-in-line delay-800" />
            <line x1="650" y1="350" x2="800" y2="450" stroke="hsl(var(--accent))" strokeWidth="2" strokeOpacity="0.4" className="animate-fade-in-line delay-900" />
            <line x1="550" y1="500" x2="700" y2="550" stroke="hsl(var(--accent))" strokeWidth="2" strokeOpacity="0.4" className="animate-fade-in-line delay-1000" />
            <line x1="800" y1="450" x2="900" y2="500" stroke="hsl(var(--accent))" strokeWidth="2" strokeOpacity="0.4" className="animate-fade-in-line delay-1100" />
            <line x1="700" y1="550" x2="1000" y2="600" stroke="hsl(var(--accent))" strokeWidth="2" strokeOpacity="0.4" className="animate-fade-in-line delay-1200" />
            <line x1="900" y1="500" x2="1100" y2="400" stroke="hsl(var(--accent))" strokeWidth="2" strokeOpacity="0.4" className="animate-fade-in-line delay-1300" />
            <line x1="150" y1="250" x2="300" y2="350" stroke="hsl(var(--accent))" strokeWidth="2" strokeOpacity="0.4" className="animate-fade-in-line delay-1400" />
            <line x1="450" y1="200" x2="600" y2="300" stroke="hsl(var(--accent))" strokeWidth="2" strokeOpacity="0.4" className="animate-fade-in-line delay-1500" />
            <line x1="750" y1="100" x2="900" y2="250" stroke="hsl(var(--accent))" strokeWidth="2" strokeOpacity="0.4" className="animate-fade-in-line delay-1600" />
            <line x1="50" y1="400" x2="200" y2="500" stroke="hsl(var(--accent))" strokeWidth="2" strokeOpacity="0.4" className="animate-fade-in-line delay-1700" />
            <line x1="850" y1="300" x2="1050" y2="350" stroke="hsl(var(--accent))" strokeWidth="2" strokeOpacity="0.4" className="animate-fade-in-line delay-1800" />
            <line x1="300" y1="50" x2="500" y2="10" stroke="hsl(var(--accent))" strokeWidth="2" strokeOpacity="0.4" className="animate-fade-in-line delay-1900" />
            <line x1="1000" y1="150" x2="1150" y2="200" stroke="hsl(var(--accent))" strokeWidth="2" strokeOpacity="0.4" className="animate-fade-in-line delay-2000" />
            <line x1="50" y1="200" x2="150" y2="300" stroke="hsl(var(--accent))" strokeWidth="2" strokeOpacity="0.4" className="animate-fade-in-line delay-2100" />
            <line x1="1050" y1="550" x2="1150" y2="650" stroke="hsl(var(--accent))" strokeWidth="2" strokeOpacity="0.4" className="animate-fade-in-line delay-2200" />
            <line x1="600" y1="50" x2="750" y2="150" stroke="hsl(var(--accent))" strokeWidth="2" strokeOpacity="0.4" className="animate-fade-in-line delay-2300" />
            <line x1="800" y1="0" x2="950" y2="100" stroke="hsl(var(--accent))" strokeWidth="2" strokeOpacity="0.4" className="animate-fade-in-line delay-2400" />
            <line x1="50" y1="600" x2="200" y2="650" stroke="hsl(var(--accent))" strokeWidth="2" strokeOpacity="0.4" className="animate-fade-in-line delay-2500" />

            {/* Nodos Brillantes: en color de acento con opacidades y radios variados para un efecto más natural */}
            <circle cx="100" cy="100" r="8" fill="hsl(var(--accent))" className="animate-pulse-light delay-0" />
            <circle cx="250" cy="150" r="10" fill="hsl(var(--accent))" className="animate-pulse-light delay-300" />
            <circle cx="400" cy="100" r="7" fill="hsl(var(--accent))" className="animate-pulse-light delay-600" />
            <circle cx="200" cy="300" r="9" fill="hsl(var(--accent))" className="animate-pulse-light delay-900" />
            <circle cx="500" cy="250" r="11" fill="hsl(var(--accent))" className="animate-pulse-light delay-1200" />
            <circle cx="350" cy="400" r="8" fill="hsl(var(--accent))" className="animate-pulse-light delay-1500" />
            <circle cx="650" cy="350" r="10" fill="hsl(var(--accent))" className="animate-pulse-light delay-1800" />
            <circle cx="550" cy="500" r="9" fill="hsl(var(--accent))" className="animate-pulse-light delay-2100" />
            <circle cx="800" cy="450" r="12" fill="hsl(var(--accent))" className="animate-pulse-light delay-2400" />
            <circle cx="700" cy="550" r="8" fill="hsl(var(--accent))" className="animate-pulse-light delay-2700" />
            <circle cx="900" cy="500" r="10" fill="hsl(var(--accent))" className="animate-pulse-light delay-3000" />
            <circle cx="150" cy="250" r="6" fill="hsl(var(--accent))" className="animate-pulse-light opacity-75 delay-100" />
            <circle cx="450" cy="200" r="9" fill="hsl(var(--accent))" className="animate-pulse-light opacity-60 delay-400" />
            <circle cx="750" cy="100" r="7" fill="hsl(var(--accent))" className="animate-pulse-light opacity-80 delay-700" />
            <circle cx="50" cy="400" r="8" fill="hsl(var(--accent))" className="animate-pulse-light opacity-70 delay-1000" />
            <circle cx="850" cy="300" r="10" fill="hsl(var(--accent))" className="animate-pulse-light opacity-90 delay-1300" />
            <circle cx="300" cy="50" r="5" fill="hsl(var(--accent))" className="animate-pulse-light opacity-50 delay-1600" />
            <circle cx="1000" cy="150" r="11" fill="hsl(var(--accent))" className="animate-pulse-light opacity-100 delay-1900" />
            <circle cx="50" cy="200" r="7" fill="hsl(var(--accent))" className="animate-pulse-light opacity-65 delay-2200" />
            <circle cx="1050" cy="550" r="9" fill="hsl(var(--accent))" className="animate-pulse-light opacity-85 delay-2500" />
            <circle cx="600" cy="50" r="6" fill="hsl(var(--accent))" className="animate-pulse-light opacity-70 delay-2800" />
            <circle cx="800" cy="0" r="10" fill="hsl(var(--accent))" className="animate-pulse-light opacity-95 delay-3100" />
            <circle cx="50" y1="600" r="8" fill="hsl(var(--accent))" className="animate-pulse-light opacity-70 delay-3400" />
            <circle cx="200" y1="650" r="7" fill="hsl(var(--accent))" className="animate-pulse-light opacity-60 delay-3700" />
            <circle cx="700" cy="10" r="3" fill="hsl(var(--accent))" className="animate-pulse-light opacity-40 delay-500" />
            <circle cx="950" cy="70" r="4" fill="hsl(var(--accent))" className="animate-pulse-light opacity-30 delay-1000" />
            <circle cx="1100" cy="250" r="3" fill="hsl(var(--accent))" className="animate-pulse-light opacity-50 delay-1500" />
            <circle cx="100" cy="500" r="4" fill="hsl(var(--accent))" className="animate-pulse-light opacity-35 delay-2000" />
            <circle cx="1150" cy="100" r="3" fill="hsl(var(--accent))" className="animate-pulse-light opacity-45 delay-2500" />
            <circle cx="500" cy="650" r="4" fill="hsl(var(--accent))" className="animate-pulse-light opacity-30 delay-3000" />
            <circle cx="10" cy="10" r="2" fill="hsl(var(--accent))" className="animate-pulse-light opacity-25 delay-3500" />
            <circle cx="1190" cy="690" r="2" fill="hsl(var(--accent))" className="animate-pulse-light opacity-20 delay-4000" />
          </svg>
        </div>
        {/* Decorative gradient blobs - manteniéndolos en color de acento y más sutiles */}
        <div className="absolute top-[-20%] left-[-25%] w-3/5 h-3/5 bg-accent/30 rounded-full filter blur-3xl opacity-70 animate-pulse z-10"></div>
        <div className="absolute bottom-[-20%] right-[-25%] w-3/5 h-4/5 bg-accent/25 rounded-full filter blur-3xl opacity-80 animate-pulse animation-delay-2000 z-10"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-20"> {/* Asegura que el contenido esté sobre el SVG */}
          <AnimatedOnScroll animation="fadeInUp" className="flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-4xl font-sora font-bold mb-6">Diagnóstico IA Estratégico <span className="text-primary">(GRATUITO)</span></h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
              ¿No sabes por dónde empezar? Nuestro diagnóstico IA gratuito te ayudará a identificar las oportunidades más impactantes para tu eCommerce. Habla con Leo IA y recibe un plan de acción personalizado.
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Es el primer paso ideal, sin compromiso, para entender cómo la IA puede impulsar tu crecimiento.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/ai-agent?prompt=Quiero+un+diagnóstico+IA+estratégico+para+mi+eCommerce">Iniciar Diagnóstico con Leo IA</Link>
            </Button>
          </AnimatedOnScroll>
        </div>
      </section>
      {/* FIN DE CAMBIO */}

      {/* 3.2 Sección "Resultados Reales con Aijolot" (KeyResultsSection.tsx) */}
      {/* Para esta sección, la modificación debe hacerse en el archivo KeyResultsSection.tsx */}
      <KeyResultsSection /> 

      <section className="relative py-16 md:py-24 bg-muted overflow-hidden">
        {/* Fondo generado con SVG - similar al Hero, ajustado para el color del acento */}
        <div className="absolute inset-0 z-0 opacity-60">
          <svg 
            className="w-full h-full" 
            viewBox="0 0 1200 700" 
            preserveAspectRatio="xMidYMid slice" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Líneas de Conexión: en color de acento con stroke-opacity */}
            <line x1="100" y1="100" x2="250" y2="150" stroke="hsl(var(--accent))" strokeWidth="2" strokeOpacity="0.4" className="animate-fade-in-line delay-100" />
            <line x1="250" y1="150" x2="400" y2="100" stroke="hsl(var(--accent))" strokeWidth="2" strokeOpacity="0.4" className="animate-fade-in-line delay-200" />
            <line x1="400" y1="100" x2="550" y2="150" stroke="hsl(var(--accent))" strokeWidth="2" strokeOpacity="0.4" className="animate-fade-in-line delay-300" />
            <line x1="250" y1="150" x2="200" y2="300" stroke="hsl(var(--accent))" strokeWidth="2" strokeOpacity="0.4" className="animate-fade-in-line delay-400" />
            <line x1="400" y1="100" x2="500" y2="250" stroke="hsl(var(--accent))" strokeWidth="2" strokeOpacity="0.4" className="animate-fade-in-line delay-500" />
            <line x1="200" y1="300" x2="350" y2="400" stroke="hsl(var(--accent))" strokeWidth="2" strokeOpacity="0.4" className="animate-fade-in-line delay-600" />
            <line x1="500" y1="250" x2="650" y2="350" stroke="hsl(var(--accent))" strokeWidth="2" strokeOpacity="0.4" className="animate-fade-in-line delay-700" />
            <line x1="350" y1="400" x2="550" y2="500" stroke="hsl(var(--accent))" strokeWidth="2" strokeOpacity="0.4" className="animate-fade-in-line delay-800" />
            <line x1="650" y1="350" x2="800" y2="450" stroke="hsl(var(--accent))" strokeWidth="2" strokeOpacity="0.4" className="animate-fade-in-line delay-900" />
            <line x1="550" y1="500" x2="700" y2="550" stroke="hsl(var(--accent))" strokeWidth="2" strokeOpacity="0.4" className="animate-fade-in-line delay-1000" />
            <line x1="800" y1="450" x2="900" y2="500" stroke="hsl(var(--accent))" strokeWidth="2" strokeOpacity="0.4" className="animate-fade-in-line delay-1100" />
            <line x1="700" y1="550" x2="1000" y2="600" stroke="hsl(var(--accent))" strokeWidth="2" strokeOpacity="0.4" className="animate-fade-in-line delay-1200" />
            <line x1="900" y1="500" x2="1100" y2="400" stroke="hsl(var(--accent))" strokeWidth="2" strokeOpacity="0.4" className="animate-fade-in-line delay-1300" />
            <line x1="150" y1="250" x2="300" y2="350" stroke="hsl(var(--accent))" strokeWidth="2" strokeOpacity="0.4" className="animate-fade-in-line delay-1400" />
            <line x1="450" y1="200" x2="600" y2="300" stroke="hsl(var(--accent))" strokeWidth="2" strokeOpacity="0.4" className="animate-fade-in-line delay-1500" />
            <line x1="750" y1="100" x2="900" y2="250" stroke="hsl(var(--accent))" strokeWidth="2" strokeOpacity="0.4" className="animate-fade-in-line delay-1600" />
            <line x1="50" y1="400" x2="200" y2="500" stroke="hsl(var(--accent))" strokeWidth="2" strokeOpacity="0.4" className="animate-fade-in-line delay-1700" />
            <line x1="850" y1="300" x2="1050" y2="350" stroke="hsl(var(--accent))" strokeWidth="2" strokeOpacity="0.4" className="animate-fade-in-line delay-1800" />
            <line x1="300" y1="50" x2="500" y2="10" stroke="hsl(var(--accent))" strokeWidth="2" strokeOpacity="0.4" className="animate-fade-in-line delay-1900" />
            <line x1="1000" y1="150" x2="1150" y2="200" stroke="hsl(var(--accent))" strokeWidth="2" strokeOpacity="0.4" className="animate-fade-in-line delay-2000" />
            <line x1="50" y1="200" x2="150" y2="300" stroke="hsl(var(--accent))" strokeWidth="2" strokeOpacity="0.4" className="animate-fade-in-line delay-2100" />
            <line x1="1050" y1="550" x2="1150" y2="650" stroke="hsl(var(--accent))" strokeWidth="2" strokeOpacity="0.4" className="animate-fade-in-line delay-2200" />
            <line x1="600" y1="50" x2="750" y2="150" stroke="hsl(var(--accent))" strokeWidth="2" strokeOpacity="0.4" className="animate-fade-in-line delay-2300" />
            <line x1="800" y1="0" x2="950" y2="100" stroke="hsl(var(--accent))" strokeWidth="2" strokeOpacity="0.4" className="animate-fade-in-line delay-2400" />
            <line x1="50" y1="600" x2="200" y2="650" stroke="hsl(var(--accent))" strokeWidth="2" strokeOpacity="0.4" className="animate-fade-in-line delay-2500" />

            {/* Nodos Brillantes: en color de acento con opacidades y radios variados para un efecto más natural */}
            <circle cx="100" cy="100" r="8" fill="hsl(var(--accent))" className="animate-pulse-light delay-0" />
            <circle cx="250" cy="150" r="10" fill="hsl(var(--accent))" className="animate-pulse-light delay-300" />
            <circle cx="400" cy="100" r="7" fill="hsl(var(--accent))" className="animate-pulse-light delay-600" />
            <circle cx="200" cy="300" r="9" fill="hsl(var(--accent))" className="animate-pulse-light delay-900" />
            <circle cx="500" cy="250" r="11" fill="hsl(var(--accent))" className="animate-pulse-light delay-1200" />
            <circle cx="350" cy="400" r="8" fill="hsl(var(--accent))" className="animate-pulse-light delay-1500" />
            <circle cx="650" cy="350" r="10" fill="hsl(var(--accent))" className="animate-pulse-light delay-1800" />
            <circle cx="550" cy="500" r="9" fill="hsl(var(--accent))" className="animate-pulse-light delay-2100" />
            <circle cx="800" cy="450" r="12" fill="hsl(var(--accent))" className="animate-pulse-light delay-2400" />
            <circle cx="700" cy="550" r="8" fill="hsl(var(--accent))" className="animate-pulse-light delay-2700" />
            <circle cx="900" cy="500" r="10" fill="hsl(var(--accent))" className="animate-pulse-light delay-3000" />
            <circle cx="150" cy="250" r="6" fill="hsl(var(--accent))" className="animate-pulse-light opacity-75 delay-100" />
            <circle cx="450" cy="200" r="9" fill="hsl(var(--accent))" className="animate-pulse-light opacity-60 delay-400" />
            <circle cx="750" cy="100" r="7" fill="hsl(var(--accent))" className="animate-pulse-light opacity-80 delay-700" />
            <circle cx="50" cy="400" r="8" fill="hsl(var(--accent))" className="animate-pulse-light opacity-70 delay-1000" />
            <circle cx="850" cy="300" r="10" fill="hsl(var(--accent))" className="animate-pulse-light opacity-90 delay-1300" />
            <circle cx="300" cy="50" r="5" fill="hsl(var(--accent))" className="animate-pulse-light opacity-50 delay-1600" />
            <circle cx="1000" cy="150" r="11" fill="hsl(var(--accent))" className="animate-pulse-light opacity-100 delay-1900" />
            <circle cx="50" cy="200" r="7" fill="hsl(var(--accent))" className="animate-pulse-light opacity-65 delay-2200" />
            <circle cx="1050" cy="550" r="9" fill="hsl(var(--accent))" className="animate-pulse-light opacity-85 delay-2500" />
            <circle cx="600" cy="50" r="6" fill="hsl(var(--accent))" className="animate-pulse-light opacity-70 delay-2800" />
            <circle cx="800" cy="0" r="10" fill="hsl(var(--accent))" className="animate-pulse-light opacity-95 delay-3100" />
            <circle cx="50" cy="600" r="8" fill="hsl(var(--accent))" className="animate-pulse-light opacity-70 delay-3400" />
            <circle cx="200" cy="650" r="7" fill="hsl(var(--accent))" className="animate-pulse-light opacity-60 delay-3700" />
            <circle cx="700" cy="10" r="3" fill="hsl(var(--accent))" className="animate-pulse-light opacity-40 delay-500" />
            <circle cx="950" cy="70" r="4" fill="hsl(var(--accent))" className="animate-pulse-light opacity-30 delay-1000" />
            <circle cx="1100" cy="250" r="3" fill="hsl(var(--accent))" className="animate-pulse-light opacity-50 delay-1500" />
            <circle cx="100" cy="500" r="4" fill="hsl(var(--accent))" className="animate-pulse-light opacity-35 delay-2000" />
            <circle cx="1150" cy="100" r="3" fill="hsl(var(--accent))" className="animate-pulse-light opacity-45 delay-2500" />
            <circle cx="500" cy="650" r="4" fill="hsl(var(--accent))" className="animate-pulse-light opacity-30 delay-3000" />
            <circle cx="10" cy="10" r="2" fill="hsl(var(--accent))" className="animate-pulse-light opacity-25 delay-3500" />
            <circle cx="1190" cy="690" r="2" fill="hsl(var(--accent))" className="animate-pulse-light opacity-20 delay-4000" />
          </svg>
        </div>
        {/* Decorative gradient blobs - manteniéndolos en color de acento y más sutiles */}
        <div className="absolute top-[-20%] left-[-25%] w-3/5 h-3/5 bg-accent/30 rounded-full filter blur-3xl opacity-70 animate-pulse z-10"></div>
        <div className="absolute bottom-[-20%] right-[-25%] w-3/5 h-4/5 bg-accent/25 rounded-full filter blur-3xl opacity-80 animate-pulse animation-delay-2000 z-10"></div>
        
        <div className="container mx-auto px-4 md:px-6 text-center relative z-20">
          <AnimatedOnScroll animation="fadeInUp">
            <h2 className="text-3xl md:text-4xl font-sora font-bold mb-6">¿Listo para potenciar tu eCommerce?</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Hablemos sobre tus desafíos y cómo Aijolot puede ayudarte a alcanzar tus metas con inteligencia artificial.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6">
              <Link href="/contact">Contacta Ahora</Link>
            </Button>
          </AnimatedOnScroll>
        </div>
      </section>
    </>
  );
}
