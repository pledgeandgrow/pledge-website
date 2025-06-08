"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTranslations } from "@/hooks/useTranslations";

export default function MembershipCTA() {
  const { t } = useTranslations("membership");
  
  return (
    <section className="py-16 md:py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            {t('cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              asChild 
              size="lg"
              className="px-8"
            >
              <Link href="/contact?subject=Premium Membership Application">
                {t('cta.applyButton')}
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="px-8"
            >
              <Link href="/">
                {t('cta.homeButton')}
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
