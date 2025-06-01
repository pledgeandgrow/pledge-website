"use client";

import { useEffect, Suspense, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { 
  trackPageView, 
  trackEvent, 
  trackButtonClick, 
  trackFormSubmission, 
  trackAuth, 
  trackFeatureUse,
  trackFormStep,
  EventCategory,
  EventAction,
  EventProperties
} from '@/lib/analytics';

// Component that handles the search params with suspense boundary
function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
      // Wait for page to fully load before tracking
      const timeout = setTimeout(() => {
        const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
        trackPageView(url, document.title);
      }, 300);

      return () => clearTimeout(timeout);
    }
  }, [pathname, searchParams]);

  return null;
}

/**
 * Hook for tracking analytics events
 * Automatically tracks page views when the route changes
 * Provides methods for tracking other events
 */
export const useAnalytics = () => {
  const [isClient, setIsClient] = useState(false);
  
  // Only enable client-side features after mount
  useEffect(() => {
    setIsClient(true);
  }, []);

  return {
    // PageViewTracker component for use in components
    PageViewTracker: () => isClient ? (
      <Suspense fallback={null}>
        <PageViewTracker />
      </Suspense>
    ) : null,
    
    // Re-export all tracking functions for easy access
    trackEvent,
    trackButtonClick,
    trackFormSubmission,
    trackAuth,
    trackFeatureUse,
    trackFormStep,
    
    // Event categories and actions for reference
    EventCategory,
    EventAction,
  };
};

/**
 * Higher-order component to track button clicks
 * @param Component The button component to wrap
 * @param buttonName Name of the button for tracking
 * @param location Location of the button (e.g., 'header', 'footer')
 */
export const withButtonTracking = (
  Component: React.ComponentType<any>,
  buttonName: string,
  location: string
) => {
  return (props: any) => {
    const handleClick = (e: React.MouseEvent) => {
      trackButtonClick(buttonName, location);
      if (props.onClick) {
        props.onClick(e);
      }
    };

    return <Component {...props} onClick={handleClick} />;
  };
};

/**
 * Higher-order component to track form submissions
 * @param Component The form component to wrap
 * @param formName Name of the form for tracking
 */
export const withFormTracking = (
  Component: React.ComponentType<any>,
  formName: string
) => {
  return (props: any) => {
    const handleSubmit = async (e: React.FormEvent, ...args: any[]) => {
      try {
        // Track form submission attempt
        trackEvent(EventCategory.FORM, EventAction.FORM_SUBMIT, formName);
        
        // Call the original onSubmit handler
        if (props.onSubmit) {
          const result = await props.onSubmit(e, ...args);
          
          // Track success if no error was thrown
          trackFormSubmission(formName, true);
          
          return result;
        }
      } catch (error) {
        // Track error
        trackFormSubmission(formName, false, (error as Error).message);
        throw error;
      }
    };

    return <Component {...props} onSubmit={handleSubmit} />;
  };
};
