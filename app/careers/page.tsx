"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { 
  WhyJoinUs,
  OpenPositions,
  ApplicationProcess,
  CareersCTA
} from "@/components/pages/careers";

export default function CareersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        <WhyJoinUs />
        <OpenPositions />
        <ApplicationProcess />
        <CareersCTA />
      </main>
      <Footer />
    </div>
  );
}
