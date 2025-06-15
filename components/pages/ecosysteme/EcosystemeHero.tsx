"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Percent, Users, Building } from "lucide-react";
import { useTranslations } from "@/hooks/useTranslations";

export default function EcosystemeHero() {
  const { t } = useTranslations('ecosystem');
  
  return (
    <section className="relative pt-32 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-white dark:bg-gray-950">
      <div className="absolute inset-0 bg-gradient-to-br from-green-100/70 to-transparent dark:from-green-950/30 dark:to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-6"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-200 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm font-medium mb-2">
              <Percent className="w-4 h-4 mr-2" />
              <span>{t('hero.subtitle')}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              {t('hero.title')}
            </h1>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl">
              {t('hero.description')}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-green-200 dark:bg-green-900/30 flex items-center justify-center text-primary dark:text-green-400">
                  <Building className="w-5 h-5" />
                </div>
                <span className="font-medium">{t('hero.features.partners')}</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-green-200 dark:bg-green-900/30 flex items-center justify-center text-primary dark:text-green-400">
                  <Users className="w-5 h-5" />
                </div>
                <span className="font-medium">{t('hero.features.innovation')}</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-green-200 dark:bg-green-900/30 flex items-center justify-center text-primary dark:text-green-400">
                  <Percent className="w-5 h-5" />
                </div>
                <span className="font-medium">{t('hero.features.discounts')}</span>
              </div>
            </div>
            
            {/* Buttons removed as requested */}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square max-w-lg mx-auto rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-green-500 to-emerald-700 p-1">
              <div className="w-full h-full bg-white dark:bg-gray-900 rounded-xl overflow-hidden flex items-center justify-center relative">
                <Image 
                  src="/images/ecosystem/ecosystem.png" 
                  alt="Pledge & Grow Ecosystem" 
                  fill 
                  className="object-cover" 
                  priority 
                />
              </div>
            </div>
            
            <div className="absolute -z-10 -bottom-6 -right-6 w-64 h-64 bg-green-200 dark:bg-green-900/20 rounded-full blur-3xl opacity-70"></div>
            <div className="absolute -z-10 -top-6 -left-6 w-64 h-64 bg-emerald-200 dark:bg-emerald-900/20 rounded-full blur-3xl opacity-70"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
