"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "@/hooks/useTranslations";

interface PlanFeature {
  key: string;
  name: string;
  included: boolean;
}

interface Plan {
  id: string;
  name: string;
  description: string;
  annualPrice: number;
  features: PlanFeature[];
  buttonText: string;
  buttonVariant: "default" | "outline" | "secondary";
}

export default function MembershipPlans() {
  const { t } = useTranslations("membership");
  
  const plan: Plan = {
    id: "premium",
    name: t('plans.premium.name'),
    description: t('plans.premium.description'),
    annualPrice: 15000,
    buttonText: t('plans.premium.buttonText'),
    buttonVariant: "default",
    features: [
      { key: "premiumSupport", name: t('plans.premium.features.premiumSupport'), included: true },
      { key: "maintenanceCoverage", name: t('plans.premium.features.maintenanceCoverage'), included: true },
      { key: "extraSupport", name: t('plans.premium.features.extraSupport'), included: true },
      { key: "dedicatedConsultant", name: t('plans.premium.features.dedicatedConsultant'), included: true },
      { key: "noWaitingList", name: t('plans.premium.features.noWaitingList'), included: true },
      { key: "exclusiveDiscounts", name: t('plans.premium.features.exclusiveDiscounts'), included: true },
      { key: "priorityFeatures", name: t('plans.premium.features.priorityFeatures'), included: true },
      { key: "quarterlyStrategy", name: t('plans.premium.features.quarterlyStrategy'), included: true },
    ]
  };

  return (
    <section id="membership-plans" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('plans.title')}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {t('plans.description')}
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex"
          >
            <Card className="w-full flex flex-col relative border-primary shadow-lg">
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                <Badge className="bg-primary text-primary-foreground">
                  {t('plans.badge')}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-6">
                  <p className="text-4xl font-bold">
                    €{plan.annualPrice.toLocaleString()}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {t('plans.premium.period')}
                  </p>
                </div>
                
                <ul className="space-y-3">
                  {plan.features.map((feature: PlanFeature) => (
                    <li key={feature.key} className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                      <span>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  asChild 
                  variant={plan.buttonVariant} 
                  className="w-full"
                  size="lg"
                >
                  <Link href={`/contact?subject=Premium Membership Inquiry`}>
                    {plan.buttonText}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
