"use client";

import { motion } from "framer-motion";
import { Handshake } from "lucide-react";
import { useTranslations } from "@/hooks/useTranslations";

export default function EcosystemePartners() {
  const { t } = useTranslations('ecosystem');
  
  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm font-medium mb-4">
            <Handshake className="w-4 h-4 mr-2" />
            <span>{t('partners.subtitle')}</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            {t('partners.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('partners.clientBenefit')}
          </p>
        </motion.div>

        {/* Partner Network Description */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{t('partners.categories.title', { defaultValue: 'A Growing Network of Industry Leaders' })}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {t('partners.description')}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {t('collaboration.description', { defaultValue: 'As our network continues to expand, you\'ll gain access to an ever-growing range of services and benefits, all designed to help your business thrive in today\'s competitive landscape.' })}
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/30 p-8 rounded-xl">
              <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{t('partners.benefits.title', { defaultValue: 'Partner Network Benefits' })}</h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-green-500/90 dark:bg-green-600/90 flex items-center justify-center text-white mr-3 flex-shrink-0">
                    <span className="text-xs font-bold">1</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">{t('partners.benefits.discounts')}</p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-green-500/90 dark:bg-green-600/90 flex items-center justify-center text-white mr-3 flex-shrink-0">
                    <span className="text-xs font-bold">2</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">{t('partners.benefits.support')}</p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-green-500/90 dark:bg-green-600/90 flex items-center justify-center text-white mr-3 flex-shrink-0">
                    <span className="text-xs font-bold">3</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">{t('collaboration.benefits.items.businessGrowth', { defaultValue: 'Networking events and business development opportunities' })}</p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-green-500/90 dark:bg-green-600/90 flex items-center justify-center text-white mr-3 flex-shrink-0">
                    <span className="text-xs font-bold">4</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">{t('partners.benefits.integration')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom section removed as requested */}
      </div>
    </section>
  );
}
