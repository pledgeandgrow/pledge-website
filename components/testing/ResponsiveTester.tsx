"use client";

import { useState, useEffect } from "react";
import { Smartphone, Tablet, Monitor, X } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Component for testing responsive design across different device sizes
 * Only visible in development mode
 */
export function ResponsiveTester() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentWidth, setCurrentWidth] = useState(0);
  const [currentHeight, setCurrentHeight] = useState(0);
  
  useEffect(() => {
    // Only run in development mode
    if (process.env.NODE_ENV !== "development") return;
    
    const updateDimensions = () => {
      setCurrentWidth(window.innerWidth);
      setCurrentHeight(window.innerHeight);
    };
    
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    
    // Show the tester button after a delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    
    return () => {
      window.removeEventListener("resize", updateDimensions);
      clearTimeout(timer);
    };
  }, []);
  
  const devicePresets = [
    { name: "Mobile S", width: 320, height: 568, icon: <Smartphone className="h-4 w-4" /> },
    { name: "Mobile M", width: 375, height: 667, icon: <Smartphone className="h-4 w-4" /> },
    { name: "Mobile L", width: 425, height: 812, icon: <Smartphone className="h-4 w-4" /> },
    { name: "Tablet", width: 768, height: 1024, icon: <Tablet className="h-4 w-4" /> },
    { name: "Laptop", width: 1024, height: 768, icon: <Monitor className="h-4 w-4" /> },
    { name: "Desktop", width: 1440, height: 900, icon: <Monitor className="h-4 w-4" /> },
  ];
  
  const resizeViewport = (width: number, height: number) => {
    window.resizeTo(width, height);
  };
  
  if (!isVisible) return null;
  
  return (
    <div className="fixed bottom-4 left-4 z-50">
      {!isExpanded ? (
        <Button 
          variant="default" 
          size="sm"
          className="flex items-center gap-2 bg-primary/90 hover:bg-primary"
          onClick={() => setIsExpanded(true)}
        >
          <Smartphone className="h-4 w-4" />
          <span>Responsive Tester</span>
        </Button>
      ) : (
        <div className="bg-background border border-border rounded-lg shadow-lg p-4 w-64">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-medium text-sm">Responsive Design Tester</h3>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-6 w-6" 
              onClick={() => setIsExpanded(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="text-xs text-muted-foreground mb-3">
            Current viewport: {currentWidth}px × {currentHeight}px
          </div>
          
          <div className="space-y-2">
            {devicePresets.map((device) => (
              <Button
                key={device.name}
                variant="outline"
                size="sm"
                className="w-full justify-start text-xs"
                onClick={() => resizeViewport(device.width, device.height)}
              >
                <span className="mr-2">{device.icon}</span>
                {device.name} ({device.width}×{device.height})
              </Button>
            ))}
          </div>
          
          <div className="mt-3 text-xs text-muted-foreground">
            Note: Some browsers may restrict window resizing
          </div>
        </div>
      )}
    </div>
  );
}
