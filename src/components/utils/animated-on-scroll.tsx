'use client';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

type AnimationType = 'fadeIn' | 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scaleUp' | 'zoomIn';

interface AnimatedOnScrollProps {
  children: ReactNode;
  animation?: AnimationType;
  className?: string;
  delay?: number; // in ms
  duration?: number; // in ms
  threshold?: number;
  triggerOnce?: boolean;
  as?: keyof JSX.IntrinsicElements;
  staggerChildren?: number; // in ms, if children are also AnimatedOnScroll
}

const AnimatedOnScroll: React.FC<AnimatedOnScrollProps> = ({
  children,
  animation = 'fadeInUp',
  className,
  delay = 0,
  duration = 700, // Default duration
  threshold = 0.1,
  triggerOnce = true,
  as: Component = 'div',
  staggerChildren, // Not directly used here, parent needs to manage this if wrapping multiple
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // setIsVisible(true) will be triggered by timeout
            if (triggerOnce && ref.current) {
              observer.unobserve(ref.current);
            }
          } else {
            if (!triggerOnce) {
              setIsVisible(false);
            }
          }
        });
      },
      { threshold }
    );
    
    let timeoutId: NodeJS.Timeout;
    const currentRef = ref.current;

    if (currentRef) {
      // Check initial visibility without timeout if already in view
      const rect = currentRef.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
         timeoutId = setTimeout(() => setIsVisible(true), delay);
      } else {
        observer.observe(currentRef);
      }
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [delay, threshold, triggerOnce]);


  // Base styles for animation (invisible state)
  const baseAnimationStyles: Record<AnimationType, string> = {
    fadeIn: 'opacity-0',
    fadeInUp: 'opacity-0 translate-y-8',
    fadeInLeft: 'opacity-0 -translate-x-8',
    fadeInRight: 'opacity-0 translate-x-8',
    scaleUp: 'opacity-0 scale-95',
    zoomIn: 'opacity-0 scale-90',
  };

  // Styles for when element is visible
  const visibleAnimationStyles: Record<AnimationType, string> = {
    fadeIn: 'opacity-100',
    fadeInUp: 'opacity-100 translate-y-0',
    fadeInLeft: 'opacity-100 translate-x-0',
    fadeInRight: 'opacity-100 translate-x-0',
    scaleUp: 'opacity-100 scale-100',
    zoomIn: 'opacity-100 scale-100',
  };
  
  const transitionProperty = 'all'; // Could be more specific: 'opacity, transform'

  return (
    <Component
      ref={ref}
      style={{ transitionDuration: `${duration}ms`, transitionDelay: `${delay}ms`, transitionProperty }}
      className={cn(
        'transition-all ease-out', // General transition class
        baseAnimationStyles[animation], // Initial animation state
        isVisible && visibleAnimationStyles[animation], // Visible state
        className
      )}
    >
      {children}
    </Component>
  );
};

export default AnimatedOnScroll;
