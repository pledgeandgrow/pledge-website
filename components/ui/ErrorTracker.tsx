"use client";

import { useEffect } from 'react';
import { initErrorTracking } from '@/utils/errorHandler';

/**
 * Component that initializes error tracking for the application
 * This helps catch and log errors that might cause white screens
 */
export default function ErrorTracker() {
  useEffect(() => {
    // Initialize error tracking on client side
    initErrorTracking();
  }, []);

  // This is a utility component that doesn't render anything
  return null;
}
