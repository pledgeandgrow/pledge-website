"use client";

import { 
  Hero, 
  Mission, 
  Team, 
  Values,
  History,
  Cta 
} from "@/components/pages/about";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        <Hero />
        <Mission />
        <Values />
        <History />
        <Team />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
