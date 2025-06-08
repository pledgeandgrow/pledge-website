"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Handshake, Rocket, Shield, Users } from "lucide-react";
import { MobileCarousel, MobileCarouselItem } from "@/components/ui/mobile-carousel";
import { useTranslations } from "@/hooks/useTranslations";

// Function to get partner type data with translations
const getPartnerTypes = (t: (key: string) => string) => [
  {
    icon: <Handshake className="text-primary h-6 w-6" />,
    title: t('becomePartner.partnerTypes.strategic.title') || "Strategic Alliances",
    description: t('becomePartner.partnerTypes.strategic.description') || "Form strategic partnerships to expand market reach and create innovative solutions together."
  },
  {
    icon: <Rocket className="text-primary h-6 w-6" />,
    title: t('becomePartner.partnerTypes.technology.title') || "Technology Partners",
    description: t('becomePartner.partnerTypes.technology.description') || "Integrate your technology with our solutions to deliver enhanced value to our clients."
  },
  {
    icon: <Shield className="text-primary h-6 w-6" />,
    title: t('becomePartner.partnerTypes.solution.title') || "Solution Partners",
    description: t('becomePartner.partnerTypes.solution.description') || "Collaborate on comprehensive solutions that address complex business challenges."
  },
  {
    icon: <Users className="text-primary h-6 w-6" />,
    title: t('becomePartner.partnerTypes.channel.title') || "Channel Partners",
    description: t('becomePartner.partnerTypes.channel.description') || "Resell or refer our solutions to your clients and earn competitive commissions."
  }
];

export default function BecomePartner() {
  const { t } = useTranslations('partners');
  
  // Get partner types with translations
  const partnerTypes = getPartnerTypes(t);
  
  // State to detect if on mobile
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if on mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="become-partner" className="py-16 md:py-24 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('becomePartner.heading') || "Become Our Partner"}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t('becomePartner.subheading') || "Join our partner ecosystem and collaborate on innovative solutions. We're always looking for strategic partnerships that create value for our clients."}
            </p>
          </motion.div>
        </div>

        {isMobile ? (
          // Mobile carousel view
          <div className="mb-16">
            <MobileCarousel>
              {partnerTypes.map((partner, index) => (
                <MobileCarouselItem key={index}>
                  <div className="px-1 py-2">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                      viewport={{ once: true }}
                      className="bg-card p-6 rounded-lg shadow-sm border border-border"
                    >
                      <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                        {partner.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{partner.title}</h3>
                      <p className="text-muted-foreground">
                        {partner.description}
                      </p>
                    </motion.div>
                  </div>
                </MobileCarouselItem>
              ))}
            </MobileCarousel>
          </div>
        ) : (
          // Desktop grid view
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {partnerTypes.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-lg shadow-sm border border-border"
              >
                <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  {partner.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{partner.title}</h3>
                <p className="text-muted-foreground">
                  {partner.description}
                </p>
              </motion.div>
            ))}
          </div>
        )}

        <div className="text-center">
          <Button asChild size="lg" className="font-medium">
            <Link href="/contact?subject=Partnership Inquiry">
              {t('becomePartner.contactButton') || "Contact Us About Partnership"}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
