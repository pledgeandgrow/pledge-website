import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { 
  GrantsHero,
  GrantsOverview,
  AvailableGrants,
  GrantsFAQ,
  GrantsCTA
} from "@/components/pages/grants-subsidies";

export const metadata: Metadata = {
  title: "Grants & Subsidies | Pledge & Grow",
  description: "Unlock funding opportunities to accelerate your digital transformation and business growth with our expert guidance on grants and subsidies.",
  openGraph: {
    title: "Grants & Subsidies | Pledge & Grow",
    description: "Unlock funding opportunities to accelerate your digital transformation and business growth with our expert guidance on grants and subsidies.",
    url: "/grants-subsidies",
    siteName: "Pledge & Grow",
    images: [
      {
        url: "/images/og-grants-subsidies.jpg",
        width: 1200,
        height: 630,
        alt: "Pledge & Grow Grants and Subsidies"
      }
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function GrantsSubsidiesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        <GrantsHero />
        <GrantsOverview />
        <AvailableGrants />
        <GrantsFAQ />
        <GrantsCTA />
      </main>
      <Footer />
    </div>
  );
}
