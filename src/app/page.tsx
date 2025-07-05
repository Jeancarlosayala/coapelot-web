
// src/app/page.tsx

import { HeroSection } from '@/components/hero-section';
import { PainPointsSection } from '@/components/sections/pain-points-section';
import { OurValuesSection } from '@/components/sections/our-values-section';
import { ServicesCarouselSection } from '@/components/sections/services-carousel-section';
import { TechStackSection } from '@/components/sections/tech-stack-section'; // Importa la nueva sección
import { KeyResultsSection } from '@/components/sections/key-results-section';
import { BlogPostCard } from '@/components/sections/blog-post-card';
import { Button } from '@/components/ui/button';
import AnimatedOnScroll from '@/components/utils/animated-on-scroll';
import Link from 'next/link';
import Image from 'next/image';
import { getRecentBlogPosts } from '@/lib/blog';

export default function HomePage() {
  const blogPosts = getRecentBlogPosts(3); // Get 3 most recent blog posts

  return (
    <>
      <HeroSection />
      <PainPointsSection />
      <OurValuesSection />
      <ServicesCarouselSection />
      <TechStackSection /> {/* Nueva sección añadida aquí */}

      {/* Contenedor unificado para las tres secciones con fondo SVG continuo */}
      <div className="relative bg-muted overflow-hidden min-h-screen">
        {/* Fondo SVG unificado que cubre todas las secciones */}
        <div className="absolute inset-0 z-0 opacity-50">
          <svg 
            className="w-full h-full" 
            viewBox="0 0 1200 2100" 
            preserveAspectRatio="xMidYMid slice" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* ===== RED NEURONAL - CAPA SUPERIOR (0-700px) ===== */}
            {/* Conexiones horizontales principales */}
            <line x1="80" y1="120" x2="200" y2="110" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.3" className="animate-fade-in-line delay-100" />
            <line x1="200" y1="110" x2="320" y2="130" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.3" className="animate-fade-in-line delay-150" />
            <line x1="320" y1="130" x2="450" y2="115" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.3" className="animate-fade-in-line delay-200" />
            <line x1="450" y1="115" x2="580" y2="125" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.3" className="animate-fade-in-line delay-250" />
            <line x1="580" y1="125" x2="720" y2="110" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.3" className="animate-fade-in-line delay-300" />
            <line x1="720" y1="110" x2="850" y2="120" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.3" className="animate-fade-in-line delay-350" />
            <line x1="850" y1="120" x2="980" y2="115" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.3" className="animate-fade-in-line delay-400" />
            <line x1="980" y1="115" x2="1120" y2="125" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.3" className="animate-fade-in-line delay-450" />
            
            {/* Conexiones diagonales cruzadas */}
            <line x1="80" y1="120" x2="320" y2="250" stroke="hsl(var(--accent))" strokeWidth="1" strokeOpacity="0.3" className="animate-fade-in-line delay-500" />
            <line x1="200" y1="110" x2="580" y2="250" stroke="hsl(var(--accent))" strokeWidth="1" strokeOpacity="0.3" className="animate-fade-in-line delay-550" />
            <line x1="450" y1="115" x2="150" y2="280" stroke="hsl(var(--accent))" strokeWidth="1" strokeOpacity="0.3" className="animate-fade-in-line delay-600" />
            <line x1="720" y1="110" x2="350" y2="290" stroke="hsl(var(--accent))" strokeWidth="1" strokeOpacity="0.3" className="animate-fade-in-line delay-650" />
            <line x1="980" y1="115" x2="450" y2="270" stroke="hsl(var(--accent))" strokeWidth="1" strokeOpacity="0.3" className="animate-fade-in-line delay-700" />
            
            {/* Segunda capa neuronal */}
            <line x1="150" y1="280" x2="280" y2="270" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.3" className="animate-fade-in-line delay-750" />
            <line x1="280" y1="270" x2="450" y2="290" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.3" className="animate-fade-in-line delay-800" />
            <line x1="450" y1="290" x2="620" y2="275" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.3" className="animate-fade-in-line delay-850" />
            <line x1="620" y1="275" x2="780" y2="285" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.3" className="animate-fade-in-line delay-900" />
            <line x1="780" y1="285" x2="920" y2="280" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.3" className="animate-fade-in-line delay-950" />
            <line x1="920" y1="280" x2="1080" y2="290" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.3" className="animate-fade-in-line delay-1000" />
            
            {/* Conexiones hacia tercera capa */}
            <line x1="150" y1="280" x2="200" y2="450" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.5" className="animate-fade-in-line delay-1050" />
            <line x1="280" y1="270" x2="400" y2="440" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.5" className="animate-fade-in-line delay-1100" />
            <line x1="450" y1="290" x2="600" y2="460" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.5" className="animate-fade-in-line delay-1150" />
            <line x1="620" y1="275" x2="800" y2="445" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.5" className="animate-fade-in-line delay-1200" />
            <line x1="780" y1="285" x2="950" y2="470" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.5" className="animate-fade-in-line delay-1250" />
            
            {/* Tercera capa - más densa */}
            <line x1="200" y1="450" x2="400" y2="440" stroke="hsl(var(--accent))" strokeWidth="2" strokeOpacity="0.4" className="animate-fade-in-line delay-1300" />
            <line x1="400" y1="440" x2="600" y2="460" stroke="hsl(var(--accent))" strokeWidth="2" strokeOpacity="0.4" className="animate-fade-in-line delay-1350" />
            <line x1="600" y1="460" x2="800" y2="445" stroke="hsl(var(--accent))" strokeWidth="2" strokeOpacity="0.4" className="animate-fade-in-line delay-1400" />
            <line x1="800" y1="445" x2="950" y2="470" stroke="hsl(var(--accent))" strokeWidth="2" strokeOpacity="0.4" className="animate-fade-in-line delay-1450" />
            
            {/* ===== CONEXIONES ENTRE CAPAS (700-1400px) ===== */}
            {/* Sinapsis principales hacia sección media */}
            <line x1="200" y1="450" x2="180" y2="750" stroke="hsl(var(--accent))" strokeWidth="2.5" strokeOpacity="0.3" className="animate-fade-in-line delay-1500" />
            <line x1="400" y1="440" x2="350" y2="780" stroke="hsl(var(--accent))" strokeWidth="2.5" strokeOpacity="0.3" className="animate-fade-in-line delay-1550" />
            <line x1="600" y1="460" x2="550" y2="770" stroke="hsl(var(--accent))" strokeWidth="2.5" strokeOpacity="0.3" className="animate-fade-in-line delay-1600" />
            <line x1="800" y1="445" x2="750" y2="760" stroke="hsl(var(--accent))" strokeWidth="2.5" strokeOpacity="0.3" className="animate-fade-in-line delay-1650" />
            <line x1="950" y1="470" x2="920" y2="790" stroke="hsl(var(--accent))" strokeWidth="2.5" strokeOpacity="0.3" className="animate-fade-in-line delay-1700" />
            
            {/* Red neuronal densa en sección media */}
            <line x1="100" y1="720" x2="180" y2="750" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.3" className="animate-fade-in-line delay-1750" />
            <line x1="180" y1="750" x2="350" y2="780" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.3" className="animate-fade-in-line delay-1800" />
            <line x1="350" y1="780" x2="550" y2="770" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.3" className="animate-fade-in-line delay-1850" />
            <line x1="550" y1="770" x2="750" y2="760" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.3" className="animate-fade-in-line delay-1900" />
            <line x1="750" y1="760" x2="920" y2="790" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.3" className="animate-fade-in-line delay-1950" />
            <line x1="920" y1="790" x2="1100" y2="780" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.3" className="animate-fade-in-line delay-2000" />
            
            {/* Conexiones cruzadas complejas */}
            <line x1="100" y1="720" x2="550" y2="950" stroke="hsl(var(--accent))" strokeWidth="1" strokeOpacity="0.4" className="animate-fade-in-line delay-2050" />
            <line x1="350" y1="780" x2="200" y2="980" stroke="hsl(var(--accent))" strokeWidth="1" strokeOpacity="0.4" className="animate-fade-in-line delay-2100" />
            <line x1="750" y1="760" x2="400" y2="960" stroke="hsl(var(--accent))" strokeWidth="1" strokeOpacity="0.4" className="animate-fade-in-line delay-2150" />
            <line x1="920" y1="790" x2="650" y2="970" stroke="hsl(var(--accent))" strokeWidth="1" strokeOpacity="0.4" className="animate-fade-in-line delay-2200" />
            
            {/* Segunda capa media */}
            <line x1="200" y1="980" x2="400" y2="960" stroke="hsl(var(--accent))" strokeWidth="1.8" strokeOpacity="0.3" className="animate-fade-in-line delay-2250" />
            <line x1="400" y1="960" x2="650" y2="970" stroke="hsl(var(--accent))" strokeWidth="1.8" strokeOpacity="0.3" className="animate-fade-in-line delay-2300" />
            <line x1="650" y1="970" x2="850" y2="980" stroke="hsl(var(--accent))" strokeWidth="1.8" strokeOpacity="0.3" className="animate-fade-in-line delay-2350" />
            <line x1="550" y1="950" x2="750" y2="1100" stroke="hsl(var(--accent))" strokeWidth="1.8" strokeOpacity="0.3" className="animate-fade-in-line delay-2400" />
            
            {/* ===== RED NEURONAL INFERIOR (1400-2100px) ===== */}
            {/* Conexiones principales hacia la capa final */}
            <line x1="200" y1="980" x2="250" y2="1350" stroke="hsl(var(--accent))" strokeWidth="2.5" strokeOpacity="0.3" className="animate-fade-in-line delay-2450" />
            <line x1="400" y1="960" x2="450" y2="1380" stroke="hsl(var(--accent))" strokeWidth="2.5" strokeOpacity="0.3" className="animate-fade-in-line delay-2500" />
            <line x1="650" y1="970" x2="700" y2="1360" stroke="hsl(var(--accent))" strokeWidth="2.5" strokeOpacity="0.3" className="animate-fade-in-line delay-2550" />
            <line x1="850" y1="980" x2="900" y2="1370" stroke="hsl(var(--accent))" strokeWidth="2.5" strokeOpacity="0.3" className="animate-fade-in-line delay-2600" />
            
            {/* Red densa final */}
            <line x1="150" y1="1320" x2="250" y2="1350" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.3" className="animate-fade-in-line delay-2650" />
            <line x1="250" y1="1350" x2="450" y2="1380" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.3" className="animate-fade-in-line delay-2700" />
            <line x1="450" y1="1380" x2="700" y2="1360" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.3" className="animate-fade-in-line delay-2750" />
            <line x1="700" y1="1360" x2="900" y2="1370" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.3" className="animate-fade-in-line delay-2800" />
            <line x1="900" y1="1370" x2="1050" y2="1340" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.3" className="animate-fade-in-line delay-2850" />
            
            {/* Conexiones hacia capa de salida */}
            <line x1="250" y1="1350" x2="300" y2="1550" stroke="hsl(var(--accent))" strokeWidth="2" strokeOpacity="0.3" className="animate-fade-in-line delay-2900" />
            <line x1="450" y1="1380" x2="500" y2="1580" stroke="hsl(var(--accent))" strokeWidth="2" strokeOpacity="0.3" className="animate-fade-in-line delay-2950" />
            <line x1="700" y1="1360" x2="750" y2="1570" stroke="hsl(var(--accent))" strokeWidth="2" strokeOpacity="0.3" className="animate-fade-in-line delay-3000" />
            <line x1="900" y1="1370" x2="950" y2="1560" stroke="hsl(var(--accent))" strokeWidth="2" strokeOpacity="0.3" className="animate-fade-in-line delay-3050" />
            
            {/* Capa de salida final */}
            <line x1="300" y1="1550" x2="500" y2="1580" stroke="hsl(var(--accent))" strokeWidth="2.5" strokeOpacity="0.4" className="animate-fade-in-line delay-3100" />
            <line x1="500" y1="1580" x2="750" y2="1570" stroke="hsl(var(--accent))" strokeWidth="2.5" strokeOpacity="0.4" className="animate-fade-in-line delay-3150" />
            <line x1="750" y1="1570" x2="950" y2="1560" stroke="hsl(var(--accent))" strokeWidth="2.5" strokeOpacity="0.4" className="animate-fade-in-line delay-3200" />
            
            {/* Conexiones finales hacia última capa */}
            <line x1="300" y1="1550" x2="400" y2="1800" stroke="hsl(var(--accent))" strokeWidth="2" strokeOpacity="0.5" className="animate-fade-in-line delay-3250" />
            <line x1="500" y1="1580" x2="600" y2="1820" stroke="hsl(var(--accent))" strokeWidth="2" strokeOpacity="0.5" className="animate-fade-in-line delay-3300" />
            <line x1="750" y1="1570" x2="800" y2="1810" stroke="hsl(var(--accent))" strokeWidth="2" strokeOpacity="0.5" className="animate-fade-in-line delay-3350" />
            
            {/* Última capa - convergencia */}
            <line x1="400" y1="1800" x2="600" y2="1820" stroke="hsl(var(--accent))" strokeWidth="3" strokeOpacity="0.5" className="animate-fade-in-line delay-3400" />
            <line x1="600" y1="1820" x2="800" y2="1810" stroke="hsl(var(--accent))" strokeWidth="3" strokeOpacity="0.5" className="animate-fade-in-line delay-3450" />

            {/* ===== NODOS NEURONALES - DISTRIBUIDOS POR CAPAS ===== */}
            {/* Capa de entrada */}
            <circle cx="80" cy="120" r="6" fill="hsl(var(--accent))" className="animate-pulse-light delay-0" />
            <circle cx="200" cy="110" r="8" fill="hsl(var(--accent))" className="animate-pulse-light delay-100" />
            <circle cx="320" cy="130" r="7" fill="hsl(var(--accent))" className="animate-pulse-light delay-200" />
            <circle cx="450" cy="115" r="9" fill="hsl(var(--accent))" className="animate-pulse-light delay-300" />
            <circle cx="580" cy="125" r="8" fill="hsl(var(--accent))" className="animate-pulse-light delay-400" />
            <circle cx="720" cy="110" r="10" fill="hsl(var(--accent))" className="animate-pulse-light delay-500" />
            <circle cx="850" cy="120" r="7" fill="hsl(var(--accent))" className="animate-pulse-light delay-600" />
            <circle cx="980" cy="115" r="8" fill="hsl(var(--accent))" className="animate-pulse-light delay-700" />
            <circle cx="1120" cy="125" r="6" fill="hsl(var(--accent))" className="animate-pulse-light delay-800" />
            
            {/* Segunda capa */}
            <circle cx="150" cy="280" r="9" fill="hsl(var(--accent))" className="animate-pulse-light delay-900" />
            <circle cx="280" cy="270" r="11" fill="hsl(var(--accent))" className="animate-pulse-light delay-1000" />
            <circle cx="450" cy="290" r="10" fill="hsl(var(--accent))" className="animate-pulse-light delay-1100" />
            <circle cx="620" cy="275" r="12" fill="hsl(var(--accent))" className="animate-pulse-light delay-1200" />
            <circle cx="780" cy="285" r="9" fill="hsl(var(--accent))" className="animate-pulse-light delay-1300" />
            <circle cx="920" cy="280" r="11" fill="hsl(var(--accent))" className="animate-pulse-light delay-1400" />
            <circle cx="1080" cy="290" r="8" fill="hsl(var(--accent))" className="animate-pulse-light delay-1500" />
            
            {/* Tercera capa - nodos principales */}
            <circle cx="200" cy="450" r="12" fill="hsl(var(--accent))" className="animate-pulse-light delay-1600" />
            <circle cx="400" cy="440" r="14" fill="hsl(var(--accent))" className="animate-pulse-light delay-1700" />
            <circle cx="600" cy="460" r="13" fill="hsl(var(--accent))" className="animate-pulse-light delay-1800" />
            <circle cx="800" cy="445" r="15" fill="hsl(var(--accent))" className="animate-pulse-light delay-1900" />
            <circle cx="950" cy="470" r="11" fill="hsl(var(--accent))" className="animate-pulse-light delay-2000" />
            
            {/* Capa media - procesamiento */}
            <circle cx="100" cy="720" r="8" fill="hsl(var(--accent))" className="animate-pulse-light opacity-85 delay-2100" />
            <circle cx="180" cy="750" r="10" fill="hsl(var(--accent))" className="animate-pulse-light opacity-90 delay-2200" />
            <circle cx="350" cy="780" r="12" fill="hsl(var(--accent))" className="animate-pulse-light opacity-95 delay-2300" />
            <circle cx="550" cy="770" r="11" fill="hsl(var(--accent))" className="animate-pulse-light opacity-100 delay-2400" />
            <circle cx="750" cy="760" r="13" fill="hsl(var(--accent))" className="animate-pulse-light opacity-90 delay-2500" />
            <circle cx="920" cy="790" r="10" fill="hsl(var(--accent))" className="animate-pulse-light opacity-85 delay-2600" />
            <circle cx="1100" cy="780" r="9" fill="hsl(var(--accent))" className="animate-pulse-light opacity-80 delay-2700" />
            
            {/* Segunda capa media */}
            <circle cx="200" cy="980" r="11" fill="hsl(var(--accent))" className="animate-pulse-light opacity-75 delay-2800" />
            <circle cx="400" cy="960" r="12" fill="hsl(var(--accent))" className="animate-pulse-light opacity-80 delay-2900" />
            <circle cx="550" cy="950" r="14" fill="hsl(var(--accent))" className="animate-pulse-light opacity-90 delay-3000" />
            <circle cx="650" cy="970" r="13" fill="hsl(var(--accent))" className="animate-pulse-light opacity-85 delay-3100" />
            <circle cx="750" cy="1100" r="10" fill="hsl(var(--accent))" className="animate-pulse-light opacity-80 delay-3200" />
            <circle cx="850" cy="980" r="11" fill="hsl(var(--accent))" className="animate-pulse-light opacity-75 delay-3300" />
            
            {/* Capa de convergencia */}
            <circle cx="150" cy="1320" r="9" fill="hsl(var(--accent))" className="animate-pulse-light opacity-70 delay-3400" />
            <circle cx="250" cy="1350" r="12" fill="hsl(var(--accent))" className="animate-pulse-light opacity-80 delay-3500" />
            <circle cx="450" cy="1380" r="14" fill="hsl(var(--accent))" className="animate-pulse-light opacity-90 delay-3600" />
            <circle cx="700" cy="1360" r="13" fill="hsl(var(--accent))" className="animate-pulse-light opacity-85 delay-3700" />
            <circle cx="900" cy="1370" r="11" fill="hsl(var(--accent))" className="animate-pulse-light opacity-80 delay-3800" />
            <circle cx="1050" cy="1340" r="10" fill="hsl(var(--accent))" className="animate-pulse-light opacity-75 delay-3900" />
            
            {/* Capa de salida */}
            <circle cx="300" cy="1550" r="13" fill="hsl(var(--accent))" className="animate-pulse-light opacity-90 delay-4000" />
            <circle cx="500" cy="1580" r="15" fill="hsl(var(--accent))" className="animate-pulse-light opacity-100 delay-4100" />
            <circle cx="750" cy="1570" r="14" fill="hsl(var(--accent))" className="animate-pulse-light opacity-95 delay-4200" />
            <circle cx="950" cy="1560" r="12" fill="hsl(var(--accent))" className="animate-pulse-light opacity-85 delay-4300" />
            
            {/* Nodos finales - outputs */}
            <circle cx="400" cy="1800" r="16" fill="hsl(var(--accent))" className="animate-pulse-light opacity-100 delay-4400" />
            <circle cx="600" cy="1820" r="18" fill="hsl(var(--accent))" className="animate-pulse-light opacity-100 delay-4500" />
            <circle cx="800" cy="1810" r="15" fill="hsl(var(--accent))" className="animate-pulse-light opacity-95 delay-4600" />
            
            {/* Nodos adicionales esparcidos para densidad */}
            <circle cx="50" cy="200" r="4" fill="hsl(var(--accent))" className="animate-pulse-light opacity-50 delay-500" />
            <circle cx="1150" cy="180" r="5" fill="hsl(var(--accent))" className="animate-pulse-light opacity-60 delay-600" />
            <circle cx="70" cy="400" r="6" fill="hsl(var(--accent))" className="animate-pulse-light opacity-40 delay-700" />
            <circle cx="1100" cy="420" r="5" fill="hsl(var(--accent))" className="animate-pulse-light opacity-50 delay-800" />
            <circle cx="30" cy="600" r="4" fill="hsl(var(--accent))" className="animate-pulse-light opacity-30 delay-900" />
            <circle cx="1170" cy="580" r="6" fill="hsl(var(--accent))" className="animate-pulse-light opacity-45 delay-1000" />
            <circle cx="80" cy="1000" r="5" fill="hsl(var(--accent))" className="animate-pulse-light opacity-35 delay-1100" />
            <circle cx="1120" cy="1020" r="4" fill="hsl(var(--accent))" className="animate-pulse-light opacity-40 delay-1200" />
            <circle cx="60" cy="1200" r="6" fill="hsl(var(--accent))" className="animate-pulse-light opacity-45 delay-1300" />
            <circle cx="1140" cy="1180" r="5" fill="hsl(var(--accent))" className="animate-pulse-light opacity-50 delay-1400" />
            <circle cx="100" cy="1500" r="4" fill="hsl(var(--accent))" className="animate-pulse-light opacity-30 delay-1500" />
            <circle cx="1100" cy="1520" r="6" fill="hsl(var(--accent))" className="animate-pulse-light opacity-40 delay-1600" />
            <circle cx="50" cy="1900" r="5" fill="hsl(var(--accent))" className="animate-pulse-light opacity-35 delay-1700" />
            <circle cx="1150" cy="1880" r="4" fill="hsl(var(--accent))" className="animate-pulse-light opacity-30 delay-1800" />
          </svg>
        </div>
        
        {/* Decorative gradient blobs distribuidos */}
        <div className="absolute top-[-10%] left-[-15%] w-2/5 h-2/5 bg-accent/20 rounded-full filter blur-3xl opacity-40 animate-pulse z-10"></div>
        <div className="absolute top-[30%] right-[-15%] w-2/5 h-2/5 bg-accent/15 rounded-full filter blur-3xl opacity-30 animate-pulse animation-delay-2000 z-10"></div>
        <div className="absolute bottom-[-10%] left-[-15%] w-2/5 h-2/5 bg-accent/10 rounded-full filter blur-3xl opacity-25 animate-pulse animation-delay-4000 z-10"></div>
        
        {/* Sección 1: Diagnóstico IA Estratégico */}
        <section id="diagnostico" className="relative z-20">
          <div className="container mx-auto px-6 py-20">
            <AnimatedOnScroll animation="fadeInUp">
              <div className="gradient-bg rounded-2xl p-10 md:p-16 text-center text-white flex flex-col items-center">
                <div className="chapter-line mx-auto bg-white"></div>
                <p className="text-sm font-bold text-white uppercase tracking-widest mb-2">CAPÍTULO 06: TU PLAN DE ACCIÓN</p>
                <h2 className="text-[60px] leading-tight font-sora font-bold mb-4 text-white">Inicia con un <span className="text-cyan-400">Diagnóstico IA</span> Estratégico</h2>
                <p className="text-lg text-white/80 max-w-3xl mx-auto mb-8">
                  ¿No sabes por dónde empezar? Es normal. Habla con nuestro agente Aijolot y recibe en minutos un plan de acción personalizado, identificando las oportunidades de mayor impacto para tu Empresa.
                </p>
                <div className="flex flex-col items-center">
                  <Button asChild size="default" className="bg-primary hover:bg-primary/90 text-primary-foreground shine-button">
                    <Link href="/ai-agent?prompt=Quiero+un+diagnóstico+IA+estratégico+para+mi+eCommerce">
                      Hablar con Aijolot 
                      <Image 
                        src="/chat_emoji.png" 
                        alt="Chat Emoji" 
                        width={30} 
                        height={20} 
                        className="ml-2" 
                      />
                    </Link>
                  </Button>
                  <p className="text-xs text-white/60 mt-3">Recibe tu análisis en menos de 5 minutos. Sin compromiso.</p>
                </div>
              </div>
            </AnimatedOnScroll>
          </div>
        </section>

        {/* Sección 2: KeyResults sin fondo propio */}
        <div className="relative z-20">
          <KeyResultsSection />
        </div>

        {/* Sección 3: Blog Posts */}
        <section className="py-16 md:py-20 lg:py-24 relative z-20">
          <div className="container mx-auto px-4 md:px-6">
            <AnimatedOnScroll animation="fadeInUp">
              <div className="text-center mb-12 md:mb-16 lg:mb-20">
                <div className="mb-3">
                  <div className="w-10 h-0.5 bg-primary mb-1 mx-auto"></div>
                  <p className="text-sm font-semibold text-primary uppercase tracking-wider">
                    CAPITULO 8: LO QUE HEMOS APRENDIDO
                  </p>
                </div>
                <h2 className="text-[60px] leading-tight font-sora font-bold text-foreground">
                  <span className="text-cyan-400">Insights</span> y Casos de Éxito
                </h2>
              </div>
            </AnimatedOnScroll>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <BlogPostCard
                  key={post.slug}
                  post={post}
                  animationDelay={index * 100}
                />
              ))}
            </div>
            
            <AnimatedOnScroll animation="fadeInUp" delay={400}>
              <div className="text-center mt-12">
                <Button asChild variant="outline" size="lg" className="rounded-lg text-base font-bold transition-transform hover:scale-105 h-14 px-8">
                  <Link href="/blog">
                    Ver más artículos
                  </Link>
                </Button>
              </div>
            </AnimatedOnScroll>
          </div>
        </section>

        {/* Sección 4: CTA Final */}
        <section className="py-16 md:py-24 relative z-20">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <AnimatedOnScroll animation="fadeInUp">
              <h2 className="text-[60px] leading-tight font-sora font-bold mb-6">¿Listo para Desbloquear tus <span className="text-cyan-400">AI Superpowers</span>?</h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                No vendemos soluciones genéricas, co-creamos tu ventaja competitiva. Hablemos de tus retos y diseñemos juntos una solución a medida.
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6">
                <Link href="/contact">Contacta Ahora</Link>
              </Button>
            </AnimatedOnScroll>
          </div>
        </section>
      </div>
    </>
  );
}
