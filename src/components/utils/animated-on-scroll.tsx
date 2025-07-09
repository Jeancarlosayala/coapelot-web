'use client';
import * as React from 'react';
import { cn } from '@/lib/utils';

// Definir JSX.IntrinsicElements si no está disponible (para entornos estrictos)
type ElementTag = keyof React.JSX.IntrinsicElements;

type AnimationType = 'fadeIn' | 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scaleUp' | 'zoomIn';

interface AnimatedOnScrollProps {
  children: React.ReactNode;
  animation?: AnimationType;
  className?: string;
  delay?: number; // in ms
  duration?: number; // in ms
  threshold?: number;
  triggerOnce?: boolean;
  as?: ElementTag;
  staggerChildren?: number; // in ms, if children are also AnimatedOnScroll
}

// Usar forwardRef para manejar correctamente el ref con componentes genéricos
const AnimatedOnScroll = React.forwardRef<Element, AnimatedOnScrollProps>(
  (
    {
      children,
      animation = 'fadeInUp',
      className,
      delay = 0,
      duration = 700, // Default duration
      threshold = 0.1,
      triggerOnce = true,
      as = 'div',
      staggerChildren,
    }: AnimatedOnScrollProps,
    refFromParent: React.ForwardedRef<Element>
  ) => {
    const [isVisible, setIsVisible] = React.useState(false);
    const localRef = React.useRef<Element>(null);
    const ref = (refFromParent as React.RefObject<Element>) || localRef;

    React.useEffect(() => {
      const targetRef = ref.current;
      if (!targetRef) {
        return;
      }

      let animationTimeoutId: NodeJS.Timeout | null = null;

      const observerCallback = (entries: IntersectionObserverEntry[]) => {
        const entry = entries[0]; 

        if (entry.isIntersecting) {
          if (!isVisible) { // Only trigger if not already visible
            animationTimeoutId = setTimeout(() => {
              setIsVisible(true);
              if (triggerOnce) {
                observer.unobserve(targetRef);
              }
            }, delay);
          }
        } else {
          // Element is out of view
          if (animationTimeoutId) {
            clearTimeout(animationTimeoutId);
            animationTimeoutId = null;
          }
          if (!triggerOnce && isVisible) { // Only hide if not triggerOnce and it was visible
            setIsVisible(false);
          }
        }
      };

      const observer = new IntersectionObserver(observerCallback, { threshold });
      observer.observe(targetRef);

      return () => {
        observer.disconnect(); 
        if (animationTimeoutId) {
          clearTimeout(animationTimeoutId);
        }
      };
    }, [delay, threshold, triggerOnce, isVisible]); // isVisible is in the dependency array

    const baseAnimationStyles: Record<AnimationType, string> = {
      fadeIn: 'opacity-0',
      fadeInUp: 'opacity-0 translate-y-8',
      fadeInLeft: 'opacity-0 -translate-x-8',
      fadeInRight: 'opacity-0 translate-x-8',
      scaleUp: 'opacity-0 scale-95',
      zoomIn: 'opacity-0 scale-90',
    };

    const visibleAnimationStyles: Record<AnimationType, string> = {
      fadeIn: 'opacity-100',
      fadeInUp: 'opacity-100 translate-y-0',
      fadeInLeft: 'opacity-100 translate-x-0',
      fadeInRight: 'opacity-100 translate-x-0',
      scaleUp: 'opacity-100 scale-100',
      zoomIn: 'opacity-100 scale-100',
    };
    
    const transitionProperty = 'opacity, transform'; // Be more specific

    // Renderizar el componente usando React.createElement para evitar error de tipo
    return React.createElement(
      as,
      {
        ref,
        style: {
          transitionDuration: `${duration}ms`,
          transitionDelay: `0ms`,
          transitionProperty,
        },
        className: cn(
          'transition-all ease-out',
          baseAnimationStyles[animation as AnimationType],
          isVisible && visibleAnimationStyles[animation as AnimationType],
          className
        ),
      },
      children
    );
  }
);

export default AnimatedOnScroll;
