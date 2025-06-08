"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "@/hooks/useTranslations";

export default function Map() {
  const { t } = useTranslations('contact');
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  
  useEffect(() => {
    // Set a timeout to ensure the component is mounted
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const handleMapLoad = () => {
    setIsLoaded(true);
  };

  const handleMapError = () => {
    setIsError(true);
  };

  return (
    <section className="bg-background text-foreground py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('map.title', { defaultValue: 'Our Location' })}
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            {t('map.description', { defaultValue: 'Visit us at our office: 16 Rue Théroigne de Méricourt, 75013 Paris.' })}
          </p>
        </div>
        
        <div className="rounded-lg overflow-hidden shadow-md border border-border animate-fade-in h-[400px] w-full relative">
          {!isLoaded && !isError && (
            <div className="absolute inset-0 flex items-center justify-center bg-muted/20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
              <p className="mt-2">{t('map.loading', { defaultValue: 'Loading map...' })}</p>
            </div>
          )}
          
          {isError && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-muted/10">
              <div className="text-destructive mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
              </div>
              <p>{t('map.error', { defaultValue: 'Unable to load map. Please check your connection.' })}</p>
              <button 
                onClick={() => {setIsError(false); setIsLoaded(false);}} 
                className="mt-2 px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm"
              >
                {t('map.retry', { defaultValue: 'Retry' })}
              </button>
            </div>
          )}
          
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.7999017871055!2d2.3651747!3d48.8327318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6723f12a8b569%3A0xc27c7c572daa7d86!2s16%20Rue%20Th%C3%A9roigne%20de%20M%C3%A9ricourt%2C%2075013%20Paris!5e0!3m2!1sfr!2sfr!4v1716386800000!5m2!1sfr!2sfr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Pledge Agency Office Location"
            className="w-full h-full"
            onLoad={handleMapLoad}
            onError={handleMapError}
          />
        </div>
      </div>
    </section>
  );
}
