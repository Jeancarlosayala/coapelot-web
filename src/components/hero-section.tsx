
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import AnimatedOnScroll from '@/components/utils/animated-on-scroll';

export function HeroSection() {
  return (
    <section className="w-full py-8 md:py-12 lg:py-16 xl:py-24 bg-[hsl(229_61%_30%)] relative overflow-hidden">
      {/* Decorative gradient blobs for modern degrade effect */}
      <div className="absolute top-[-20%] left-[-25%] w-3/5 h-3/5 bg-orange-500/30 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-[-20%] right-[-25%] w-3/5 h-4/5 bg-indigo-400/25 rounded-full filter blur-3xl opacity-60 animate-pulse animation-delay-2000"></div>

      <div className="container px-[5%] relative z-10">
        {/* Updated grid: stacks on mobile, 40/60 split on lg screens */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-x-12 lg:gap-y-8 items-center">
          {/* Text Content Column - spans 2/5 on lg screens */}
          <div className="flex flex-col justify-center space-y-6 lg:col-span-2">
            <AnimatedOnScroll animation="fadeInUp">
              <div>
                <div className="mb-3">
                  <div className="w-10 h-0.5 bg-primary mb-1"></div>
                  <p className="text-sm font-semibold text-primary uppercase tracking-wider">
                    CAPÍTULO 01: Bienvenida
                  </p>
                </div>
                <h1 className="text-4xl font-bold tracking-tighter font-sora sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight">
                  IA para eCommerce. <br />Simple. Poderosa.
                </h1>
              </div>
            </AnimatedOnScroll>
            <AnimatedOnScroll animation="fadeInUp" delay={200}>
              <p className="max-w-[600px] text-neutral-200 md:text-xl lg:text-lg xl:text-xl">
                En Copælot, transformamos tu negocio con Inteligencia Artificial, sin complejidad.<br />Tu primera solución, sin costo inicial.
              </p>
            </AnimatedOnScroll>
            <AnimatedOnScroll animation="fadeInUp" delay={400}>
              <div className="flex flex-col sm:flex-row">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transform hover:scale-105 transition-transform duration-300 mb-3 sm:mb-0 sm:mr-3">
                  <Link href="/ai-agent">CHAT LEO IA</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 hover:text-primary shadow-lg transform hover:scale-105 transition-transform duration-300 bg-transparent hover:border-primary">
                  <Link href="/contact">AGENDAR MEET</Link>
                </Button>
              </div>
            </AnimatedOnScroll>
          </div>

          {/* Video Column - spans 3/5 on lg screens */}
          <AnimatedOnScroll 
            animation="zoomIn" 
            delay={300} 
            className="lg:col-span-3 flex justify-center items-center w-full h-full"
          >
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              <video
                src="/copaelot.mp4"
                className="w-full h-full object-cover rounded-md"
                autoPlay
                loop
                muted
                playsInline
                data-ai-hint="abstract technology animation"
              >
                Tu navegador no soporta la etiqueta de video.
              </video>
            </div>
          </AnimatedOnScroll>
        </div>
      </div>
    </section>
  );
}
