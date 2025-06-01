"use client";

import React, { createContext, useContext, ReactNode } from 'react';
import { 
  trackEvent, 
  trackButtonClick, 
  trackFormSubmission, 
  trackAuth, 
  trackFeatureUse,
  EventCategory,
  EventAction,
  EventProperties
} from '@/lib/analytics';
import GoogleAnalytics from './GoogleAnalytics';

// Create a context for analytics
interface AnalyticsContextType {
  trackEvent: typeof trackEvent;
  trackButtonClick: typeof trackButtonClick;
  trackFormSubmission: typeof trackFormSubmission;
  trackAuth: typeof trackAuth;
  trackFeatureUse: typeof trackFeatureUse;
  EventCategory: typeof EventCategory;
  EventAction: typeof EventAction;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

// Provider component
export function AnalyticsProvider({ 
  children,
  measurementId
}: { 
  children: ReactNode;
  measurementId?: string;
}) {
  const analytics = {
    trackEvent,
    trackButtonClick,
    trackFormSubmission,
    trackAuth,
    trackFeatureUse,
    EventCategory,
    EventAction,
  };

  return (
    <AnalyticsContext.Provider value={analytics}>
      {/* Only include Google Analytics if measurement ID is provided */}
      {measurementId && <GoogleAnalytics measurementId={measurementId} />}
      {children}
    </AnalyticsContext.Provider>
  );
}

// Hook to use analytics
export function useAnalyticsContext() {
  const context = useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error('useAnalyticsContext must be used within an AnalyticsProvider');
  }
  return context;
}

// Export a barrel file for easy imports
export { GoogleAnalytics };
