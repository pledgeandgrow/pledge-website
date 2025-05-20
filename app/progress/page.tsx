import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { 
  ProgressHero, 
  KeyMilestones,
  GrowthMetrics,
  GlobalOffices,
  FutureVision,
  ProgressCTA
} from "@/components/pages/progress";

export const metadata: Metadata = {
  title: "Our Progress | Pledge & Grow",
  description: "Explore our journey, milestones, and achievements as we continue to grow and make a positive impact in the digital landscape.",
  openGraph: {
    title: "Our Progress | Pledge & Grow",
    description: "Explore our journey, milestones, and achievements as we continue to grow and make a positive impact in the digital landscape.",
    url: "/progress",
    siteName: "Pledge & Grow",
    images: [
      {
        url: "/images/og-progress.jpg",
        width: 1200,
        height: 630,
        alt: "Pledge & Grow Progress"
      }
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function ProgressPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        <ProgressHero />
        <KeyMilestones />
        <GrowthMetrics />
        <GlobalOffices />
        <FutureVision />
        <ProgressCTA />
      </main>
      <Footer />
    </div>
  );
}
