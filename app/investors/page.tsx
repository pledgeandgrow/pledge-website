import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { 
  CompanyOverview,
  InvestmentOpportunities,
  InvestorsPhase
} from "@/components/pages/investors";

export const metadata: Metadata = {
  title: "Investor Relations | Pledge & Grow",
  description: "Discover investment opportunities with Pledge & Grow. Learn about our financial performance, growth trajectory, and strategic vision.",
  openGraph: {
    title: "Investor Relations | Pledge & Grow",
    description: "Discover investment opportunities with Pledge & Grow. Learn about our financial performance, growth trajectory, and strategic vision.",
    url: "/investors",
    siteName: "Pledge & Grow",
    images: [
      {
        url: "/images/og-investors.jpg",
        width: 1200,
        height: 630,
        alt: "Pledge & Grow Investor Relations"
      }
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function InvestorsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        <CompanyOverview />
        <InvestorsPhase />
        <InvestmentOpportunities />
      </main>
      <Footer />
    </div>
  );
}
