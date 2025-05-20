import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { 
  WhyJoinUs,
  OpenPositions,
  CompanyValues,
  ApplicationProcess,
  CareersCTA
} from "@/components/pages/careers";

export const metadata: Metadata = {
  title: "Careers | Pledge & Grow",
  description: "Join our team at Pledge & Grow and be part of a dynamic company dedicated to creating innovative digital solutions. Explore open positions and our company culture.",
  openGraph: {
    title: "Careers | Pledge & Grow",
    description: "Join our team at Pledge & Grow and be part of a dynamic company dedicated to creating innovative digital solutions. Explore open positions and our company culture.",
    url: "/careers",
    siteName: "Pledge & Grow",
    images: [
      {
        url: "/images/og-careers.jpg",
        width: 1200,
        height: 630,
        alt: "Pledge & Grow Careers"
      }
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function CareersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        <WhyJoinUs />
        <CompanyValues />
        <OpenPositions />
        <ApplicationProcess />
        <CareersCTA />
      </main>
      <Footer />
    </div>
  );
}
