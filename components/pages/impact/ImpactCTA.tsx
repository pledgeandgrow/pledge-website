"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heart, MessageSquare } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "@/hooks/useTranslations";

export default function ImpactCTA() {
  const { t } = useTranslations('impact');
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-card rounded-xl p-8 md:p-12 relative overflow-hidden shadow-lg border border-border"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-background/50 to-primary/10 z-0" />
          <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-primary/10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-foreground">
              {t('cta.title')}
            </h2>
            
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              {t('cta.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild size="lg" className="px-6 py-6 h-auto text-base font-medium shadow-md">
                  <Link href="/contact?subject=Pro Bono Application" className="flex items-center gap-3">
                    <Heart className="h-5 w-5" /> 
                    {t('cta.primaryButton')}
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" asChild size="lg" className="px-6 py-6 h-auto text-base font-medium shadow-sm">
                  <Link href="/contact" className="flex items-center gap-3">
                    <MessageSquare className="h-5 w-5" /> 
                    {t('cta.secondaryButton')}
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
