"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { RefreshCcw, Home } from "lucide-react";
import { logError } from "@/utils/errorHandler";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to our error tracking system
    logError("Next.js Error Page caught error", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] p-6 text-center">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md border border-gray-200">
        <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
        <p className="text-gray-600 mb-6">
          We encountered an error while loading this page. Please try again or return to the home page.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={reset}
            className="flex items-center gap-2"
          >
            <RefreshCcw className="h-4 w-4" />
            Try Again
          </Button>
          <Button 
            variant="outline" 
            asChild
          >
            <Link href="/" className="flex items-center gap-2">
              <Home className="h-4 w-4" />
              Return Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
