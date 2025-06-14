"use client";

import React from "react";
// Button import removed as it was unused
// Icon imports removed as they were unused
// Link import removed as it was unused
import { motion } from "framer-motion";
import { useTranslations } from "@/hooks/useTranslations";

export default function MediaHero() {
  const { t } = useTranslations('media');
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-primary/5 to-background overflow-hidden">
      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            {t('hero.title').split('Media').map((part: string, i: number) => (
              <React.Fragment key={i}>
                {part}
                {i === 0 && <span className="text-primary">Media</span>}
              </React.Fragment>
            ))}
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            {t('hero.description')}
          </p>

        </motion.div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      </div>
    </section>
  );
}
