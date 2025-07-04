// src/components/sections/pain-points-section.tsx
import AnimatedOnScroll from '@/components/utils/animated-on-scroll';
import Image from 'next/image';

export function PainPointsSection() {
  const painPoints = [
    {
      title: "Procesos Manuales Lentos",
      description: "Tareas repetitivas consumen tiempo valioso que podría dedicarse a la estrategia y la innovación.",
      imageUrl: "/problem_banner1.png",
      imageAlt: "Tareas repetitivas",
      imageHint: "hands typing on old computer"
    },
    {
      title: "Decisiones a Ciegas",
      description: "Actuar basado en intuición en lugar de datos precisos y predictivos te hace perder oportunidades clave.",
      imageUrl: "/problem_banner2.png",
      imageAlt: "Falta de datos",
      imageHint: "blindfolded person at crossroads"
    },
    {
      title: "Falta de Escalabilidad",
      description: "Tu operación actual no puede manejar un crecimiento rápido sin aumentar los costos y la complejidad de forma masiva.",
      imageUrl: "/problem_banner3.png",
      imageAlt: "Crecimiento limitado",
      imageHint: "small business struggling to expand"
    },
  ];

  return (
    <section id="problemas" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6 text-center">
        <AnimatedOnScroll animation="fadeInUp">
          {/* INICIO DE CORRECCIÓN */}
          <div className="mb-3 text-center"> {/* Asegura que el contenedor de la línea y el texto esté centrado */}
            <div className="w-10 h-0.5 bg-primary mb-1 mx-auto"></div> {/* Eliminado md:mx-0 */}
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              CAPÍTULO 02: EL DIAGNÓSTICO
            </p>
          </div>
          {/* FIN DE CORRECCIÓN */}
          <h2 className="text-3xl md:text-4xl font-sora font-bold mb-4">¿Te suena familiar?</h2>
        </AnimatedOnScroll>
        <AnimatedOnScroll animation="fadeInUp" delay={100}>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">Tu equipo es talentoso, pero enfrenta barreras que frenan el crecimiento.</p>
        </AnimatedOnScroll>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <AnimatedOnScroll key={index} animation="fadeInUp" delay={200 + index * 100}>
              <div className="bg-muted p-0 rounded-xl border border-border text-left overflow-hidden h-full flex flex-col">
                <Image
                  src={point.imageUrl}
                  alt={point.imageAlt}
                  width={400}
                  height={150}
                  className="w-full h-auto object-cover rounded-t-xl"
                  data-ai-hint={point.imageHint}
                />
                <div className="p-8 flex-grow">
                  <h3 className="text-xl font-sora font-bold mb-3">{point.title}</h3>
                  <p className="text-muted-foreground">{point.description}</p>
                </div>
              </div>
            </AnimatedOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
