import { Metadata } from "next";
import dynamic from "next/dynamic";
import PageWrapper from "@/components/layout/PageWrapper";

// Use dynamic imports to fix module resolution issues
const EcosystemeHero = dynamic(() => import("@/components/pages/ecosysteme/EcosystemeHero"), { ssr: true });
const EcosystemeAdvantages = dynamic(() => import("@/components/pages/ecosysteme/EcosystemeAdvantages"), { ssr: true });
const EcosystemePartners = dynamic(() => import("@/components/pages/ecosysteme/EcosystemePartners"), { ssr: true });
const EcosystemeShowcase = dynamic(() => import("@/components/pages/ecosysteme/EcosystemeShowcase"), { ssr: true });
const EcosystemeCollaboration = dynamic(() => import("@/components/pages/ecosysteme/EcosystemeCollaboration"), { ssr: true });

export const metadata: Metadata = {
  title: "Ecosysteme | Pledge & Grow",
  description: "Discover the advantages of being part of the Pledge & Grow ecosystem, including access to our group companies, innovation projects, and exclusive partners with significant discounts.",
};

export default function EcosystemePage() {
  return (
    <PageWrapper>
      <EcosystemeHero />
      <EcosystemeAdvantages />
      <EcosystemePartners />
      <EcosystemeShowcase />
      <EcosystemeCollaboration />
    </PageWrapper>
  );
}
