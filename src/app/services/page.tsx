'use client';

import { ServiceCard } from '@/components/sections/service-card';
import { Button } from '@/components/ui/button';
import AnimatedOnScroll from '@/components/utils/animated-on-scroll';
import { ShoppingCart, Share2, Package, TrendingUp, Users } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { analytics } from '@/lib/analytics';

const agenticSolutions = [
  {
    id: "agentic-commerce",
    icon: <ShoppingCart className="w-8 h-8 text-primary" />,
    title: "Agentic Commerce",
    description: "Transforma la experiencia de compra y venta con agentes que entienden, asisten y convierten.",
    problem: "Baja conversión, atención al cliente saturada y experiencias impersonales.",
    solution: "Implementamos agentes inteligentes que guían al usuario, resuelven dudas 24/7, personalizan recomendaciones y cierran ventas de forma autónoma.",
    benefits: [
      "Personal Shopper IA que guía al usuario en su compra.",
      "Automatización de pedidos B2B y procesos de cotización complejos.",
      "Buscador inteligente y filtros de categoría basados en lenguaje natural (prompts).",
      "Resolución de preguntas y objeciones en tiempo real en la página de producto.",
    ],
    integrations: [
      { src: "/shopify_logo.png", alt: "Shopify", hint: "shopify ecommerce platform" },
      { src: "/bigcommerce_logo.png", alt: "Bigcommerce", hint: "bigcommerce ecommerce platform" },
      { src: "/vtex_logo.png", alt: "vtex", hint: "vtex commerce platform" },
      { src: "/salesforce_logo.png", alt: "Salesforce", hint: "Salesforce commerce platform" },
      { src: "/mercadolibre_logo.png", alt: "mercadolibre", hint: "mercadolibre marketplace platform" }
    ],
    ctaText: "Más sobre Agentic Commerce",
    ctaLink: "/servicios/agentic-commerce",
  },
  {
    id: "agentic-marketing",
    icon: <Share2 className="w-8 h-8 text-primary" />,
    title: "Agentic Marketing",
    description: "Automatiza y optimiza tu estrategia de marketing para un alcance y una eficiencia sin precedentes.",
    problem: "Campañas de marketing con bajo ROI, dificultad para segmentar audiencias y optimizar la inversión publicitaria.",
    solution: "Aplicamos IA para analizar el rendimiento de campañas, identificar audiencias de alto valor, automatizar pujas, personalizar anuncios y optimizar el customer journey.",
    benefits: [
      "Agentes que optimizan campañas de medios y ajustan presupuestos en tiempo real.",
      "Generación de contenido orgánico para redes sociales y blogs alineado a tendencias.",
      "Optimización SEO continua de tu sitio analizando a la competencia.",
      "Captación, cualificación y seguimiento automático de leads.",
    ],
    integrations: [
      { src: "/facebook_logo.png", alt: "Facebook", hint: "facebook platform" },
      { src: "/google_ads_logo.png", alt: "Google Ads", hint: "google advertising platform" },
      { src: "/hubspot_logo.png", alt: "HubSpot", hint: "hubspot marketing automation" },
      { src: "/hootsuite_logo.png", alt: "Hotsuite", hint: "hootsuite social media marketing" },
      { src: "/instagram_logo.png", alt: "Instagram", hint: "instagram social media platform" },
      { src: "/klaviyo_logo.png", alt: "Klaviyo", hint: "Klaviyo marketing automation" },
      { src: "/messenger_logo.png", alt: "Messenger", hint: "Messenger social messaging" },
      { src: "/meta_ads_logo.png", alt: "Meta ads", hint: "Meta advertising platform" },
      { src: "/search_console_logo.png", alt: "Search Console", hint: "Search Console" },
      { src: "/whatsapp_logo.png", alt: "WhatsApp", hint: "Whatsapp messages" }
    ],
    ctaText: "Más sobre Agentic Marketing",
    ctaLink: "/servicios/agentic-marketing",
  },
  {
    id: "agentic-product",
    icon: <Package className="w-8 h-8 text-primary" />,
    title: "Agentic Product",
    description: "Mejora continua de tu producto digital basada en datos y experimentación automatizada.",
    problem: "Dificultad para identificar problemas de performance, priorizar mejoras y optimizar la experiencia del usuario.",
    solution: "Implementamos agentes que analizan el performance, crean roadmaps, ejecutan experimentos A/B y gestionan el desarrollo de funcionalidades.",
    benefits: [
      "Análisis de cuellos de botella y problemas de performance en tu sitio.",
      "Elaboración de roadmaps de producto y priorización de mejoras.",
      "Diseño y ejecución de experimentos A/B para optimizar la conversión.",
      "Creación de definiciones de funcionalidades y gestión de backlogs.",
    ],
    integrations: [
      { src: "/atlassian_logo.png", alt: "Atlassian", hint: "atlassian product management platform" },
      { src: "/monday_logo.png", alt: "Monday.com", hint: "monday.com project management tool" },
      { src: "/github_logo.png", alt: "GitHub", hint: "github code repository" },
      { src: "/figma_logo.png", alt: "Figma", hint: "figma design tool" },
      { src: "/notion_logo.png", alt: "Notion", hint: "notion productivity workspace" }
    ],
    ctaText: "Más sobre Agentic Product",
    ctaLink: "/servicios/agentic-product",
  },
  {
    id: "agentic-analytics-ops",
    icon: <TrendingUp className="w-8 h-8 text-primary" />,
    title: "Agentic Analytics & Ops",
    description: "Inteligencia y automatización para el corazón de tu negocio: tus datos y operaciones.",
    problem: "Toma de decisiones basada en intuición, dificultad para predecir tendencias y optimizar inventarios.",
    solution: "Desarrollamos dashboards interactivos y modelos predictivos que analizan grandes volúmenes de datos para revelar insights, prever demanda, optimizar precios y personalizar ofertas.",
    benefits: [
      "Análisis e interpretación de datos de negocio en tiempo real.",
      "Mejoras en la gestión de inventarios y predicción de demanda.",
      "Automatización de procesos: compra de guías, cobranza, ajustes de precios.",
      "Optimización de cualquier proceso interno que necesite tu empresa.",
    ],
    integrations: [
      { src: "/google_analytics_logo.png", alt: "Google Analytics", hint: "google analytics platform" },
      { src: "/big_query_logo.png", alt: "BigQuery", hint: "BigQuery data wharehousing" },
      { src: "/gmail_logo.png", alt: "Gmail", hint: "Gmail email platform" },
      { src: "/salesforce_logo.png", alt: "Salesforce", hint: "salesforce crm platform" },
      { src: "/google_calendar_logo.png", alt: "Google Calendar", hint: "Google Calendar platform" },
      { src: "/looker_studio_logo.png", alt: "Looker Studio", hint: "Looker Studio data visualization" },
      { src: "/odoo_logo.png", alt: "Odoo", hint: "Odoo ERP platform" },
      { src: "/outlook_logo.png", alt: "Outlook", hint: "Outlook email platform" },
      { src: "/sap_logo.png", alt: "Sap", hint: "Sap ERP platform" },
    ],
    ctaText: "Más sobre Analytics & Ops",
    ctaLink: "/servicios/agentic-analytics",
  },
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
      <AnimatedOnScroll animation="fadeInUp">
        <header className="text-center mb-12 md:mb-16">
          <div className="mb-6">
            <div className="w-10 h-0.5 bg-primary mb-2 mx-auto"></div>
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              CAPÍTULO 04: Soluciones IA
            </p>
          </div>
          <h1 className="text-4xl md:text-6xl font-sora font-bold mb-4">
            Soluciones <span className="text-cyan-400">IA</span> de Próxima Generación
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Orquestamos agentes de IA especializados que colaboran para ejecutar tareas complejas y potenciar cada área de tu negocio.
          </p>
        </header>
      </AnimatedOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {agenticSolutions.map((solution, index) => (
          <AnimatedOnScroll key={solution.id} animation="fadeInUp" delay={index * 100}>
            <div className="bg-card rounded-lg shadow-lg border border-primary/20 p-6 h-full hover:shadow-xl transition-shadow flex flex-col min-h-[700px]">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                  {solution.icon}
                </div>
                <h3 className="text-2xl font-sora font-semibold text-foreground">{solution.title}</h3>
              </div>
              <p className="text-muted-foreground mb-4">{solution.description}</p>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-foreground mb-2">Problema:</h4>
                <p className="text-sm text-muted-foreground">{solution.problem}</p>
              </div>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-foreground mb-2">Solución:</h4>
                <p className="text-sm text-muted-foreground">{solution.solution}</p>
              </div>
              
              <div className="mb-6 flex-grow">
                <h4 className="text-sm font-semibold text-foreground mb-2">Beneficios:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground checklist">
                  {solution.benefits.map((benefit, bIndex) => (
                    <li key={bIndex}>{benefit}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-auto">
                <div className="mb-6">
                  <p className="text-sm font-semibold text-muted-foreground mb-3">Nos integramos con:</p>
                  <div className="relative w-full overflow-hidden">
                    <div className="flex w-fit animate-marquee-horizontal">
                      {[...solution.integrations, ...solution.integrations].map((integration, iIndex) => (
                        <Image
                          key={iIndex}
                          src={integration.src}
                          alt={integration.alt}
                          width={60}
                          height={30}
                          className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all mx-3 flex-shrink-0 h-6 w-auto object-contain"
                          data-ai-hint={integration.hint}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                
                <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground w-full">
                  <Link 
                    href={solution.ctaLink}
                    onClick={() => analytics.trackServiceClick(solution.id, solution.title, solution.ctaLink)}
                  >
                    {solution.ctaText}
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedOnScroll>
        ))}
      </div>

      <AnimatedOnScroll animation="fadeInUp">
        <section id="diagnostico" className="relative z-20">
          <div className="container mx-auto px-6 py-20">
            <div className="gradient-bg rounded-2xl p-10 md:p-16 text-center text-white flex flex-col items-center">
              <h2 className="text-[60px] leading-tight font-sora font-bold mb-4 text-white">
                Inicia con un <span className="text-cyan-400">Diagnóstico IA</span> Estratégico
              </h2>
              <p className="text-lg text-white/80 max-w-3xl mx-auto mb-8">
                ¿No sabes por dónde empezar? Es normal. Habla con nuestro agente Aijolot y recibe en minutos un plan de acción personalizado, identificando las oportunidades de mayor impacto para tu Empresa.
              </p>
              <div className="flex flex-col items-center">
                <Button asChild size="default" className="bg-primary hover:bg-primary/90 text-primary-foreground shine-button">
                  <Link href="/ai-agent?prompt=Quiero+un+diagnóstico+IA+estratégico+para+mi+eCommerce">
                    Hablar con Aijolot 
                    <Image 
                      src="/chat_emoji.png" 
                      alt="Chat Emoji" 
                      width={30} 
                      height={20} 
                      className="ml-2" 
                    />
                  </Link>
                </Button>
                <p className="text-xs text-white/60 mt-3">Recibe tu análisis en menos de 5 minutos. Sin compromiso.</p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedOnScroll>
    </div>
  );
}
