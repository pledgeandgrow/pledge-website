"use client";

import { Suspense, lazy, ComponentType, useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import ErrorBoundary from "@/components/ui/ErrorBoundary";
import { RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { logError } from "@/utils/errorHandler";

interface LazyComponentProps {
  importFunc: () => Promise<{ default: ComponentType<Record<string, unknown>> }>;
  props?: Record<string, unknown>;
  fallback?: React.ReactNode;
  height?: string | number;
  errorFallback?: React.ReactNode;
  componentName?: string; // For better error logging
}

/**
 * Enhanced LazyComponent with proper error handling and loading states
 * This helps prevent white screens when lazy-loaded components fail to load
 */
export function LazyComponent({
  importFunc,
  props = {},
  fallback,
  height = "200px",
  errorFallback,
  componentName = "Unknown Component",
}: LazyComponentProps) {
  // Track loading state for better error handling
  const [hasLoadError, setHasLoadError] = useState(false);
  const [isRetrying, setIsRetrying] = useState(false);
  
  // Use React.lazy for code splitting with error handling
  const LazyLoadedComponent = lazy(() => 
    importFunc().catch(error => {
      logError(`Failed to load lazy component: ${componentName}`, error);
      setHasLoadError(true);
      // Re-throw to trigger the error boundary
      throw error;
    })
  );
  
  // Reset error state when retrying
  useEffect(() => {
    if (isRetrying) {
      setHasLoadError(false);
      setIsRetrying(false);
    }
  }, [isRetrying]);
  
  // If there was an error loading the component and no custom error fallback is provided
  if (hasLoadError && !errorFallback) {
    return (
      <div className="w-full border border-gray-200 rounded-lg bg-gray-50 p-4" style={{ minHeight: height }}>
        <div className="flex flex-col items-center justify-center h-full text-center">
          <p className="text-sm text-gray-600 mb-3">Failed to load component</p>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => setIsRetrying(true)}
            className="flex items-center gap-2"
          >
            <RefreshCcw className="h-3 w-3" />
            Retry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <ErrorBoundary
      fallback={
        errorFallback || (
          <div className="w-full border border-gray-200 rounded-lg bg-gray-50 p-4" style={{ minHeight: height }}>
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="text-sm text-gray-600 mb-3">Something went wrong while loading this component</p>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setIsRetrying(true)}
                className="flex items-center gap-2"
              >
                <RefreshCcw className="h-3 w-3" />
                Retry
              </Button>
            </div>
          </div>
        )
      }
    >
      <Suspense
        fallback={
          fallback || (
            <div className="w-full" style={{ height }}>
              <Skeleton className="w-full h-full" />
            </div>
          )
        }
      >
        <LazyLoadedComponent {...props} />
      </Suspense>
    </ErrorBoundary>
  );
}
