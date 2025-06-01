"use client";

import { useState, useEffect } from "react";
import { AlertCircle, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Calculates the contrast ratio between two colors
 * @param foreground - Foreground color in hex format
 * @param background - Background color in hex format
 * @returns Contrast ratio
 */
function calculateContrastRatio(foreground: string, background: string): number {
  // Convert hex to RGB
  const hexToRgb = (hex: string): number[] => {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    const formattedHex = hex.replace(shorthandRegex, (_, r, g, b) => r + r + g + g + b + b);
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(formattedHex);
    return result
      ? [
          parseInt(result[1], 16),
          parseInt(result[2], 16),
          parseInt(result[3], 16),
        ]
      : [0, 0, 0];
  };

  // Calculate relative luminance
  const calculateLuminance = (rgb: number[]): number => {
    const [r, g, b] = rgb.map((c) => {
      c = c / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };

  const rgb1 = hexToRgb(foreground);
  const rgb2 = hexToRgb(background);
  const l1 = calculateLuminance(rgb1);
  const l2 = calculateLuminance(rgb2);
  
  // Calculate contrast ratio
  const ratio = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
  return Math.round(ratio * 100) / 100;
}

/**
 * Determines if the contrast ratio meets WCAG standards
 * @param ratio - Contrast ratio
 * @param level - WCAG level (AA or AAA)
 * @param isLargeText - Whether the text is large (18pt+)
 * @returns Whether the contrast meets the standard
 */
function meetsWCAGStandard(ratio: number, level: "AA" | "AAA", isLargeText: boolean): boolean {
  if (level === "AA") {
    return isLargeText ? ratio >= 3 : ratio >= 4.5;
  } else {
    return isLargeText ? ratio >= 4.5 : ratio >= 7;
  }
}

/**
 * Color Contrast Checker component for accessibility testing
 */
export function ColorContrastChecker() {
  const [isVisible, setIsVisible] = useState(false);
  const [foreground, setForeground] = useState("#000000");
  const [background, setBackground] = useState("#ffffff");
  const [contrastRatio, setContrastRatio] = useState(21);
  const [isLargeText, setIsLargeText] = useState(false);
  const [elementsToCheck, setElementsToCheck] = useState<Array<{element: string, fg: string, bg: string, ratio: number}>>([]);

  // Calculate contrast ratio when colors change
  useEffect(() => {
    setContrastRatio(calculateContrastRatio(foreground, background));
  }, [foreground, background]);

  // Scan the page for potential contrast issues
  const scanPage = () => {
    const elements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a, button, label, input');
    const results: Array<{element: string, fg: string, bg: string, ratio: number}> = [];
    
    elements.forEach((el) => {
      const styles = window.getComputedStyle(el);
      const fg = styles.color;
      const bg = styles.backgroundColor;
      
      // Skip elements with transparent backgrounds
      if (bg === 'rgba(0, 0, 0, 0)' || bg === 'transparent') return;
      
      // Convert RGB to hex
      const rgbToHex = (rgb: string) => {
        const rgbValues = rgb.match(/\d+/g);
        if (!rgbValues || rgbValues.length < 3) return '#000000';
        return '#' + rgbValues.slice(0, 3).map(x => {
          const hex = parseInt(x).toString(16);
          return hex.length === 1 ? '0' + hex : hex;
        }).join('');
      };
      
      const fgHex = rgbToHex(fg);
      const bgHex = rgbToHex(bg);
      const ratio = calculateContrastRatio(fgHex, bgHex);
      
      // Only add elements with potential issues
      if (ratio < 4.5) {
        results.push({
          element: el.tagName.toLowerCase() + (el.textContent ? ` (${el.textContent.substring(0, 20)}${el.textContent.length > 20 ? '...' : ''})` : ''),
          fg: fgHex,
          bg: bgHex,
          ratio
        });
      }
    });
    
    setElementsToCheck(results);
  };

  return (
    <div className="mb-6 border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-800">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">Color Contrast Checker</h3>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsVisible(!isVisible)}
        >
          {isVisible ? "Hide" : "Show"}
        </Button>
      </div>
      
      {isVisible && (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Foreground Color</label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={foreground}
                  onChange={(e) => setForeground(e.target.value)}
                  className="h-8 w-8 rounded"
                />
                <input
                  type="text"
                  value={foreground}
                  onChange={(e) => setForeground(e.target.value)}
                  className="border border-gray-300 dark:border-gray-600 rounded px-2 py-1 text-sm"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Background Color</label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={background}
                  onChange={(e) => setBackground(e.target.value)}
                  className="h-8 w-8 rounded"
                />
                <input
                  type="text"
                  value={background}
                  onChange={(e) => setBackground(e.target.value)}
                  className="border border-gray-300 dark:border-gray-600 rounded px-2 py-1 text-sm"
                />
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="large-text"
              checked={isLargeText}
              onChange={(e) => setIsLargeText(e.target.checked)}
              className="rounded"
            />
            <label htmlFor="large-text" className="text-sm">Large Text (18pt or 14pt bold)</label>
          </div>
          
          <div className="p-4 rounded" style={{ backgroundColor: background, color: foreground }}>
            <p className="font-medium" style={{ fontSize: isLargeText ? '18pt' : '14pt' }}>
              Sample Text
            </p>
          </div>
          
          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
            <p className="font-medium mb-2">Contrast Ratio: {contrastRatio}:1</p>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium mb-1">WCAG AA</p>
                <div className="flex items-center gap-1">
                  {meetsWCAGStandard(contrastRatio, "AA", isLargeText) ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <AlertCircle className="h-4 w-4 text-red-500" />
                  )}
                  <span className="text-sm">
                    {isLargeText ? "Large Text (3:1)" : "Normal Text (4.5:1)"}
                  </span>
                </div>
              </div>
              
              <div>
                <p className="text-sm font-medium mb-1">WCAG AAA</p>
                <div className="flex items-center gap-1">
                  {meetsWCAGStandard(contrastRatio, "AAA", isLargeText) ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <AlertCircle className="h-4 w-4 text-red-500" />
                  )}
                  <span className="text-sm">
                    {isLargeText ? "Large Text (4.5:1)" : "Normal Text (7:1)"}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <Button onClick={scanPage} className="w-full">
              Scan Page for Contrast Issues
            </Button>
            
            {elementsToCheck.length > 0 && (
              <div className="mt-4">
                <h4 className="text-md font-medium mb-2">Potential Issues ({elementsToCheck.length})</h4>
                <div className="max-h-60 overflow-y-auto">
                  {elementsToCheck.map((item, index) => (
                    <div key={index} className="p-2 border-b border-gray-200 dark:border-gray-700 text-sm">
                      <p className="font-medium">{item.element}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="h-4 w-4 rounded" style={{ backgroundColor: item.fg }}></div>
                        <span>{item.fg}</span>
                        <div className="h-4 w-4 rounded" style={{ backgroundColor: item.bg }}></div>
                        <span>{item.bg}</span>
                        <span className={item.ratio < 3 ? "text-red-500" : item.ratio < 4.5 ? "text-yellow-500" : "text-green-500"}>
                          {item.ratio}:1
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
