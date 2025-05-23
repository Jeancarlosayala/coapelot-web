import { ProcessStepCard } from '@/components/sections/process-step-card';
import { Button } from '@/components/ui/button';
import AnimatedOnScroll from '@/components/utils/animated-on-scroll';
import { Award, Bot, DraftingCompass, Rocket, ShieldCheck } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cómo Empezamos GRATIS',
  description: 'Tu viaje a la IA sin riesgo y con resultados. Conoce nuestro modelo de construcción gratuita y pago por resultados.',
};

const processSteps = [
  {
    stepNumber: 1,
    icon: <Bot size={40} />,
    title: 'Conversación y Diagnóstico con Leo IA',
    description: 'Inicia una charla con Leo IA. Cuéntale sobre tu eCommerce y recibe un diagnóstico inicial GRATUITO sobre cómo la IA puede ayudarte.',
  },
  {
    stepNumber: 2,
    icon: <DraftingCompass size={40} />,
    title: 'Diseño de tu Solución IA a Medida',
    description: 'Basándonos en el diagnóstico, te presentamos una propuesta detallada de solución IA, diseñada específicamente para tus necesidades. Sin costo alguno.',
  },
  {
    stepNumber: 3,
    icon: <Rocket size={40} />,
    title: 'Construcción y Puesta a Punto',
    description: 'Nuestro equipo de expertos construye y configura tu solución IA. No necesitas invertir nada en esta etapa. Nosotros asumimos el desarrollo.',
  },
  {
    stepNumber: 4,
    icon: <Award size={40} />,
    title: '¡Lanzamiento! Tu IA Genera Valor',
    description: 'Implementamos la solución en tu eCommerce. Desde el primer día, tu IA comienza a trabajar para optimizar procesos y mejorar resultados.',
  },
  {
    stepNumber: 5,
    icon: <ShieldCheck size={40} />,
    title: 'Colaboración Basada en Resultados',
    description: 'Nuestro modelo es simple: solo pagas si la IA te genera resultados tangibles y medibles. Ofrecemos soporte continuo para asegurar el éxito.',
  },
];

const keyBenefits = [
  { title: "Cero Riesgo Inicial", description: "No inviertes nada en el desarrollo y puesta en marcha de tu solución IA." },
  { title: "Pagas por Impacto Real", description: "Nuestro modelo se basa en los resultados que la IA genera para tu negocio." },
  { title: "Innovación Accesible", description: "Hacemos que la IA de vanguardia esté al alcance de tu eCommerce, sin barreras económicas." },
  { title: "Proceso Simplificado", description: "Te guiamos en cada paso, desde el diagnóstico hasta el soporte post-lanzamiento." },
  { title: "Aliados Estratégicos", description: "Nos convertimos en tu equipo IA, comprometidos con tu crecimiento a largo plazo." },
];


export default function HowWeStartPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
      <AnimatedOnScroll animation="fadeInUp">
        <header className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-sora font-bold mb-4">
            Tu Viaje a la IA: Sin Riesgo y Con Resultados
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Nuestra Promesa: Innovación IA Accesible para tu eCommerce. Descubre cómo empezamos GRATIS y nuestro modelo de pago por resultados.
          </p>
        </header>
      </AnimatedOnScroll>

      <section className="mb-12 md:mb-16">
        <h2 className="text-3xl font-sora font-semibold text-center mb-10">El Proceso Detallado (Simplificado)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {processSteps.map((step, index) => (
            <ProcessStepCard key={step.stepNumber} {...step} animationDelay={index * 100} />
          ))}
        </div>
      </section>
      
      <AnimatedOnScroll animation="fadeInUp">
        <section className="mb-12 md:mb-16 py-12 bg-card rounded-lg shadow-xl border-primary/30">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-sora font-semibold text-center mb-10">Beneficios Clave de Nuestro Modelo</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {keyBenefits.map((benefit, index) => (
                <AnimatedOnScroll key={benefit.title} animation="fadeInUp" delay={index * 100}>
                  <div className="p-6 bg-background rounded-lg shadow-md h-full">
                    <h3 className="text-xl font-sora font-semibold text-primary mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </AnimatedOnScroll>
              ))}
            </div>
          </div>
        </section>
      </AnimatedOnScroll>


      <AnimatedOnScroll animation="fadeInUp" delay={200}>
        <section className="text-center">
          <h2 className="text-3xl md:text-4xl font-sora font-bold mb-6">
            Inicia tu Transformación IA Hoy Mismo
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Da el primer paso hacia un eCommerce más inteligente y eficiente. Habla con Leo IA y descubre tu potencial.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6">
            <Link href="/ai-agent?prompt=Quiero+iniciar+mi+transformación+IA">Habla con Leo IA</Link>
          </Button>
        </section>
      </AnimatedOnScroll>
    </div>
  );
}
