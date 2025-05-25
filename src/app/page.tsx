
import { HeroSection } from '@/components/hero-section';
import { OurValuesSection } from '@/components/sections/our-values-section';
import { ServicesCarouselSection } from '@/components/sections/services-carousel-section'; 
import { Button } from '@/components/ui/button';
import AnimatedOnScroll from '@/components/utils/animated-on-scroll';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <OurValuesSection />
      <ServicesCarouselSection />

      <section className="py-10 md:py-12 bg-muted"> {/* Reduced padding and changed background */}
        <div className="container mx-auto px-4 md:px-6">
          {/* Removed grid and image, content is now centered */}
          <AnimatedOnScroll animation="fadeInUp" className="flex flex-col items-center text-center"> {/* Centering classes and new animation */}
            <h2 className="text-3xl md:text-4xl font-sora font-bold mb-6">Diagnóstico IA Estratégico <span className="text-primary">(GRATUITO)</span></h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl"> {/* max-w added for better readability when centered */}
              ¿No sabes por dónde empezar? Nuestro diagnóstico IA gratuito te ayudará a identificar las oportunidades más impactantes para tu eCommerce. Habla con Leo IA y recibe un plan de acción personalizado.
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl"> {/* max-w added */}
              Es el primer paso ideal, sin compromiso, para entender cómo la IA puede impulsar tu crecimiento.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/ai-agent?prompt=Quiero+un+diagnóstico+IA+estratégico+para+mi+eCommerce">Iniciar Diagnóstico con Leo IA</Link>
            </Button>
          </AnimatedOnScroll>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
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
