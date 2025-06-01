"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Link from "next/link";
import { getConsentStatus, setConsentStatus } from "@/utils/cookieConsent";

export function CookieConsent() {
  // Initialize with false, then check in useEffect to avoid hydration mismatch
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Ensure this only runs on the client side
    if (typeof window !== 'undefined') {
      // Check if user has already made a choice
      const consentStatus = getConsentStatus();
      
      // Only show banner if no choice has been made
      if (consentStatus === null) {
        setShowBanner(true);
      }
    }
  }, []);

  const handleAccept = () => {
    // Store consent using our utility function
    setConsentStatus("accepted");
    
    // Hide the banner
    setShowBanner(false);
  };

  const handleDecline = () => {
    // Store rejection using our utility function
    setConsentStatus("declined");
    
    // Hide the banner
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/95 backdrop-blur-sm border-t border-border shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-1">Cookie Consent</h3>
          <p className="text-sm text-muted-foreground">
            We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. Read our{" "}
            <Link href="/legal/cookie-policy" className="text-primary hover:underline">
              Cookie Policy
            </Link>{" "}
            and{" "}
            <Link href="/legal/privacy-policy" className="text-primary hover:underline">
              Privacy Policy
            </Link>{" "}
            for more information.
          </p>
        </div>
        <div className="flex flex-shrink-0 gap-2 items-center">
          <Button
            variant="outline"
            size="sm"
            onClick={handleDecline}
            className="whitespace-nowrap"
          >
            Decline
          </Button>
          <Button
            variant="default"
            size="sm"
            onClick={handleAccept}
            className="whitespace-nowrap"
          >
            Accept All
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleDecline}
            className="md:hidden"
            aria-label="Close cookie banner"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
