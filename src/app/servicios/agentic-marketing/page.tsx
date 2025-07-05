import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import AnimatedOnScroll from '@/components/utils/animated-on-scroll';
import { DollarSign, Star, Users } from 'lucide-react';

export default function AgenticMarketingPage() {
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
              <p className="text-sm font-bold text-primary uppercase tracking-widest">Agentic Marketing</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-sora font-extrabold tracking-tight text-foreground">
                Automatiza tu Marketing, no tu Creatividad
              </h1>
            </AnimatedOnScroll>
            <AnimatedOnScroll animation="fadeInUp" delay={200}>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto md:mx-0">
                Libera a tu equipo de las tareas repetitivas. Nuestros agentes de IA optimizan campañas, generan contenido y califican leads para que tú te concentres en la estrategia que hace la diferencia.
              </p>
            </AnimatedOnScroll>
            <AnimatedOnScroll animation="fadeInUp" delay={400}>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
                <Button asChild size="lg" className="rounded-lg text-base font-bold transition-transform hover:scale-105 h-14 px-8 bg-cyan-400 text-blue-900 shine-button">
                  <Link href="#contacto">
                    Ver Demo de Agentic Marketing
                  </Link>
                </Button>
              </div>
            </AnimatedOnScroll>
          </div>
          <AnimatedOnScroll animation="zoomIn" delay={300} className="flex justify-center items-center">
            <Image
              src="/hero_marketing.png"
              alt="Ilustración de un agente IA gestionando campañas de marketing"
              width={850}
              height={680}
              className="w-full max-w-2xl drop-shadow-[0_20px_50px_rgba(40,199,240,0.4)] rounded-lg"
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
              <h2 className="text-3xl md:text-4xl font-sora font-bold mb-4">¿Tu equipo de marketing está sobrecargado?</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
                El marketing moderno exige una velocidad y un volumen de trabajo que a menudo superan la capacidad humana.
              </p>
            </AnimatedOnScroll>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatedOnScroll animation="fadeInUp" delay={100}>
                <div className="bg-card/80 backdrop-blur-sm p-0 rounded-xl border border-border text-left overflow-hidden h-full flex flex-col">
                  <Image
                    src="/Manual de Marca Copaelot-66-problem_banner3.png"
                    alt="ROAS estancado en campañas"
                    width={400}
                    height={150}
                    className="w-full h-auto object-cover rounded-t-xl"
                    data-ai-hint="stagnant ROAS marketing campaigns analytics"
                  />
                  <div className="p-8 flex-grow">
                    <h3 className="text-xl font-sora font-bold mb-3">ROAS Estancado</h3>
                    <p className="text-muted-foreground">
                      Las campañas de medios requieren optimización constante y es imposible analizar todas las variables manualmente.
                    </p>
                  </div>
                </div>
              </AnimatedOnScroll>
              <AnimatedOnScroll animation="fadeInUp" delay={200}>
                <div className="bg-card/80 backdrop-blur-sm p-0 rounded-xl border border-border text-left overflow-hidden h-full flex flex-col">
                  <Image
                    src="/problem_banner69.png"
                    alt="Contenido lento y costoso"
                    width={400}
                    height={150}
                    className="w-full h-auto object-cover rounded-t-xl"
                    data-ai-hint="slow expensive content creation bottleneck"
                  />
                  <div className="p-8 flex-grow">
                    <h3 className="text-xl font-sora font-bold mb-3">Contenido Lento y Costoso</h3>
                    <p className="text-muted-foreground">
                      Generar contenido de calidad para SEO y redes sociales es un cuello de botella que frena tu alcance orgánico.
                    </p>
                  </div>
                </div>
              </AnimatedOnScroll>
              <AnimatedOnScroll animation="fadeInUp" delay={300}>
                <div className="bg-card/80 backdrop-blur-sm p-0 rounded-xl border border-border text-left overflow-hidden h-full flex flex-col">
                  <Image
                    src="/problem_banner70.png"
                    alt="Leads de baja calidad"
                    width={400}
                    height={150}
                    className="w-full h-auto object-cover rounded-t-xl"
                    data-ai-hint="low quality leads sales funnel marketing"
                  />
                  <div className="p-8 flex-grow">
                    <h3 className="text-xl font-sora font-bold mb-3">Leads de Baja Calidad</h3>
                    <p className="text-muted-foreground">
                      El equipo de ventas pierde tiempo con prospectos que no están listos para comprar, afectando la moral y los resultados.
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
                <p className="text-sm font-bold text-primary uppercase tracking-widest">La Solución Agentic Marketing</p>
                <h2 className="text-3xl md:text-4xl font-sora font-bold mt-2">Un Equipo de Marketing Aumentado con IA</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
                  Nuestros agentes de marketing trabajan 24/7 para ejecutar, analizar y optimizar tus estrategias a una escala sobrehumana.
                </p>
              </AnimatedOnScroll>
            </div>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 items-center">
              <div className="space-y-8">
                <AnimatedOnScroll animation="fadeInUp" delay={100}>
                  <div>
                    <h3 className="font-sora text-xl font-bold mb-2">Optimización de Campañas</h3>
                    <p className="text-muted-foreground">
                      Agentes que monitorean el rendimiento de tus anuncios en tiempo real, ajustando presupuestos y audiencias para maximizar el ROAS de forma automática.
                    </p>
                  </div>
                </AnimatedOnScroll>
                <AnimatedOnScroll animation="fadeInUp" delay={200}>
                  <div>
                    <h3 className="font-sora text-xl font-bold mb-2">Generación de Contenido Inteligente</h3>
                    <p className="text-muted-foreground">
                      Crea borradores para blogs, posts para redes sociales y guiones de video optimizados para SEO y alineados con las tendencias actuales de tu industria.
                    </p>
                  </div>
                </AnimatedOnScroll>
                <AnimatedOnScroll animation="fadeInUp" delay={300}>
                  <div>
                    <h3 className="font-sora text-xl font-bold mb-2">Captación y Cualificación de Leads</h3>
                    <p className="text-muted-foreground">
                      Implementa agentes que interactúan con los visitantes de tu web, califican su interés y los entregan al equipo de ventas solo cuando están listos para una conversación.
                    </p>
                  </div>
                </AnimatedOnScroll>
              </div>
              <AnimatedOnScroll animation="zoomIn" delay={200} className="flex justify-center">
                <Image
                  src="/hero_marketing.png"
                  alt="Diagrama de flujo de Agentic Marketing"
                  width={719}
                  height={575}
                  className="rounded-lg w-full max-w-xl bg-transparent"
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
                <h2 className="text-3xl md:text-4xl font-sora font-bold">El Futuro de tu Departamento de Marketing</h2>
              </AnimatedOnScroll>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <AnimatedOnScroll animation="fadeInUp" delay={100}>
                <div className="text-center">
                  <div className="bg-primary/10 text-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="h-8 w-8" />
                  </div>
                  <h3 className="font-sora text-xl font-bold mb-2">Maximiza tu Inversión</h3>
                  <p className="text-muted-foreground">
                    Mejora tu ROAS y reduce el costo por lead al tomar decisiones de pauta basadas en datos y no en suposiciones.
                  </p>
                </div>
              </AnimatedOnScroll>
              <AnimatedOnScroll animation="fadeInUp" delay={200}>
                <div className="text-center">
                  <div className="bg-primary/10 text-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8" />
                  </div>
                  <h3 className="font-sora text-xl font-bold mb-2">Construye Autoridad de Marca</h3>
                  <p className="text-muted-foreground">
                    Publica contenido relevante y de alta calidad de forma consistente, posicionándote como un líder en tu industria.
                  </p>
                </div>
              </AnimatedOnScroll>
              <AnimatedOnScroll animation="fadeInUp" delay={300}>
                <div className="text-center">
                  <div className="bg-primary/10 text-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8" />
                  </div>
                  <h3 className="font-sora text-xl font-bold mb-2">Empodera a tu Equipo</h3>
                  <p className="text-muted-foreground">
                    Libera a tus especialistas de marketing para que se enfoquen en la estrategia, la creatividad y las grandes ideas.
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
                <h2 className="text-3xl md:text-4xl font-sora font-bold mb-4">Nos Integramos con tus Redes Sociales y Herramientas</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Nuestros agentes se conectan con las plataformas que ya utilizas, desde tu Redes Sociales, email marketing, plataformas de gestión de redes y hasta plataformas de mensajería.
                </p>
              </AnimatedOnScroll>
            </div>
            <AnimatedOnScroll animation="fadeInUp" delay={200}>
              <div className="relative w-full py-8">
                <div className="flex justify-center items-center gap-8 flex-wrap">
                  {[
                    { src: "/facebook_logo.png", alt: "Facebook", hint: "facebook social media platform" },
                    { src: "/google_ads_logo.png", alt: "Google Ads", hint: "google advertising platform" },
                    { src: "/hootsuite_logo.png", alt: "Hootsuite", hint: "hootsuite social media management" },
                    { src: "/hubspot_logo.png", alt: "HubSpot", hint: "hubspot marketing automation" },
                    { src: "/instagram_logo.png", alt: "Instagram", hint: "instagram social media platform" },
                    { src: "/klaviyo_logo.png", alt: "Klaviyo", hint: "klaviyo email marketing platform" },
                    { src: "/messenger_logo.png", alt: "Messenger", hint: "facebook messenger platform" },
                    { src: "/meta_ads_logo.png", alt: "Meta Ads", hint: "meta advertising platform" },
                    { src: "/search_console_logo.png", alt: "Search Console", hint: "google search console seo" },
                    { src: "/whatsapp_logo.png", alt: "WhatsApp", hint: "whatsapp messaging platform" }
                  ].map((integration, index) => (
                    <Image
                      key={index}
                      src={integration.src}
                      alt={integration.alt}
                      width={100}
                      height={50}
                      className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all h-10 w-auto object-contain flex-shrink-0"
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
                  El marketing inteligente genera un crecimiento medible.
                </p>
              </AnimatedOnScroll>
            </div>
            <AnimatedOnScroll animation="fadeInUp" delay={200}>
              <div className="mt-12 bg-card/80 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-xl max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="text-center md:text-left">
                    <p className="text-7xl font-black text-primary">-40%</p>
                    <p className="text-2xl font-sora font-bold mt-2">Reducción en Costo por Lead</p>
                    <p className="text-muted-foreground mt-2">
                      Es la reducción promedio que logran nuestros clientes al automatizar la calificación y el seguimiento de prospectos.
                    </p>
                  </div>
                  <div className="bg-background/50 backdrop-blur-sm p-6 rounded-lg">
                    <p className="text-foreground italic mb-4">
                      "El agente de calificación de leads cambió por completo la dinámica con el equipo de ventas. Ahora solo reciben prospectos calientes, y su tasa de cierre se ha duplicado. Increíble."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                        <span className="text-primary font-bold">MV</span>
                      </div>
                      <div>
                        <p className="font-bold">María Valdez</p>
                        <p className="text-sm text-muted-foreground">Jefa de Marketing, InmoBien</p>
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
                  ¿Listo para construir una máquina de marketing?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Agenda una demo y te mostraremos cómo nuestros agentes de IA pueden optimizar tus campañas, escalar tu contenido y llenar tu pipeline con leads de alta calidad.
                </p>
              </AnimatedOnScroll>
              <AnimatedOnScroll animation="fadeInUp" delay={200}>
                <Button asChild size="lg" className="rounded-lg text-base font-bold transition-transform hover:scale-105 h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground shine-button">
                  <Link href="/contact">
                    Agendar Demo de Agentic Marketing
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