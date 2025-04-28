import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { 
  SectorsHero, 
  SectorsOverview,
  IndustrySolutions,
  CaseStudies,
  ApproachSection,
  SectorsCTA
} from "@/components/pages/business-sectors";

export const metadata: Metadata = {
  title: "Business Sectors | Pledge & Grow",
  description: "Tailored digital solutions for diverse industries, designed to address your sector-specific challenges and opportunities.",
  openGraph: {
    title: "Business Sectors | Pledge & Grow",
    description: "Tailored digital solutions for diverse industries, designed to address your sector-specific challenges and opportunities.",
    url: "/business-sectors",
    siteName: "Pledge & Grow",
    images: [
      {
        url: "/images/og-business-sectors.jpg",
        width: 1200,
        height: 630,
        alt: "Pledge & Grow Business Sectors"
      }
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function BusinessSectorsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        <SectorsHero />
        <SectorsOverview />
        <IndustrySolutions />
        <CaseStudies />
        <ApproachSection />
        <SectorsCTA />
      </main>
      <Footer />
    </div>
  );
}
