"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  Euro, 
  TrendingUp, 
  Clock, 
  Users, 
  CheckCircle,
  ChevronRight,
  Lightbulb
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTranslations } from "@/hooks/useTranslations";

export default function GrantsOverview() {
  const { t } = useTranslations('grants-subsidies');
  
  // State to track which benefit is being hovered or touched
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);
  const [activeBenefitIndex, setActiveBenefitIndex] = useState(0);
  
  // Benefits data with enhanced information for mobile display
  const benefits = [
    {
      icon: <Euro className="h-8 w-8 text-primary" />,
      title: t('overview.benefits.financialSupport.title'),
      description: t('overview.benefits.financialSupport.description'),
      stat: t('overview.benefits.financialSupport.stat'),
      statLabel: t('overview.benefits.financialSupport.statLabel')
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: t('overview.benefits.acceleratedGrowth.title'),
      description: t('overview.benefits.acceleratedGrowth.description'),
      stat: t('overview.benefits.acceleratedGrowth.stat'),
      statLabel: t('overview.benefits.acceleratedGrowth.statLabel')
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: t('overview.benefits.timeEfficiency.title'),
      description: t('overview.benefits.timeEfficiency.description'),
      stat: t('overview.benefits.timeEfficiency.stat'),
      statLabel: t('overview.benefits.timeEfficiency.statLabel')
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: t('overview.benefits.expertGuidance.title'),
      description: t('overview.benefits.expertGuidance.description'),
      stat: t('overview.benefits.expertGuidance.stat'),
      statLabel: t('overview.benefits.expertGuidance.statLabel')
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: t('overview.process.steps.assessment.title'),
      description: t('overview.process.steps.assessment.description'),
      stat: "85%",
      statLabel: t('overview.benefits.expertGuidance.statLabel')
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: t('overview.process.steps.strategy.title'),
      description: t('overview.process.steps.strategy.description'),
      stat: "€250k+",
      statLabel: "avg. funding"
    }
  ];

  // Function to handle touch start for mobile devices
  const handleTouchStart = (index: number) => {
    setHoveredBenefit(index);
  };

  // Function to handle touch end for mobile devices
  const handleTouchEnd = () => {
    setTimeout(() => setHoveredBenefit(null), 500);
  };

  // Function to navigate to the next benefit on mobile
  const nextBenefit = () => {
    setActiveBenefitIndex((prev) => (prev + 1) % benefits.length);
  };

  // Function to navigate to the previous benefit on mobile
  const prevBenefit = () => {
    setActiveBenefitIndex((prev) => (prev - 1 + benefits.length) % benefits.length);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-12 md:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Mobile image - only visible on small screens */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative mb-10 md:hidden"
        >
          <div className="aspect-video relative rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/grants-subsidies/grants.png"
              alt="Grants and subsidies overview"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto lg:mx-0"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t('overview.title')}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {t('overview.description')}
              </p>
            </motion.div>
            
            {/* Mobile Benefit Carousel - Only visible on small screens */}
            <div className="md:hidden mb-8">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeBenefitIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="bg-card/50 p-5 rounded-xl shadow-sm border border-border/50"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-primary/10 p-3 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0">
                      {benefits[activeBenefitIndex].icon}
                    </div>
                    <h3 className="text-xl font-semibold">{benefits[activeBenefitIndex].title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">{benefits[activeBenefitIndex].description}</p>
                  <div className="pt-3 border-t border-border/50 flex items-center justify-between">
                    <span className="text-xl font-bold text-primary">{benefits[activeBenefitIndex].stat}</span>
                    <span className="text-xs text-muted-foreground">{benefits[activeBenefitIndex].statLabel}</span>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              {/* Mobile navigation controls */}
              <div className="flex justify-between items-center mt-4">
                <Button variant="outline" size="sm" onClick={prevBenefit} className="h-8 w-8 p-0 rounded-full">
                  <ChevronRight className="h-4 w-4 rotate-180" />
                </Button>
                
                <div className="flex gap-1">
                  {benefits.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveBenefitIndex(index)}
                      className={cn(
                        "h-2 rounded-full transition-all",
                        index === activeBenefitIndex ? "w-4 bg-primary" : "w-2 bg-primary/30"
                      )}
                      aria-label={`Go to benefit ${index + 1}`}
                    />
                  ))}
                </div>
                
                <Button variant="outline" size="sm" onClick={nextBenefit} className="h-8 w-8 p-0 rounded-full">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            {/* Desktop Benefits Grid - Hidden on mobile */}
            <motion.div 
              className="hidden md:grid grid-cols-1 sm:grid-cols-2 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className={cn(
                    "flex flex-col p-4 rounded-xl transition-all duration-300",
                    hoveredBenefit === index ? "bg-primary/10 scale-105" : "bg-card/50 hover:bg-card"
                  )}
                  onMouseEnter={() => setHoveredBenefit(index)}
                  onMouseLeave={() => setHoveredBenefit(null)}
                  onTouchStart={() => handleTouchStart(index)}
                  onTouchEnd={handleTouchEnd}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-primary/10 p-2 rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <h3 className="text-lg font-semibold">{benefit.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-3">{benefit.description}</p>
                  <div className="mt-auto pt-2 border-t border-border/50 flex items-center justify-between">
                    <span className="text-lg font-bold text-primary">{benefit.stat}</span>
                    <span className="text-xs text-muted-foreground">{benefit.statLabel}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>


          </motion.div>
          
          {/* Desktop image - hidden on mobile */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative hidden md:block"
          >
            <div className="aspect-square relative rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/grants-subsidies/grants.png"
                alt="Grants and subsidies overview"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay"></div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
