import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { 
  MethodologyHero, 
  MethodologyFramework,
  MethodologyPrinciples,
  MethodologyTools,
  MethodologyFAQ,
  MethodologyCTA
} from "@/components/pages/methodology";

export const metadata: Metadata = {
  title: "Our Methodology | Pledge & Grow",
  description: "Discover our proven approach to digital projects that ensures quality, efficiency, and exceptional results for our clients.",
  openGraph: {
    title: "Our Methodology | Pledge & Grow",
    description: "Discover our proven approach to digital projects that ensures quality, efficiency, and exceptional results for our clients.",
    url: "/methodology",
    siteName: "Pledge & Grow",
    images: [
      {
        url: "/images/og-methodology.jpg",
        width: 1200,
        height: 630,
        alt: "Pledge & Grow Methodology"
      }
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function MethodologyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        <MethodologyHero />
        <MethodologyFramework />
        <MethodologyPrinciples />
        <MethodologyTools />
        <MethodologyFAQ />
        <MethodologyCTA />
      </main>
      <Footer />
    </div>
  );
}
