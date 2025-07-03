
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import AnimatedOnScroll from '@/components/utils/animated-on-scroll';

export function HeroSection() {
  return (
    <section className="w-full py-8 md:py-12 lg:py-16 xl:py-24 bg-[#003057] relative overflow-hidden">
      {/* BACKGROUND GENERADO CON SVG: Nodos y Conexiones */}
      <div className="absolute inset-0 z-0 opacity-25"> {/* Ajusta la opacidad global del fondo SVG */}
        <svg 
          className="w-full h-full" 
          viewBox="0 0 1200 700" // Aumentado el viewBox para una mayor área de dibujo
          preserveAspectRatio="xMidYMid slice" // Mantiene la relación de aspecto y cubre el área
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Líneas de Conexión: Blancas con stroke-opacity para sutilidad */}
          {/* Distribuye más líneas para una mayor densidad de red */}
          <line x1="100" y1="100" x2="250" y2="150" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.2" className="animate-fade-in-line delay-100" />
          <line x1="250" y1="150" x2="400" y2="100" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.2" className="animate-fade-in-line delay-200" />
          <line x1="400" y1="100" x2="550" y2="150" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.2" className="animate-fade-in-line delay-300" />
          <line x1="250" y1="150" x2="200" y2="300" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.2" className="animate-fade-in-line delay-400" />
          <line x1="400" y1="100" x2="500" y2="250" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.2" className="animate-fade-in-line delay-500" />
          <line x1="200" y1="300" x2="350" y2="400" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.2" className="animate-fade-in-line delay-600" />
          <line x1="500" y1="250" x2="650" y2="350" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.2" className="animate-fade-in-line delay-700" />
          <line x1="350" y1="400" x2="550" y2="500" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.2" className="animate-fade-in-line delay-800" />
          <line x1="650" y1="350" x2="800" y2="450" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.2" className="animate-fade-in-line delay-900" />
          <line x1="550" y1="500" x2="700" y2="550" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.2" className="animate-fade-in-line delay-1000" />
          <line x1="800" y1="450" x2="900" y2="500" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.2" className="animate-fade-in-line delay-1100" />

          {/* Más líneas para mayor densidad y conexiones cruzadas */}
          <line x1="700" y1="550" x2="1000" y2="600" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.2" className="animate-fade-in-line delay-1200" />
          <line x1="900" y1="500" x2="1100" y2="400" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.2" className="animate-fade-in-line delay-1300" />
          <line x1="150" y1="250" x2="300" y2="350" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.2" className="animate-fade-in-line delay-1400" />
          <line x1="450" y1="200" x2="600" y2="300" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.2" className="animate-fade-in-line delay-1500" />
          <line x1="750" y1="100" x2="900" y2="250" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.2" className="animate-fade-in-line delay-1600" />
          <line x1="50" y1="400" x2="200" y2="500" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.2" className="animate-fade-in-line delay-1700" />
          <line x1="850" y1="300" x2="1050" y2="350" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.2" className="animate-fade-in-line delay-1800" />
          <line x1="300" y1="50" x2="500" y2="10" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.2" className="animate-fade-in-line delay-1900" />
          <line x1="1000" y1="150" x2="1150" y2="200" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.2" className="animate-fade-in-line delay-2000" />
          <line x1="50" y1="200" x2="150" y2="300" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.2" className="animate-fade-in-line delay-2100" />
          <line x1="1050" y1="550" x2="1150" y2="650" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.2" className="animate-fade-in-line delay-2200" />
          <line x1="600" y1="50" x2="750" y2="150" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.2" className="animate-fade-in-line delay-2300" />
          <line x1="800" y1="0" x2="950" y2="100" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.2" className="animate-fade-in-line delay-2400" />
          <line x1="50" y1="600" x2="200" y2="650" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.2" className="animate-fade-in-line delay-2500" />

          {/* Nodos Brillantes: Color #28C7F0, con opacidades y radios variados para un efecto más natural */}
          {/* Los delays se ajustan para que brillen de forma asíncrona */}
          {/* Círculos con opacidad normal y brillo */}
          <circle cx="100" cy="100" r="8" fill="#28C7F0" className="animate-pulse-light delay-0" />
          <circle cx="250" cy="150" r="10" fill="#28C7F0" className="animate-pulse-light delay-300" />
          <circle cx="400" cy="100" r="7" fill="#28C7F0" className="animate-pulse-light delay-600" />
          <circle cx="200" cy="300" r="9" fill="#28C7F0" className="animate-pulse-light delay-900" />
          <circle cx="500" cy="250" r="11" fill="#28C7F0" className="animate-pulse-light delay-1200" />
          <circle cx="350" cy="400" r="8" fill="#28C7F0" className="animate-pulse-light delay-1500" />
          <circle cx="650" cy="350" r="10" fill="#28C7F0" className="animate-pulse-light delay-1800" />
          <circle cx="550" cy="500" r="9" fill="#28C7F0" className="animate-pulse-light delay-2100" />
          <circle cx="800" cy="450" r="12" fill="#28C7F0" className="animate-pulse-light delay-2400" />
          <circle cx="700" cy="550" r="8" fill="#28C7F0" className="animate-pulse-light delay-2700" />
          <circle cx="900" cy="500" r="10" fill="#28C7F0" className="animate-pulse-light delay-3000" />
          
          {/* Más círculos con opacidad base ligeramente menor para "acentos más transparentes" */}
          <circle cx="150" cy="250" r="6" fill="#28C7F0" className="animate-pulse-light opacity-75 delay-100" />
          <circle cx="450" cy="200" r="9" fill="#28C7F0" className="animate-pulse-light opacity-60 delay-400" />
          <circle cx="750" cy="100" r="7" fill="#28C7F0" className="animate-pulse-light opacity-80 delay-700" />
          <circle cx="50" cy="400" r="8" fill="#28C7F0" className="animate-pulse-light opacity-70 delay-1000" />
          <circle cx="850" cy="300" r="10" fill="#28C7F0" className="animate-pulse-light opacity-90 delay-1300" />
          <circle cx="300" cy="50" r="5" fill="#28C7F0" className="animate-pulse-light opacity-50 delay-1600" />
          <circle cx="1000" cy="150" r="11" fill="#28C7F0" className="animate-pulse-light opacity-100 delay-1900" /> {/* Más brillante */}
          <circle cx="50" cy="200" r="7" fill="#28C7F0" className="animate-pulse-light opacity-65 delay-2200" />
          <circle cx="1050" cy="550" r="9" fill="#28C7F0" className="animate-pulse-light opacity-85 delay-2500" />
          <circle cx="600" cy="50" r="6" fill="#28C7F0" className="animate-pulse-light opacity-70 delay-2800" />
          <circle cx="800" cy="0" r="10" fill="#28C7F0" className="animate-pulse-light opacity-95 delay-3100" /> {/* Más brillante */}
          <circle cx="50" y1="600" r="8" fill="#28C7F0" className="animate-pulse-light opacity-70 delay-3400" />
          <circle cx="200" y1="650" r="7" fill="#28C7F0" className="animate-pulse-light opacity-60 delay-3700" />

          {/* Círculos pequeños adicionales para un efecto de "ruido" o puntos de luz tenues */}
          <circle cx="700" cy="10" r="3" fill="#28C7F0" className="animate-pulse-light opacity-40 delay-500" />
          <circle cx="950" cy="70" r="4" fill="#28C7F0" className="animate-pulse-light opacity-30 delay-1000" />
          <circle cx="1100" cy="250" r="3" fill="#28C7F0" className="animate-pulse-light opacity-50 delay-1500" />
          <circle cx="100" cy="500" r="4" fill="#28C7F0" className="animate-pulse-light opacity-35 delay-2000" />
          <circle cx="1150" cy="100" r="3" fill="#28C7F0" className="animate-pulse-light opacity-45 delay-2500" />
          <circle cx="500" cy="650" r="4" fill="#28C7F0" className="animate-pulse-light opacity-30 delay-3000" />
          <circle cx="10" cy="10" r="2" fill="#28C7F0" className="animate-pulse-light opacity-25 delay-3500" />
          <circle cx="1190" cy="690" r="2" fill="#28C7F0" className="animate-pulse-light opacity-20 delay-4000" />
          
        </svg>
      </div>

      {/* Decorative gradient blobs for modern degrade effect */}
      {/* Mantienen un z-index más alto para que queden por encima del SVG de fondo */}
      <div className="absolute top-[-20%] left-[-25%] w-3/5 h-3/5 bg-primary/30 rounded-full filter blur-3xl opacity-50 animate-pulse z-10"></div>
      <div className="absolute bottom-[-20%] right-[-25%] w-3/5 h-4/5 bg-indigo-400/25 rounded-full filter blur-3xl opacity-60 animate-pulse animation-delay-2000 z-10"></div>

      <div className="container px-[5%] relative z-20">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-x-16 items-center">
          <div className="flex flex-col justify-center space-y-6">
            <AnimatedOnScroll animation="fadeInUp">
              <div>
                <div className="mb-3">
                  <div className="w-10 h-0.5 bg-primary mb-1"></div>
                  <p className="text-sm font-semibold text-primary uppercase tracking-wider">
                  Aijolot AI Solutions
                  </p>
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight">
                ¿Tu empresa opera con<br />todo su potencial?
                </h1>
              </div>
            </AnimatedOnScroll>
            <AnimatedOnScroll animation="fadeInUp" delay={200}>
              <p className="max-w-[600px] text-neutral-200 md:text-xl lg:text-lg xl:text-xl">
              Desbloquea tus AI Superpowers y transforma procesos manuales en una ventaja competitiva imparable.
              </p>
            </AnimatedOnScroll>
            <AnimatedOnScroll animation="fadeInUp" delay={400}>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
                <Button asChild size="lg" className="rounded-lg text-base font-bold transition-transform hover:scale-105 h-14 px-8 bg-cyan-400 text-blue-900 shine-button">
                  <Link href="#diagnostico">
                      Iniciar Diagnóstico GRATIS
                  </Link>
                </Button>
                {/* INICIO DE MODIFICACIÓN DEL SEGUNDO BOTÓN */}
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg" 
                  className="rounded-lg text-base font-bold transition-transform hover:scale-105 h-14 px-8 border-2 border-primary bg-transparent hover:bg-transparent text-primary"
                >
                  <Link href="#contacto">
                      Agendar una Demo
                  </Link>
                </Button>
                {/* FIN DE MODIFICACIÓN DEL SEGUNDO BOTÓN */}
              </div>
            </AnimatedOnScroll>
          </div>
          <AnimatedOnScroll 
            animation="zoomIn" 
            delay={300} 
            className="flex justify-center items-center w-full h-full"
          >
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              <Image
                src="/aijolot_hero.png"
                alt="Equipo Aijolot colaborando" 
                width={600} 
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </AnimatedOnScroll>
        </div>
      </div>
    </section>
  );
}
