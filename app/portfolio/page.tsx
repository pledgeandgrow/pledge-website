"use client";

import { PortfolioGrid } from "@/components/pages/portfolio";
import { portfolioProjects } from "@/data/portfolio-data";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                Our Portfolio
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Explore our diverse collection of successful projects across various industries. 
                Each project showcases our expertise, innovation, and commitment to delivering exceptional results.
              </p>
            </div>
          </div>
          
          {/* Background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl"></div>
            <div className="absolute top-1/2 -left-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl"></div>
          </div>
        </section>
        
        {/* Portfolio Grid Section */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-7xl">
            <PortfolioGrid projects={portfolioProjects} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
