"use client";

import React from "react";
import { ExpertiseBenefit } from "@/data/expertise-data";
import { motion } from "framer-motion";
import { 
  Eye, Heart, BarChart, BadgeCheck, DollarSign, 
  TrendingUp, UserPlus, Sparkles
} from "lucide-react";

interface ExpertiseBenefitsProps {
  benefits: ExpertiseBenefit[];
  title?: string;
  subtitle?: string;
}

// Icon mapping
const iconMap: Record<string, React.ReactNode> = {
  'eye': <Eye className="h-6 w-6" />,
  'heart': <Heart className="h-6 w-6" />,
  'chart-bar': <BarChart className="h-6 w-6" />,
  'badge-check': <BadgeCheck className="h-6 w-6" />,
  'currency-dollar': <DollarSign className="h-6 w-6" />,
  'arrow-trending-up': <TrendingUp className="h-6 w-6" />,
  'user-plus': <UserPlus className="h-6 w-6" />,
  'sparkles': <Sparkles className="h-6 w-6" />
};

export default function ExpertiseBenefits({ 
  benefits, 
  title = "Benefits", 
  subtitle = "Why choose our expertise"
}: ExpertiseBenefitsProps) {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              {title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {subtitle}
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-start p-6 bg-card rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="p-3 bg-primary/10 rounded-full text-primary">
                    {benefit.icon && iconMap[benefit.icon] ? iconMap[benefit.icon] : <Heart className="h-6 w-6" />}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
