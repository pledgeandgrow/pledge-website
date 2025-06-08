"use client";

import { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';

interface TranslationLoaderProps {
  isLoading: boolean;
  children: React.ReactNode;
  fallback?: React.ReactNode;
  className?: string;
}

export function TranslationLoader({ 
  isLoading, 
  children, 
  fallback,
  className
}: TranslationLoaderProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // During server-side rendering or before mounting, show a simple placeholder
  if (!mounted) {
    return (
      <div className={`min-h-[100px] flex items-center justify-center ${className || ''}`}>
        <div className="animate-pulse h-6 w-24 bg-muted rounded"></div>
      </div>
    );
  }

  // Once mounted, show loading state or children
  if (isLoading) {
    return fallback || (
      <div className={`flex items-center justify-center p-4 ${className || ''}`}>
        <Loader2 className="h-6 w-6 animate-spin text-primary" />
      </div>
    );
  }

  return <div className={className || ''}>{children}</div>;
}
