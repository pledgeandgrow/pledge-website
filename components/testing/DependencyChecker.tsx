"use client";

import { useState, useEffect } from "react";
import { Package, AlertTriangle, Check, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Dependency {
  name: string;
  currentVersion: string;
  latestVersion?: string;
  hasUpdate: boolean;
  hasVulnerability: boolean;
  vulnerabilityLevel?: "low" | "medium" | "high" | "critical";
  vulnerabilityDetails?: string;
}

/**
 * Dependency Checker component for auditing npm dependencies
 */
export function DependencyChecker() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [dependencies, setDependencies] = useState<Dependency[]>([]);
  const [vulnerabilityCount, setVulnerabilityCount] = useState(0);
  const [updateCount, setUpdateCount] = useState(0);

  // Load dependencies when component becomes visible
  useEffect(() => {
    if (isVisible && dependencies.length === 0) {
      loadDependencies();
    }
  }, [isVisible, dependencies.length]);

  // Simulate loading dependencies from package.json
  // In a real implementation, this would be a server API call
  const loadDependencies = async () => {
    setIsLoading(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Sample dependencies based on Next.js project
    // In a real implementation, this would come from the server
    const sampleDependencies: Dependency[] = [
      {
        name: "next",
        currentVersion: "14.0.3",
        latestVersion: "14.0.3",
        hasUpdate: false,
        hasVulnerability: false
      },
      {
        name: "react",
        currentVersion: "18.2.0",
        latestVersion: "18.2.0",
        hasUpdate: false,
        hasVulnerability: false
      },
      {
        name: "react-dom",
        currentVersion: "18.2.0",
        latestVersion: "18.2.0",
        hasUpdate: false,
        hasVulnerability: false
      },
      {
        name: "@supabase/auth-helpers-nextjs",
        currentVersion: "0.7.4",
        latestVersion: "0.8.1",
        hasUpdate: true,
        hasVulnerability: false
      },
      {
        name: "@supabase/supabase-js",
        currentVersion: "2.32.0",
        latestVersion: "2.39.0",
        hasUpdate: true,
        hasVulnerability: false
      },
      {
        name: "tailwindcss",
        currentVersion: "3.3.3",
        latestVersion: "3.3.5",
        hasUpdate: true,
        hasVulnerability: false
      },
      {
        name: "zod",
        currentVersion: "3.22.2",
        latestVersion: "3.22.4",
        hasUpdate: true,
        hasVulnerability: false
      },
      {
        name: "axios",
        currentVersion: "1.5.0",
        latestVersion: "1.6.2",
        hasUpdate: true,
        hasVulnerability: true,
        vulnerabilityLevel: "medium",
        vulnerabilityDetails: "Axios 1.5.0 has a medium severity vulnerability related to SSRF protection bypass."
      }
    ];
    
    setDependencies(sampleDependencies);
    setVulnerabilityCount(sampleDependencies.filter(d => d.hasVulnerability).length);
    setUpdateCount(sampleDependencies.filter(d => d.hasUpdate).length);
    setIsLoading(false);
  };

  return (
    <div className="mb-6 border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-800">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium flex items-center">
          <Package className="h-5 w-5 mr-2" />
          Dependency Checker
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
            Check for outdated dependencies and security vulnerabilities. This is a simulated check - for a full audit, run <code>npm audit</code> in the terminal.
          </p>
          
          <Button 
            onClick={loadDependencies} 
            disabled={isLoading}
            className="w-full"
          >
            {isLoading ? (
              <>
                <div className="h-4 w-4 mr-2 rounded-full border-2 border-current border-t-transparent animate-spin" />
                Checking Dependencies...
              </>
            ) : (
              "Check Dependencies"
            )}
          </Button>
          
          {dependencies.length > 0 && (
            <div>
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-md font-medium">Results</h4>
                <div className="flex items-center gap-2">
                  {vulnerabilityCount > 0 && (
                    <span className="text-sm bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 px-2 py-1 rounded">
                      {vulnerabilityCount} vulnerabilities
                    </span>
                  )}
                  {updateCount > 0 && (
                    <span className="text-sm bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 px-2 py-1 rounded">
                      {updateCount} updates available
                    </span>
                  )}
                </div>
              </div>
              
              <div className="border border-gray-200 dark:border-gray-700 rounded overflow-hidden">
                <table className="min-w-full">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Package</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Current</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Latest</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {dependencies.map((dep, index) => (
                      <tr key={index} className={dep.hasVulnerability ? "bg-red-50 dark:bg-red-900/10" : ""}>
                        <td className="px-4 py-2 text-sm">{dep.name}</td>
                        <td className="px-4 py-2 text-sm">{dep.currentVersion}</td>
                        <td className="px-4 py-2 text-sm">{dep.latestVersion}</td>
                        <td className="px-4 py-2 text-sm">
                          {dep.hasVulnerability ? (
                            <div className="flex items-center">
                              <AlertTriangle className="h-4 w-4 text-red-500 mr-1" />
                              <span className={`text-${dep.vulnerabilityLevel === 'critical' ? 'red' : dep.vulnerabilityLevel === 'high' ? 'orange' : 'yellow'}-600 dark:text-${dep.vulnerabilityLevel === 'critical' ? 'red' : dep.vulnerabilityLevel === 'high' ? 'orange' : 'yellow'}-400`}>
                                {dep.vulnerabilityLevel} vulnerability
                              </span>
                            </div>
                          ) : dep.hasUpdate ? (
                            <span className="text-yellow-600 dark:text-yellow-400">Update available</span>
                          ) : (
                            <div className="flex items-center">
                              <Check className="h-4 w-4 text-green-500 mr-1" />
                              <span className="text-green-600 dark:text-green-400">Up to date</span>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="mt-4 p-3 bg-gray-100 dark:bg-gray-700 rounded text-sm">
                <h5 className="font-medium mb-2">Recommendations</h5>
                <ul className="space-y-2">
                  {vulnerabilityCount > 0 && (
                    <li className="flex items-start">
                      <AlertTriangle className="h-4 w-4 text-red-500 mr-2 mt-0.5" />
                      <span>
                        Fix security vulnerabilities by running <code>npm audit fix</code> or updating the affected packages.
                      </span>
                    </li>
                  )}
                  {updateCount > 0 && (
                    <li className="flex items-start">
                      <AlertTriangle className="h-4 w-4 text-yellow-500 mr-2 mt-0.5" />
                      <span>
                        Update outdated dependencies by running <code>npm update</code> or <code>npm install package@latest</code> for major updates.
                      </span>
                    </li>
                  )}
                  <li className="flex items-start">
                    <ExternalLink className="h-4 w-4 text-blue-500 mr-2 mt-0.5" />
                    <span>
                      For a complete security audit, run <code>npm audit</code> in the terminal.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
