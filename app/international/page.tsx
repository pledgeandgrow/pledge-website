import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { 
  GlobalMap,
  LocalizationServices
} from "@/components/pages/international";

export const metadata: Metadata = {
  title: "Global Presence | Pledge & Grow",
  description: "Discover Pledge & Grow's international operations, regional expertise, and global team delivering innovative solutions worldwide.",
  openGraph: {
    title: "Global Presence | Pledge & Grow",
    description: "Discover Pledge & Grow's international operations, regional expertise, and global team delivering innovative solutions worldwide.",
    url: "/international",
    siteName: "Pledge & Grow",
    images: [
      {
        url: "/images/og-international.jpg",
        width: 1200,
        height: 630,
        alt: "Pledge & Grow Global Presence"
      }
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function InternationalPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        <GlobalMap />
        <LocalizationServices />
      </main>
      <Footer />
    </div>
  );
}
