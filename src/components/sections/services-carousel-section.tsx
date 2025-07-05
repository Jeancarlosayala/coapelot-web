// src/components/sections/services-carousel-section.tsx

'use client';
import { Button } from '@/components/ui/button';
import AnimatedOnScroll from '@/components/utils/animated-on-scroll';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart, Share2, Package, TrendingUp } from 'lucide-react'; // Importar iconos necesarios
import { analytics } from '@/lib/analytics';

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
    integrations: [
      { src: "/shopify-logo.png", alt: "Shopify", hint: "shopify ecommerce platform" },
      { src: "/woocommerce-logo.png", alt: "WooCommerce", hint: "woocommerce wordpress plugin" },
      { src: "/magento-logo.png", alt: "Magento", hint: "magento ecommerce platform" },
      { src: "/stripe-logo.png", alt: "Stripe", hint: "stripe payment processor" },
      { src: "/paypal-logo.png", alt: "PayPal", hint: "paypal payment service" }
    ],
    ctaText: "Más sobre Agentic Commerce",
    ctaLink: "/servicios/agentic-commerce",
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
    integrations: [
      { src: "/facebook-ads-logo.png", alt: "Facebook Ads", hint: "facebook advertising platform" },
      { src: "/google-ads-logo.png", alt: "Google Ads", hint: "google advertising platform" },
      { src: "/hubspot-logo.png", alt: "HubSpot", hint: "hubspot marketing automation" },
      { src: "/mailchimp-logo.png", alt: "Mailchimp", hint: "mailchimp email marketing" },
      { src: "/instagram-logo.png", alt: "Instagram", hint: "instagram social media platform" }
    ],
    ctaText: "Más sobre Agentic Marketing",
    ctaLink: "/servicios/agentic-marketing",
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
    integrations: [
      { src: "/jira-logo.png", alt: "Jira", hint: "jira project management tool" },
      { src: "/github-logo.png", alt: "GitHub", hint: "github code repository" },
      { src: "/figma-logo.png", alt: "Figma", hint: "figma design tool" },
      { src: "/slack-logo.png", alt: "Slack", hint: "slack communication platform" },
      { src: "/notion-logo.png", alt: "Notion", hint: "notion productivity workspace" }
    ],
    ctaText: "Más sobre Agentic Product",
    ctaLink: "/servicios/agentic-product",
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
    integrations: [
      { src: "/google-analytics-logo.png", alt: "Google Analytics", hint: "google analytics platform" },
      { src: "/tableau-logo.png", alt: "Tableau", hint: "tableau data visualization" },
      { src: "/zapier-logo.png", alt: "Zapier", hint: "zapier automation platform" },
      { src: "/salesforce-logo.png", alt: "Salesforce", hint: "salesforce crm platform" },
      { src: "/excel-logo.png", alt: "Microsoft Excel", hint: "microsoft excel spreadsheet" }
    ],
    ctaText: "Más sobre Analytics & Ops",
    ctaLink: "/servicios/agentic-analytics",
  },
];

export function ServicesCarouselSection() {

  return (
    <section id="soluciones-ia" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-x-12 lg:gap-x-20">
          {/* Left Sticky Column */}
          <div className="md:sticky md:top-24 h-fit self-start mb-12 md:mb-0">
            <AnimatedOnScroll animation="fadeInLeft">
              <div>
                <div className="mb-3">
                  <div className="w-10 h-0.5 bg-primary mb-1"></div>
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    CAPÍTULO 04: Soluciones IA
                  </p>
                </div>
                <h2 className="text-[60px] leading-tight font-sora font-bold mb-4">
                  Soluciones <span className="text-cyan-400">IA</span> de Próxima Generación
                </h2>
              </div>
            </AnimatedOnScroll>
          </div>

          {/* Right Scrolling Column */}
          <div className="space-y-10 md:space-y-12">
            <AnimatedOnScroll animation="fadeInUp">
              <p className="text-[1.625rem] leading-relaxed text-muted-foreground">
                Orquestamos agentes de IA especializados que colaboran para ejecutar tareas complejas y potenciar cada área de tu negocio.
              </p>
            </AnimatedOnScroll>
            
            <div className="space-y-16">
              {agenticSolutions.map((solution, index) => (
                <AnimatedOnScroll 
                  key={solution.id} 
                  animation="fadeInUp" 
                  delay={100 + index * 150}
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                        {solution.icon}
                      </div>
                      <h3 className="text-2xl font-sora font-semibold text-foreground">{solution.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">{solution.description}</p>
                    <ul className="space-y-2 text-muted-foreground checklist mb-6">
                      {solution.benefits.map((benefit, bIndex) => (
                        <li key={bIndex}>{benefit}</li>
                      ))}
                    </ul>
                    
                    {/* Integrations Section */}
                    <div className="mb-6">
                      <p className="text-sm font-semibold text-muted-foreground mb-3">Nos integramos con:</p>
                      <div className="relative w-full overflow-hidden">
                        <div className="flex w-fit animate-marquee-horizontal">
                          {[...solution.integrations, ...solution.integrations].map((integration, iIndex) => (
                            <Image
                              key={iIndex}
                              src={integration.src}
                              alt={integration.alt}
                              width={80}
                              height={40}
                              className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all mx-4 flex-shrink-0 h-8 w-auto object-contain"
                              data-ai-hint={integration.hint}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      <Link 
                        href={solution.ctaLink}
                        onClick={() => analytics.trackServiceClick(solution.id, solution.title, solution.ctaLink)}
                      >
                        {solution.ctaText}
                      </Link>
                    </Button>
                  </div>
                </AnimatedOnScroll>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
