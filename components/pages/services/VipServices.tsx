"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Crown, Clock, Shield, HeartHandshake, Zap, ArrowRight } from "lucide-react";
import { useTranslations } from "@/hooks/useTranslations";

interface VipBenefit {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const vipBenefits: VipBenefit[] = [
  {
    id: "priority",
    title: "Priority Support",
    description: "Get immediate attention with our dedicated VIP support line and guaranteed response times within 2 hours.",
    icon: <Zap className="h-8 w-8 text-primary" />
  },
  {
    id: "dedicated",
    title: "Dedicated Account Manager",
    description: "Work with a dedicated account manager who understands your business and can coordinate all your needs.",
    icon: <HeartHandshake className="h-8 w-8 text-primary" />
  },
  {
    id: "expedited",
    title: "Expedited Delivery",
    description: "Your projects are prioritized in our workflow, ensuring faster turnaround times without compromising quality.",
    icon: <Clock className="h-8 w-8 text-primary" />
  },
  {
    id: "enhanced",
    title: "Enhanced Security",
    description: "Benefit from advanced security measures, regular security audits, and proactive monitoring for your digital assets.",
    icon: <Shield className="h-8 w-8 text-primary" />
  }
];

export default function VipServices() {
  const [isInView, setIsInView] = useState(false);
  const { t } = useTranslations('services');
  
  useEffect(() => {
    // Simple intersection observer to trigger animations when component is in view
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById('vip-services-section');
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="vip-services-section" className="py-16 bg-background dark:bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-12">
          <div
            className={`bg-primary/10 p-4 rounded-full mb-4 transition-all duration-500 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-80'}`}
          >
            <Crown className="h-10 w-10 text-primary" />
          </div>
          
          <h2 
            className={`text-3xl font-bold text-foreground mb-4 text-center transition-all duration-500 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            {t('vip.title')}
          </h2>
          
          <p 
            className={`text-muted-foreground max-w-2xl mx-auto text-center transition-all duration-500 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            {t('vip.description')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div
            className={`transition-all duration-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '300ms' }}
          >
            <Card className="h-full border-primary/50 shadow-md">
              <CardHeader className="bg-primary/5 border-b border-primary/20">
                <CardTitle className="flex items-center">
                  <Crown className="h-5 w-5 text-primary mr-2" />
                  {t('vip.card.title')}
                </CardTitle>
                <CardDescription>
                  {t('vip.card.subtitle')}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  {vipBenefits.map((benefit) => (
                    <div key={benefit.id} className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        {benefit.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground mb-1">{t(`vip.benefits.${benefit.id}.title`)}</h4>
                        <p className="text-sm text-muted-foreground">{t(`vip.benefits.${benefit.id}.description`)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="border-t border-primary/20 pt-6">
                <Button asChild className="w-full">
                  <Link href="/contact">
                    {t('vip.card.applyButton')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          <div
            className={`flex flex-col justify-center ${isInView ? 'animate-fadeIn' : 'opacity-0'}`}
            style={{ animationDelay: '200ms' }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">{t('vip.elevate.title')}</h3>
            
            <p className="text-muted-foreground mb-6">
              {t('vip.elevate.description')}
            </p>
            
            <div className="bg-card rounded-lg p-6 border border-border mb-6">
              <h4 className="font-bold text-foreground mb-3">{t('vip.includes.title')}</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-muted-foreground">{t('vip.includes.items.strategy')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-muted-foreground">{t('vip.includes.items.beta')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-muted-foreground">{t('vip.includes.items.pricing')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-muted-foreground">{t('vip.includes.items.support')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-muted-foreground">{t('vip.includes.items.audit')}</span>
                </li>
              </ul>
            </div>
            
            <p className="text-sm text-muted-foreground italic">
              {t('vip.disclaimer')}
            </p>
          </div>
        </div>
        
        <div
          className={`text-center mt-8 transition-all duration-500 delay-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <Button size="lg" asChild>
            <Link href="/membership">
              {t('vip.contactButton')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
