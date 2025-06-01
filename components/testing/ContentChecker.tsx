"use client";

import { useState, useEffect } from "react";
import { FileText, AlertCircle, Check, Loader2, ExternalLink, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContentIssue {
  id: string;
  type: "spelling" | "grammar" | "broken-link";
  element: string;
  text: string;
  suggestion?: string;
  location: string;
}

/**
 * Content Checker component to scan for spelling, grammar, and broken links
 */
export function ContentChecker() {
  const [isVisible, setIsVisible] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [issues, setIssues] = useState<ContentIssue[]>([]);
  const [activeTab, setActiveTab] = useState<"all" | "spelling" | "grammar" | "links">("all");
  const [scanProgress, setScanProgress] = useState(0);

  // Common spelling and grammar errors to check for
  const spellingErrors = [
    { error: "recieve", correction: "receive" },
    { error: "seperate", correction: "separate" },
    { error: "definately", correction: "definitely" },
    { error: "occured", correction: "occurred" },
    { error: "accomodate", correction: "accommodate" },
    { error: "acheive", correction: "achieve" },
    { error: "beleive", correction: "believe" },
    { error: "concious", correction: "conscious" },
    { error: "enviroment", correction: "environment" },
    { error: "existance", correction: "existence" },
    { error: "foriegn", correction: "foreign" },
    { error: "gaurd", correction: "guard" },
    { error: "hieght", correction: "height" },
    { error: "immediatly", correction: "immediately" },
    { error: "independant", correction: "independent" },
    { error: "maintainance", correction: "maintenance" },
    { error: "millenium", correction: "millennium" },
    { error: "neccessary", correction: "necessary" },
    { error: "occassion", correction: "occasion" },
    { error: "occassionally", correction: "occasionally" },
    { error: "persistant", correction: "persistent" },
    { error: "posession", correction: "possession" },
    { error: "prefered", correction: "preferred" },
    { error: "reccomend", correction: "recommend" },
    { error: "relevent", correction: "relevant" },
    { error: "rythm", correction: "rhythm" },
    { error: "succesful", correction: "successful" },
    { error: "supercede", correction: "supersede" },
    { error: "tommorrow", correction: "tomorrow" },
    { error: "wierd", correction: "weird" },
    { error: "untill", correction: "until" },
    { error: "wether", correction: "whether" },
    { error: "begining", correction: "beginning" },
    { error: "commited", correction: "committed" },
    { error: "truely", correction: "truly" },
    { error: "buisness", correction: "business" },
    { error: "calender", correction: "calendar" },
    { error: "catagory", correction: "category" },
    { error: "collegue", correction: "colleague" },
    { error: "comming", correction: "coming" },
    { error: "completly", correction: "completely" },
    { error: "concensus", correction: "consensus" },
    { error: "critisism", correction: "criticism" },
    { error: "decieve", correction: "deceive" },
    { error: "desireable", correction: "desirable" },
    { error: "dissapoint", correction: "disappoint" },
    { error: "embarass", correction: "embarrass" },
    { error: "enviroment", correction: "environment" },
    { error: "exagerate", correction: "exaggerate" },
    { error: "familar", correction: "familiar" },
    { error: "finaly", correction: "finally" },
    { error: "fourty", correction: "forty" },
    { error: "freind", correction: "friend" },
    { error: "goverment", correction: "government" },
    { error: "grammer", correction: "grammar" },
    { error: "harrass", correction: "harass" },
    { error: "humourous", correction: "humorous" },
    { error: "ignorence", correction: "ignorance" },
    { error: "improvment", correction: "improvement" },
    { error: "innoculate", correction: "inoculate" },
    { error: "knowlege", correction: "knowledge" },
    { error: "liason", correction: "liaison" },
    { error: "libary", correction: "library" },
    { error: "lisence", correction: "license" },
    { error: "maintenence", correction: "maintenance" },
    { error: "mischevious", correction: "mischievous" },
    { error: "mispell", correction: "misspell" },
    { error: "neccessary", correction: "necessary" },
    { error: "noticable", correction: "noticeable" },
    { error: "occassion", correction: "occasion" },
    { error: "occurance", correction: "occurrence" },
    { error: "persistant", correction: "persistent" },
    { error: "personel", correction: "personnel" },
    { error: "persue", correction: "pursue" },
    { error: "potatoe", correction: "potato" },
    { error: "preceeding", correction: "preceding" },
    { error: "prefered", correction: "preferred" },
    { error: "priviledge", correction: "privilege" },
    { error: "recieve", correction: "receive" },
    { error: "recomend", correction: "recommend" },
    { error: "refered", correction: "referred" },
    { error: "religous", correction: "religious" },
    { error: "remeber", correction: "remember" },
    { error: "repitition", correction: "repetition" },
    { error: "rythm", correction: "rhythm" },
    { error: "sacriligious", correction: "sacrilegious" },
    { error: "seige", correction: "siege" },
    { error: "seperate", correction: "separate" },
    { error: "succesful", correction: "successful" },
    { error: "supercede", correction: "supersede" },
    { error: "supress", correction: "suppress" },
    { error: "tomatos", correction: "tomatoes" },
    { error: "tommorrow", correction: "tomorrow" },
    { error: "twelth", correction: "twelfth" },
    { error: "tyrany", correction: "tyranny" },
    { error: "untill", correction: "until" },
    { error: "vaccum", correction: "vacuum" },
    { error: "wierd", correction: "weird" }
  ];

  // Grammar errors to check for
  const grammarErrors = [
    { error: "a lot of", correction: "many" },
    { error: "alot", correction: "a lot" },
    { error: "its a", correction: "it's a" },
    { error: "your welcome", correction: "you're welcome" },
    { error: "their going", correction: "they're going" },
    { error: "there going", correction: "they're going" },
    { error: "your going", correction: "you're going" },
    { error: "its going", correction: "it's going" },
    { error: "their is", correction: "there is" },
    { error: "there are", correction: "they're" },
    { error: "could of", correction: "could have" },
    { error: "should of", correction: "should have" },
    { error: "would of", correction: "would have" },
    { error: "must of", correction: "must have" },
    { error: "less people", correction: "fewer people" },
    { error: "i seen", correction: "I saw" },
    { error: "between you and I", correction: "between you and me" },
    { error: "different than", correction: "different from" },
    { error: "lay down", correction: "lie down" },
    { error: "suppose to", correction: "supposed to" },
    { error: "use to", correction: "used to" },
    { error: "very unique", correction: "unique" },
    { error: "each and every", correction: "each" },
    { error: "reason why", correction: "reason" },
    { error: "return back", correction: "return" },
    { error: "free gift", correction: "gift" },
    { error: "past history", correction: "history" },
    { error: "end result", correction: "result" },
    { error: "final outcome", correction: "outcome" },
    { error: "unexpected surprise", correction: "surprise" },
    { error: "basic fundamentals", correction: "fundamentals" },
    { error: "true facts", correction: "facts" },
    { error: "advance warning", correction: "warning" },
    { error: "sudden crisis", correction: "crisis" },
    { error: "future plans", correction: "plans" },
    { error: "past experience", correction: "experience" },
    { error: "general consensus", correction: "consensus" },
    { error: "close proximity", correction: "proximity" },
    { error: "absolutely essential", correction: "essential" },
    { error: "completely eliminate", correction: "eliminate" },
    { error: "exact same", correction: "same" },
    { error: "final conclusion", correction: "conclusion" },
    { error: "major breakthrough", correction: "breakthrough" },
    { error: "personal opinion", correction: "opinion" },
    { error: "serious crisis", correction: "crisis" },
    { error: "total annihilation", correction: "annihilation" }
  ];

  // Scan the page for content issues
  const scanContent = async () => {
    setIsScanning(true);
    setIssues([]);
    setScanProgress(0);
    
    try {
      // Get all text elements on the page
      const textElements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, li, a, button, span, div");
      const totalElements = textElements.length;
      let foundIssues: ContentIssue[] = [];
      let processedElements = 0;
      
      // Process elements in batches to avoid blocking the UI
      const batchSize = 20;
      
      for (let i = 0; i < totalElements; i += batchSize) {
        const batch = Array.from(textElements).slice(i, i + batchSize);
        
        // Process each element in the batch
        for (const element of batch) {
          // Skip elements with no text content
          if (!element.textContent?.trim()) continue;
          
          // Skip elements with very short text (likely not meaningful content)
          if (element.textContent.trim().length < 3) continue;
          
          // Check for spelling errors
          const spellingIssues = checkSpelling(element);
          foundIssues = [...foundIssues, ...spellingIssues];
          
          // Check for grammar errors
          const grammarIssues = checkGrammar(element);
          foundIssues = [...foundIssues, ...grammarIssues];
          
          // If the element is a link, check if it's broken
          if (element.tagName.toLowerCase() === 'a') {
            const linkIssue = await checkLink(element as HTMLAnchorElement);
            if (linkIssue) {
              foundIssues.push(linkIssue);
            }
          }
          
          processedElements++;
          setScanProgress(Math.floor((processedElements / totalElements) * 100));
        }
        
        // Allow UI to update between batches
        await new Promise(resolve => setTimeout(resolve, 0));
      }
      
      setIssues(foundIssues);
      setScanProgress(100);
    } catch (error) {
      console.error("Error scanning content:", error);
    } finally {
      setIsScanning(false);
    }
  };

  // Check for spelling errors in an element
  const checkSpelling = (element: Element): ContentIssue[] => {
    const issues: ContentIssue[] = [];
    const text = element.textContent || "";
    
    // Skip elements with very short text
    if (text.trim().length < 3) return issues;
    
    // Check for common spelling errors
    for (const { error, correction } of spellingErrors) {
      // Use word boundary to match whole words only
      const regex = new RegExp(`\\b${error}\\b`, 'gi');
      
      if (regex.test(text)) {
        issues.push({
          id: `spelling-${element.tagName.toLowerCase()}-${Math.random().toString(36).substring(2, 9)}`,
          type: "spelling",
          element: element.tagName.toLowerCase(),
          text: error,
          suggestion: correction,
          location: getElementPath(element)
        });
      }
    }
    
    return issues;
  };

  // Check for grammar errors in an element
  const checkGrammar = (element: Element): ContentIssue[] => {
    const issues: ContentIssue[] = [];
    const text = element.textContent || "";
    
    // Skip elements with very short text
    if (text.trim().length < 3) return issues;
    
    // Check for common grammar errors
    for (const { error, correction } of grammarErrors) {
      // Use case-insensitive search
      const regex = new RegExp(error, 'gi');
      
      if (regex.test(text)) {
        issues.push({
          id: `grammar-${element.tagName.toLowerCase()}-${Math.random().toString(36).substring(2, 9)}`,
          type: "grammar",
          element: element.tagName.toLowerCase(),
          text: error,
          suggestion: correction,
          location: getElementPath(element)
        });
      }
    }
    
    return issues;
  };

  // Check if a link is broken
  const checkLink = async (linkElement: HTMLAnchorElement): Promise<ContentIssue | null> => {
    const href = linkElement.getAttribute('href');
    
    // Skip if no href attribute
    if (!href) return null;
    
    // Skip empty links, javascript: links, mailto: links, tel: links, and anchor links
    if (
      href === '#' || 
      href.startsWith('javascript:') || 
      href.startsWith('mailto:') || 
      href.startsWith('tel:') ||
      href.startsWith('#')
    ) {
      return null;
    }
    
    // For internal links, check if the path exists
    if (href.startsWith('/') || !href.includes('://')) {
      // For client-side navigation in Next.js, we can't reliably check if the path exists
      // So we'll just check if it's a valid format
      const isValidFormat = /^(\/[a-zA-Z0-9_-]*)*\/?(\?[a-zA-Z0-9_=&-]*)?$/.test(href);
      
      if (!isValidFormat) {
        return {
          id: `broken-link-${Math.random().toString(36).substring(2, 9)}`,
          type: "broken-link",
          element: 'a',
          text: href,
          suggestion: "Check the internal link format",
          location: getElementPath(linkElement)
        };
      }
      
      return null;
    }
    
    // For external links, we can't reliably check if they're broken due to CORS restrictions
    // So we'll just check if it's a valid URL format
    try {
      new URL(href);
      return null;
    } catch (error) {
      return {
        id: `broken-link-${Math.random().toString(36).substring(2, 9)}`,
        type: "broken-link",
        element: 'a',
        text: href,
        suggestion: "Invalid URL format",
        location: getElementPath(linkElement)
      };
    }
  };

  // Get a CSS selector path to the element
  const getElementPath = (element: Element): string => {
    const path: string[] = [];
    let currentElement: Element | null = element;
    
    while (currentElement && currentElement !== document.body) {
      let selector = currentElement.tagName.toLowerCase();
      
      if (currentElement.id) {
        selector += `#${currentElement.id}`;
        path.unshift(selector);
        break;
      } else if (currentElement.classList.length > 0) {
        selector += `.${Array.from(currentElement.classList).join('.')}`;
      }
      
      // Add position among siblings
      const siblings = currentElement.parentElement?.children || [];
      if (siblings.length > 1) {
        const index = Array.from(siblings).indexOf(currentElement) + 1;
        selector += `:nth-child(${index})`;
      }
      
      path.unshift(selector);
      currentElement = currentElement.parentElement;
    }
    
    return path.join(' > ');
  };

  // Filter issues based on active tab
  const filteredIssues = issues.filter(issue => {
    if (activeTab === "all") return true;
    if (activeTab === "spelling") return issue.type === "spelling";
    if (activeTab === "grammar") return issue.type === "grammar";
    if (activeTab === "links") return issue.type === "broken-link";
    return true;
  });

  return (
    <div className="mb-6 border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-800">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium flex items-center">
          <FileText className="h-5 w-5 mr-2" />
          Content Checker
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
            Check for spelling errors, grammar issues, and broken links on the current page.
          </p>
          
          <Button 
            onClick={scanContent} 
            disabled={isScanning}
            className="w-full"
          >
            {isScanning ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Scanning Content... {scanProgress}%
              </>
            ) : (
              <>
                <Search className="mr-2 h-4 w-4" />
                Scan Content
              </>
            )}
          </Button>
          
          {issues.length > 0 && (
            <>
              <div className="flex space-x-2 border-b border-gray-200 dark:border-gray-700">
                <button
                  className={`px-3 py-2 text-sm font-medium ${activeTab === "all" ? "border-b-2 border-blue-500 text-blue-600 dark:text-blue-400" : "text-gray-600 dark:text-gray-400"}`}
                  onClick={() => setActiveTab("all")}
                >
                  All ({issues.length})
                </button>
                <button
                  className={`px-3 py-2 text-sm font-medium ${activeTab === "spelling" ? "border-b-2 border-blue-500 text-blue-600 dark:text-blue-400" : "text-gray-600 dark:text-gray-400"}`}
                  onClick={() => setActiveTab("spelling")}
                >
                  Spelling ({issues.filter(i => i.type === "spelling").length})
                </button>
                <button
                  className={`px-3 py-2 text-sm font-medium ${activeTab === "grammar" ? "border-b-2 border-blue-500 text-blue-600 dark:text-blue-400" : "text-gray-600 dark:text-gray-400"}`}
                  onClick={() => setActiveTab("grammar")}
                >
                  Grammar ({issues.filter(i => i.type === "grammar").length})
                </button>
                <button
                  className={`px-3 py-2 text-sm font-medium ${activeTab === "links" ? "border-b-2 border-blue-500 text-blue-600 dark:text-blue-400" : "text-gray-600 dark:text-gray-400"}`}
                  onClick={() => setActiveTab("links")}
                >
                  Links ({issues.filter(i => i.type === "broken-link").length})
                </button>
              </div>
              
              <div className="space-y-2 max-h-80 overflow-y-auto">
                {filteredIssues.length === 0 ? (
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center py-4">
                    No issues found for this category
                  </p>
                ) : (
                  filteredIssues.map(issue => (
                    <div 
                      key={issue.id} 
                      className={`p-3 border rounded ${
                        issue.type === "spelling" 
                          ? "border-yellow-200 bg-yellow-50 dark:border-yellow-900 dark:bg-yellow-900/20" 
                          : issue.type === "grammar" 
                            ? "border-orange-200 bg-orange-50 dark:border-orange-900 dark:bg-orange-900/20"
                            : "border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-900/20"
                      }`}
                    >
                      <div className="flex items-start">
                        <div className="mt-0.5 mr-3">
                          <AlertCircle className={`h-5 w-5 ${
                            issue.type === "spelling" 
                              ? "text-yellow-500" 
                              : issue.type === "grammar" 
                                ? "text-orange-500"
                                : "text-red-500"
                          }`} />
                        </div>
                        
                        <div className="flex-1">
                          <h4 className="text-sm font-medium">
                            {issue.type === "spelling" 
                              ? "Spelling Error" 
                              : issue.type === "grammar" 
                                ? "Grammar Issue"
                                : "Broken Link"}
                          </h4>
                          
                          <p className="text-xs mt-1">
                            <span className="font-medium">Found:</span> "{issue.text}"
                          </p>
                          
                          {issue.suggestion && (
                            <p className="text-xs mt-1">
                              <span className="font-medium">Suggestion:</span> "{issue.suggestion}"
                            </p>
                          )}
                          
                          <p className="text-xs mt-1 text-gray-500 dark:text-gray-400">
                            <span className="font-medium">Location:</span> {issue.element}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
              
              <div className="text-xs text-gray-500 dark:text-gray-400 p-2 bg-gray-100 dark:bg-gray-700 rounded">
                <p className="font-medium mb-1">Content Checking Notes</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>This tool checks for common spelling and grammar errors but is not comprehensive</li>
                  <li>For broken links, only format validation is performed due to browser security restrictions</li>
                  <li>For a complete check, consider using dedicated spelling and grammar tools</li>
                  <li>External link validation requires server-side checking</li>
                </ul>
              </div>
            </>
          )}
          
          {issues.length === 0 && !isScanning && scanProgress > 0 && (
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-900 rounded text-center">
              <Check className="h-6 w-6 text-green-500 mx-auto mb-2" />
              <p className="text-sm text-green-800 dark:text-green-400 font-medium">
                No content issues found!
              </p>
              <p className="text-xs text-green-700 dark:text-green-500 mt-1">
                The page appears to be free of common spelling errors, grammar issues, and broken links.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
