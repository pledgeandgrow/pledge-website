"use client";

import { useTranslations } from "@/hooks/useTranslations";

export default function Map() {
  const { t } = useTranslations('contact');
  
  // Direct Google Maps URL for opening in new tab
  const directMapUrl = "https://maps.app.goo.gl/hemLebRSsre4y8ia7";

  return (
    <section className="bg-background text-foreground py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('map.title', { defaultValue: 'Our Location' })}
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            {t('map.description', { defaultValue: 'Visit us at our office in Paris.' })}
          </p>
        </div>
        
        <div className="rounded-lg overflow-hidden shadow-md border border-border animate-fade-in h-[450px] w-full relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.9503422411353!2d2.3740200775155094!3d48.821008903334885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6737e26b1f983%3A0x1c262d224d5879b6!2sPledge%20and%20Grow!5e0!3m2!1sfr!2sfr!4v1749474355510!5m2!1sfr!2sfr" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Pledge & Grow Office Location"
            className="w-full h-full"
          />
        </div>
        
        <div className="mt-6 text-center">
          <a 
            href={directMapUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline inline-flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            {t('map.getDirections', { defaultValue: 'Get directions to our office' })}
          </a>
        </div>
      </div>
    </section>
  );
}
