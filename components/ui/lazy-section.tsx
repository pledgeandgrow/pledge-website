"use client";

import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

interface LazySectionProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  animationDelay?: number;
  animationType?: "fade-up" | "fade-in" | "slide-in";
}

export function LazySection({
  children,
  className,
  threshold = 0.1,
  animationDelay = 0,
  animationType = "fade-up",
}: LazySectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          // Delay the visibility change based on animationDelay
          setTimeout(() => {
            setIsVisible(true);
            setHasAnimated(true);
          }, animationDelay * 1000);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -100px 0px", // Start animation a bit before element is in view
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, animationDelay, hasAnimated]);

  const animationClass = {
    "fade-up": "translate-y-8 opacity-0",
    "fade-in": "opacity-0",
    "slide-in": "translate-x-8 opacity-0",
  }[animationType];

  return (
    <div
      ref={ref}
      className={cn(
        className,
        "transition-all duration-700 ease-out",
        isVisible ? "" : animationClass
      )}
    >
      {children}
    </div>
  );
}
