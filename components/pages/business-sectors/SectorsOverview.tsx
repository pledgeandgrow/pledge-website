"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "@/hooks/useTranslations";

export default function SectorsOverview() {
  const { t } = useTranslations('business-sectors');
  
  // Always show the image in both layouts instead of conditionally rendering
  // This ensures the image is always visible regardless of client-side detection
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image section - visible on desktop, hidden on mobile with CSS */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative hidden md:block"
          >
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="/images/business-sectors/business-sector.png"
                alt={t('overview.title')}
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary/10 p-8 rounded-lg">
              <div className="text-4xl font-bold text-primary">10+</div>
              <div className="text-sm text-muted-foreground">Industries Served</div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('overview.title')}
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              {t('overview.description')}
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              {t('overview.expertise')}
            </p>
          </motion.div>
          
          {/* Image section - visible only on mobile, after the text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative block md:hidden mt-6"
          >
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="/images/business-sectors/business-sector.png"
                alt={t('overview.title')}
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary/10 p-8 rounded-lg">
              <div className="text-4xl font-bold text-primary">10+</div>
              <div className="text-sm text-muted-foreground">Industries Served</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
