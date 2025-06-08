"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface CookieConsentProps {
  privacyPolicyUrl?: string;
}

export function CookieConsent({ 
  privacyPolicyUrl = "/privacy-policy" 
}: CookieConsentProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem("cookie-consent");
    if (!hasConsented) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("cookie-consent", "all");
    localStorage.setItem("cookie-consent-timestamp", new Date().toISOString());
    setIsVisible(false);
    // Enable analytics and other cookies
    window.dispatchEvent(new CustomEvent("cookie-consent-updated", { detail: { level: "all" } }));
  };

  const acceptEssential = () => {
    localStorage.setItem("cookie-consent", "essential");
    localStorage.setItem("cookie-consent-timestamp", new Date().toISOString());
    setIsVisible(false);
    // Only enable essential cookies
    window.dispatchEvent(new CustomEvent("cookie-consent-updated", { detail: { level: "essential" } }));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background border-t border-border shadow-lg animate-slide-up">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-lg font-medium mb-1">Cookie Consent</h3>
          <p className="text-sm text-muted-foreground">
            We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking &quot;Accept All&quot;, you consent to our use of cookies. 
            <a href={privacyPolicyUrl} className="underline ml-1 hover:text-primary">
              Read our Privacy Policy
            </a>
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm" onClick={acceptEssential}>
            Essential Only
          </Button>
          <Button size="sm" onClick={acceptAll}>
            Accept All
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="ml-2" 
            onClick={acceptEssential}
            aria-label="Close cookie consent banner"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
