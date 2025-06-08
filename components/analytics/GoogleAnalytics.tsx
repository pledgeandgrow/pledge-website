"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";

// Add type declarations for Google Analytics
declare global {
  interface Window {
    dataLayer: Array<Record<string, unknown>>;
    gtag: (...args: Array<string | Record<string, unknown> | boolean>) => void;
  }
}

/**
 * Google Analytics component that adds GA4 tracking to the application
 * This component should be added to the root layout
 */
// Separate component to handle search params with Suspense
function AnalyticsTracker({ measurementId }: { measurementId: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!measurementId || !window.gtag) return;

    // When route changes, log page view with Google Analytics
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
    
    // Add a small delay to ensure the page has fully loaded
    const timeout = setTimeout(() => {
      window.gtag("config", measurementId, {
        page_path: url,
        page_title: document.title,
      });
    }, 300);

    return () => clearTimeout(timeout);
  }, [pathname, searchParams, measurementId]);

  return null;
}

export default function GoogleAnalytics({ 
  measurementId 
}: { 
  measurementId: string 
}) {

  // Analytics tracker is wrapped in Suspense to handle useSearchParams

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}', {
              page_path: window.location.pathname,
              send_page_view: true
            });
          `,
        }}
      />
      <Suspense fallback={null}>
        <AnalyticsTracker measurementId={measurementId} />
      </Suspense>
    </>
  );
}
