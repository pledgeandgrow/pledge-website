"use client";

import { useState, useEffect } from "react";

/**
 * Custom hook for responsive design that detects if a media query matches
 * @param query The media query to check, e.g. "(max-width: 768px)"
 * @returns Boolean indicating if the media query matches
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);
  
  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window !== "undefined") {
      const media = window.matchMedia(query);
      
      // Set the initial value
      setMatches(media.matches);
      
      // Define listener function
      const listener = () => setMatches(media.matches);
      
      // Add listener for changes
      media.addEventListener("change", listener);
      
      // Clean up
      return () => media.removeEventListener("change", listener);
    }
    
    // Default to false on server-side
    return () => {};
  }, [query]);
  
  return matches;
}
