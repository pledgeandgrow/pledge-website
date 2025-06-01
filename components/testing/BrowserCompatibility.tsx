"use client";

import { useState, useEffect } from "react";
import { AlertCircle } from "lucide-react";

/**
 * Component that detects browser compatibility issues and displays warnings
 * Only visible in development mode
 */
export function BrowserCompatibility() {
  const [issues, setIssues] = useState<string[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Only run in development mode
    if (process.env.NODE_ENV !== "development") return;
    
    const detectedIssues: string[] = [];
    
    // Check for modern JavaScript features
    if (!window.IntersectionObserver) {
      detectedIssues.push("IntersectionObserver API is not supported in this browser");
    }
    
    if (!window.fetch) {
      detectedIssues.push("Fetch API is not supported in this browser");
    }
    
    if (!CSS.supports("display", "grid")) {
      detectedIssues.push("CSS Grid is not supported in this browser");
    }
    
    if (!CSS.supports("display", "flex")) {
      detectedIssues.push("CSS Flexbox is not supported in this browser");
    }
    
    // Check for WebP support
    const canvas = document.createElement("canvas");
    if (canvas.toDataURL("image/webp").indexOf("data:image/webp") !== 0) {
      detectedIssues.push("WebP image format is not supported in this browser");
    }
    
    setIssues(detectedIssues);
    setIsVisible(detectedIssues.length > 0);
  }, []);
  
  if (!isVisible) return null;
  
  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-md p-4 bg-yellow-50 border border-yellow-200 rounded-lg shadow-lg">
      <div className="flex items-start">
        <AlertCircle className="h-5 w-5 text-yellow-500 mt-0.5 mr-2" />
        <div>
          <h3 className="font-medium text-yellow-800">Browser Compatibility Issues</h3>
          <p className="text-sm text-yellow-700 mb-2">
            The following issues were detected in your browser:
          </p>
          <ul className="list-disc pl-5 text-xs text-yellow-700">
            {issues.map((issue, index) => (
              <li key={index}>{issue}</li>
            ))}
          </ul>
          <p className="text-xs text-yellow-700 mt-2">
            These issues may affect the website's functionality. Consider testing in a modern browser.
          </p>
          <button 
            className="text-xs text-yellow-800 underline mt-1"
            onClick={() => setIsVisible(false)}
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
}
