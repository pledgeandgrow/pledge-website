"use client";

import React from "react";
import { motion } from "framer-motion";
// Button import removed as it was unused
import { Heart } from "lucide-react";
// Link import removed as it was unused
import Image from "next/image";
import { useTranslations } from "@/hooks/useTranslations";

export default function ImpactHero() {
  const { t } = useTranslations('impact');
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent z-0" />
      <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-primary/10 blur-3xl"></div>
      <div className="absolute top-1/2 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 shadow-sm">
              <Heart className="h-4 w-4" />
              <span className="text-sm font-medium">{t('hero.tagline')}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-foreground">
              {t('hero.title').split('Positive Impact').map((part: string, i: number) => 
                i === 0 ? part + ' ' : <React.Fragment key={i}><span className="text-primary">Positive Impact</span>{part}</React.Fragment>
              )}
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
              {t('hero.description')}
            </p>
            
            {/* Buttons removed as requested */}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-xl border border-border"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
            
            <Image
              src="/images/impact/impact1.png"
              alt={t('hero.imageAlt')}
              fill
              className="object-cover transition-transform duration-500"
            />
            
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="flex items-center gap-3 text-white mb-2">
                  <Heart className="h-5 w-5 text-primary" />
                  <span className="font-medium">Our Mission</span>
                </div>
                <p className="text-white/90 text-lg max-w-md">
                  Using technology as a force for positive change in communities around the world.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
