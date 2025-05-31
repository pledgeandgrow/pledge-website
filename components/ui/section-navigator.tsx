"use client";

import { motion } from "framer-motion";

interface SectionNavigatorProps {
  sections: string[];
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function SectionNavigator({ sections, activeSection, onSectionChange }: SectionNavigatorProps) {
  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col items-center space-y-4">
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => onSectionChange(section)}
            className="group relative flex items-center"
            aria-label={`Navigate to ${section} section`}
          >
            <div className="relative">
              <div 
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  activeSection === section 
                    ? "bg-primary scale-125" 
                    : "bg-gray-400 dark:bg-gray-600 hover:bg-gray-500 dark:hover:bg-gray-500"
                }`}
              />
              {activeSection === section && (
                <motion.div
                  className="absolute inset-0 rounded-full bg-primary/30"
                  initial={{ scale: 1 }}
                  animate={{ scale: 1.8, opacity: 0 }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              )}
            </div>
            <div 
              className={`absolute right-6 px-2 py-1 rounded bg-background border border-border shadow-sm opacity-0 translate-x-2 transition-all duration-300 whitespace-nowrap ${
                activeSection === section ? "text-primary font-medium" : "text-foreground"
              } group-hover:opacity-100 group-hover:translate-x-0`}
            >
              {section}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}