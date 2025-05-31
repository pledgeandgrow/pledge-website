"use client";

import { useState, useEffect } from "react";

export function useSectionNavigation(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    
    // Create an observer for each section
    sectionIds.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(sectionId);
              // Update URL hash without scrolling
              history.replaceState(null, "", `#${sectionId}`);
            }
          });
        },
        { threshold: 0.3 } // Trigger when 30% of the section is visible
      );

      observer.observe(element);
      observers.push(observer);
    });

    // Cleanup observers on unmount
    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [sectionIds]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    // Smooth scroll to section
    element.scrollIntoView({ behavior: "smooth" });
    setActiveSection(sectionId);
  };

  return { activeSection, scrollToSection };
}

export default useSectionNavigation;
