import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import AnimatedOnScroll from '@/components/utils/animated-on-scroll';
import { Zap, CheckCircle, BarChart } from 'lucide-react';

export default function AgenticProductPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="w-full py-20 md:py-32 relative bg-muted overflow-hidden">
        {/* Background SVG similar to results section */}
        <div className="absolute inset-0 z-0 opacity-50">
          <svg 
            className="w-full h-full" 
            viewBox="0 0 1200 800"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Simplified network pattern */}
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
              <p className="text-sm font-bold text-primary uppercase tracking-widest">Agentic Product</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-sora font-extrabold tracking-tight text-foreground">
                Construye Productos que tus Clientes Amen, más Rápido
              </h1>
            </AnimatedOnScroll>
            <AnimatedOnScroll animation="fadeInUp" delay={200}>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto md:mx-0">
                Deja de adivinar qué funcionalidades construir. Nuestros agentes de IA analizan el comportamiento de tus usuarios, identifican oportunidades y aceleran tu ciclo de desarrollo para crear productos que realmente impactan.
              </p>
            </AnimatedOnScroll>
            <AnimatedOnScroll animation="fadeInUp" delay={400}>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
                <Button asChild size="lg" className="rounded-lg text-base font-bold transition-transform hover:scale-105 h-14 px-8 bg-cyan-400 text-blue-900 shine-button">
                  <Link href="#contacto">
                    Ver Demo de Agentic Product
                  </Link>
                </Button>
              </div>
            </AnimatedOnScroll>
          </div>
          <AnimatedOnScroll animation="zoomIn" delay={300} className="flex justify-center items-center">
            <Image
              src="/aijolot_hero.png"
              alt="Ilustración de un agente IA construyendo un roadmap de producto"
              width={500}
              height={400}
              className="w-full max-w-sm drop-shadow-[0_20px_50px_rgba(40,199,240,0.4)] rounded-lg"
            />
          </AnimatedOnScroll>
        </div>
      </section>

      {/* Container with network background for all sections except hero */}
      <div className="relative bg-muted overflow-hidden">
        {/* Background SVG for entire page */}
        <div className="absolute inset-0 z-0 opacity-50">
          <svg 
            className="w-full h-full" 
            viewBox="0 0 1200 2000"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Network pattern distributed across entire height */}
            <line x1="100" y1="100" x2="300" y2="150" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.3" />
            <line x1="300" y1="150" x2="500" y2="100" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.3" />
            <line x1="500" y1="100" x2="700" y2="150" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.3" />
            <line x1="700" y1="150" x2="900" y2="100" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.3" />
            <line x1="300" y1="150" x2="200" y2="300" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.3" />
            <line x1="500" y1="100" x2="600" y2="250" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.3" />
            <line x1="700" y1="150" x2="800" y2="300" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.3" />
            
            {/* Middle section connections */}
            <line x1="150" y1="500" x2="350" y2="550" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.3" />
            <line x1="350" y1="550" x2="550" y2="500" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.3" />
            <line x1="550" y1="500" x2="750" y2="550" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.3" />
            <line x1="750" y1="550" x2="950" y2="500" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.3" />
            <line x1="350" y1="550" x2="250" y2="700" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.3" />
            <line x1="550" y1="500" x2="650" y2="650" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.3" />
            <line x1="750" y1="550" x2="850" y2="700" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.3" />
            
            {/* Lower section connections */}
            <line x1="200" y1="1000" x2="400" y2="1050" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.3" />
            <line x1="400" y1="1050" x2="600" y2="1000" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.3" />
            <line x1="600" y1="1000" x2="800" y2="1050" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.3" />
            <line x1="800" y1="1050" x2="1000" y2="1000" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.3" />
            <line x1="400" y1="1050" x2="300" y2="1200" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.3" />
            <line x1="600" y1="1000" x2="700" y2="1150" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.3" />
            <line x1="800" y1="1050" x2="900" y2="1200" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.3" />
            
            {/* Bottom section connections */}
            <line x1="150" y1="1400" x2="350" y2="1450" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.3" />
            <line x1="350" y1="1450" x2="550" y2="1400" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.3" />
            <line x1="550" y1="1400" x2="750" y2="1450" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.3" />
            <line x1="750" y1="1450" x2="950" y2="1400" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.3" />
            <line x1="350" y1="1450" x2="250" y2="1600" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.3" />
            <line x1="550" y1="1400" x2="650" y2="1550" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.3" />
            <line x1="750" y1="1450" x2="850" y2="1600" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.3" />
            
            {/* Nodes distributed across height */}
            <circle cx="100" cy="100" r="8" fill="hsl(var(--accent))" className="animate-pulse-light delay-0" />
            <circle cx="300" cy="150" r="10" fill="hsl(var(--accent))" className="animate-pulse-light delay-300" />
            <circle cx="500" cy="100" r="9" fill="hsl(var(--accent))" className="animate-pulse-light delay-600" />
            <circle cx="700" cy="150" r="11" fill="hsl(var(--accent))" className="animate-pulse-light delay-900" />
            <circle cx="900" cy="100" r="8" fill="hsl(var(--accent))" className="animate-pulse-light delay-1200" />
            <circle cx="200" cy="300" r="10" fill="hsl(var(--accent))" className="animate-pulse-light delay-1500" />
            <circle cx="600" cy="250" r="9" fill="hsl(var(--accent))" className="animate-pulse-light delay-1800" />
            <circle cx="800" cy="300" r="12" fill="hsl(var(--accent))" className="animate-pulse-light delay-2100" />
            
            {/* Middle nodes */}
            <circle cx="150" cy="500" r="9" fill="hsl(var(--accent))" className="animate-pulse-light delay-2400" />
            <circle cx="350" cy="550" r="11" fill="hsl(var(--accent))" className="animate-pulse-light delay-2700" />
            <circle cx="550" cy="500" r="10" fill="hsl(var(--accent))" className="animate-pulse-light delay-3000" />
            <circle cx="750" cy="550" r="12" fill="hsl(var(--accent))" className="animate-pulse-light delay-3300" />
            <circle cx="950" cy="500" r="8" fill="hsl(var(--accent))" className="animate-pulse-light delay-3600" />
            <circle cx="250" cy="700" r="10" fill="hsl(var(--accent))" className="animate-pulse-light delay-3900" />
            <circle cx="650" cy="650" r="9" fill="hsl(var(--accent))" className="animate-pulse-light delay-4200" />
            <circle cx="850" cy="700" r="11" fill="hsl(var(--accent))" className="animate-pulse-light delay-4500" />
            
            {/* Lower nodes */}
            <circle cx="200" cy="1000" r="10" fill="hsl(var(--accent))" className="animate-pulse-light delay-4800" />
            <circle cx="400" cy="1050" r="12" fill="hsl(var(--accent))" className="animate-pulse-light delay-5100" />
            <circle cx="600" cy="1000" r="9" fill="hsl(var(--accent))" className="animate-pulse-light delay-5400" />
            <circle cx="800" cy="1050" r="11" fill="hsl(var(--accent))" className="animate-pulse-light delay-5700" />
            <circle cx="1000" cy="1000" r="8" fill="hsl(var(--accent))" className="animate-pulse-light delay-6000" />
            <circle cx="300" cy="1200" r="10" fill="hsl(var(--accent))" className="animate-pulse-light delay-6300" />
            <circle cx="700" cy="1150" r="9" fill="hsl(var(--accent))" className="animate-pulse-light delay-6600" />
            <circle cx="900" cy="1200" r="12" fill="hsl(var(--accent))" className="animate-pulse-light delay-6900" />
            
            {/* Bottom nodes */}
            <circle cx="150" cy="1400" r="9" fill="hsl(var(--accent))" className="animate-pulse-light delay-7200" />
            <circle cx="350" cy="1450" r="11" fill="hsl(var(--accent))" className="animate-pulse-light delay-7500" />
            <circle cx="550" cy="1400" r="10" fill="hsl(var(--accent))" className="animate-pulse-light delay-7800" />
            <circle cx="750" cy="1450" r="12" fill="hsl(var(--accent))" className="animate-pulse-light delay-8100" />
            <circle cx="950" cy="1400" r="8" fill="hsl(var(--accent))" className="animate-pulse-light delay-8400" />
            <circle cx="250" cy="1600" r="10" fill="hsl(var(--accent))" className="animate-pulse-light delay-8700" />
            <circle cx="650" cy="1550" r="9" fill="hsl(var(--accent))" className="animate-pulse-light delay-9000" />
            <circle cx="850" cy="1600" r="11" fill="hsl(var(--accent))" className="animate-pulse-light delay-9300" />
          </svg>
        </div>

        {/* Decorative gradient blobs distributed */}
        <div className="absolute top-[10%] left-[-15%] w-2/5 h-2/5 bg-accent/20 rounded-full filter blur-3xl opacity-40 animate-pulse z-10"></div>
        <div className="absolute top-[40%] right-[-15%] w-2/5 h-2/5 bg-accent/15 rounded-full filter blur-3xl opacity-30 animate-pulse animation-delay-2000 z-10"></div>
        <div className="absolute bottom-[20%] left-[-15%] w-2/5 h-2/5 bg-accent/10 rounded-full filter blur-3xl opacity-25 animate-pulse animation-delay-4000 z-10"></div>

        {/* Pain Points Section */}
        <section id="problemas" className="py-16 md:py-24 relative z-20">
          <div className="container mx-auto px-6 text-center">
            <AnimatedOnScroll animation="fadeInUp">
              <h2 className="text-3xl md:text-4xl font-sora font-bold mb-4">¿Tu roadmap se basa en opiniones?</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
                Los equipos de producto a menudo luchan por alinear el desarrollo con el valor real para el cliente.
              </p>
            </AnimatedOnScroll>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatedOnScroll animation="fadeInUp" delay={100}>
                <div className="bg-card/80 backdrop-blur-sm p-0 rounded-xl border border-border text-left overflow-hidden h-full flex flex-col">
                  <Image
                    src="/problem_banner1.png"
                    alt="Ciclos de desarrollo eternos"
                    width={400}
                    height={150}
                    className="w-full h-auto object-cover rounded-t-xl"
                    data-ai-hint="eternal development cycles product roadmap"
                  />
                  <div className="p-8 flex-grow">
                    <h3 className="text-xl font-sora font-bold mb-3">Ciclos de Desarrollo Eternos</h3>
                    <p className="text-muted-foreground">
                      Los roadmaps se basan en intuición, y el desarrollo de nuevas funcionalidades es lento, arriesgado y costoso.
                    </p>
                  </div>
                </div>
              </AnimatedOnScroll>
              <AnimatedOnScroll animation="fadeInUp" delay={200}>
                <div className="bg-card/80 backdrop-blur-sm p-0 rounded-xl border border-border text-left overflow-hidden h-full flex flex-col">
                  <Image
                    src="/problem_banner2.png"
                    alt="Funcionalidades fantasma"
                    width={400}
                    height={150}
                    className="w-full h-auto object-cover rounded-t-xl"
                    data-ai-hint="ghost features unused functionality product"
                  />
                  <div className="p-8 flex-grow">
                    <h3 className="text-xl font-sora font-bold mb-3">Funcionalidades Fantasma</h3>
                    <p className="text-muted-foreground">
                      Inviertes tiempo y dinero en características que los usuarios no adoptan o ni siquiera descubren.
                    </p>
                  </div>
                </div>
              </AnimatedOnScroll>
              <AnimatedOnScroll animation="fadeInUp" delay={300}>
                <div className="bg-card/80 backdrop-blur-sm p-0 rounded-xl border border-border text-left overflow-hidden h-full flex flex-col">
                  <Image
                    src="/problem_banner3.png"
                    alt="Retención baja de usuarios"
                    width={400}
                    height={150}
                    className="w-full h-auto object-cover rounded-t-xl"
                    data-ai-hint="low user retention churn product"
                  />
                  <div className="p-8 flex-grow">
                    <h3 className="text-xl font-sora font-bold mb-3">Retención Baja</h3>
                    <p className="text-muted-foreground">
                      Los usuarios no encuentran valor continuo en tu producto y la tasa de abandono (churn) es alta.
                    </p>
                  </div>
                </div>
              </AnimatedOnScroll>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section id="solucion" className="py-16 md:py-24 relative z-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12 md:mb-16">
              <AnimatedOnScroll animation="fadeInUp">
                <p className="text-sm font-bold text-primary uppercase tracking-widest">La Solución Agentic Product</p>
                <h2 className="text-3xl md:text-4xl font-sora font-bold mt-2">Un Product Manager Aumentado con IA</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
                  Nuestros agentes de producto analizan datos de uso, identifican patrones y automatizan el ciclo de descubrimiento y experimentación.
                </p>
              </AnimatedOnScroll>
            </div>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 items-center">
              <div className="space-y-8">
                <AnimatedOnScroll animation="fadeInUp" delay={100}>
                  <div>
                    <h3 className="font-sora text-xl font-bold mb-2">Análisis de Cuellos de Botella</h3>
                    <p className="text-muted-foreground">
                      Agentes que analizan mapas de calor, grabaciones de sesiones y flujos de usuarios para identificar exactamente dónde se atascan y por qué abandonan.
                    </p>
                  </div>
                </AnimatedOnScroll>
                <AnimatedOnScroll animation="fadeInUp" delay={200}>
                  <div>
                    <h3 className="font-sora text-xl font-bold mb-2">Roadmaps Basados en Datos</h3>
                    <p className="text-muted-foreground">
                      Generación automática de roadmaps priorizados según el impacto potencial en la conversión y retención, eliminando las conjeturas.
                    </p>
                  </div>
                </AnimatedOnScroll>
                <AnimatedOnScroll animation="fadeInUp" delay={300}>
                  <div>
                    <h3 className="font-sora text-xl font-bold mb-2">Experimentación Acelerada</h3>
                    <p className="text-muted-foreground">
                      Diseño, gestión y análisis de pruebas A/B para validar hipótesis de producto de forma continua, rápida y a gran escala.
                    </p>
                  </div>
                </AnimatedOnScroll>
                <AnimatedOnScroll animation="fadeInUp" delay={400}>
                  <div>
                    <h3 className="font-sora text-xl font-bold mb-2">Definición de Funcionalidades</h3>
                    <p className="text-muted-foreground">
                      Crea automáticamente historias de usuario, criterios de aceptación y backlogs detallados a partir de una simple idea, listos para el equipo de desarrollo.
                    </p>
                  </div>
                </AnimatedOnScroll>
              </div>
              <AnimatedOnScroll animation="zoomIn" delay={200} className="flex justify-center">
                <Image
                  src="/aijolot_hero.png"
                  alt="Diagrama de flujo de Agentic Product"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-2xl w-full max-w-md"
                />
              </AnimatedOnScroll>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-24 relative z-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <AnimatedOnScroll animation="fadeInUp">
                <h2 className="text-3xl md:text-4xl font-sora font-bold">Construye Mejores Productos, Más Rápido</h2>
              </AnimatedOnScroll>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <AnimatedOnScroll animation="fadeInUp" delay={100}>
                <div className="text-center">
                  <div className="bg-primary/10 text-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8" />
                  </div>
                  <h3 className="font-sora text-xl font-bold mb-2">Acelera el Time-to-Market</h3>
                  <p className="text-muted-foreground">
                    Reduce el tiempo desde la idea hasta el lanzamiento al automatizar la investigación y la definición de requerimientos.
                  </p>
                </div>
              </AnimatedOnScroll>
              <AnimatedOnScroll animation="fadeInUp" delay={200}>
                <div className="text-center">
                  <div className="bg-primary/10 text-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8" />
                  </div>
                  <h3 className="font-sora text-xl font-bold mb-2">Aumenta la Adopción</h3>
                  <p className="text-muted-foreground">
                    Construye un producto que responde a las necesidades reales de los usuarios, aumentando el engagement y la retención.
                  </p>
                </div>
              </AnimatedOnScroll>
              <AnimatedOnScroll animation="fadeInUp" delay={300}>
                <div className="text-center">
                  <div className="bg-primary/10 text-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <BarChart className="h-8 w-8" />
                  </div>
                  <h3 className="font-sora text-xl font-bold mb-2">Crea una Cultura de Datos</h3>
                  <p className="text-muted-foreground">
                    Transforma a tu equipo de producto en una organización que toma decisiones basadas en evidencia, no en opiniones.
                  </p>
                </div>
              </AnimatedOnScroll>
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-16 md:py-24 relative z-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <AnimatedOnScroll animation="fadeInUp">
                <h2 className="text-3xl md:text-4xl font-sora font-bold mb-4">Nos Integramos con tus Herramientas de Desarrollo</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Nuestros agentes se conectan con las plataformas que ya utilizas, desde tu gestión de proyectos, repositorios de código, herramientas de diseño y plataformas de comunicación.
                </p>
              </AnimatedOnScroll>
            </div>
            <AnimatedOnScroll animation="fadeInUp" delay={200}>
              <div className="relative w-full overflow-hidden py-8">
                <div className="flex w-fit animate-marquee-horizontal">
                  {[
                    { src: "/jira-logo.png", alt: "Jira", hint: "jira project management tool" },
                    { src: "/github-logo.png", alt: "GitHub", hint: "github code repository" },
                    { src: "/figma-logo.png", alt: "Figma", hint: "figma design tool" },
                    { src: "/slack-logo.png", alt: "Slack", hint: "slack communication platform" },
                    { src: "/notion-logo.png", alt: "Notion", hint: "notion productivity workspace" },
                    { src: "/jira-logo.png", alt: "Jira", hint: "jira project management tool" },
                    { src: "/github-logo.png", alt: "GitHub", hint: "github code repository" },
                    { src: "/figma-logo.png", alt: "Figma", hint: "figma design tool" },
                    { src: "/slack-logo.png", alt: "Slack", hint: "slack communication platform" },
                    { src: "/notion-logo.png", alt: "Notion", hint: "notion productivity workspace" }
                  ].map((integration, index) => (
                    <Image
                      key={index}
                      src={integration.src}
                      alt={integration.alt}
                      width={120}
                      height={60}
                      className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all mx-8 flex-shrink-0 h-12 w-auto object-contain"
                      data-ai-hint={integration.hint}
                    />
                  ))}
                </div>
              </div>
            </AnimatedOnScroll>
          </div>
        </section>

        {/* Social Proof / Results Section */}
        <section id="resultados" className="py-16 md:py-24 relative z-20">
          <div className="container mx-auto px-6">
            <div className="text-center">
              <AnimatedOnScroll animation="fadeInUp">
                <p className="text-sm font-bold text-primary uppercase tracking-widest">Resultados Comprobados</p>
                <p className="text-3xl md:text-4xl font-sora font-bold mt-2">
                  Decisiones basadas en datos, no en opiniones.
                </p>
              </AnimatedOnScroll>
            </div>
            <AnimatedOnScroll animation="fadeInUp" delay={200}>
              <div className="mt-12 bg-card/80 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-xl max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="text-center md:text-left">
                    <p className="text-7xl font-black text-primary">+35%</p>
                    <p className="text-2xl font-sora font-bold mt-2">Adopción de Funcionalidades</p>
                    <p className="text-muted-foreground mt-2">
                      Es el aumento promedio en la adopción de nuevas funcionalidades clave durante los primeros 3 meses.
                    </p>
                  </div>
                  <div className="bg-background/50 backdrop-blur-sm p-6 rounded-lg">
                    <p className="text-foreground italic mb-4">
                      "Estábamos atrapados en debates interminables sobre qué construir. Aijolot nos dio claridad. Sus agentes analizaron el uso real de nuestro producto y nos ayudaron a construir un roadmap que disparó la retención."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                        <span className="text-primary font-bold">SM</span>
                      </div>
                      <div>
                        <p className="font-bold">Sofía Mendoza</p>
                        <p className="text-sm text-muted-foreground">Head of Product, SaaS-Innovate</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedOnScroll>
          </div>
        </section>

        {/* Final CTA Section */}
        <section id="contacto" className="py-20 md:py-32 relative z-20">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <AnimatedOnScroll animation="fadeInUp">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-sora font-bold mb-6">
                  ¿Listo para construir un producto ganador?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Agenda una demo y te mostraremos cómo nuestros agentes de IA pueden analizar a tus usuarios, priorizar tu roadmap y ayudarte a lanzar funcionalidades que generen un impacto real en tu negocio.
                </p>
              </AnimatedOnScroll>
              <AnimatedOnScroll animation="fadeInUp" delay={200}>
                <Button asChild size="lg" className="rounded-lg text-base font-bold transition-transform hover:scale-105 h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground shine-button">
                  <Link href="/contact">
                    Agendar Demo de Agentic Product
                  </Link>
                </Button>
              </AnimatedOnScroll>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}