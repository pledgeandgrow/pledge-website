"use client";

import { useState, useEffect } from "react";
import { Settings, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrowserCompatibility } from "./BrowserCompatibility";
import { ResponsiveTester } from "./ResponsiveTester";
import { LaunchChecklist } from "./LaunchChecklist";
import { ColorContrastChecker } from "./ColorContrastChecker";
import { LinkChecker } from "./LinkChecker";
import { SecurityChecker } from "./SecurityChecker";
import { DependencyChecker } from "./DependencyChecker";
import { FormTester } from "./FormTester";
import { ContentChecker } from "./ContentChecker";

/**
 * DevTools component that provides development tools and utilities
 * Only visible in development mode
 */
export function DevTools() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDev, setIsDev] = useState(false);
  
  // Check if we're in development mode on component mount
  useEffect(() => {
    setIsDev(process.env.NODE_ENV === "development" || window.location.hostname === "localhost");
  }, []);
  
  // Don't render anything during SSR or if not in development
  if (typeof window === "undefined" || !isDev) return null;
  
  return (
    <>
      {/* Floating button to toggle DevTools */}
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          variant="default"
          size="sm"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-lg flex items-center gap-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <>
              <X className="h-4 w-4" /> Close DevTools
            </>
          ) : (
            <>
              <Settings className="h-4 w-4" /> DevTools
            </>
          )}
        </Button>
      </div>
      
      {/* DevTools panel */}
      {isOpen && (
        <div className="fixed bottom-16 left-4 z-50 w-80 bg-background border border-border rounded-lg shadow-lg overflow-hidden">
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">Development Tools</h2>
            
            <div className="space-y-4">
              <div className="p-3 bg-muted/30 rounded-md">
                <h3 className="text-sm font-medium mb-2">Performance</h3>
                <p className="text-xs text-muted-foreground mb-2">
                  Monitor and test website performance across devices
                </p>
                <Button
                  variant="default"
                  size="sm"
                  className="w-full text-xs"
                  onClick={() => {
                    // Initialize performance monitoring
                    import("@/lib/performance").then(module => {
                      module.initPerformanceMonitoring();
                      alert("Performance monitoring initialized. Check console for metrics.");
                    });
                  }}
                >
                  Start Performance Monitoring
                </Button>
              </div>
              
              <div className="p-3 bg-muted/30 rounded-md">
                <h3 className="text-sm font-medium mb-2">Accessibility</h3>
                <p className="text-xs text-muted-foreground mb-2">
                  Test website accessibility compliance
                </p>
                <Button
                  variant="default"
                  size="sm"
                  className="w-full text-xs"
                  onClick={() => {
                    // Open axe DevTools if available
                    if (typeof window !== "undefined" && window.axe) {
                      alert("Running accessibility tests...");
                      window.axe.run();
                    } else {
                      alert("axe DevTools not detected. Please install the browser extension.");
                    }
                  }}
                >
                  Run Accessibility Tests
                </Button>
              </div>
              
              <div className="p-3 bg-muted/30 rounded-md">
                <h3 className="text-sm font-medium mb-2">SEO</h3>
                <p className="text-xs text-muted-foreground mb-2">
                  Verify SEO implementation and metadata
                </p>
                <Button
                  variant="default"
                  size="sm"
                  className="w-full text-xs"
                  onClick={() => {
                    // Simple SEO checker
                    const title = document.title;
                    const description = document.querySelector('meta[name="description"]')?.getAttribute('content');
                    const canonical = document.querySelector('link[rel="canonical"]')?.getAttribute('href');
                    const ogTags = document.querySelectorAll('meta[property^="og:"]').length;
                    
                    alert(
                      `SEO Check Results:\n\n` +
                      `Title: ${title ? '✅' : '❌'} ${title || 'Missing'}\n` +
                      `Description: ${description ? '✅' : '❌'} ${description || 'Missing'}\n` +
                      `Canonical URL: ${canonical ? '✅' : '❌'} ${canonical || 'Missing'}\n` +
                      `Open Graph Tags: ${ogTags > 0 ? '✅' : '❌'} ${ogTags} found`
                    );
                  }}
                >
                  Check SEO Implementation
                </Button>
              </div>
            </div>
            
            <div className="mt-4 pt-3 border-t border-border">
              <p className="text-xs text-muted-foreground">
                These tools are only visible in development mode and will not appear in production.
              </p>
            </div>
          </div>
        </div>
      )}
      
      <div className="space-y-6 p-4">
        <LaunchChecklist />
        <BrowserCompatibility />
        <ResponsiveTester />
        <ColorContrastChecker />
        <LinkChecker />
        <ContentChecker />
        <SecurityChecker />
        <DependencyChecker />
        <FormTester />
      </div>
    </>
  );
}

// Add axe DevTools type declaration
declare global {
  interface Window {
    axe?: {
      run: () => void;
    };
  }
}
