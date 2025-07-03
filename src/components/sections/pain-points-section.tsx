// src/components/sections/pain-points-section.tsx
import AnimatedOnScroll from '@/components/utils/animated-on-scroll';

export function PainPointsSection() {
  return (
    <section id="problemas" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 text-center">
        <AnimatedOnScroll animation="fadeInUp">
          <h2 className="text-3xl md:text-4xl font-sora font-bold mb-4">¿Te suena familiar?</h2>
        </AnimatedOnScroll>
        <AnimatedOnScroll animation="fadeInUp" delay={100}>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">Tu equipo es talentoso, pero enfrenta barreras que frenan el crecimiento.</p>
        </AnimatedOnScroll>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatedOnScroll animation="fadeInUp" delay={200}>
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 text-left">
              <h3 className="text-xl font-sora font-bold mb-3">Procesos Manuales Lentos</h3>
              <p className="text-gray-600">Tareas repetitivas consumen tiempo valioso que podría dedicarse a la estrategia y la innovación.</p>
            </div>
          </AnimatedOnScroll>
          <AnimatedOnScroll animation="fadeInUp" delay={300}>
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 text-left">
              <h3 className="text-xl font-sora font-bold mb-3">Decisiones a Ciegas</h3>
              <p className="text-gray-600">Actuar basado en intuición en lugar de datos precisos y predictivos te hace perder oportunidades clave.</p>
            </div>
          </AnimatedOnScroll>
          <AnimatedOnScroll animation="fadeInUp" delay={400}>
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 text-left">
              <h3 className="text-xl font-sora font-bold mb-3">Falta de Escalabilidad</h3>
              <p className="text-gray-600">Tu operación actual no puede manejar un crecimiento rápido sin aumentar los costos y la complejidad de forma masiva.</p>
            </div>
          </AnimatedOnScroll>
        </div>
      </div>
    </section>
  );
}
