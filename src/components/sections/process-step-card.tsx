import AnimatedOnScroll from '../utils/animated-on-scroll';

interface ProcessStepCardProps {
  stepNumber: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  animationDelay?: number;
}

export function ProcessStepCard({ stepNumber, title, description, icon, animationDelay = 0 }: ProcessStepCardProps) {
  return (
    <AnimatedOnScroll animation="fadeInUp" delay={animationDelay}>
      <div className="relative p-6 bg-card rounded-lg shadow-lg border border-border hover:border-primary/50 transition-colors duration-300 h-full">
        <div className="absolute -top-5 -left-5 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold shadow-md">
          {stepNumber}
        </div>
        <div className="flex flex-col items-center text-center pt-8">
          <div className="mb-4 text-primary">{icon}</div>
          <h3 className="text-xl font-sora font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
      </div>
    </AnimatedOnScroll>
  );
}
