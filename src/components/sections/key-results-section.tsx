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
    <section className="py-16 md:py-20 lg:py-24 bg-transparent">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <div className="mb-3">
            <div className="w-10 h-0.5 bg-primary mb-1 mx-auto"></div>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider">
              CAPÍTULO 07: TU NUEVO POTENCIAL
            </p>
          </div>
          <h2 className="text-[60px] leading-tight font-sora font-bold text-foreground">
            <span className="text-cyan-400">Resultados Reales</span> con Aijolot
          </h2>
        </motion.div>

        <div className="space-y-10 md:space-y-16 max-w-4xl mx-auto">
          {keyResultsData.map((item, index) => (
            <motion.div
              key={item.id}
              className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 lg:gap-16 p-6 py-8 sm:p-8 lg:p-10 bg-card/80 backdrop-blur-sm rounded-xl shadow-xl w-full"
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
