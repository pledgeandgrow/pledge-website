import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { 
  DiscordHero, 
  DiscordBenefits,
  DiscordCTA
} from "@/components/pages/discord";

export const metadata: Metadata = {
  title: "Discord Community | Pledge & Grow",
  description: "Join our Discord community to connect with like-minded professionals, get real-time support, and stay updated on the latest Pledge & Grow events and resources.",
  openGraph: {
    title: "Discord Community | Pledge & Grow",
    description: "Join our Discord community to connect with like-minded professionals, get real-time support, and stay updated on the latest Pledge & Grow events and resources.",
    url: "/discord",
    siteName: "Pledge & Grow",
    images: [
      {
        url: "/images/og-discord.jpg",
        width: 1200,
        height: 630,
        alt: "Pledge & Grow Discord Community"
      }
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function DiscordPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        <DiscordHero />
        <DiscordBenefits />
        <DiscordCTA />
      </main>
      <Footer />
    </div>
  );
}
