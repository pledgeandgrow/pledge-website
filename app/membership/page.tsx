import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { 
  MembershipHero, 
  MembershipBenefits,
  MembershipPlans,
  MembershipTestimonials,
  MembershipFAQ,
  MembershipCTA
} from "@/components/pages/membership";

export const metadata: Metadata = {
  title: "Membership | Pledge & Grow",
  description: "Join our exclusive membership program and unlock premium benefits, resources, and support to accelerate your digital transformation journey.",
  openGraph: {
    title: "Membership | Pledge & Grow",
    description: "Join our exclusive membership program and unlock premium benefits, resources, and support to accelerate your digital transformation journey.",
    url: "/membership",
    siteName: "Pledge & Grow",
    images: [
      {
        url: "/images/og-membership.jpg",
        width: 1200,
        height: 630,
        alt: "Pledge & Grow Membership"
      }
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function MembershipPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        <MembershipHero />
        <MembershipBenefits />
        <MembershipPlans />
        <MembershipTestimonials />
        <MembershipFAQ />
        <MembershipCTA />
      </main>
      <Footer />
    </div>
  );
}
