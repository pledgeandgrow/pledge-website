"use client";

import { motion } from "framer-motion";
import { BadgePercent, CheckCircle, ExternalLink, Info, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

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
  // Additional benefits specific to each partner
  const partnerBenefits = {
    taskmate: [
      "Access to premium AI automation features",
      "Priority customer support",
      "Custom workflow templates",
      "Advanced analytics dashboard"
    ],
    sharka: [
      "Dedicated UGC content manager",
      "Monthly strategy sessions",
      "Content performance analytics",
      "Exclusive creator network access"
    ],
    cordunite: [
      "Custom Discord server setup",
      "Moderation team training",
      "Community growth strategies",
      "Engagement analytics dashboard"
    ]
  };

  // Use cases for each partner
  const partnerUseCases = {
    taskmate: [
      "Automate repetitive business processes",
      "Create AI-powered customer service workflows",
      "Build custom agents for specific business needs",
      "Integrate with existing business tools"
    ],
    sharka: [
      "Generate authentic user testimonials and reviews",
      "Create social media content at scale",
      "Build a library of user-generated product demonstrations",
      "Develop brand advocacy programs"
    ],
    cordunite: [
      "Build engaged community platforms for your product",
      "Create specialized support channels",
      "Develop community-driven feedback systems",
      "Host virtual events and workshops"
    ]
  };

  // Get the benefits and use cases for the current partner
  const benefits = partnerBenefits[partner.id as keyof typeof partnerBenefits] || [];
  const useCases = partnerUseCases[partner.id as keyof typeof partnerUseCases] || [];

  // Partner color with fallback
  const partnerColor = partner.color || "#10b981";

  return (
    <div className="p-2 md:p-4">
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="benefits">Benefits</TabsTrigger>
          <TabsTrigger value="usecases">Use Cases</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4">
          {/* Partner Info */}
          <div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{partner.description}</p>
            
            <div className="flex items-center gap-2 mt-3">
              <Badge variant="outline" className="bg-gray-50 dark:bg-gray-800">
                {partner.category}
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
                Exclusive Client Benefit
              </h4>
            </div>
            <p 
              className="font-medium text-base"
              style={{ color: partnerColor }}
            >
              {partner.discount}
            </p>
          </div>
          
          {/* Why Through Pledge & Grow - Condensed */}
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-3">
            <h4 className="font-medium text-sm mb-2 text-gray-900 dark:text-white flex items-center gap-1">
              <Star className="h-4 w-4 text-amber-500" />
              Why Through Pledge & Grow?
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
              <li className="flex items-start gap-1">
                <CheckCircle className="h-3 w-3 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">Pre-negotiated discounts</span>
              </li>
              <li className="flex items-start gap-1">
                <CheckCircle className="h-3 w-3 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">Seamless integration</span>
              </li>
              <li className="flex items-start gap-1">
                <CheckCircle className="h-3 w-3 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">Priority support</span>
              </li>
              <li className="flex items-start gap-1">
                <CheckCircle className="h-3 w-3 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">Consolidated billing</span>
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
            <h4 className="font-medium mb-3 text-gray-900 dark:text-white text-sm">Why Through Pledge & Grow?</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300 text-sm">Pre-negotiated discounts not available elsewhere</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300 text-sm">Seamless integration with other ecosystem services</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300 text-sm">Priority support through our dedicated account managers</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300 text-sm">Consolidated billing and simplified management</span>
              </li>
            </ul>
          </div>
        </TabsContent>
        
        <TabsContent value="usecases" className="space-y-4">
          {/* Use Cases */}
          <div>
            <h4 className="font-medium mb-3 text-gray-900 dark:text-white text-sm">How Clients Use {partner.name}</h4>
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
              As a Pledge & Grow client, you'll receive personalized guidance on how to best leverage {partner.name} for your specific business needs.
            </p>
          </div>
        </TabsContent>
      </Tabs>
      
      {/* Call to Action */}
      <div className="flex flex-col sm:flex-row gap-2 justify-end mt-6">
        <Button variant="outline" size="sm" asChild className="sm:w-auto w-full">
          <Link href="/contact" className="flex items-center justify-center gap-1">
            <ExternalLink className="h-4 w-4" />
            <span>Learn More</span>
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
            <span>Become a Client</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
