"use client";

import { Suspense, lazy } from "react";
import { 
  Hero,
  About, 
  Advantages, 
  Services, 
  CaseStudies, 
  Testimonials, 
  Cta 
} from "@/components/pages/home";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { OrganizationSchema, WebsiteSchema, ServiceSchema, CanonicalUrl } from "@/components/seo";
// Framer Motion imports removed as they were unused

// Section IDs removed as they were unused

// Simple loading fallback for sections
const SectionLoading = ({ height = "h-64" }: { height?: string }) => (
  <div className={`w-full ${height} flex items-center justify-center`}>
    <div className="animate-pulse flex flex-col items-center gap-4">
      <div className="h-8 w-32 bg-muted/60 rounded"></div>
      <div className="h-4 w-48 bg-muted/60 rounded"></div>
    </div>
  </div>
);

// Section wrapper with suspense
const Section = ({ id, children }: { id: string; children: React.ReactNode }) => (
  <section id={id}>
    <Suspense fallback={<SectionLoading />}>
      {children}
    </Suspense>
  </section>
);

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <OrganizationSchema />
      <WebsiteSchema />
      <ServiceSchema />
      <CanonicalUrl />
      <Navbar />
      
      <main className="flex-grow pt-16">
        <Section id="hero">
          <Hero />
        </Section>
        
        <Section id="about">
          <About />
        </Section>
        
        <Section id="advantages">
          <Advantages />
        </Section>
        
        <Section id="services">
          <Services />
        </Section>
        
        <Section id="case-studies">
          <CaseStudies />
        </Section>
        
        {/* <Section id="team">
          <Team />
        </Section> */}
        
        <Section id="testimonials">
          <Testimonials />
        </Section>
        
        <Section id="cta">
          <Cta />
        </Section>
      </main>
      <Footer />
    </div>
  );
}
