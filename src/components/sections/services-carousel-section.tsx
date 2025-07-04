// src/components/sections/services-carousel-section.tsx

'use client';
import { Button } from '@/components/ui/button';
import AnimatedOnScroll from '@/components/utils/animated-on-scroll';
import Link from 'next/link';
import { ShoppingCart, Share2, Package, TrendingUp } from 'lucide-react'; // Importar iconos necesarios

const agenticSolutions = [
  {
    id: "agentic-commerce",
    icon: <ShoppingCart className="w-6 h-6 text-primary" />,
    title: "Agentic Commerce",
    description: "Transforma la experiencia de compra y venta con agentes que entienden, asisten y convierten.",
    benefits: [
      "Personal Shopper IA que guía al usuario en su compra.",
      "Automatización de pedidos B2B y procesos de cotización complejos.",
      "Buscador inteligente y filtros de categoría basados en lenguaje natural (prompts).",
      "Resolución de preguntas y objeciones en tiempo real en la página de producto.",
    ],
    // Añadido para el botón
    ctaText: "Más sobre Agentic Commerce",
    ctaLink: "/services#agentes-ia", // Enlace a la página de servicios o al diagnóstico
  },
  {
    id: "agentic-marketing",
    icon: <Share2 className="w-6 h-6 text-primary" />,
    title: "Agentic Marketing",
    description: "Automatiza y optimiza tu estrategia de marketing para un alcance y una eficiencia sin precedentes.",
    benefits: [
      "Agentes que optimizan campañas de medios y ajustan presupuestos en tiempo real.",
      "Generación de contenido orgánico para redes sociales y blogs alineado a tendencias.",
      "Optimización SEO continua de tu sitio analizando a la competencia.",
      "Captación, cualificación y seguimiento automático de leads.",
    ],
    // Añadido para el botón
    ctaText: "Más sobre Agentic Marketing",
    ctaLink: "/services#inteligencia-negocio", // Enlace a la página de servicios o al diagnóstico
  },
  {
    id: "agentic-product",
    icon: <Package className="w-6 h-6 text-primary" />,
    title: "Agentic Product",
    description: "Mejora continua de tu producto digital basada en datos y experimentación automatizada.",
    benefits: [
      "Análisis de cuellos de botella y problemas de performance en tu sitio.",
      "Elaboración de roadmaps de producto y priorización de mejoras.",
      "Diseño y ejecución de experimentos A/B para optimizar la conversión.",
      "Creación de definiciones de funcionalidades y gestión de backlogs.",
    ],
    // Añadido para el botón
    ctaText: "Más sobre Agentic Product",
    ctaLink: "/services#contenido-inteligente", // Enlace a la página de servicios o al diagnóstico
  },
  {
    id: "agentic-analytics-ops",
    icon: <TrendingUp className="w-6 h-6 text-primary" />,
    title: "Agentic Analytics & Ops",
    description: "Inteligencia y automatización para el corazón de tu negocio: tus datos y operaciones.",
    benefits: [
      "Análisis e interpretación de datos de negocio en tiempo real.",
      "Mejoras en la gestión de inventarios y predicción de demanda.",
      "Automatización de procesos: compra de guías, cobranza, ajustes de precios.",
      "Optimización de cualquier proceso interno que necesite tu empresa.",
    ],
    // Añadido para el botón
    ctaText: "Más sobre Analytics & Ops",
    ctaLink: "/services#optimizacion-crecimiento", // Enlace a la página de servicios o al diagnóstico
  },
];

export function ServicesCarouselSection() {
  const duplicatedLogos = [...agenticSolutions, ...agenticSolutions];

  return (
    <section id="soluciones-ia" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="md:grid md:grid-cols-12 md:gap-8 lg:gap-12 items-start">
          <div className="md:col-span-4 lg:col-span-4 xl:col-span-3 md:sticky md:top-28 lg:top-32 h-fit self-start mb-10 md:mb-0">
            <AnimatedOnScroll animation="fadeInLeft" className="text-center md:text-left">
              <div className="inline-block md:block mb-3">
                <div className="w-10 h-0.5 bg-primary mb-1 mx-auto md:mx-0"></div>
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                  CAPÍTULO 04: Soluciones IA
                </p>
              </div>
              <h2 className="text-3xl md:text-4xl font-sora font-bold mb-4">
                Soluciones IA de Próxima Generación
              </h2>
            </AnimatedOnScroll>
          </div>

          <div className="md:col-span-8 lg:col-span-8 xl:col-span-9">
            <div className="hidden md:block h-80" />

            <AnimatedOnScroll animation="fadeInUp" className="text-center md:text-left">
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto md:mx-0 mb-12">
                Orquestamos agentes de IA especializados que colaboran para ejecutar tareas complejas y potenciar cada área de tu negocio.
              </p>
            </AnimatedOnScroll>
            
            <div className="space-y-12 max-w-4xl mx-auto">
              {agenticSolutions.map((solution, index) => (
                <AnimatedOnScroll key={solution.id} animation="fadeInUp" delay={index * 100}>
                  <div className="grid md:grid-cols-3 gap-8 items-start">
                    <div className="md:col-span-1">
                      <div className="flex items-center gap-3 mb-4 md:mb-0">
                        <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                          {solution.icon}
                        </div>
                        <h3 className="text-2xl font-sora font-bold">{solution.title}</h3>
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-foreground/90 mb-4">{solution.description}</p>
                      <ul className="space-y-2 text-muted-foreground checklist">
                        {solution.benefits.map((benefit, bIndex) => (
                          <li key={bIndex}>{benefit}</li>
                        ))}
                      </ul>
                      {/* INICIO DE CAMBIO: Botón primario añadido */}
                      <Button asChild className="mt-6 bg-primary hover:bg-primary/90 text-primary-foreground">
                        <Link href={solution.ctaLink}>{solution.ctaText}</Link>
                      </Button>
                      {/* FIN DE CAMBIO */}
                    </div>
                  </div>
                  {index < agenticSolutions.length - 1 && (
                    <div className="border-b border-border my-6 md:my-10"></div>
                  )}
                </AnimatedOnScroll>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
