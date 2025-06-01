"use client";

import { useState, useEffect } from "react";
import { Link, AlertCircle, CheckCircle, ExternalLink, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LinkStatus {
  url: string;
  status: "checking" | "valid" | "invalid" | "unknown";
  isExternal: boolean;
  statusCode?: number;
  error?: string;
  text?: string;
  element?: HTMLAnchorElement;
}

/**
 * LinkChecker component to scan for broken links on the page
 */
export function LinkChecker() {
  const [isVisible, setIsVisible] = useState(false);
  const [links, setLinks] = useState<LinkStatus[]>([]);
  const [isChecking, setIsChecking] = useState(false);
  const [activeTab, setActiveTab] = useState<"all" | "internal" | "external" | "broken">("all");

  // Check links when component becomes visible
  useEffect(() => {
    if (isVisible && links.length === 0) {
      checkLinks();
    }
  }, [isVisible, links.length]);

  // Scan the page for links and check their status
  const checkLinks = async () => {
    setIsChecking(true);
    setLinks([]);
    
    // Find all links on the page
    const linkElements = document.querySelectorAll('a');
    const linkStatusList: LinkStatus[] = [];
    
    // Extract links and create initial status objects
    linkElements.forEach(link => {
      const href = link.getAttribute('href');
      if (!href) return;
      
      // Skip javascript, mailto, tel links
      if (href.startsWith('javascript:') || href.startsWith('mailto:') || href.startsWith('tel:')) return;
      
      // Check if this URL is already in our list
      const existingLink = linkStatusList.find(l => l.url === href);
      if (existingLink) return;
      
      linkStatusList.push({
        url: href,
        status: "checking",
        isExternal: isExternalLink(href),
        text: link.textContent || undefined,
        element: link as HTMLAnchorElement
      });
    });
    
    setLinks(linkStatusList);
    
    // Check each link in batches to avoid blocking the UI
    const batchSize = 5;
    for (let i = 0; i < linkStatusList.length; i += batchSize) {
      const batch = linkStatusList.slice(i, i + batchSize);
      await Promise.all(batch.map(link => checkLinkStatus(link)));
      // Small delay to allow UI updates
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    
    setIsChecking(false);
  };

  // Check if a link is external
  const isExternalLink = (url: string): boolean => {
    // If it starts with http/https and doesn't contain our domain, it's external
    if (url.startsWith('http') || url.startsWith('https')) {
      const currentDomain = window.location.hostname;
      try {
        const urlObj = new URL(url);
        return urlObj.hostname !== currentDomain;
      } catch {
        return true;
      }
    }
    return false;
  };

  // Check the status of a link
  const checkLinkStatus = async (link: LinkStatus) => {
    try {
      if (link.url === "#") {
        // Empty anchor links are usually valid
        updateLinkStatus(link.url, "valid");
        return;
      }
      
      if (link.url.startsWith('#')) {
        // Check if the anchor exists on the page
        const anchorId = link.url.substring(1);
        const anchorElement = document.getElementById(anchorId);
        
        if (anchorElement) {
          updateLinkStatus(link.url, "valid");
        } else {
          updateLinkStatus(link.url, "invalid", undefined, "Anchor ID not found on page");
        }
        return;
      }
      
      if (link.isExternal) {
        // For external links, validate URL format
        try {
          new URL(link.url);
          // We can't reliably check external links due to CORS
          // But we can check for common issues
          if (link.url.includes(' ') || link.url.includes('\n')) {
            updateLinkStatus(link.url, "invalid", undefined, "URL contains spaces or line breaks");
          } else if (link.url.endsWith('.') || link.url.endsWith(',')) {
            updateLinkStatus(link.url, "invalid", undefined, "URL ends with punctuation");
          } else if (!link.url.includes('.')) {
            updateLinkStatus(link.url, "invalid", undefined, "URL missing domain extension");
          } else {
            updateLinkStatus(link.url, "valid");
          }
        } catch (error) {
          updateLinkStatus(link.url, "invalid", undefined, "Invalid URL format");
        }
      } else {
        // For internal links
        if (link.url.startsWith('/')) {
          // Absolute path
          // Check for common issues
          if (link.url.includes(' ') || link.url.includes('\n')) {
            updateLinkStatus(link.url, "invalid", undefined, "URL contains spaces or line breaks");
          } else if (link.url.includes('//')) {
            updateLinkStatus(link.url, "invalid", undefined, "URL contains double slashes");
          } else if (link.url.endsWith('/') && link.url.length > 1 && link.url.lastIndexOf('/') === link.url.length - 1) {
            // Check if the URL ends with a trailing slash (except for root '/')
            // This is usually valid, but worth noting
            updateLinkStatus(link.url, "valid");
          } else {
            updateLinkStatus(link.url, "valid");
          }
        } else {
          // Relative path
          if (link.url.includes(' ') || link.url.includes('\n')) {
            updateLinkStatus(link.url, "invalid", undefined, "URL contains spaces or line breaks");
          } else if (link.url.includes('../') && link.url.indexOf('../') > 0) {
            // '../' should be at the start of the path
            updateLinkStatus(link.url, "invalid", undefined, "Invalid relative path format");
          } else {
            updateLinkStatus(link.url, "valid");
          }
        }
      }
    } catch (error) {
      updateLinkStatus(link.url, "unknown", undefined, "Error checking link");
    }
  };

  // Update the status of a link
  const updateLinkStatus = (url: string, status: LinkStatus["status"], statusCode?: number, error?: string) => {
    setLinks(prevLinks => 
      prevLinks.map(link => 
        link.url === url ? { ...link, status, statusCode, error } : link
      )
    );
  };

  // Filter links based on active tab
  const filteredLinks = links.filter(link => {
    if (activeTab === "all") return true;
    if (activeTab === "internal") return !link.isExternal;
    if (activeTab === "external") return link.isExternal;
    if (activeTab === "broken") return link.status === "invalid";
    return true;
  });

  // Highlight broken link in the DOM
  const highlightLink = (link: LinkStatus) => {
    if (!link.element) return;
    
    // Remove any existing highlights
    document.querySelectorAll('.link-checker-highlight').forEach(el => {
      el.classList.remove('link-checker-highlight');
    });
    
    // Add highlight class
    link.element.classList.add('link-checker-highlight');
    
    // Scroll to the element
    link.element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // Add a style for the highlight if it doesn't exist
    if (!document.getElementById('link-checker-style')) {
      const style = document.createElement('style');
      style.id = 'link-checker-style';
      style.textContent = `
        .link-checker-highlight {
          outline: 3px solid #ef4444 !important;
          background-color: rgba(239, 68, 68, 0.1) !important;
          transition: all 0.3s ease !important;
        }
        @keyframes pulse {
          0% { outline-color: #ef4444; }
          50% { outline-color: #fca5a5; }
          100% { outline-color: #ef4444; }
        }
        .link-checker-highlight {
          animation: pulse 1s infinite;
        }
      `;
      document.head.appendChild(style);
    }
    
    // Remove highlight after 3 seconds
    setTimeout(() => {
      link.element?.classList.remove('link-checker-highlight');
    }, 3000);
  };

  return (
    <div className="mb-6 border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-800">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium flex items-center">
          <Link className="h-5 w-5 mr-2" />
          Link Checker
        </h3>
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
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Check for broken links on the current page. This tool identifies common link issues such as invalid URLs, missing anchors, and formatting problems.
          </p>
          
          <Button 
            onClick={checkLinks} 
            disabled={isChecking}
            className="w-full"
          >
            {isChecking ? (
              <>
                <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                Checking Links...
              </>
            ) : (
              "Check Links"
            )}
          </Button>
          
          {links.length > 0 && (
            <>
              <div className="flex space-x-2 border-b border-gray-200 dark:border-gray-700">
                <button
                  className={`px-3 py-2 text-sm font-medium ${activeTab === "all" ? "border-b-2 border-blue-500 text-blue-600 dark:text-blue-400" : "text-gray-600 dark:text-gray-400"}`}
                  onClick={() => setActiveTab("all")}
                >
                  All ({links.length})
                </button>
                <button
                  className={`px-3 py-2 text-sm font-medium ${activeTab === "internal" ? "border-b-2 border-blue-500 text-blue-600 dark:text-blue-400" : "text-gray-600 dark:text-gray-400"}`}
                  onClick={() => setActiveTab("internal")}
                >
                  Internal ({links.filter(l => !l.isExternal).length})
                </button>
                <button
                  className={`px-3 py-2 text-sm font-medium ${activeTab === "external" ? "border-b-2 border-blue-500 text-blue-600 dark:text-blue-400" : "text-gray-600 dark:text-gray-400"}`}
                  onClick={() => setActiveTab("external")}
                >
                  External ({links.filter(l => l.isExternal).length})
                </button>
                <button
                  className={`px-3 py-2 text-sm font-medium ${activeTab === "broken" ? "border-b-2 border-blue-500 text-blue-600 dark:text-blue-400" : "text-gray-600 dark:text-gray-400"}`}
                  onClick={() => setActiveTab("broken")}
                >
                  Broken ({links.filter(l => l.status === "invalid").length})
                </button>
              </div>
              
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                <div className="p-3 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                  <span className="text-sm font-medium">Showing {filteredLinks.length} links</span>
                  <div className="flex space-x-2">
                    <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded">
                      Valid: {links.filter(l => l.status === "valid").length}
                    </span>
                    <span className="text-xs px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 rounded">
                      Invalid: {links.filter(l => l.status === "invalid").length}
                    </span>
                  </div>
                </div>
                
                <div className="max-h-60 overflow-y-auto">
                  {filteredLinks.length === 0 ? (
                    <div className="p-4 text-center text-sm text-gray-500 dark:text-gray-400">
                      No links found for this filter
                    </div>
                  ) : (
                    filteredLinks.map((link, index) => (
                      <div 
                        key={index} 
                        className={`p-3 border-b border-gray-200 dark:border-gray-700 ${link.status === "invalid" ? "bg-red-50 dark:bg-red-900/10" : ""}`}
                      >
                        <div className="flex items-start">
                          <div className="mt-0.5 mr-2">
                            {link.status === "checking" ? (
                              <RefreshCw className="h-4 w-4 text-blue-500 animate-spin" />
                            ) : link.status === "valid" ? (
                              <CheckCircle className="h-4 w-4 text-green-500" />
                            ) : link.status === "invalid" ? (
                              <AlertCircle className="h-4 w-4 text-red-500" />
                            ) : (
                              <AlertCircle className="h-4 w-4 text-yellow-500" />
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <div>
                                <span className="text-sm font-medium truncate max-w-[250px]">{link.url}</span>
                                {link.isExternal && (
                                  <ExternalLink className="h-3 w-3 ml-1 text-gray-400 inline" />
                                )}
                              </div>
                              {link.status === "invalid" && link.element && (
                                <Button 
                                  variant="ghost" 
                                  size="sm" 
                                  className="h-6 px-2 ml-2"
                                  onClick={() => highlightLink(link)}
                                >
                                  Highlight
                                </Button>
                              )}
                            </div>
                            {link.text && (
                              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 truncate max-w-[300px]">
                                Text: {link.text}
                              </p>
                            )}
                            {link.error && (
                              <p className="text-xs text-red-600 dark:text-red-400 mt-1">{link.error}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </>
          )}
          
          <div className="text-xs text-gray-500 dark:text-gray-400 p-2 bg-gray-100 dark:bg-gray-700 rounded">
            <p className="font-medium mb-1">Link Checking Notes</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>External links can't be fully validated due to CORS restrictions</li>
              <li>This tool checks for common formatting issues and broken internal links</li>
              <li>Use the "Highlight" button to locate broken links on the page</li>
              <li>For complete validation, consider using a server-side link checker</li>
              <li>Fix broken links by updating href attributes or removing invalid links</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
