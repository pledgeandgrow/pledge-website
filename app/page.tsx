"use client";

import { 
  Hero, 
  About, 
  Advantages, 
  Services, 
  CaseStudies, 
  Team, 
  Testimonials, 
  Cta 
} from "@/components/pages/home";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
// Framer Motion imports removed as they were unused

// Section IDs removed as they were unused

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-16">
        <section id="hero">
          <Hero />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="advantages">
          <Advantages />
        </section>
        
        <section id="services">
          <Services />
        </section>
        
        <section id="case-studies">
          <CaseStudies />
        </section>
        
        <section id="team">
          <Team />
        </section>
        
        <section id="testimonials">
          <Testimonials />
        </section>
        
        <section id="cta">
          <Cta />
        </section>
      </main>
      <Footer />
    </div>
  );
}
