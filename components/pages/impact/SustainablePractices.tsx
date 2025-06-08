"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Recycle, Zap, Cloud } from "lucide-react";
import { useTranslations } from "@/hooks/useTranslations";

interface PracticeProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function PracticeCard({ icon, title, description }: PracticeProps) {
  return (
    <Card className="h-full border border-border hover:shadow-md transition-all duration-300">
      <CardContent className="pt-6">
        <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">{icon}</div>
        <h3 className="text-xl font-semibold mb-3 text-foreground">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

export default function SustainablePractices() {
  const { t } = useTranslations('impact');
  
  const practiceIcons = {
    cloud: <Cloud className="h-10 w-10" />,
    recycle: <Recycle className="h-10 w-10" />,
    energy: <Zap className="h-10 w-10" />
  };
  
  const practices = [
    {
      icon: practiceIcons.cloud,
      title: t('sustainablePractices.practices.0.title'),
      description: t('sustainablePractices.practices.0.description')
    },
    {
      icon: practiceIcons.recycle,
      title: t('sustainablePractices.practices.1.title'),
      description: t('sustainablePractices.practices.1.description')
    },
    {
      icon: practiceIcons.energy,
      title: t('sustainablePractices.practices.2.title'),
      description: t('sustainablePractices.practices.2.description')
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/20 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute bottom-20 -left-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="container px-4 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-foreground">{t('sustainablePractices.title')}</h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {t('sustainablePractices.description')}
            </p>
            <div className="flex flex-col md:flex-row gap-4 mt-8">
              <div className="bg-card border border-border rounded-lg p-4 flex-1 shadow-sm">
                <div className="text-primary mb-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                  </svg>
                </div>
                <p className="text-foreground font-medium">{t('sustainablePractices.continuousImprovement')}</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 flex-1 shadow-sm">
                <div className="text-primary mb-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 6v6l4 2"/>
                  </svg>
                </div>
                <p className="text-foreground font-medium">{t('sustainablePractices.longTermCommitment')}</p>
              </div>
            </div>
            <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
              {t('sustainablePractices.additionalText')}
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
                src="/images/impact/impact3.png"
                alt={t('sustainablePractices.imageAlt')}
                fill
                className="object-cover transition-transform duration-500"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <p className="text-sm font-medium">{t('sustainablePractices.imageCaption')}</p>
            </div>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {practices.map((practice, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <PracticeCard {...practice} />
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-green-500/10 to-primary/10 rounded-xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">{t('sustainablePractices.environmentalCommitment.title')}</h3>
          <p className="text-lg mb-2">
            {t('sustainablePractices.environmentalCommitment.mainText')}
          </p>
          <p className="text-muted-foreground">
            {t('sustainablePractices.environmentalCommitment.subText')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
