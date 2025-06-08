"use client";

import { PortfolioGrid } from "@/components/pages/portfolio";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Portfolio Grid Section */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-7xl">
            <PortfolioGrid />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
