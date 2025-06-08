"use client";

import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTranslations } from "@/hooks/useTranslations";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { debounce } from "@/lib/debounce";

interface ClientLogoSliderProps {
  className?: string;
}

export function ClientLogoSlider({ className }: ClientLogoSliderProps) {
  const { t } = useTranslations("home");
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);
  const innerCarousel = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [isLoaded, setIsLoaded] = useState(false);
  const controls = useAnimation();
  const isInView = useInView(carousel, { once: false, amount: 0.2 });

  // Memoized calculation function to prevent unnecessary recalculations
  const calculateWidth = useCallback(() => {
    if (carousel.current && innerCarousel.current) {
      // Get the actual content width and container width
      const containerWidth = carousel.current.offsetWidth;
      const contentWidth = innerCarousel.current.scrollWidth / 2; // Divide by 2 because we duplicate the logos
      
      // Set width to content width minus container width, ensuring it's positive
      const calculatedWidth = Math.max(contentWidth - containerWidth / 2, 0);
      setWidth(calculatedWidth);
      
      // Mark as loaded once we've calculated width
      if (!isLoaded && calculatedWidth > 0) {
        setIsLoaded(true);
      }
    }
  }, [isLoaded]);
  
  // Debounced resize handler to improve performance
  const debouncedCalculateWidth = useMemo(
    () => debounce(calculateWidth, 200),
    [calculateWidth]
  );
  
  // Set up initial width calculation and resize listener
  useEffect(() => {
    // Calculate after a delay to ensure images are loaded
    const timer = setTimeout(() => {
      calculateWidth();
    }, 500);
    
    // Set up resize handler
    window.addEventListener("resize", debouncedCalculateWidth);
    
    // Clean up
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", debouncedCalculateWidth);
    };
  }, [calculateWidth, debouncedCalculateWidth]);
  
  // Recalculate on image load
  const handleImageLoad = () => {
    calculateWidth();
  };
  
  // Start animation when in view and loaded
  useEffect(() => {
    if (isInView && isLoaded && width > 0) {
      controls.start({
        x: [-width, 0],
        transition: {
          repeat: Infinity,
          repeatType: "loop",
          duration: isMobile ? 60 : 50,
          ease: "linear",
          repeatDelay: 0.5
        }
      });
    } else {
      // Pause animation when not in view
      controls.stop();
    }
  }, [controls, isInView, width, isMobile, isLoaded]);

  // Memoize client logos to prevent unnecessary re-renders
  const clientLogos = useMemo(() => [
    { src: "/images/clients/as13f.png", alt: "AS13F" },
    { src: "/images/clients/chelles.jpg", alt: "Chelles" },
    { src: "/images/clients/chronos.jpg", alt: "Chronos" },
    { src: "/images/clients/clean-e.png", alt: "Clean-E" },
    { src: "/images/clients/connectanddrive.png", alt: "Connect and Drive" },
    { src: "/images/clients/dualink.png", alt: "Dualink" },
    { src: "/images/clients/erb-btp.png", alt: "ERB BTP" },
    { src: "/images/clients/gcb.png", alt: "GCB" },
    { src: "/images/clients/goulette.jpg", alt: "Goulette" },
    { src: "/images/clients/jabb-events.png", alt: "JABB Events" },
    { src: "/images/clients/jabb.jpg", alt: "JABB" }
    // { src: "/images/clients/michou.svg", alt: "Michou" } - Hidden as requested
    // Excluding melytop.ico as ICO files are not ideal for this use case
  ], []);

  return (
    <div className={cn("w-full overflow-hidden py-8 bg-muted/30", className)}>
      <div className="container mx-auto px-4">
        <h3 className="text-center text-sm md:text-base uppercase tracking-wider text-muted-foreground mb-6 font-medium">
          {t("clients.trustedBy") || "Trusted by"}
        </h3>
        
        <div 
          ref={carousel} 
          className="overflow-hidden rounded-xl p-4 bg-background/50 shadow-sm border border-border/10"
        >
          <motion.div
            ref={innerCarousel}
            className="flex"
            animate={controls}
            initial={{ x: 0 }}
          >
            {clientLogos.map((logo, index) => (
              <div
                key={index}
                className="min-w-[120px] sm:min-w-[150px] md:min-w-[180px] h-16 mx-2 sm:mx-4 flex items-center justify-center p-2"
              >
                <div className="relative w-full h-full rounded-md overflow-hidden bg-white/80 dark:bg-gray-800/50 p-2 shadow-sm">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 120px, (max-width: 768px) 150px, 180px"
                    onLoad={handleImageLoad}
                    loading="eager"
                    priority={index < 4} // Prioritize first 4 images
                  />
                </div>
              </div>
            ))}
            
            {/* Duplicate logos for seamless infinite scroll effect */}
            {clientLogos.map((logo, index) => (
              <div
                key={`duplicate-${index}`}
                className="min-w-[120px] sm:min-w-[150px] md:min-w-[180px] h-16 mx-2 sm:mx-4 flex items-center justify-center p-2"
              >
                <div className="relative w-full h-full rounded-md overflow-hidden bg-white/80 dark:bg-gray-800/50 p-2 shadow-sm">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 120px, (max-width: 768px) 150px, 180px"
                    onLoad={handleImageLoad}
                    loading="eager"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
