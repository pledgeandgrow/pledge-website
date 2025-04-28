import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { 
  AmbassadorsHero, 
  AmbassadorsList, 
  AmbassadorImpact,
  BecomeAmbassador 
} from "@/components/pages/ambassadors";

export const metadata: Metadata = {
  title: "Our Ambassadors | Pledge & Grow",
  description: "Meet our global ambassadors who represent Pledge & Grow and help spread our mission worldwide.",
  openGraph: {
    title: "Our Ambassadors | Pledge & Grow",
    description: "Meet our global ambassadors who represent Pledge & Grow and help spread our mission worldwide.",
    url: "/ambassadors",
    siteName: "Pledge & Grow",
    images: [
      {
        url: "/images/og-ambassadors.jpg",
        width: 1200,
        height: 630,
        alt: "Pledge & Grow Ambassadors"
      }
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function AmbassadorsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        <AmbassadorsHero />
        <AmbassadorImpact />
        <AmbassadorsList />
        <BecomeAmbassador />
      </main>
      <Footer />
    </div>
  );
}
