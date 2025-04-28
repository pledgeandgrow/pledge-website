"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: string;
  features: string[];
  popular: boolean;
  link: string;
}

const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    description: "Perfect for small businesses and personal projects",
    price: "€999",
    features: [
      "Responsive website (up to 5 pages)",
      "Basic SEO optimization",
      "Contact form integration",
      "Mobile-friendly design",
      "Social media integration",
      "3 months of support"
    ],
    popular: false,
    link: "/digital-project"
  },
  {
    id: "business",
    name: "Business",
    description: "Ideal for growing businesses with specific needs",
    price: "€2,499",
    features: [
      "Responsive website (up to 10 pages)",
      "Advanced SEO optimization",
      "Content management system",
      "E-commerce functionality (up to 50 products)",
      "Email newsletter integration",
      "Google Analytics setup",
      "6 months of support",
      "2 rounds of revisions"
    ],
    popular: true,
    link: "/digital-project"
  },
  {
    id: "premium",
    name: "Premium",
    description: "Comprehensive solution for established businesses",
    price: "€4,999",
    features: [
      "Responsive website (up to 20 pages)",
      "Advanced SEO optimization",
      "Custom content management system",
      "E-commerce functionality (unlimited products)",
      "Payment gateway integration",
      "Custom database integration",
      "Advanced analytics setup",
      "12 months of support",
      "Unlimited revisions",
      "Priority support"
    ],
    popular: false,
    link: "/digital-project"
  }
];

export default function OfferPackages() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">B2C Offer Packages</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose from our pre-designed packages tailored for businesses of all sizes. Get started quickly with our all-inclusive solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex"
            >
              <Card className={`flex flex-col w-full ${
                plan.popular ? 'border-primary shadow-lg relative' : ''
              }`}>
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                    MOST POPULAR
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground ml-1">one-time</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    asChild 
                    variant={plan.popular ? "default" : "outline"} 
                    className="w-full"
                  >
                    <Link href={plan.link}>
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Need a custom solution? Contact us for a personalized quote.
          </p>
          <Button asChild variant="outline">
            <Link href="/contact">
              Contact for Custom Quote
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
