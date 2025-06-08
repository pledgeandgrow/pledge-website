import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { 
  SectorsOverview,
  IndustrySolutions,
  ApproachSection,
  SectorsCTA
} from "@/components/pages/business-sectors";

// Import translations for metadata
import enTranslations from '@/locales/en/business-sectors.json';

export const metadata: Metadata = {
  title: enTranslations.meta.title,
  description: enTranslations.meta.description,
  openGraph: {
    title: enTranslations.meta.title,
    description: enTranslations.meta.description,
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
        <SectorsOverview />
        <IndustrySolutions />
        <ApproachSection />
        <SectorsCTA />
      </main>
      <Footer />
    </div>
  );
}
