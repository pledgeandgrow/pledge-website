import { Metadata } from "next";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Use dynamic imports with loading fallbacks to reduce initial JS bundle size
const ServicesHero = dynamic(
  () => import("@/components/pages/services/ServicesHero"),
  { 
    loading: () => <div className="h-[400px] flex items-center justify-center"><div className="animate-pulse text-xl">Loading services...</div></div>,
    ssr: true
  }
);

const ServicesTabbed = dynamic(
  () => import("@/components/pages/services/ServicesTabbed"),
  { 
    loading: () => <div className="h-[300px] flex items-center justify-center"><div className="animate-pulse">Loading service categories...</div></div>,
    ssr: true
  }
);

const VipServices = dynamic(
  () => import("@/components/pages/services/VipServices"),
  { 
    loading: () => <div className="h-[300px] flex items-center justify-center"><div className="animate-pulse">Loading VIP services...</div></div>,
    ssr: true
  }
);

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
        <Suspense fallback={<div className="h-[400px] flex items-center justify-center"><div className="animate-pulse text-xl">Loading services...</div></div>}>
          <ServicesHero />
        </Suspense>
        <Suspense fallback={<div className="h-[300px] flex items-center justify-center"><div className="animate-pulse">Loading service categories...</div></div>}>
          <ServicesTabbed />
        </Suspense>
        <Suspense fallback={<div className="h-[300px] flex items-center justify-center"><div className="animate-pulse">Loading VIP services...</div></div>}>
          <VipServices />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
