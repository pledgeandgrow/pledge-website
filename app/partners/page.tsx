import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { 
  PartnersHero, 
  PartnersList, 
  BecomePartner 
} from "@/components/pages/partners";

export const metadata: Metadata = {
  title: "Our Partners | Pledge & Grow",
  description: "Discover our strategic partnerships and collaborations that enable us to deliver exceptional digital solutions and services.",
  openGraph: {
    title: "Our Partners | Pledge & Grow",
    description: "Discover our strategic partnerships and collaborations that enable us to deliver exceptional digital solutions and services.",
    url: "/partners",
    siteName: "Pledge & Grow",
    images: [
      {
        url: "/images/og-partners.jpg",
        width: 1200,
        height: 630,
        alt: "Pledge & Grow Partners"
      }
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function PartnersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        <PartnersHero />
        <PartnersList />
        <BecomePartner />
      </main>
      <Footer />
    </div>
  );
}
