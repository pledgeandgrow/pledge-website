"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import { BadgePercent, CheckCircle, ExternalLink, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useTranslations } from "@/hooks/useTranslations";

interface Partner {
  id: string;
  name: string;
  description: string;
  discount: string;
  category: string;
  color?: string;
}

interface EcosystemeModalProps {
  partner: Partner;
}

export default function EcosystemeModal({ partner }: EcosystemeModalProps) {
  const { t } = useTranslations('ecosystem');
  // Get the benefits and use cases for the current partner from translations - memoized to prevent unnecessary re-renders
  const benefits = useMemo(() => {
    try {
      const partnerBenefits = t(`partners.${partner.id}.benefits`, { returnObjects: true, fallback: [] });
      return Array.isArray(partnerBenefits) ? partnerBenefits : [];
    } catch (error) {
      console.error(`Error getting benefits for partner ${partner.id}:`, error);
      return [];
    }
  }, [t, partner.id]);

  const useCases = useMemo(() => {
    try {
      const partnerUseCases = t(`partners.${partner.id}.useCases`, { returnObjects: true, fallback: [] });
      return Array.isArray(partnerUseCases) ? partnerUseCases : [];
    } catch (error) {
      console.error(`Error getting use cases for partner ${partner.id}:`, error);
      return [];
    }
  }, [t, partner.id]);

  // Partner color with fallback
  const partnerColor = partner.color || "#10b981";

  return (
    <div className="p-2 md:p-4">
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-4">
          <TabsTrigger value="overview">{t('modal.tabs.overview')}</TabsTrigger>
          <TabsTrigger value="benefits">{t('modal.tabs.benefits')}</TabsTrigger>
          <TabsTrigger value="usecases">{t('modal.tabs.usecases')}</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4">
          {/* Partner Info */}
          <div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{t(`partners.${partner.id}.description`, { fallback: partner.description })}</p>
            
            <div className="flex items-center gap-2 mt-3">
              <Badge variant="outline" className="bg-gray-50 dark:bg-gray-800">
                {t(`partners.${partner.id}.category`, { fallback: partner.category })}
              </Badge>
            </div>
          </div>
          
          <Separator />
          
          {/* Client Benefits */}
          <div 
            className="p-4 rounded-lg" 
            style={{ backgroundColor: `${partnerColor}10` }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div 
                className="w-6 h-6 rounded-full flex items-center justify-center" 
                style={{ backgroundColor: partnerColor }}
              >
                <BadgePercent className="h-3 w-3 text-white" />
              </div>
              <h4 
                className="font-medium text-sm"
                style={{ color: partnerColor }}
              >
                {t('modal.clientBenefit')}
              </h4>
            </div>
            <p 
              className="font-medium text-base"
              style={{ color: partnerColor }}
            >
              {t(`partners.${partner.id}.discount`, { fallback: partner.discount })}
            </p>
          </div>
          
          {/* Why Through Pledge & Grow - Condensed */}
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-3">
            <h4 className="font-medium text-sm mb-2 text-gray-900 dark:text-white flex items-center gap-1">
              <Star className="h-4 w-4 text-amber-500" />
              {t('modal.whyPledge')}
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
              <li className="flex items-start gap-1">
                <CheckCircle className="h-3 w-3 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">{t('modal.advantages.discounts')}</span>
              </li>
              <li className="flex items-start gap-1">
                <CheckCircle className="h-3 w-3 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">{t('modal.advantages.integration')}</span>
              </li>
              <li className="flex items-start gap-1">
                <CheckCircle className="h-3 w-3 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">{t('modal.advantages.support')}</span>
              </li>
              <li className="flex items-start gap-1">
                <CheckCircle className="h-3 w-3 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">{t('modal.advantages.billing')}</span>
              </li>
            </ul>
          </div>
        </TabsContent>
        
        <TabsContent value="benefits" className="space-y-4">
          {/* Additional Benefits */}
          <div>
            <h4 className="font-medium mb-3 text-gray-900 dark:text-white text-sm">Partner Benefits</h4>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.1 }}
                  className="flex items-start gap-2 bg-gray-50 dark:bg-gray-800/50 p-2 rounded-md"
                >
                  <div 
                    className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0" 
                    style={{ backgroundColor: partnerColor }}
                  >
                    <span className="text-white text-xs font-bold">{index + 1}</span>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 text-sm">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <Separator />
          
          {/* Why Through Pledge & Grow - Full */}
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4">
            <h4 className="font-medium mb-3 text-gray-900 dark:text-white text-sm">{t('modal.whyPledge')}</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300 text-sm">{t('modal.advantages.discountsDetail')}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300 text-sm">{t('modal.advantages.integrationDetail')}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300 text-sm">{t('modal.advantages.supportDetail')}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300 text-sm">{t('modal.advantages.billingDetail')}</span>
              </li>
            </ul>
          </div>
        </TabsContent>
        
        <TabsContent value="usecases" className="space-y-4">
          {/* Use Cases */}
          <div>
            <h4 className="font-medium mb-3 text-gray-900 dark:text-white text-sm">{t('modal.tabs.usecases')} - {partner.name}</h4>
            <ul className="space-y-3">
              {useCases.map((useCase, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.1 }}
                  className="flex items-start gap-2"
                >
                  <div 
                    className="w-6 h-6 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0 border-2" 
                    style={{ borderColor: partnerColor }}
                  >
                    <span 
                      className="text-xs font-bold"
                      style={{ color: partnerColor }}
                    >
                      {index + 1}
                    </span>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 text-sm">{useCase}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg mt-4">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {t('partners.clientBenefit', { partner: partner.name })}
            </p>
          </div>
        </TabsContent>
      </Tabs>
      
      {/* Call to Action */}
      <div className="flex flex-col sm:flex-row gap-2 justify-end mt-6">
        <Button variant="outline" size="sm" asChild className="sm:w-auto w-full">
          <Link href="/contact" className="flex items-center justify-center gap-1">
            <ExternalLink className="h-4 w-4" />
            <span>{t('modal.cta.learnMore')}</span>
          </Link>
        </Button>
        <Button 
          size="sm" 
          asChild 
          className="sm:w-auto w-full"
          style={{ 
            backgroundColor: partnerColor,
            borderColor: partnerColor,
          }}
        >
          <Link href="/contact" className="flex items-center justify-center gap-1">
            <span>{t('modal.cta.contact')}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
