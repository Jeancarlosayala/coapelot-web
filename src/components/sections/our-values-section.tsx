// src/components/sections/our-values-section.tsx
import AnimatedOnScroll from '@/components/utils/animated-on-scroll';

interface ValueItem {
  title: string;
  description: string;
}

const valuesData: ValueItem[] = [
  { title: "Innovación Constante", description: "Aplicamos IA de vanguardia para transformar tu negocio, buscando siempre la mejor y más nueva forma de hacer las cosas." },
  { title: "Eficiencia sin Sacrificios", description: "Potenciamos a tu equipo, no lo reemplazamos. La IA libera su talento para la estrategia y la creatividad." },
  { title: "Claridad y Simplicidad", description: "IA compleja, soluciones simples. Traducimos la tecnología en herramientas prácticas y accesibles para todos." },
  { title: "Impacto Tangible", description: "Resultados medibles: más ventas, mayores ahorros, mejor satisfacción. La IA debe generar un impacto real y visible." },
  { title: "Colaboración Activa", description: "Somos tus aliados estratégicos. Co-creamos soluciones de IA perfectamente adaptadas a la realidad de tu negocio." },
];

export function OurValuesSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-x-12 lg:gap-x-20">
          {/* Left Sticky Column */}
          <div className="md:sticky md:top-24 h-fit self-start mb-12 md:mb-0">
            <AnimatedOnScroll animation="fadeInLeft">
              <div>
                <div className="mb-3">
                  <div className="w-10 h-0.5 bg-primary mb-1"></div>
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    CAPÍTULO 03: NUESTROS DIFERENCIALES
                  </p>
                </div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-sora font-bold text-foreground leading-tight">
                  Desatamos los <span className="text-primary">AI Super Powers</span> de tu Equipo
                </h2>
              </div>
            </AnimatedOnScroll>
          </div>

          {/* Right Scrolling Column */}
          <div className="space-y-10 md:space-y-12">
            <AnimatedOnScroll animation="fadeInUp">
              <p className="text-[1.625rem] leading-relaxed text-muted-foreground">
                Más que IA, es una nueva forma de trabajar. Nuestros valores definen cada solución que creamos:
              </p>
            </AnimatedOnScroll>
            
            <div className="space-y-16">
              {valuesData.map((value, index) => (
                <AnimatedOnScroll 
                  key={value.title} 
                  animation="fadeInUp" 
                  delay={100 + index * 150}
                >
                  <div>
                    <h3 className="text-2xl font-sora font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
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
