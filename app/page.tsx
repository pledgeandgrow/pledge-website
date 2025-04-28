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

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        <Hero />
        <About />
        <Advantages />
        <Services />
        <CaseStudies />
        <Team />
        <Testimonials />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
