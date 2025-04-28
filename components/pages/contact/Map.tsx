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
            Visit us at our office in San Francisco, California.
          </p>
        </div>
        
        <div className="rounded-lg overflow-hidden shadow-md border border-border animate-fade-in h-[400px] w-full">
          {isMounted && (
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0968143526147!2d-122.41941492393559!3d37.77492997197701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter%20HQ!5e0!3m2!1sen!2sus!4v1682532597276!5m2!1sen!2sus"
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
