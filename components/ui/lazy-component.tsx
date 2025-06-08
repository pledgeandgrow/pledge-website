"use client";

import { Suspense, lazy, ComponentType } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface LazyComponentProps {
  importFunc: () => Promise<{ default: ComponentType<Record<string, unknown>> }>;
  props?: Record<string, unknown>;
  fallback?: React.ReactNode;
  height?: string | number;
}

export function LazyComponent({
  importFunc,
  props = {},
  fallback,
  height = "200px",
}: LazyComponentProps) {
  // Use React.lazy for code splitting
  const LazyLoadedComponent = lazy(importFunc);

  return (
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
  );
}
