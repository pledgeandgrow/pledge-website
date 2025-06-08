"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "@/hooks/useTranslations";

export default function ImpactMission() {
  const { t } = useTranslations('impact');

  return (
    <section id="mission" className="py-16 md:py-24 overflow-hidden relative">
      <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-80 h-80 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="container px-4 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 lg:grid-flow-dense">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-start-2"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-foreground">{t('mission.title')}</h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {t('mission.description')}
            </p>
            <div className="p-4 bg-card border border-border rounded-lg shadow-sm mt-8 mb-4">
              <p className="text-lg font-medium text-foreground italic">
                &quot;{t('mission.quote')}&quot;
              </p>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('mission.commitment')}
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative rounded-xl overflow-hidden aspect-square shadow-lg border border-border"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="h-full w-full"
            >
              <Image
                src="/images/impact/impact2.png"
                alt={t('mission.imageAlt')}
                fill
                className="object-cover transition-transform duration-500"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <p className="text-sm font-medium">Our team making a difference</p>
            </div>
          </motion.div>
        </div>
        
        {/* Core values section removed as requested */}
      </div>
    </section>
  );
}
