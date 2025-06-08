"use client";

import React, { useState, useEffect, useRef } from "react";
import * as SiIcons from "react-icons/si";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Type for the icons from react-icons/si
type SiIconType = keyof typeof SiIcons;

export interface TechItem {
  name: string;
  icon: SiIconType;
  color?: string;
}

interface TechStackProps {
  technologies: TechItem[];
  size?: "sm" | "md" | "lg";
  showLabels?: boolean;
  className?: string;
  enableMobileCarousel?: boolean;
  itemsPerView?: number;
}

export function TechStack({
  technologies,
  size = "md",
  showLabels = false,
  className,
  enableMobileCarousel = true,
  itemsPerView = 4
}: TechStackProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [visibleItems, setVisibleItems] = useState<TechItem[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const sizeClasses = {
    sm: "h-6 w-6",
    md: "h-8 w-8",
    lg: "h-12 w-12",
  };

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Set initial value
    checkMobile();
    
    // Add event listener
    window.addEventListener('resize', checkMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Update visible items when currentIndex changes or when technologies change
  useEffect(() => {
    if (isMobile && enableMobileCarousel) {
      const endIndex = Math.min(currentIndex + itemsPerView, technologies.length);
      setVisibleItems(technologies.slice(currentIndex, endIndex));
    } else {
      setVisibleItems(technologies);
    }
  }, [currentIndex, technologies, isMobile, enableMobileCarousel, itemsPerView]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(technologies.length - itemsPerView, prev + 1));
  };

  const renderTechItem = (tech: TechItem) => {
    // Dynamically get the icon component from SiIcons
    let IconComponent;
    try {
      // Try to get the icon component directly
      IconComponent = SiIcons[tech.icon];
      
      // Log for debugging
      console.log(`Icon for ${tech.name}: ${tech.icon}, exists: ${!!IconComponent}`);
    } catch (error) {
      console.error(`Error getting icon for ${tech.name}:`, error);
    }
    
    return (
      <TooltipProvider key={tech.name}>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="flex flex-col items-center gap-2">
              <div className="bg-muted/50 p-3 rounded-lg flex items-center justify-center">
                {IconComponent ? (
                  <IconComponent
                    className={cn(
                      sizeClasses[size],
                      tech.color || "text-foreground"
                    )}
                  />
                ) : (
                  // Fallback for missing icons - show first letter of tech name
                  <div className={cn("flex items-center justify-center text-center font-bold", sizeClasses[size], tech.color || "text-foreground")}>
                    {tech.name.charAt(0)}
                  </div>
                )}
              </div>
              {showLabels && (
                <span className="text-xs text-muted-foreground">{tech.name}</span>
              )}
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>{tech.name}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  };

  // Desktop view - all items
  if (!isMobile || !enableMobileCarousel) {
    return (
      <div className={cn("flex flex-wrap gap-4 items-center", className)} ref={containerRef}>
        {technologies.map(renderTechItem)}
      </div>
    );
  }

  // Mobile view - carousel
  return (
    <div className="relative" ref={containerRef}>
      {/* Navigation Buttons */}
      {currentIndex > 0 && (
        <div className="absolute top-1/2 -left-4 -translate-y-1/2 z-10">
          <Button 
            variant="outline" 
            size="icon" 
            className="rounded-full bg-background shadow-md"
            onClick={handlePrevious}
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="sr-only">Previous</span>
          </Button>
        </div>
      )}

      {currentIndex < technologies.length - itemsPerView && (
        <div className="absolute top-1/2 -right-4 -translate-y-1/2 z-10">
          <Button 
            variant="outline" 
            size="icon" 
            className="rounded-full bg-background shadow-md"
            onClick={handleNext}
          >
            <ChevronRight className="h-5 w-5" />
            <span className="sr-only">Next</span>
          </Button>
        </div>
      )}

      {/* Visible items */}
      <div className={cn("flex gap-4 items-center justify-center transition-all duration-300", className)}>
        {visibleItems.map(renderTechItem)}
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center mt-4 space-x-1.5">
        {Array.from({ length: Math.ceil(technologies.length / itemsPerView) }).map((_, idx) => {
          const isActive = idx === Math.floor(currentIndex / itemsPerView);
          return (
            <button 
              key={idx}
              className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'}`}
              onClick={() => setCurrentIndex(idx * itemsPerView)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          );
        })}
      </div>
    </div>
  );
}

// Predefined technology stacks
export const frontendTechnologies: TechItem[] = [
  { name: "React", icon: "SiReact", color: "text-blue-400" },
  { name: "Next.js", icon: "SiNextdotjs" },
  { name: "TypeScript", icon: "SiTypescript", color: "text-blue-600" },
  { name: "Tailwind CSS", icon: "SiTailwindcss", color: "text-cyan-500" },
  { name: "Framer Motion", icon: "SiFramer" }
];

export const backendTechnologies: TechItem[] = [
  { name: "Node.js", icon: "SiNodedotjs", color: "text-green-600" },
  { name: "Python", icon: "SiPython", color: "text-blue-500" },
  { name: "PostgreSQL", icon: "SiPostgresql", color: "text-blue-700" },
  { name: "Supabase", icon: "SiSupabase", color: "text-emerald-600" },
  { name: "GraphQL", icon: "SiGraphql", color: "text-pink-600" }
];

export const cloudTechnologies: TechItem[] = [
  { name: "AWS", icon: "SiAmazon", color: "text-orange-500" },
  { name: "Vercel", icon: "SiVercel" },
  { name: "Docker", icon: "SiDocker", color: "text-blue-500" },
  { name: "GitHub", icon: "SiGithub" },
  { name: "Netlify", icon: "SiNetlify", color: "text-teal-500" }
];

export const mobileTechnologies: TechItem[] = [
  { name: "React Native", icon: "SiReact", color: "text-blue-400" },
  { name: "iOS", icon: "SiIos", color: "text-gray-500" },
  { name: "Android", icon: "SiAndroid", color: "text-green-500" },
  { name: "Expo", icon: "SiExpo" },
  { name: "Firebase", icon: "SiFirebase", color: "text-yellow-500" }
];
