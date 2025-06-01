"use client";

import { useState, useEffect } from "react";
import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";

interface LazyImageProps extends Omit<ImageProps, 'onLoad'> {
  lowQualitySrc?: string;
  blurEffect?: boolean;
}

export function LazyImage({
  src,
  alt,
  className,
  lowQualitySrc,
  blurEffect = true,
  ...props
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {blurEffect && !isLoaded && (
        <div className="absolute inset-0 bg-muted animate-pulse" />
      )}
      
      {lowQualitySrc && !isLoaded && (
        <Image
          src={lowQualitySrc}
          alt={alt}
          className={cn("absolute inset-0 w-full h-full transition-opacity duration-500", 
            isLoaded ? "opacity-0" : "opacity-100 blur-md"
          )}
          {...props}
        />
      )}
      
      <Image
        src={src}
        alt={alt}
        className={cn("transition-opacity duration-500", 
          isLoaded ? "opacity-100" : "opacity-0"
        )}
        onLoadingComplete={() => setIsLoaded(true)}
        {...props}
      />
    </div>
  );
}
