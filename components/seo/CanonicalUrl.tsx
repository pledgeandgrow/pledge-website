"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

interface CanonicalUrlProps {
  baseUrl?: string;
}

export default function CanonicalUrl({ baseUrl = "https://pledgeandgrow.com" }: CanonicalUrlProps) {
  const pathname = usePathname();
  
  useEffect(() => {
    // Remove any existing canonical links
    const existingCanonical = document.querySelector('link[rel="canonical"]');
    if (existingCanonical) {
      existingCanonical.remove();
    }
    
    // Create and append the canonical link
    const link = document.createElement("link");
    link.rel = "canonical";
    link.href = `${baseUrl}${pathname}`;
    document.head.appendChild(link);
    
    // Clean up
    return () => {
      const canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) {
        canonicalLink.remove();
      }
    };
  }, [pathname, baseUrl]);
  
  // This component doesn't render anything visible
  return null;
}
