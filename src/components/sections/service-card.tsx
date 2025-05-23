import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import type { LucideIcon } from 'lucide-react';
import AnimatedOnScroll from '../utils/animated-on-scroll';

interface ServiceCardProps {
  id: string;
  icon: React.ReactElement<LucideIcon> | JSX.Element; // Allow SVG elements too
  title: string;
  problem: string;
  solution: string;
  benefits: string[];
  ctaText?: string;
  ctaLink?: string;
  animationDelay?: number;
}

export function ServiceCard({
  id,
  icon,
  title,
  problem,
  solution,
  benefits,
  ctaText = "Habla con Leo IA sobre esto",
  ctaLink,
  animationDelay = 0,
}: ServiceCardProps) {
  const finalCtaLink = ctaLink || `/ai-agent?prompt=Quiero saber más sobre ${encodeURIComponent(title)}`;
  return (
    <AnimatedOnScroll animation="fadeInUp" delay={animationDelay}>
      <Card id={id} className="h-full flex flex-col shadow-lg hover:shadow-primary/20 transition-shadow duration-300 border-border hover:border-primary/50">
        <CardHeader>
          <div className="flex items-center gap-4 mb-2">
            <span className="text-primary">{icon}</span>
            <CardTitle className="text-2xl font-sora">{title}</CardTitle>
          </div>
          <CardDescription className="text-base italic">&quot;{problem}&quot;</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow space-y-4">
          <div>
            <h4 className="font-semibold text-foreground/90 mb-1">Nuestra Solución IA:</h4>
            <p className="text-muted-foreground">{solution}</p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground/90 mb-1">Beneficios Clave:</h4>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              {benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        </CardContent>
        <CardFooter>
          <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href={finalCtaLink}>{ctaText}</Link>
          </Button>
        </CardFooter>
      </Card>
    </AnimatedOnScroll>
  );
}
