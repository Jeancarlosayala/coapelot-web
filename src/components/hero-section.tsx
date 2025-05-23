import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import AnimatedOnScroll from '@/components/utils/animated-on-scroll';

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-background to-indigo-900/50 dark:from-background dark:to-blue-900/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {/* Subtle background pattern or particles if desired */}
      </div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_650px]">
          <div className="flex flex-col justify-center space-y-6">
            <AnimatedOnScroll animation="fadeInUp">
              <h1 className="text-4xl font-bold tracking-tighter font-sora sm:text-5xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-primary via-amber-300 to-amber-500">
                Inteligencia Artificial para <span className="block">tu eCommerce</span>
              </h1>
            </AnimatedOnScroll>
            <AnimatedOnScroll animation="fadeInUp" delay={200}>
              <p className="max-w-[600px] text-foreground/80 md:text-xl lg:text-lg xl:text-xl">
                En Aijolot, transformamos desafíos en oportunidades con soluciones IA a medida. Potencia tus ventas, optimiza operaciones y ofrece experiencias únicas.
              </p>
            </AnimatedOnScroll>
            <AnimatedOnScroll animation="fadeInUp" delay={400}>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <Link href="/ai-agent">Habla con Leo IA</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <Link href="/services">Nuestros Servicios</Link>
                </Button>
              </div>
            </AnimatedOnScroll>
          </div>
          <AnimatedOnScroll animation="zoomIn" delay={300} className="flex justify-center items-center">
            <div className="relative w-full max-w-md lg:max-w-xl aspect-square rounded-xl overflow-hidden shadow-2xl border-2 border-primary/30 bg-background/30 backdrop-blur-sm">
              <Image
                src="https://placehold.co/600x600.png"
                alt="Animación de Robot IA conectando logos de aplicaciones"
                width={600}
                height={600}
                className="object-cover w-full h-full"
                data-ai-hint="robot technology network"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-xs text-white/70 p-2 bg-black/50 rounded">
                Visualización conceptual: Robot IA orquestando soluciones.
              </div>
            </div>
          </AnimatedOnScroll>
        </div>
      </div>
      {/* Add some decorative elements, e.g. glowing orbs or lines */}
      <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/10 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-indigo-500/10 rounded-full filter blur-3xl opacity-50 animate-pulse animation-delay-2000"></div>
    </section>
  );
}
