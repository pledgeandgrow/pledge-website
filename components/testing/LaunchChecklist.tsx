"use client";

import { useState } from "react";
import { Check, AlertCircle, X, ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ChecklistItem {
  id: string;
  category: string;
  title: string;
  description: string;
  completed: boolean;
  priority: "high" | "medium" | "low";
}

/**
 * Launch Checklist component to track website launch readiness
 * Only visible in development mode
 */
export function LaunchChecklist() {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [items, setItems] = useState<ChecklistItem[]>([
    // SEO
    {
      id: "meta-tags",
      category: "SEO",
      title: "Meta tags implementation",
      description: "Ensure all pages have proper title, description, and Open Graph tags",
      completed: true,
      priority: "high",
    },
    {
      id: "structured-data",
      category: "SEO",
      title: "Structured data implementation",
      description: "JSON-LD for organization, website, and services",
      completed: true,
      priority: "high",
    },
    {
      id: "canonical-urls",
      category: "SEO",
      title: "Canonical URLs",
      description: "Ensure all pages have canonical URLs to prevent duplicate content issues",
      completed: true,
      priority: "medium",
    },
    {
      id: "sitemap",
      category: "SEO",
      title: "XML Sitemap",
      description: "Ensure sitemap.xml is up-to-date and includes all important pages",
      completed: true,
      priority: "high",
    },
    {
      id: "robots-txt",
      category: "SEO",
      title: "Robots.txt",
      description: "Configure robots.txt to guide search engine crawlers",
      completed: true,
      priority: "high",
    },
    
    // Performance
    {
      id: "image-optimization",
      category: "Performance",
      title: "Image optimization",
      description: "Use Next.js Image component with proper sizing and formats",
      completed: true,
      priority: "high",
    },
    {
      id: "font-optimization",
      category: "Performance",
      title: "Font optimization",
      description: "Optimize font loading with display swap and preload",
      completed: true,
      priority: "medium",
    },
    {
      id: "lazy-loading",
      category: "Performance",
      title: "Lazy loading",
      description: "Implement lazy loading for images and components below the fold",
      completed: true,
      priority: "high",
    },
    {
      id: "code-splitting",
      category: "Performance",
      title: "Code splitting",
      description: "Use dynamic imports for large components and libraries",
      completed: true,
      priority: "medium",
    },
    {
      id: "performance-monitoring",
      category: "Performance",
      title: "Performance monitoring",
      description: "Set up monitoring for Core Web Vitals and other metrics",
      completed: true,
      priority: "medium",
    },
    
    // Accessibility
    {
      id: "semantic-html",
      category: "Accessibility",
      title: "Semantic HTML",
      description: "Use proper HTML elements for better accessibility",
      completed: true,
      priority: "high",
    },
    {
      id: "keyboard-navigation",
      category: "Accessibility",
      title: "Keyboard navigation",
      description: "Ensure all interactive elements are accessible via keyboard",
      completed: true,
      priority: "high",
    },
    {
      id: "screen-readers",
      category: "Accessibility",
      title: "Screen reader support",
      description: "Add proper ARIA attributes and alt text for images",
      completed: true,
      priority: "high",
    },
    {
      id: "color-contrast",
      category: "Accessibility",
      title: "Color contrast",
      description: "Ensure sufficient contrast between text and background (Tested with ColorContrastChecker)",
      completed: true,
      priority: "medium",
    },
    {
      id: "skip-links",
      category: "Accessibility",
      title: "Skip to content link",
      description: "Add skip link for keyboard users to bypass navigation",
      completed: true,
      priority: "medium",
    },
    
    // Security
    {
      id: "https",
      category: "Security",
      title: "HTTPS implementation",
      description: "Ensure the site is served over HTTPS with valid SSL certificate",
      completed: true,
      priority: "high",
    },
    {
      id: "security-headers",
      category: "Security",
      title: "Security headers",
      description: "Implement CSP, XSS protection, and other security headers",
      completed: true,
      priority: "high",
    },
    {
      id: "form-validation",
      category: "Security",
      title: "Form validation",
      description: "Implement client and server-side validation for all forms",
      completed: true,
      priority: "high",
    },
    {
      id: "dependency-audit",
      category: "Security",
      title: "Dependency audit",
      description: "Check for vulnerabilities in dependencies",
      completed: true,
      priority: "medium",
    },
    
    // Content
    {
      id: "spelling-grammar",
      category: "Content",
      title: "Spelling and grammar",
      description: "Check all content for spelling and grammar errors (Tested with ContentChecker)",
      completed: true,
      priority: "medium",
    },
    {
      id: "broken-links",
      category: "Content",
      title: "Broken links check",
      description: "Check for and fix any broken internal or external links (Tested with LinkChecker)",
      completed: true,
      priority: "high",
    },
    {
      id: "legal-pages",
      category: "Content",
      title: "Legal pages",
      description: "Ensure privacy policy, terms of service, and legal notices are complete",
      completed: true,
      priority: "high",
    },
    {
      id: "contact-info",
      category: "Content",
      title: "Contact information",
      description: "Verify all contact information is correct and accessible",
      completed: true,
      priority: "high",
    },
    
    // Testing
    {
      id: "cross-browser",
      category: "Testing",
      title: "Cross-browser testing",
      description: "Test on Chrome, Firefox, Safari, and Edge",
      completed: false,
      priority: "high",
    },
    {
      id: "mobile-responsive",
      category: "Testing",
      title: "Mobile responsiveness",
      description: "Test on various mobile devices and screen sizes",
      completed: false,
      priority: "high",
    },
    {
      id: "form-submission",
      category: "Testing",
      title: "Form submission testing",
      description: "Test all forms to ensure they submit correctly",
      completed: false,
      priority: "high",
    },
    {
      id: "load-testing",
      category: "Testing",
      title: "Load testing",
      description: "Test site performance under load",
      completed: false,
      priority: "medium",
    },
    
    // Analytics & Monitoring
    {
      id: "analytics-setup",
      category: "Analytics & Monitoring",
      title: "Analytics setup",
      description: "Set up Google Analytics or other analytics tools",
      completed: true,
      priority: "high",
    },
    {
      id: "error-tracking",
      category: "Analytics & Monitoring",
      title: "Error tracking",
      description: "Set up error monitoring with Sentry or similar tool",
      completed: true,
      priority: "high",
    },
    {
      id: "event-tracking",
      category: "Analytics & Monitoring",
      title: "Event tracking",
      description: "Set up tracking for important user interactions",
      completed: false,
      priority: "medium",
    },
    
    // Deployment
    {
      id: "env-variables",
      category: "Deployment",
      title: "Environment variables",
      description: "Set up all required environment variables for production",
      completed: true,
      priority: "high",
    },
    {
      id: "build-optimization",
      category: "Deployment",
      title: "Build optimization",
      description: "Optimize build process for production deployment",
      completed: true,
      priority: "medium",
    },
    {
      id: "cdn-setup",
      category: "Deployment",
      title: "CDN setup",
      description: "Configure CDN for static assets (Vercel Edge Network configured)",
      completed: true,
      priority: "medium",
    },
    {
      id: "backup-strategy",
      category: "Deployment",
      title: "Backup strategy",
      description: "Implement regular backups for data and code",
      completed: false,
      priority: "medium",
    },
  ]);

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const toggleItem = (id: string) => {
    setItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const categories = Array.from(new Set(items.map(item => item.category)));
  
  const getCompletionRate = (category: string) => {
    const categoryItems = items.filter(item => item.category === category);
    const completedItems = categoryItems.filter(item => item.completed);
    return `${completedItems.length}/${categoryItems.length}`;
  };

  const getTotalCompletionRate = () => {
    const completedItems = items.filter(item => item.completed);
    return `${completedItems.length}/${items.length} (${Math.round(completedItems.length / items.length * 100)}%)`;
  };

  // Only show in development mode and on admin pages
  if (process.env.NODE_ENV !== "development") return null;
  // Check if we're on an admin page
  const isAdminPage = typeof window !== 'undefined' && window.location.pathname.includes('/admin');
  if (!isAdminPage) return null;

  return (
    <div className="w-full">
      <div className="bg-background border border-border rounded-lg shadow-sm p-4 w-full">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Launch Checklist</h2>
        </div>
        
        <div className="text-sm text-muted-foreground mb-4">
          Completion: {getTotalCompletionRate()}
        </div>
        
        <div className="space-y-4">
          {categories.map(category => (
            <div key={category} className="border border-border rounded-md overflow-hidden">
              <div 
                className="flex items-center justify-between p-3 bg-muted/50 cursor-pointer"
                onClick={() => toggleCategory(category)}
              >
                <div className="flex items-center gap-2">
                  <span className="font-medium">{category}</span>
                  <span className="text-xs text-muted-foreground">
                    {getCompletionRate(category)}
                  </span>
                </div>
                {expandedCategories.includes(category) ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </div>
              
              {expandedCategories.includes(category) && (
                <div className="p-3 space-y-2">
                  {items
                    .filter(item => item.category === category)
                    .map(item => (
                      <div 
                        key={item.id}
                        className={`flex items-start gap-2 p-2 rounded-md ${
                          item.completed ? "bg-green-50 dark:bg-green-900/10" : "bg-muted/30"
                        }`}
                      >
                        <div 
                          className={`flex-shrink-0 w-5 h-5 rounded-full border flex items-center justify-center cursor-pointer ${
                            item.completed 
                              ? "border-green-500 bg-green-100 dark:bg-green-900/30" 
                              : "border-muted-foreground"
                          }`}
                          onClick={() => toggleItem(item.id)}
                        >
                          {item.completed && <Check className="h-3 w-3 text-green-600 dark:text-green-400" />}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className={`font-medium ${item.completed ? "line-through opacity-70" : ""}`}>
                              {item.title}
                            </span>
                            {item.priority === "high" && (
                              <span className="px-1.5 py-0.5 text-[10px] font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 rounded">
                                High
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-4 pt-3 border-t border-border">
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full flex items-center gap-2 text-xs"
            asChild
          >
            <a href="https://web.dev/vitals/" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-3 w-3" />
              <span>Web Vitals Best Practices</span>
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
