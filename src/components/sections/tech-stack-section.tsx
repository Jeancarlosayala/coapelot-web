// src/components/sections/tech-stack-section.tsx
import AnimatedOnScroll from '@/components/utils/animated-on-scroll';
import Image from 'next/image';

export function TechStackSection() {
  const techLogos = [
    { src: "/vertexAi.png", alt: "Vertex AI Logo", title: "Vertex AI", hint: "Google Cloud Vertex AI logo" },
    { src: "/flowise.png", alt: "Flowise Logo", title: "Flowise", hint: "Flowise AI low-code platform logo" },
    { src: "/crewai.png", alt: "Crew AI Logo", title: "Crew AI", hint: "Crew AI framework logo" },
    { src: "/n8n.png", alt: "n8n Logo", title: "n8n", hint: "n8n automation tool logo" },
    { src: "/supabase.png", alt: "Supabase Logo", title: "Supabase", hint: "Supabase database platform logo" },
    { src: "/firecrawl.png", alt: "Firecrwal Logo", title: "Firecrwal", hint: "Firecrawl tool logo" },
    { src: "/Gemini.png", alt: "Gemini Logo", title: "Gemini", hint: "Gemini NLM logo" },
    { src: "/openai.png", alt: "OpenAi Logo", title: "OpenAi", hint: "OpenAI NLM platform logo" },
    { src: "/apify.png", alt: "Apify Logo", title: "Apify", hint: "Apify tool logo" },
    { src: "/Google_cloud.png", alt: "Google Cloud Logo", title: "OpenAi", hint: "OpenAI NLM platform logo" },
  ];

  // CAMBIO: Duplicamos los logos solo 2 veces (una copia extra) para el loop fluido
  const duplicatedLogos = [...techLogos, ...techLogos]; // Total: 10 logos (5 originales + 5 copia)

  return (
    <section id="tecnologias" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <AnimatedOnScroll animation="fadeInUp">
            <div className="mb-3 text-center">
              <div className="w-10 h-0.5 bg-primary mb-1 mx-auto"></div>
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                CAPÍTULO 05: NUESTRA TECNOLOGÍA
              </p>
            </div>
            <h2 className="text-[60px] leading-tight font-sora font-bold mt-4 text-foreground">Construimos con <span className="text-cyan-400">Herramientas</span> de Punta</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
              Utilizamos un stack tecnológico robusto y flexible para crear soluciones IA a la medida, potentes y escalables.
            </p>
          </AnimatedOnScroll>
        </div>
        <AnimatedOnScroll animation="fadeInUp" delay={200}>
          <div className="relative w-full overflow-hidden py-4">
            <div className="flex w-fit animate-marquee-horizontal">
              {duplicatedLogos.map((logo, index) => (
                <Image
                  key={index} // Se mantiene el índice para la clave React
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.alt.includes("Crew AI") || logo.alt.includes("Supabase") ? 300 : 360}
                  height={logo.alt.includes("Crew AI") || logo.alt.includes("Supabase") ? 120 : 144}
                  className={`grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all mx-12 flex-shrink-0`}
                  title={logo.title}
                  data-ai-hint={logo.hint}
                  style={{ height: logo.alt.includes("Crew AI") || logo.alt.includes("Supabase") ? '7.5rem' : '9rem', width: 'auto' }}
                />
              ))}
            </div>
          </div>
        </AnimatedOnScroll>
      </div>
    </section>
  );
}
