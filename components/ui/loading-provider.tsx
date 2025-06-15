"use client";

import React, { createContext, useContext, useState, useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { Loader2 } from 'lucide-react';

interface LoadingContextType {
  isLoading: boolean;
  setLoading: (isLoading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

// Navigation tracker component that uses useSearchParams
function NavigationTracker({ setIsNavigating }: { setIsNavigating: (value: boolean) => void }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Track navigation changes to show loading state
  useEffect(() => {
    setIsNavigating(true);
    
    // Short timeout to prevent flash of loading state for fast navigations
    const timer = setTimeout(() => {
      setIsNavigating(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [pathname, searchParams, setIsNavigating]);

  return null;
}

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setLoading] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setLoading }}>
      {/* Global loading indicator */}
      {(isLoading || isNavigating) && (
        <div className="fixed top-0 left-0 w-full z-50 bg-primary h-1">
          <div className="h-full bg-white/30 animate-pulse" style={{ width: '30%' }}></div>
        </div>
      )}
      <Suspense fallback={null}>
        <NavigationTracker setIsNavigating={setIsNavigating} />
      </Suspense>
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
}

export function LoadingSpinner({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
  };
  
  return (
    <Loader2 className={`${sizeClasses[size]} animate-spin text-primary`} />
  );
}

export function PageLoadingFallback() {
  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <LoadingSpinner size="lg" />
    </div>
  );
}
