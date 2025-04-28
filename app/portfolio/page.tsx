"use client";

import { PortfolioGrid } from "@/components/pages/portfolio";
import { portfolioProjects } from "@/data/portfolio-data";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24">
        <section className="py-16 px-4 bg-background dark:bg-background">
          <div className="container mx-auto max-w-7xl">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">Our Portfolio</h1>
            <PortfolioGrid projects={portfolioProjects} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
