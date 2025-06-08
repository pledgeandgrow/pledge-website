"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BookOpen, 
  Users, 
  Calendar, 
  Award, 
  Code, 
  FileText, 
  MessageSquare, 
  Lightbulb 
} from "lucide-react";
import { useTranslations } from "@/hooks/useTranslations";

export default function MembershipBenefits() {
  const { t } = useTranslations("membership");
  
  const benefitIcons = {
    exclusiveResources: <BookOpen className="h-6 w-6 text-primary" />,
    communityAccess: <Users className="h-6 w-6 text-primary" />,
    priorityEvents: <Calendar className="h-6 w-6 text-primary" />,
    certificationPathways: <Award className="h-6 w-6 text-primary" />,
    codeRepository: <Code className="h-6 w-6 text-primary" />,
    documentationAccess: <FileText className="h-6 w-6 text-primary" />,
    prioritySupport: <MessageSquare className="h-6 w-6 text-primary" />,
    innovationInsights: <Lightbulb className="h-6 w-6 text-primary" />
  };
  
  const benefits = [
    {
      key: "exclusiveResources",
      title: t('benefits.items.exclusiveResources.title'),
      description: t('benefits.items.exclusiveResources.description'),
      icon: benefitIcons.exclusiveResources
    },
    {
      key: "communityAccess",
      title: t('benefits.items.communityAccess.title'),
      description: t('benefits.items.communityAccess.description'),
      icon: benefitIcons.communityAccess
    },
    {
      key: "priorityEvents",
      title: t('benefits.items.priorityEvents.title'),
      description: t('benefits.items.priorityEvents.description'),
      icon: benefitIcons.priorityEvents
    },
    {
      key: "certificationPathways",
      title: t('benefits.items.certificationPathways.title'),
      description: t('benefits.items.certificationPathways.description'),
      icon: benefitIcons.certificationPathways
    },
    {
      key: "codeRepository",
      title: t('benefits.items.codeRepository.title'),
      description: t('benefits.items.codeRepository.description'),
      icon: benefitIcons.codeRepository
    },
    {
      key: "documentationAccess",
      title: t('benefits.items.documentationAccess.title'),
      description: t('benefits.items.documentationAccess.description'),
      icon: benefitIcons.documentationAccess
    },
    {
      key: "prioritySupport",
      title: t('benefits.items.prioritySupport.title'),
      description: t('benefits.items.prioritySupport.description'),
      icon: benefitIcons.prioritySupport
    },
    {
      key: "innovationInsights",
      title: t('benefits.items.innovationInsights.title'),
      description: t('benefits.items.innovationInsights.description'),
      icon: benefitIcons.innovationInsights
    }
  ];

  return (
    <section id="membership-benefits" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('benefits.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('benefits.description')}
          </p>
        </motion.div>

        {/* Mobile Scroll View (visible only on mobile) */}
        <div className="sm:hidden overflow-x-auto pb-6">
          <div className="flex space-x-4 w-max px-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="w-[85vw] max-w-[300px] flex-shrink-0">
                <Card className="h-full flex flex-col">
                  <CardHeader>
                    <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      {benefit.icon}
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="text-muted-foreground">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            <div className="flex space-x-2">
              {benefits.slice(0, Math.min(5, benefits.length)).map((_, index) => (
                <div 
                  key={index} 
                  className={`h-2 w-2 rounded-full bg-primary/30`}
                />
              ))}
              {benefits.length > 5 && (
                <div className="h-2 w-2 rounded-full bg-primary/30">...</div>
              )}
            </div>
          </div>
        </div>
        
        {/* Desktop Grid (visible only on desktop) */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-muted-foreground">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
