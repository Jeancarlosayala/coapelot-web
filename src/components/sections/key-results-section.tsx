// src/components/sections/key-results-section.tsx

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface KeyResultItem {
  id: string;
  statistic: string;
  title: string;
  description: string;
  axolotlImageUrl: string;
  imageHint: string;
  imageSide: "left" | "right";
}

const keyResultsData: KeyResultItem[] = [
  {
    id: "satisfaction",
    statistic: "80%",
    title: "Satisfacción Elevada (CSAT)",
    description: "de clientes con experiencias positivas a través de chatbots de IA.",
    axolotlImageUrl: "/csat_aijolot.png",
    imageHint: "axolotl star achievement",
    imageSide: "left",
  },
  {
    id: "resolution",
    statistic: "65%",
    title: "Resolución Efectiva",
    description: "de tickets de soporte resueltos en el primer contacto por IA Generativa.",
    axolotlImageUrl: "/support_aijolot.png",
    imageHint: "axolotl headset support",
    imageSide: "right",
  },
  {
    id: "conversion",
    statistic: "+28%",
    title: "Conversión Mejorada",
    description: "incremento promedio en la tasa de conversión.",
    axolotlImageUrl: "/conversion_aijolot.png",
    imageHint: "axolotl money growth",
    imageSide: "left",
  },
  {
    id: "costs",
    statistic: "-23%",
    title: "Costos Optimizados",
    description: "reducción promedio en los costos operativos.",
    axolotlImageUrl: "/cost_aijolot.png",
    imageHint: "axolotl chart finance",
    imageSide: "right",
  },
];

const blockVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export function KeyResultsSection() {
  return (
    <section className="relative py-16 md:py-20 lg:py-24 bg-muted overflow-hidden">
      {/* Fondo generado con SVG - similar al Hero, ajustado para el color del acento */}
      <div className="absolute inset-0 z-0 opacity-40">
        <svg 
          className="w-full h-full" 
          viewBox="0 0 1200 700" 
          preserveAspectRatio="xMidYMid slice" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Líneas de Conexión: en color de acento con stroke-opacity */}
          <line x1="100" y1="100" x2="250" y2="150" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.2" className="animate-fade-in-line delay-100" />
          <line x1="250" y1="150" x2="400" y2="100" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.2" className="animate-fade-in-line delay-200" />
          <line x1="400" y1="100" x2="550" y2="150" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.2" className="animate-fade-in-line delay-300" />
          <line x1="250" y1="150" x2="200" y2="300" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.2" className="animate-fade-in-line delay-400" />
          <line x1="400" y1="100" x2="500" y2="250" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.2" className="animate-fade-in-line delay-500" />
          <line x1="200" y1="300" x2="350" y2="400" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.2" className="animate-fade-in-line delay-600" />
          <line x1="500" y1="250" x2="650" y2="350" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.2" className="animate-fade-in-line delay-700" />
          <line x1="350" y1="400" x2="550" y2="500" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.2" className="animate-fade-in-line delay-800" />
          <line x1="650" y1="350" x2="800" y2="450" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.2" className="animate-fade-in-line delay-900" />
          <line x1="550" y1="500" x2="700" y2="550" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.2" className="animate-fade-in-line delay-1000" />
          <line x1="800" y1="450" x2="900" y2="500" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.2" className="animate-fade-in-line delay-1100" />
          <line x1="700" y1="550" x2="1000" y2="600" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.2" className="animate-fade-in-line delay-1200" />
          <line x1="900" y1="500" x2="1100" y2="400" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.2" className="animate-fade-in-line delay-1300" />
          <line x1="150" y1="250" x2="300" y2="350" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.2" className="animate-fade-in-line delay-1400" />
          <line x1="450" y1="200" x2="600" y2="300" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.2" className="animate-fade-in-line delay-1500" />
          <line x1="750" y1="100" x2="900" y2="250" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.2" className="animate-fade-in-line delay-1600" />
          <line x1="50" y1="400" x2="200" y2="500" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.2" className="animate-fade-in-line delay-1700" />
          <line x1="850" y1="300" x2="1050" y2="350" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.2" className="animate-fade-in-line delay-1800" />
          <line x1="300" y1="50" x2="500" y2="10" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.2" className="animate-fade-in-line delay-1900" />
          <line x1="1000" y1="150" x2="1150" y2="200" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.2" className="animate-fade-in-line delay-2000" />
          <line x1="50" y1="200" x2="150" y2="300" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.2" className="animate-fade-in-line delay-2100" />
          <line x1="1050" y1="550" x2="1150" y2="650" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.2" className="animate-fade-in-line delay-2200" />
          <line x1="600" y1="50" x2="750" y2="150" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.2" className="animate-fade-in-line delay-2300" />
          <line x1="800" y1="0" x2="950" y2="100" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.2" className="animate-fade-in-line delay-2400" />
          <line x1="50" y1="600" x2="200" y2="650" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeOpacity="0.2" className="animate-fade-in-line delay-2500" />

          {/* Nodos Brillantes: en color de acento con opacidades y radios variados para un efecto más natural */}
          <circle cx="100" cy="100" r="8" fill="hsl(var(--accent))" className="animate-pulse-light delay-0" />
          <circle cx="250" cy="150" r="10" fill="hsl(var(--accent))" className="animate-pulse-light delay-300" />
          <circle cx="400" cy="100" r="7" fill="hsl(var(--accent))" className="animate-pulse-light delay-600" />
          <circle cx="200" cy="300" r="9" fill="hsl(var(--accent))" className="animate-pulse-light delay-900" />
          <circle cx="500" cy="250" r="11" fill="hsl(var(--accent))" className="animate-pulse-light delay-1200" />
          <circle cx="350" cy="400" r="8" fill="hsl(var(--accent))" className="animate-pulse-light delay-1500" />
          <circle cx="650" cy="350" r="10" fill="hsl(var(--accent))" className="animate-pulse-light delay-1800" />
          <circle cx="550" cy="500" r="9" fill="hsl(var(--accent))" className="animate-pulse-light delay-2100" />
          <circle cx="800" cy="450" r="12" fill="hsl(var(--accent))" className="animate-pulse-light delay-2400" />
          <circle cx="700" cy="550" r="8" fill="hsl(var(--accent))" className="animate-pulse-light delay-2700" />
          <circle cx="900" cy="500" r="10" fill="hsl(var(--accent))" className="animate-pulse-light delay-3000" />
          <circle cx="150" cy="250" r="6" fill="hsl(var(--accent))" className="animate-pulse-light opacity-75 delay-100" />
          <circle cx="450" cy="200" r="9" fill="hsl(var(--accent))" className="animate-pulse-light opacity-60 delay-400" />
          <circle cx="750" cy="100" r="7" fill="hsl(var(--accent))" className="animate-pulse-light opacity-80 delay-700" />
          <circle cx="50" cy="400" r="8" fill="hsl(var(--accent))" className="animate-pulse-light opacity-70 delay-1000" />
          <circle cx="850" cy="300" r="10" fill="hsl(var(--accent))" className="animate-pulse-light opacity-90 delay-1300" />
          <circle cx="300" cy="50" r="5" fill="hsl(var(--accent))" className="animate-pulse-light opacity-50 delay-1600" />
          <circle cx="1000" cy="150" r="11" fill="hsl(var(--accent))" className="animate-pulse-light opacity-100 delay-1900" />
          <circle cx="50" cy="200" r="7" fill="hsl(var(--accent))" className="animate-pulse-light opacity-65 delay-2200" />
          <circle cx="1050" cy="550" r="9" fill="hsl(var(--accent))" className="animate-pulse-light opacity-85 delay-2500" />
          <circle cx="600" cy="50" r="6" fill="hsl(var(--accent))" className="animate-pulse-light opacity-70 delay-2800" />
          <circle cx="800" cy="0" r="10" fill="hsl(var(--accent))" className="animate-pulse-light opacity-95 delay-3100" />
          <circle cx="50" cy="600" r="8" fill="hsl(var(--accent))" className="animate-pulse-light opacity-70 delay-3400" />
          <circle cx="200" cy="650" r="7" fill="hsl(var(--accent))" className="animate-pulse-light opacity-60 delay-3700" />
          <circle cx="700" cy="10" r="3" fill="hsl(var(--accent))" className="animate-pulse-light opacity-40 delay-500" />
          <circle cx="950" cy="70" r="4" fill="hsl(var(--accent))" className="animate-pulse-light opacity-30 delay-1000" />
          <circle cx="1100" cy="250" r="3" fill="hsl(var(--accent))" className="animate-pulse-light opacity-50 delay-1500" />
          <circle cx="100" cy="500" r="4" fill="hsl(var(--accent))" className="animate-pulse-light opacity-35 delay-2000" />
          <circle cx="1150" cy="100" r="3" fill="hsl(var(--accent))" className="animate-pulse-light opacity-45 delay-2500" />
          <circle cx="500" cy="650" r="4" fill="hsl(var(--accent))" className="animate-pulse-light opacity-30 delay-3000" />
          <circle cx="10" cy="10" r="2" fill="hsl(var(--accent))" className="animate-pulse-light opacity-25 delay-3500" />
          <circle cx="1190" cy="690" r="2" fill="hsl(var(--accent))" className="animate-pulse-light opacity-20 delay-4000" />
        </svg>
        
        {/* Decorative gradient blobs - manteniéndolos en color de acento y más sutiles */}
        <div className="absolute top-[-20%] left-[-25%] w-3/5 h-3/5 bg-accent/20 rounded-full filter blur-3xl opacity-50 animate-pulse z-10"></div>
        <div className="absolute bottom-[-20%] right-[-25%] w-3/5 h-4/5 bg-accent/15 rounded-full filter blur-3xl opacity-60 animate-pulse animation-delay-2000 z-10"></div>
      </div>
              
      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-sora font-bold text-foreground text-center mb-12 md:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          Resultados Reales con Aijolot
        </motion.h2>

        <div className="space-y-10 md:space-y-16 max-w-4xl mx-auto">
          {keyResultsData.map((item, index) => (
            <motion.div
              key={item.id}
              className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 lg:gap-16 p-6 py-8 sm:p-8 lg:p-10 bg-card rounded-xl shadow-xl w-full"
              variants={blockVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={index}
            >
              {/* Image Part - Order changes based on imageSide for desktop */}
              <div
                className={cn(
                  "w-full sm:w-2/5 md:w-1/3 lg:w-1/4 flex justify-center flex-shrink-0",
                  item.imageSide === "left" ? "md:order-1" : "md:order-2",
                  "mb-4 md:mb-0" // Margin bottom on mobile only
                )}
              >
                <Image
                  src={item.axolotlImageUrl}
                  alt={item.title} // More descriptive alt text
                  width={130} 
                  height={130}
                  className="object-contain h-auto max-w-[100px] sm:max-w-[120px] md:max-w-full"
                  data-ai-hint={item.imageHint}
                />
              </div>

              {/* Text Content Part - Order changes based on imageSide for desktop */}
              <div
                className={cn(
                  "flex items-center gap-4 sm:gap-5 md:gap-6 flex-grow w-full sm:w-3/5 md:w-2/3 lg:w-3/4",
                  item.imageSide === "left"
                    ? "md:order-2 flex-col sm:flex-row text-center sm:text-left"
                    : "md:order-1 flex-col sm:flex-row-reverse text-center sm:text-right"
                )}
              >
                <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground [font-feature-settings:'tnum'] tabular-nums flex-shrink-0">
                  {item.statistic}
                </div>
                <div className={cn("flex-grow", item.imageSide === 'right' ? "sm:text-right" : "sm:text-left" )}>
                  <h3 className="text-xl lg:text-2xl font-sora font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1 max-w-xs mx-auto sm:mx-0">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
