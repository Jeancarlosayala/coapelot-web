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
  staggerChildren, 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

  return (
    <Component
      ref={ref}
      style={{ transitionDuration: `${duration}ms`, transitionDelay: `0ms`, transitionProperty }} // Delay is handled by setTimeout now for visibility
      className={cn(
        'transition-all ease-out', 
        baseAnimationStyles[animation], 
        isVisible && visibleAnimationStyles[animation], 
        className
      )}
    >
      {children}
    </Component>
  );
};

export default AnimatedOnScroll;
