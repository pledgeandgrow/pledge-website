/**
 * Cookie consent management utilities
 * 
 * This module provides functions for managing cookie consent preferences
 * and controlling analytics/tracking based on user choices.
 */

// Cookie consent status options
export type ConsentStatus = 'accepted' | 'declined' | null;

/**
 * Get the current cookie consent status from localStorage
 */
export const getConsentStatus = (): ConsentStatus => {
  if (typeof window === 'undefined') return null;
  
  const status = localStorage.getItem('cookie-consent');
  if (status === 'accepted' || status === 'declined') {
    return status;
  }
  return null;
};

/**
 * Set cookie consent status in localStorage
 */
export const setConsentStatus = (status: 'accepted' | 'declined'): void => {
  if (typeof window === 'undefined') return;
  
  localStorage.setItem('cookie-consent', status);
  
  // Apply consent choice to tracking/analytics
  if (status === 'accepted') {
    enableAnalytics();
  } else {
    disableAnalytics();
  }
};

/**
 * Clear cookie consent status (for testing)
 */
export const clearConsentStatus = (): void => {
  if (typeof window === 'undefined') return;
  
  localStorage.removeItem('cookie-consent');
};

/**
 * Enable analytics and tracking based on user consent
 */
const enableAnalytics = (): void => {
  // Enable Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    // Set consent mode to true for all categories
    window.gtag('consent', 'update', {
      'analytics_storage': 'granted',
      'ad_storage': 'granted',
      'functionality_storage': 'granted',
      'personalization_storage': 'granted',
      'security_storage': 'granted'
    });
  }
  
  // You can add other analytics initialization here
  // For example: initializeSentry(), initializeHotjar(), etc.
};

/**
 * Disable analytics and tracking based on user preference
 */
const disableAnalytics = (): void => {
  // Disable Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    // Set consent mode to false for all categories
    window.gtag('consent', 'update', {
      'analytics_storage': 'denied',
      'ad_storage': 'denied',
      'functionality_storage': 'denied',
      'personalization_storage': 'denied',
      'security_storage': 'granted' // Security storage is always granted
    });
  }
  
  // You can add other analytics disabling here
};

// Add TypeScript declaration for gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}
