"use client";

import JsonLd from "./JsonLd";

export default function WebsiteSchema() {
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Pledge & Grow",
    "url": "https://pledgeandgrow.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://pledgeandgrow.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "description": "Pledge & Grow delivers cutting-edge digital solutions including web development, mobile apps, AI integration, and blockchain technology."
  };

  return <JsonLd data={websiteData} />;
}
