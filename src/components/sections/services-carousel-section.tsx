
'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AnimatedOnScroll from '@/components/utils/animated-on-scroll';
import { ArrowRight, Bot, BrainCircuit, Lightbulb, Zap, TrendingUp } from 'lucide-react';
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
    icon: <TrendingUp className="w-10 h-10 text-primary" />,
    title: "Crecimiento en Copaelot",
    description: "Mejora tu ROAS, optimiza el UX/UI, Transforma tu canal en un producto con nuevas ideas de funcionalidades.",
    link: "/services#crecimiento-copaelot"
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

export function ServicesCarouselSection() {
  return (
    <section className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="md:grid md:grid-cols-12 md:gap-8 lg:gap-12 items-start">
          {/* Left Sticky Column */}
          <div className="md:col-span-4 lg:col-span-4 xl:col-span-3 md:sticky md:top-28 lg:top-32 h-fit self-start mb-10 md:mb-0">
            <AnimatedOnScroll animation="fadeInLeft" className="text-center md:text-left">
              <div className="inline-block md:block mb-3">
                <div className="w-10 h-0.5 bg-primary mb-1 mx-auto md:mx-0"></div>
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                  CAPÍTULO 03: Nuestros Servicios
                </p>
              </div>
              <h2 className="text-3xl md:text-4xl font-sora font-bold mb-4">
                Transforma tu eCommerce con IA
              </h2>
            </AnimatedOnScroll>
          </div>

          {/* Right Scrolling Content Column */}
          <div className="md:col-span-8 lg:col-span-8 xl:col-span-9">
            <AnimatedOnScroll animation="fadeInUp" className="text-center md:text-left">
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto md:mx-0 mb-12">
                Descubre cómo nuestras soluciones de inteligencia artificial pueden revolucionar tu negocio, optimizar procesos y crear experiencias de cliente inolvidables.
              </p>
            </AnimatedOnScroll>

            {/* Cards Horizontal Scroll Container */}
            <AnimatedOnScroll animation="fadeInUp" delay={200}>
              <div className="flex overflow-x-auto space-x-6 sm:space-x-8 md:space-x-8 lg:space-x-10 pb-8 pt-2 scrollbar-hide snap-x snap-mandatory items-stretch -mx-4 px-4 md:-mx-6 md:px-6">
                {features.map((feature, index) => (
                  <div 
                    key={feature.title} 
                    className="flex-none snap-center w-[85%] sm:w-[70%] md:w-[calc(50%-theme(spacing.3))] lg:w-[calc(33.333%-theme(spacing.4))]"
                  >
                    <AnimatedOnScroll animation="scaleUp" delay={index * 100} className="h-full">
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
                  </div>
                ))}
              </div>
            </AnimatedOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
