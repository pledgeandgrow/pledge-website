"use client";

import React from "react";
import { ExpertiseFeature } from "@/data/expertise-data";
import { motion } from "framer-motion";
import { 
  Rocket, Code, Search, Pencil, Smartphone, Cloud, 
  ShieldCheck, CreditCard, PieChart, Eye, Heart, 
  BarChart, BadgeCheck, Lightbulb, Map, Palette, Bug, 
  Rocket as RocketIcon, DollarSign, TrendingUp, UserPlus, Sparkles
} from "lucide-react";

interface ExpertiseFeaturesProps {
  features: ExpertiseFeature[];
  title?: string;
  subtitle?: string;
}

// Icon mapping
const iconMap: Record<string, React.ReactNode> = {
  'rocket': <Rocket className="h-6 w-6" />,
  'code': <Code className="h-6 w-6" />,
  'search': <Search className="h-6 w-6" />,
  'pencil': <Pencil className="h-6 w-6" />,
  'device-mobile': <Smartphone className="h-6 w-6" />,
  'cloud': <Cloud className="h-6 w-6" />,
  'shield-check': <ShieldCheck className="h-6 w-6" />,
  'credit-card': <CreditCard className="h-6 w-6" />,
  'chart-pie': <PieChart className="h-6 w-6" />,
  'eye': <Eye className="h-6 w-6" />,
  'heart': <Heart className="h-6 w-6" />,
  'chart-bar': <BarChart className="h-6 w-6" />,
  'badge-check': <BadgeCheck className="h-6 w-6" />,
  'lightbulb': <Lightbulb className="h-6 w-6" />,
  'map': <Map className="h-6 w-6" />,
  'palette': <Palette className="h-6 w-6" />,
  'bug': <Bug className="h-6 w-6" />,
  'rocket-launch': <RocketIcon className="h-6 w-6" />,
  'currency-dollar': <DollarSign className="h-6 w-6" />,
  'arrow-trending-up': <TrendingUp className="h-6 w-6" />,
  'user-plus': <UserPlus className="h-6 w-6" />,
  'sparkles': <Sparkles className="h-6 w-6" />
};

export default function ExpertiseFeatures({ 
  features, 
  title = "Features", 
  subtitle = "What we offer"
}: ExpertiseFeaturesProps) {
  return (
    <section className="py-16 bg-background">
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card p-6 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <div className="text-primary mb-4">
                {feature.icon && iconMap[feature.icon] ? iconMap[feature.icon] : <Code className="h-6 w-6" />}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
