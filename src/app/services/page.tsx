import { ServiceCard } from '@/components/sections/service-card';
import { Button } from '@/components/ui/button';
import AnimatedOnScroll from '@/components/utils/animated-on-scroll';
import { BarChart3, Bot, Brain, Lightbulb, Rocket, Users } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Servicios IA para eCommerce',
  description: 'Descubre nuestras soluciones inteligentes para transformar tu eCommerce con Inteligencia Artificial.',
};

const services = [
  {
    id: 'agentes-ia',
    icon: <Bot size={32} />,
    title: 'Agentes IA para Ventas y Experiencia del Cliente',
    problem: 'Baja conversión, atención al cliente saturada y experiencias impersonales.',
    solution: 'Implementamos chatbots y voicebots inteligentes que guían a los usuarios, resuelven dudas 24/7, personalizan recomendaciones y cierran ventas de forma autónoma.',
    benefits: [
      'Aumento de la tasa de conversión.',
      'Mejora de la satisfacción del cliente.',
      'Reducción de costos operativos.',
      'Disponibilidad 24/7.',
    ],
  },
  {
    id: 'inteligencia-negocio',
    icon: <BarChart3 size={32} />,
    title: 'Inteligencia de Negocio con IA',
    problem: 'Toma de decisiones basada en intuición, dificultad para predecir tendencias y optimizar inventarios.',
    solution: 'Desarrollamos dashboards interactivos y modelos predictivos que analizan grandes volúmenes de datos para revelar insights, prever demanda, optimizar precios y personalizar ofertas.',
    benefits: [
      'Decisiones estratégicas informadas.',
      'Optimización de inventario y precios.',
      'Identificación de nuevas oportunidades.',
      'Mejora de la rentabilidad.',
    ],
  },
  {
    id: 'contenido-inteligente',
    icon: <Brain size={32} />,
    title: 'Contenido Inteligente y Personalización con GenAI',
    problem: 'Creación de contenido lenta y costosa, dificultad para personalizar a escala y bajo engagement.',
    solution: 'Utilizamos GenAI para crear descripciones de producto atractivas, artículos de blog optimizados para SEO, emails personalizados y creatividades publicitarias de forma masiva y eficiente.',
    benefits: [
      'Ahorro de tiempo y costos en creación de contenido.',
      'Mejora del SEO y tráfico orgánico.',
      'Mayor engagement y personalización.',
      'Escalabilidad en la producción de contenido.',
    ],
  },
  {
    id: 'optimizacion-crecimiento',
    icon: <Rocket size={32} />,
    title: 'Optimización de Crecimiento Digital con IA',
    problem: 'Campañas de marketing con bajo ROI, dificultad para segmentar audiencias y optimizar la inversión publicitaria.',
    solution: 'Aplicamos IA para analizar el rendimiento de campañas, identificar audiencias de alto valor, automatizar pujas, personalizar anuncios y optimizar el customer journey.',
    benefits: [
      'Maximización del ROI en marketing digital.',
      'Segmentación de audiencias más precisa.',
      'Mejora de la eficiencia publicitaria.',
      'Personalización de la experiencia omnicanal.',
    ],
  },
  {
    id: 'innovacion-ia',
    icon: <Lightbulb size={32} />,
    title: 'Innovación y Soluciones IA a Medida',
    problem: 'Desafíos únicos de tu eCommerce que no se resuelven con herramientas estándar.',
    solution: 'Co-creamos soluciones IA personalizadas, desde sistemas de recomendación avanzados hasta herramientas de detección de fraude o logística inteligente, adaptadas a tus necesidades específicas.',
    benefits: [
      'Soluciones únicas para ventajas competitivas.',
      'Resolución de problemas complejos.',
      'Impulso a la innovación interna.',
      'Adaptabilidad y escalabilidad total.',
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
      <AnimatedOnScroll animation="fadeInUp">
        <header className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-sora font-bold mb-4">
            Soluciones Inteligentes para tu eCommerce
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Transformamos Desafíos de eCommerce en Oportunidades con IA. Descubre cómo cada servicio resuelve problemas específicos y genera valor real.
          </p>
        </header>
      </AnimatedOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {services.map((service, index) => (
          <ServiceCard key={service.id} {...service} animationDelay={index * 100} />
        ))}
      </div>

      <AnimatedOnScroll animation="fadeInUp">
        <section id="diagnostico-ia" className="py-12 md:py-16 bg-card rounded-lg shadow-xl border border-primary/30">
          <div className="container mx-auto px-6 text-center">
            <Users size={48} className="mx-auto text-primary mb-6" />
            <h2 className="text-3xl md:text-4xl font-sora font-bold mb-6">
              Diagnóstico IA Estratégico (GRATUITO)
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              ¿No estás seguro por dónde empezar? Nuestro diagnóstico IA gratuito es el primer paso perfecto. Habla con Leo IA, explícale tus desafíos y recibe un análisis de cómo la IA puede ayudarte a alcanzar tus objetivos. ¡Sin costo, sin compromiso, solo valor!
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6">
              <Link href="/ai-agent?prompt=Quiero+un+diagnóstico+IA+estratégico+GRATUITO+para+mi+eCommerce">
                Obtener mi Diagnóstico GRATIS
              </Link>
            </Button>
          </div>
        </section>
      </AnimatedOnScroll>

      <AnimatedOnScroll animation="fadeInUp" delay={200}>
        <section className="mt-16 text-center">
          <h2 className="text-3xl md:text-4xl font-sora font-bold mb-6">
            Encuentra la Solución IA Perfecta para Ti
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Nuestro experto, Leo IA, está listo para ayudarte a navegar el mundo de la inteligencia artificial y encontrar las herramientas que realmente impulsarán tu negocio.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6">
            <Link href="/ai-agent">Habla con Leo IA Ahora</Link>
          </Button>
        </section>
      </AnimatedOnScroll>
    </div>
  );
}
