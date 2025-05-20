"use client";

import { useState, useEffect } from "react";

export default function Map() {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="bg-background text-foreground py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Location
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            Visit us at our office: 16 Rue Théroigne de Méricourt, 75013 Paris.
          </p>
        </div>
        
        <div className="rounded-lg overflow-hidden shadow-md border border-border animate-fade-in h-[400px] w-full">
          {isMounted && (
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
            ></iframe>
          )}
        </div>
      </div>
    </section>
  );
}
