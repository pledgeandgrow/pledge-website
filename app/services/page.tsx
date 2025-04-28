import { Metadata } from "next";
import {
  ServicesHero,
  CreationServices,
  IntegrationServices,
  ComplementaryServices,
  OfferPackages,
  CloudServices,
  CustomSolutions,
  VipServices
} from "@/components/pages/services";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Services & Solutions | Pledge & Grow",
  description: "Explore our comprehensive range of digital services including web development, mobile apps, cloud solutions, and VIP services tailored to your business needs.",
  openGraph: {
    title: "Services & Solutions | Pledge & Grow",
    description: "Comprehensive digital solutions tailored to your business needs, from web and mobile development to cloud hosting and VIP services.",
    url: "/services",
    siteName: "Pledge & Grow",
    images: [
      {
        url: "/images/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "Pledge & Grow Services"
      }
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        <ServicesHero />
        <CreationServices />
        <IntegrationServices />
        <ComplementaryServices />
        <OfferPackages />
        <CloudServices />
        <CustomSolutions />
        <VipServices />
      </main>
      <Footer />
    </div>
  );
}
