import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AnimatedOnScroll from '@/components/utils/animated-on-scroll';
import { Eye, Target, Zap, Handshake, Palette, Users } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Nosotros - Arquitectos de Simplicidad',
  description: 'Conoce al equipo de Aijolot y nuestra misión de simplificar la IA para potenciar tu eCommerce.',
};

const values = [
  { icon: <Zap className="w-8 h-8 text-primary" />, title: "Innovación Constante", description: "Buscamos y aplicamos lo último en IA para ofrecerte soluciones de vanguardia." },
  { icon: <Palette className="w-8 h-8 text-primary" />, title: "Claridad y Simplicidad", description: "Traducimos la complejidad de la IA en herramientas fáciles de usar y entender." },
  { icon: <Target className="w-8 h-8 text-primary" />, title: "Impacto Tangible", description: "Nos enfocamos en generar resultados medibles que impulsen tu crecimiento." },
  { icon: <Handshake className="w-8 h-8 text-primary" />, title: "Colaboración Activa", description: "Trabajamos contigo como aliados estratégicos, entendiendo tus metas y desafíos." },
];

export default function AboutUsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
      <AnimatedOnScroll animation="fadeInUp">
        <header className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-sora font-bold mb-4">
            Arquitectos de Simplicidad Detrás de tus AI Super Powers
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            En Aijolot, somos un equipo apasionado por la tecnología y el eCommerce, dedicados a hacer la Inteligencia Artificial accesible y poderosa para tu negocio.
          </p>
        </header>
      </AnimatedOnScroll>

      <section className="grid md:grid-cols-2 gap-12 items-center mb-12 md:mb-16">
        <AnimatedOnScroll animation="fadeInLeft">
          <Image 
            src="https://placehold.co/600x400.png" 
            alt="Equipo Aijolot colaborando" 
            width={600} 
            height={400}
            className="rounded-lg shadow-xl object-cover"
            data-ai-hint="team collaboration"
          />
        </AnimatedOnScroll>
        <AnimatedOnScroll animation="fadeInRight" className="space-y-6">
          <div>
            <h2 className="text-3xl font-sora font-semibold flex items-center mb-3"><Target className="w-8 h-8 mr-3 text-primary"/>Nuestra Misión</h2>
            <p className="text-lg text-muted-foreground">Simplificar la Inteligencia Artificial para potenciar cada aspecto de tu eCommerce, transformando desafíos en ventajas competitivas y crecimiento sostenible.</p>
          </div>
          <div>
            <h2 className="text-3xl font-sora font-semibold flex items-center mb-3"><Eye className="w-8 h-8 mr-3 text-primary"/>Nuestra Visión</h2>
            <p className="text-lg text-muted-foreground">Ser los aliados estratégicos que convierten la IA en tu mayor ventaja competitiva, impulsando la innovación y el éxito en el dinámico mundo del comercio electrónico.</p>
          </div>
        </AnimatedOnScroll>
      </section>

      <AnimatedOnScroll animation="fadeInUp">
        <section className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-sora font-bold text-center mb-10">Nuestros Valores Fundamentales</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimatedOnScroll key={value.title} animation="fadeInUp" delay={index * 100}>
                <Card className="text-center h-full hover:shadow-primary/20 hover:shadow-lg transition-shadow duration-300 border-border hover:border-primary/50">
                  <CardHeader className="items-center">
                    <div className="p-3 rounded-full bg-primary/10 mb-3 inline-block">
                      {value.icon}
                    </div>
                    <CardTitle className="font-sora text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </AnimatedOnScroll>
            ))}
          </div>
        </section>
      </AnimatedOnScroll>
      
      <AnimatedOnScroll animation="fadeInUp">
        <section className="py-12 bg-card rounded-lg shadow-xl border-primary/30 mb-12 md:mb-16">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-sora font-bold mb-6 flex items-center"><Users className="w-10 h-10 mr-4 text-primary"/>El Equipo Aijolot</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Somos un colectivo de estrategas, ingenieros de IA, diseñadores UX y expertos en eCommerce. Nuestra filosofía se centra en la agilidad, la colaboración estrecha con nuestros clientes y una obsesión por entregar soluciones que no solo funcionen, sino que inspiren.
              </p>
              <p className="text-lg text-muted-foreground">
                No solo construimos IA; construimos el futuro de tu negocio, juntos.
              </p>
            </div>
            <div className="flex justify-center">
              <Image 
                src="https://placehold.co/500x350.png" 
                alt="Filosofía de trabajo Aijolot" 
                width={500} 
                height={350}
                className="rounded-lg shadow-lg object-cover"
                data-ai-hint="modern office teamwork" 
              />
            </div>
          </div>
        </section>
      </AnimatedOnScroll>

      <AnimatedOnScroll animation="fadeInUp">
        <section className="text-center">
          <h2 className="text-3xl md:text-4xl font-sora font-bold mb-6">¿Por Qué Elegir Aijolot?</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Nuestro enfoque único combina expertise técnico profundo con una comprensión real de los desafíos del eCommerce. El modelo de "construcción gratuita y pago por resultados", junto con nuestra metodología IDEALS (Innovación, Datos, Estrategia, Acción, Logros, Simplicidad), nos diferencia. Te ofrecemos IA sin riesgo, con un impacto garantizado.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6">
            <Link href="/contact">Construyamos el Futuro de tu eCommerce</Link>
          </Button>
        </section>
      </AnimatedOnScroll>
    </div>
  );
}
