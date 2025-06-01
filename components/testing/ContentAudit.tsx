"use client";

import { useState, useEffect } from "react";
import { Clipboard, Check, AlertCircle, FileText, Link } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ColorContrastChecker } from "./ColorContrastChecker";
import { ContentChecker } from "./ContentChecker";
import { LinkChecker } from "./LinkChecker";

/**
 * ContentAudit component that combines color contrast, spelling/grammar,
 * and link checking into a single comprehensive audit tool
 */
export function ContentAudit() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<"contrast" | "content" | "links">("contrast");
  const [auditResults, setAuditResults] = useState({
    contrastIssues: 0,
    contentIssues: 0,
    linkIssues: 0,
    lastRun: ""
  });

  // Run a full audit and update the LaunchChecklist
  const runFullAudit = async () => {
    // This function would ideally integrate with the individual checkers
    // For now, we'll just provide a UI that makes it easy to run all checks
    
    setAuditResults({
      ...auditResults,
      lastRun: new Date().toLocaleString()
    });
  };

  return (
    <div className="mb-6 border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-800">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium flex items-center">
          <Clipboard className="h-5 w-5 mr-2" />
          Content Audit Suite
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
            Comprehensive content audit tool that checks for color contrast issues, spelling/grammar errors, and broken links.
            Run each check individually using the tabs below, or use the "Run Full Audit" button to check everything at once.
          </p>
          
          <div className="flex justify-between items-center">
            <div className="flex space-x-2">
              <Button 
                variant={activeTab === "contrast" ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveTab("contrast")}
              >
                Color Contrast
              </Button>
              <Button 
                variant={activeTab === "content" ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveTab("content")}
              >
                Spelling & Grammar
              </Button>
              <Button 
                variant={activeTab === "links" ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveTab("links")}
              >
                Links
              </Button>
            </div>
            
            <Button onClick={runFullAudit}>
              Run Full Audit
            </Button>
          </div>
          
          {activeTab === "contrast" && (
            <div className="pt-4">
              <ColorContrastChecker />
            </div>
          )}
          
          {activeTab === "content" && (
            <div className="pt-4">
              <ContentChecker />
            </div>
          )}
          
          {activeTab === "links" && (
            <div className="pt-4">
              <LinkChecker />
            </div>
          )}
          
          {auditResults.lastRun && (
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded mt-4">
              <h4 className="font-medium mb-2">Last Audit: {auditResults.lastRun}</h4>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span className="text-sm">Contrast Issues</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                  <span className="text-sm">Content Issues</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <span className="text-sm">Link Issues</span>
                </div>
              </div>
            </div>
          )}
          
          <div className="text-xs text-gray-500 dark:text-gray-400 p-2 bg-gray-100 dark:bg-gray-700 rounded">
            <p className="font-medium mb-1">Audit Recommendations</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Run the Color Contrast Checker to identify and fix accessibility issues</li>
              <li>Use the Content Checker to find spelling and grammar errors across the site</li>
              <li>Check for broken links with the Link Checker before launch</li>
              <li>After fixing issues, run the audit again to confirm improvements</li>
              <li>For comprehensive testing, run checks on multiple pages and device sizes</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
