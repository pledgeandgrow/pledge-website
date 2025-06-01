"use client";

import JsonLd from "./JsonLd";

export default function ServiceSchema() {
  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Digital Solutions",
    "provider": {
      "@type": "Organization",
      "name": "Pledge & Grow",
      "url": "https://pledgeandgrow.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Global"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Development",
            "description": "Custom website development using modern technologies"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile App Development",
            "description": "Native and cross-platform mobile application development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Integration",
            "description": "Implementing AI solutions for predictive analytics and automation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Blockchain Solutions",
            "description": "Secure, scalable blockchain infrastructure for businesses"
          }
        }
      ]
    }
  };

  return <JsonLd data={serviceData} />;
}
