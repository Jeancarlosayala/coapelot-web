
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
        <div className="grid gap-6 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_650px]">
          <div className="flex flex-col justify-center space-y-6">
            <AnimatedOnScroll animation="fadeInUp">
              <div> {/* Wrapper div added here */}
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
          <AnimatedOnScroll animation="zoomIn" delay={300} className="flex justify-center items-center">
            <div className="relative w-full max-w-md lg:max-w-xl aspect-square rounded-xl overflow-hidden shadow-2xl border-2 border-primary/30 bg-background/10 dark:bg-background/30 backdrop-blur-sm p-4">
              {/*
                ************************************************************************************************************************************
                *** PASTE YOUR LARGE SVG CODE HERE ***
                Replace the placeholder <svg> below with your actual robot SVG.
                Ensure your SVG has appropriate width, height, and viewBox attributes to scale correctly within this container.
                You might need to adjust the parent div's padding or aspect ratio depending on your SVG's intrinsic dimensions.
                ************************************************************************************************************************************
              */}
              <svg 
                width="100%" 
                height="100%" 
                viewBox="0 0 200 200" 
                xmlns="http://www.w3.org/2000/svg"
                className="object-contain w-full h-full"
                aria-labelledby="heroSvgTitle"
                role="img"
              >
                <title id="heroSvgTitle">Placeholder for Robot SVG</title>
                <rect width="200" height="200" fill="hsl(var(--muted) / 0.3)" rx="10" />
                <circle cx="100" cy="70" r="30" fill="hsl(var(--primary))" />
                <rect x="70" y="110" width="60" height="70" rx="10" fill="hsl(var(--primary) / 0.8)" />
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="16" fontFamily="sans-serif">
                  Your Robot SVG Here
                </text>
              </svg>
              {/*
                ************************************************************************************************************************************
                *** END OF SVG PASTE AREA ***
                ************************************************************************************************************************************
              */}
              {/* The visual conceptual text can be removed or adjusted if your SVG includes it or makes it redundant */}
              <div className="absolute bottom-4 left-4 text-xs text-white/70 p-2 bg-black/50 rounded">
                Visualización conceptual: Robot IA orquestando soluciones.
              </div>
            </div>
          </AnimatedOnScroll>
        </div>
      </div>
    </section>
  );
}
