import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import AnimatedOnScroll from '@/components/utils/animated-on-scroll';
import { ArrowRight, ShoppingCart, Heart, TrendingUp } from 'lucide-react';

export default function AgenticCommercePage() {
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
              <p className="text-sm font-bold text-primary uppercase tracking-widest">Agentic Commerce</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-sora font-extrabold tracking-tight text-foreground">
                Convierte tu Tienda en tu Mejor Vendedor
              </h1>
            </AnimatedOnScroll>
            <AnimatedOnScroll animation="fadeInUp" delay={200}>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto md:mx-0">
                Deja de perder ventas por experiencias genéricas. Con nuestros agentes de IA, tu eCommerce entiende, asiste y convierte a cada cliente como si fuera una venta personalizada.
              </p>
            </AnimatedOnScroll>
            <AnimatedOnScroll animation="fadeInUp" delay={400}>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
                <Button asChild size="lg" className="rounded-lg text-base font-bold transition-transform hover:scale-105 h-14 px-8 bg-cyan-400 text-blue-900 shine-button">
                  <Link href="#contacto">
                    Solicitar una demostración
                  </Link>
                </Button>
              </div>
            </AnimatedOnScroll>
          </div>
          <AnimatedOnScroll animation="zoomIn" delay={300} className="flex justify-center items-center">
            <Image
              src="/Manual de Marca Copaelot-64-hero_commerce.png"
              alt="Ilustración de un agente IA asistiendo en una compra online"
              width={1530}
              height={1360}
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
              <h2 className="text-3xl md:text-4xl font-sora font-bold mb-4">¿Tu eCommerce sufre de estos síntomas?</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
                Incluso con un buen producto, las fricciones en la experiencia de compra frenan tu crecimiento.
              </p>
            </AnimatedOnScroll>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatedOnScroll animation="fadeInUp" delay={100}>
                <div className="bg-card/80 backdrop-blur-sm p-0 rounded-xl border border-border text-left overflow-hidden h-full flex flex-col">
                  <Image
                    src="/Manual de Marca Copaelot-65-problem_banner3.png"
                    alt="Carritos abandonados en eCommerce"
                    width={400}
                    height={150}
                    className="w-full h-auto object-cover rounded-t-xl"
                    data-ai-hint="shopping cart abandonment ecommerce"
                  />
                  <div className="p-8 flex-grow">
                    <h3 className="text-xl font-sora font-bold mb-3">Carritos Abandonados</h3>
                    <p className="text-muted-foreground">
                      Los clientes dudan, no encuentran respuestas y abandonan la compra en el último momento.
                    </p>
                  </div>
                </div>
              </AnimatedOnScroll>
              <AnimatedOnScroll animation="fadeInUp" delay={200}>
                <div className="bg-card/80 backdrop-blur-sm p-0 rounded-xl border border-border text-left overflow-hidden h-full flex flex-col">
                  <Image
                    src="/Manual de Marca Copaelot-66-problem_banner3.png"
                    alt="Baja conversión en tienda online"
                    width={400}
                    height={150}
                    className="w-full h-auto object-cover rounded-t-xl"
                    data-ai-hint="low conversion rate ecommerce analytics"
                  />
                  <div className="p-8 flex-grow">
                    <h3 className="text-xl font-sora font-bold mb-3">Baja Tasa de Conversión</h3>
                    <p className="text-muted-foreground">
                      Atraes tráfico, pero un bajo porcentaje se convierte en clientes reales debido a una experiencia impersonal.
                    </p>
                  </div>
                </div>
              </AnimatedOnScroll>
              <AnimatedOnScroll animation="fadeInUp" delay={300}>
                <div className="bg-card/80 backdrop-blur-sm p-0 rounded-xl border border-border text-left overflow-hidden h-full flex flex-col">
                  <Image
                    src="/Manual de Marca Copaelot-67-problem_banner3.png"
                    alt="Clientes que no regresan"
                    width={400}
                    height={150}
                    className="w-full h-auto object-cover rounded-t-xl"
                    data-ai-hint="customer retention ecommerce loyalty"
                  />
                  <div className="p-8 flex-grow">
                    <h3 className="text-xl font-sora font-bold mb-3">Clientes que no Regresan</h3>
                    <p className="text-muted-foreground">
                      La primera compra no es memorable y los clientes no sienten una conexión para volver a comprar.
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
                <p className="text-sm font-bold text-primary uppercase tracking-widest">La Solución Agentic Commerce</p>
                <h2 className="text-3xl md:text-4xl font-sora font-bold mt-2">Una Experiencia de Compra Inteligente</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
                  Nuestros agentes de IA se integran a tu tienda para crear un entorno de compra dinámico y conversacional.
                </p>
              </AnimatedOnScroll>
            </div>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 items-center">
              <div className="space-y-8">
                <AnimatedOnScroll animation="fadeInUp" delay={100}>
                  <div>
                    <h3 className="font-sora text-xl font-bold mb-2">Personal Shopper IA</h3>
                    <p className="text-muted-foreground">
                      Asiste a tus clientes con recomendaciones de productos basadas en sus necesidades reales, guiándolos a través del catálogo como un experto en la tienda.
                    </p>
                  </div>
                </AnimatedOnScroll>
                <AnimatedOnScroll animation="fadeInUp" delay={200}>
                  <div>
                    <h3 className="font-sora text-xl font-bold mb-2">Buscador Conversacional</h3>
                    <p className="text-muted-foreground">
                      Permite que tus clientes busquen productos usando lenguaje natural ("busco unos jeans cómodos para viajar") en lugar de keywords rígidas.
                    </p>
                  </div>
                </AnimatedOnScroll>
                <AnimatedOnScroll animation="fadeInUp" delay={300}>
                  <div>
                    <h3 className="font-sora text-xl font-bold mb-2">Resolución de Dudas al Instante</h3>
                    <p className="text-muted-foreground">
                      Responde preguntas sobre tallas, materiales, envíos y devoluciones directamente en la página de producto, eliminando las dudas que causan el abandono.
                    </p>
                  </div>
                </AnimatedOnScroll>
                <AnimatedOnScroll animation="fadeInUp" delay={400}>
                  <div>
                    <h3 className="font-sora text-xl font-bold mb-2">Automatización B2B</h3>
                    <p className="text-muted-foreground">
                      Gestiona pedidos mayoristas y cotizaciones complejas de forma automática, liberando a tu equipo comercial.
                    </p>
                  </div>
                </AnimatedOnScroll>
              </div>
              <AnimatedOnScroll animation="zoomIn" delay={200} className="flex justify-center">
                <Image
                  src="/Manual de Marca Copaelot-64-hero_commerce.png"
                  alt="Diagrama de flujo de Agentic Commerce"
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
                <h2 className="text-3xl md:text-4xl font-sora font-bold">Impacto Directo en tus Métricas Clave</h2>
              </AnimatedOnScroll>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <AnimatedOnScroll animation="fadeInUp" delay={100}>
                <div className="text-center">
                  <div className="bg-primary/10 text-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8" />
                  </div>
                  <h3 className="font-sora text-xl font-bold mb-2">Aumenta el Ticket Promedio</h3>
                  <p className="text-muted-foreground">
                    Gracias a recomendaciones inteligentes y cross-selling relevante que los clientes realmente valoran.
                  </p>
                </div>
              </AnimatedOnScroll>
              <AnimatedOnScroll animation="fadeInUp" delay={200}>
                <div className="text-center">
                  <div className="bg-primary/10 text-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <ShoppingCart className="h-8 w-8" />
                  </div>
                  <h3 className="font-sora text-xl font-bold mb-2">Reduce el Abandono de Carrito</h3>
                  <p className="text-muted-foreground">
                    Al resolver dudas al instante y dar a los clientes la confianza que necesitan para finalizar la compra.
                  </p>
                </div>
              </AnimatedOnScroll>
              <AnimatedOnScroll animation="fadeInUp" delay={300}>
                <div className="text-center">
                  <div className="bg-primary/10 text-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8" />
                  </div>
                  <h3 className="font-sora text-xl font-bold mb-2">Fideliza a tus Clientes</h3>
                  <p className="text-muted-foreground">
                    Una experiencia de compra excepcional y personalizada hace que los clientes quieran volver.
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
                <h2 className="text-3xl md:text-4xl font-sora font-bold mb-4">Nos Integramos con tu Tienda Actual</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Nuestros agentes se conectan con las plataformas que ya utilizas, desde tu eCommerce, OMS, PIM y proveedor de última Milla.
                </p>
              </AnimatedOnScroll>
            </div>
            <AnimatedOnScroll animation="fadeInUp" delay={200}>
              <div className="relative w-full py-8">
                <div className="flex justify-center items-center gap-12">
                  {[
                    { src: "/salesforce_logo.png", alt: "Salesforce", hint: "salesforce crm platform" },
                    { src: "/shopify_logo.png", alt: "Shopify", hint: "shopify ecommerce platform" },
                    { src: "/vtex_logo.png", alt: "VTEX", hint: "vtex ecommerce platform" },
                    { src: "/bigcommerce_logo.png", alt: "BigCommerce", hint: "bigcommerce ecommerce platform" },
                    { src: "/mercadolibre_logo.png", alt: "MercadoLibre", hint: "mercadolibre marketplace platform" }
                  ].map((integration, index) => (
                    <Image
                      key={index}
                      src={integration.src}
                      alt={integration.alt}
                      width={140}
                      height={70}
                      className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all h-14 w-auto object-contain flex-shrink-0"
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
                  Empresas como la tuya ya están viendo el impacto.
                </p>
              </AnimatedOnScroll>
            </div>
            <AnimatedOnScroll animation="fadeInUp" delay={200}>
              <div className="mt-12 bg-card/80 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-xl max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="text-center md:text-left">
                    <p className="text-7xl font-black text-primary">+28%</p>
                    <p className="text-2xl font-sora font-bold mt-2">Aumento en Tasa de Conversión</p>
                    <p className="text-muted-foreground mt-2">
                      Es el incremento promedio que logran nuestros clientes al implementar nuestros agentes de venta y personalización.
                    </p>
                  </div>
                  <div className="bg-background/50 backdrop-blur-sm p-6 rounded-lg">
                    <p className="text-foreground italic mb-4">
                      "Desde que implementamos el Personal Shopper IA, no solo vimos un aumento en la conversión, sino que los clientes nos comentan lo fácil y útil que es encontrar lo que buscan. Fue un cambio de juego."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                        <span className="text-primary font-bold">CL</span>
                      </div>
                      <div>
                        <p className="font-bold">Carlos López</p>
                        <p className="text-sm text-muted-foreground">Director de eCommerce, TechGadgets</p>
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
                  ¿Listo para que tu eCommerce venda por sí solo?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Hablemos sobre tus desafíos específicos. Agenda una demo y te mostraremos en vivo cómo nuestros agentes de IA pueden transformar tu tasa de conversión y la experiencia de tus clientes.
                </p>
              </AnimatedOnScroll>
              <AnimatedOnScroll animation="fadeInUp" delay={200}>
                <Button asChild size="lg" className="rounded-lg text-base font-bold transition-transform hover:scale-105 h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground shine-button">
                  <Link href="/contact">
                    Agendar Demo de Agentic Commerce
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