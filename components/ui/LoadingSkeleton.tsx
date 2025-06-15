"use client";

import { Skeleton } from "@/components/ui/skeleton";

/**
 * Skeleton loader for testimonials
 */
export function TestimonialSkeleton() {
  return (
    <div className="flex flex-col space-y-3 p-4 border rounded-lg bg-card">
      <div className="flex items-center space-x-2">
        <Skeleton className="h-10 w-10 rounded-full" />
        <div className="space-y-1 flex-1">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-3 w-1/2" />
        </div>
      </div>
      <Skeleton className="h-20 w-full" />
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Skeleton key={i} className="h-4 w-4 mr-1" />
        ))}
      </div>
    </div>
  );
}

/**
 * Skeleton loader for cards
 */
export function CardSkeleton() {
  return (
    <div className="flex flex-col space-y-3 p-4 border rounded-lg bg-card">
      <Skeleton className="h-40 w-full rounded-md" />
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-2/3" />
    </div>
  );
}

/**
 * Skeleton loader for text content
 */
export function TextSkeleton({ lines = 3 }: { lines?: number }) {
  return (
    <div className="space-y-2 w-full">
      {[...Array(lines)].map((_, i) => (
        <Skeleton 
          key={i} 
          className="h-4 w-full" 
          style={{ width: `${100 - (i * 5)}%` }}
        />
      ))}
    </div>
  );
}

/**
 * Skeleton loader for profile
 */
export function ProfileSkeleton() {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex items-center space-x-4">
        <Skeleton className="h-16 w-16 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-5 w-32" />
          <Skeleton className="h-4 w-24" />
        </div>
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    </div>
  );
}
