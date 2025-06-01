"use client";

import JsonLd from "./JsonLd";

export default function OrganizationSchema() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Pledge & Grow",
    "url": "https://pledgeandgrow.com",
    "logo": "https://pledgeandgrow.com/logopledge.png",
    "sameAs": [
      "https://twitter.com/pledgeandgrow",
      "https://www.linkedin.com/company/pledgeandgrow",
      "https://github.com/pledgeandgrow"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-800-123-4567",
      "contactType": "customer service",
      "availableLanguage": ["English", "French"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Innovation Drive",
      "addressLocality": "Tech City",
      "addressRegion": "CA",
      "postalCode": "94043",
      "addressCountry": "US"
    },
    "description": "Pledge & Grow delivers cutting-edge digital solutions including web development, mobile apps, AI integration, and blockchain technology."
  };

  return <JsonLd data={organizationData} />;
}
