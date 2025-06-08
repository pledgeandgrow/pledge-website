"use client";

/**
 * Utility functions for monitoring and reporting web performance metrics
 * Uses the Web Vitals API to track Core Web Vitals and other performance metrics
 */

// Types for web-vitals library
interface WebVitalsMetric {
  name: string;
  value: number;
  delta: number;
  id: string;
  entries: PerformanceEntry[];
}

type MetricHandler = (metric: WebVitalsMetric) => void;

// Define web-vitals module interface
interface WebVitals {
  onFCP: (handler: MetricHandler) => void;
  onLCP: (handler: MetricHandler) => void;
  onCLS: (handler: MetricHandler) => void;
  onFID: (handler: MetricHandler) => void;
  onTTFB: (handler: MetricHandler) => void;
  onINP: (handler: MetricHandler) => void;
}

// Types for performance metrics
type MetricName = 
  | 'FCP'    // First Contentful Paint
  | 'LCP'    // Largest Contentful Paint
  | 'CLS'    // Cumulative Layout Shift
  | 'FID'    // First Input Delay
  | 'TTFB'   // Time to First Byte
  | 'INP';   // Interaction to Next Paint

interface PerformanceMetric {
  name: MetricName;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  id: string;
}

// Function to send metrics to analytics
const sendToAnalytics = (metric: PerformanceMetric) => {
  // Only run on client
  if (typeof window === 'undefined') return;
  
  // Send to Google Analytics if available
  if (window.gtag) {
    window.gtag('event', 'web_vitals', {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      non_interaction: true,
      metric_name: metric.name,
      metric_value: metric.value,
      metric_rating: metric.rating,
    });
  }
  
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Performance] ${metric.name}: ${metric.value} (${metric.rating})`);
  }
  
  // Send to Sentry if available
  if (typeof window.Sentry !== 'undefined') {
    window.Sentry.captureMessage(`Web Vital: ${metric.name}`, {
      level: metric.rating === 'poor' ? 'error' : (metric.rating === 'needs-improvement' ? 'warning' : 'info'),
      extra: {
        metricName: metric.name,
        metricValue: metric.value,
        metricRating: metric.rating,
      },
    });
  }
};

// Function to get performance threshold ratings
const getRating = (name: MetricName, value: number): 'good' | 'needs-improvement' | 'poor' => {
  switch (name) {
    case 'FCP':
      return value < 1800 ? 'good' : value < 3000 ? 'needs-improvement' : 'poor';
    case 'LCP':
      return value < 2500 ? 'good' : value < 4000 ? 'needs-improvement' : 'poor';
    case 'CLS':
      return value < 0.1 ? 'good' : value < 0.25 ? 'needs-improvement' : 'poor';
    case 'FID':
      return value < 100 ? 'good' : value < 300 ? 'needs-improvement' : 'poor';
    case 'TTFB':
      return value < 800 ? 'good' : value < 1800 ? 'needs-improvement' : 'poor';
    case 'INP':
      return value < 200 ? 'good' : value < 500 ? 'needs-improvement' : 'poor';
    default:
      return 'good';
  }
};

// Initialize performance monitoring
export const initPerformanceMonitoring = async () => {
  // Only run on client
  if (typeof window === 'undefined') return;
  
  try {
    // Dynamically import web-vitals library
    const webVitals = await import('web-vitals') as unknown as WebVitals;
    
    // Monitor FCP
    webVitals.onFCP((metric: WebVitalsMetric) => {
      const rating = getRating('FCP', metric.value);
      sendToAnalytics({ name: 'FCP', value: metric.value, delta: metric.delta, id: metric.id, rating });
    });
    
    // Monitor LCP
    webVitals.onLCP((metric: WebVitalsMetric) => {
      const rating = getRating('LCP', metric.value);
      sendToAnalytics({ name: 'LCP', value: metric.value, delta: metric.delta, id: metric.id, rating });
    });
    
    // Monitor CLS
    webVitals.onCLS((metric: WebVitalsMetric) => {
      const rating = getRating('CLS', metric.value);
      sendToAnalytics({ name: 'CLS', value: metric.value, delta: metric.delta, id: metric.id, rating });
    });
    
    // Monitor FID
    webVitals.onFID((metric: WebVitalsMetric) => {
      const rating = getRating('FID', metric.value);
      sendToAnalytics({ name: 'FID', value: metric.value, delta: metric.delta, id: metric.id, rating });
    });
    
    // Monitor TTFB
    webVitals.onTTFB((metric: WebVitalsMetric) => {
      const rating = getRating('TTFB', metric.value);
      sendToAnalytics({ name: 'TTFB', value: metric.value, delta: metric.delta, id: metric.id, rating });
    });
    
    // Monitor INP
    webVitals.onINP((metric: WebVitalsMetric) => {
      const rating = getRating('INP', metric.value);
      sendToAnalytics({ name: 'INP', value: metric.value, delta: metric.delta, id: metric.id, rating });
    });
  } catch (error) {
    console.error('[Performance] Failed to initialize performance monitoring:', error);
  }
};

// Add Sentry type declaration
declare global {
  interface Window {
    Sentry?: {
      captureMessage: (message: string, options?: Record<string, unknown>) => void;
    };
  }
}
