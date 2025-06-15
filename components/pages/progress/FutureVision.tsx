"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Bitcoin, 
  Heart, 
  Users, 
  Crown,
  ChevronLeft,
  ChevronRight,
  Bot,
  Lightbulb
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslations } from "@/hooks/useTranslations";

interface VisionItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

export default function FutureVision() {
  const { t } = useTranslations('progress');
  const [currentIndex, setCurrentIndex] = useState(0);
  // Mobile detection is handled by CSS media queries instead

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === visionItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? visionItems.length - 1 : prevIndex - 1
    );
  };
  
  const visionItems: VisionItem[] = [
    {
      icon: <Bitcoin className="h-10 w-10 text-amber-500" />,
      title: t('futureVision.pillars.crypto.title') || "Cryptocurrencies",
      description: t('futureVision.pillars.crypto.description') || "We currently accept missions in most utilized cryptocurrencies and stablecoins. Will soon be available in France.",
      color: "bg-amber-500/10"
    },
    {
      icon: <Heart className="h-10 w-10 text-red-500" />,
      title: t('futureVision.pillars.charity.title') || "Charity",
      description: t('futureVision.pillars.charity.description') || "Pledge & Grow is dedicated to helping others and occasionally works for free on projects dedicated to humanity or charity.",
      color: "bg-red-500/10"
    },
    {
      icon: <Users className="h-10 w-10 text-blue-500" />,
      title: t('futureVision.pillars.team.title') || "Team",
      description: t('futureVision.pillars.team.description') || "Our team is constantly evolving, a lot of people come and go. We limited our board member size to 10 members with 5 active currently.",
      color: "bg-blue-500/10"
    },
    {
      icon: <Crown className="h-10 w-10 text-purple-500" />,
      title: t('futureVision.pillars.membership.title') || "Membership",
      description: t('futureVision.pillars.membership.description') || "We plan to add more benefits overtime. VIP have access to community groups and full support, they don't have to go through the waitlist.",
      color: "bg-purple-500/10"
    },
    {
      icon: <Bot className="h-10 w-10 text-green-500" />,
      title: t('futureVision.pillars.realtime.title') || "AI Support",
      description: t('futureVision.pillars.realtime.description') || "Currently supporting OpenAI and Claude integration, we're also researching other AI such as the upcoming Gemini, Deepseek and Grok.",
      color: "bg-green-500/10"
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-cyan-500" />,
      title: t('futureVision.pillars.international.title') || "Innovation Hub",
      description: t('futureVision.pillars.international.description') || "Development of applications tied to innovations and supporting projects as an incubator. We help turn innovative ideas into reality through mentorship, resources, and technical expertise.",
      color: "bg-cyan-500/10"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-3 text-xs font-medium rounded-full bg-primary/10 text-primary">
            {new Date().getFullYear()}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('futureVision.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('futureVision.description')}
          </p>
        </motion.div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {visionItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border border-primary/10 bg-gradient-to-br from-background to-primary/5 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <CardContent className="p-8 relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 z-0"></div>
                  <div className={`${item.color} p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel View */}
        <div className="md:hidden max-w-sm mx-auto">
          <div className="overflow-hidden relative min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <Card className="h-full border border-primary/10 bg-gradient-to-br from-background to-primary/5 shadow-lg overflow-hidden">
                  <CardContent className="p-8 relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 z-0"></div>
                    <div className={`${visionItems[currentIndex].color} p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 animate-pulse`}>
                      {visionItems[currentIndex].icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{visionItems[currentIndex].title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {visionItems[currentIndex].description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={prevSlide}
              className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5 text-primary" />
            </button>
            
            <div className="flex items-center gap-2">
              {visionItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all duration-300",
                    currentIndex === index ? "bg-primary scale-125" : "bg-primary/30"
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextSlide}
              className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5 text-primary" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
