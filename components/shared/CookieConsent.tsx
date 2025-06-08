"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Link from "next/link";
import { getConsentStatus, setConsentStatus } from "@/utils/cookieConsent";
import { useTranslations } from "@/hooks/useTranslations";

export function CookieConsent() {
  // Initialize with false, then check in useEffect to avoid hydration mismatch
  const [showBanner, setShowBanner] = useState(false);
  const { t } = useTranslations("common");

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
          <h3 className="text-lg font-semibold mb-1">{t("cookieConsent.title")}</h3>
          <p className="text-sm text-muted-foreground">
            {t("cookieConsent.description")}{" "}
            <Link href="/legal/cookie-policy" className="text-primary hover:underline">
              {t("cookieConsent.cookiePolicy")}
            </Link>{" "}
            {t("cookieConsent.and")}{" "}
            <Link href="/legal/privacy-policy" className="text-primary hover:underline">
              {t("cookieConsent.privacyPolicy")}
            </Link>{" "}
            {t("cookieConsent.forMoreInfo")}
          </p>
        </div>
        <div className="flex flex-shrink-0 gap-2 items-center">
          <Button
            variant="outline"
            size="sm"
            onClick={handleDecline}
            className="whitespace-nowrap"
          >
            {t("cookieConsent.decline")}
          </Button>
          <Button
            variant="default"
            size="sm"
            onClick={handleAccept}
            className="whitespace-nowrap"
          >
            {t("cookieConsent.acceptAll")}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleDecline}
            className="md:hidden"
            aria-label={t("cookieConsent.close")}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
