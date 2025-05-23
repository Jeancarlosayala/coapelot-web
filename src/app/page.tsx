
import { HeroSection } from '@/components/hero-section';
import { OurValuesSection } from '@/components/sections/our-values-section';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AnimatedOnScroll from '@/components/utils/animated-on-scroll';
import { ArrowRight, Bot, BrainCircuit, Lightbulb, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const features = [
  {
    icon: <Bot className="w-10 h-10 text-primary" />,
    title: "Agentes IA Avanzados",
    description: "Automatiza ventas y mejora la experiencia del cliente con IA conversacional.",
    link: "/services#agentes-ia"
  },
  {
    icon: <BrainCircuit className="w-10 h-10 text-primary" />,
    title: "Inteligencia de Negocio",
    description: "Toma decisiones estratégicas basadas en datos con análisis predictivos y dashboards IA.",
    link: "/services#inteligencia-negocio"
  },
  {
    icon: <Zap className="w-10 h-10 text-primary" />,
    title: "Contenido Inteligente",
    description: "Genera contenido personalizado y optimizado para SEO con GenAI, impulsando tu alcance.",
    link: "/services#contenido-inteligente"
  },
  {
    icon: <Lightbulb className="w-10 h-10 text-primary" />,
    title: "Innovación a Medida",
    description: "Desarrollamos soluciones IA únicas para tus desafíos específicos de eCommerce.",
    link: "/services#innovacion-ia"
  }
];

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <OurValuesSection />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedOnScroll animation="fadeInUp">
            <h2 className="text-3xl md:text-4xl font-sora font-bold text-center mb-4">
              Transforma tu eCommerce con IA
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-12">
              Descubre cómo nuestras soluciones de inteligencia artificial pueden revolucionar tu negocio, optimizar procesos y crear experiencias de cliente inolvidables.
            </p>
          </AnimatedOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <AnimatedOnScroll key={feature.title} animation="fadeInUp" delay={index * 150}>
                <Card className="h-full flex flex-col hover:shadow-primary/20 hover:shadow-lg transition-shadow duration-300 border-border hover:border-primary/50">
                  <CardHeader className="items-center text-center">
                    <div className="p-3 rounded-full bg-primary/10 mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle className="font-sora text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow text-center">
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                  <div className="p-6 pt-0 text-center">
                     <Button variant="link" asChild className="text-primary hover:text-primary/80">
                        <Link href={feature.link}>Saber más <ArrowRight className="ml-2 h-4 w-4"/></Link>
                     </Button>
                  </div>
                </Card>
              </AnimatedOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-800/20 dark:bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedOnScroll animation="fadeInLeft">
              <Image
                src="https://placehold.co/600x450.png"
                alt="Diagnóstico IA Estratégico"
                width={600}
                height={450}
                className="rounded-lg shadow-xl object-cover"
                data-ai-hint="strategy meeting"
              />
            </AnimatedOnScroll>
            <AnimatedOnScroll animation="fadeInRight">
              <h2 className="text-3xl md:text-4xl font-sora font-bold mb-6">Diagnóstico IA Estratégico <span className="text-primary">(GRATUITO)</span></h2>
              <p className="text-lg text-muted-foreground mb-6">
                ¿No sabes por dónde empezar? Nuestro diagnóstico IA gratuito te ayudará a identificar las oportunidades más impactantes para tu eCommerce. Habla con Leo IA y recibe un plan de acción personalizado.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Es el primer paso ideal, sin compromiso, para entender cómo la IA puede impulsar tu crecimiento.
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/ai-agent?prompt=Quiero+un+diagnóstico+IA+estratégico+para+mi+eCommerce">Iniciar Diagnóstico con Leo IA</Link>
              </Button>
            </AnimatedOnScroll>
          </div>
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
