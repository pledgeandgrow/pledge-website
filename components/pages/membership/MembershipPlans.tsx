"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";
import Link from "next/link";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface PlanFeature {
  name: string;
  included: boolean;
}

interface Plan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  features: PlanFeature[];
  popular?: boolean;
  buttonText: string;
  buttonVariant: "default" | "outline" | "secondary";
}

export default function MembershipPlans() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");
  
  const plans: Plan[] = [
    {
      id: "basic",
      name: "Basic",
      description: "Essential benefits for individuals getting started.",
      monthlyPrice: 29,
      annualPrice: 290,
      buttonText: "Get Started",
      buttonVariant: "outline",
      features: [
        { name: "Community Access", included: true },
        { name: "Resource Library", included: true },
        { name: "Monthly Webinars", included: true },
        { name: "Basic Documentation", included: true },
        { name: "Code Repository", included: false },
        { name: "Priority Support", included: false },
        { name: "Certification Pathways", included: false },
        { name: "Innovation Insights", included: false },
      ]
    },
    {
      id: "professional",
      name: "Professional",
      description: "Comprehensive benefits for growing professionals.",
      monthlyPrice: 79,
      annualPrice: 790,
      buttonText: "Upgrade Now",
      buttonVariant: "default",
      popular: true,
      features: [
        { name: "Community Access", included: true },
        { name: "Resource Library", included: true },
        { name: "Monthly Webinars", included: true },
        { name: "Basic Documentation", included: true },
        { name: "Code Repository", included: true },
        { name: "Priority Support", included: true },
        { name: "Certification Pathways", included: false },
        { name: "Innovation Insights", included: false },
      ]
    },
    {
      id: "enterprise",
      name: "Enterprise",
      description: "Premium benefits for organizations and teams.",
      monthlyPrice: 199,
      annualPrice: 1990,
      buttonText: "Contact Sales",
      buttonVariant: "secondary",
      features: [
        { name: "Community Access", included: true },
        { name: "Resource Library", included: true },
        { name: "Monthly Webinars", included: true },
        { name: "Basic Documentation", included: true },
        { name: "Code Repository", included: true },
        { name: "Priority Support", included: true },
        { name: "Certification Pathways", included: true },
        { name: "Innovation Insights", included: true },
      ]
    }
  ];

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
            Membership Plans
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Choose the membership plan that best fits your needs and goals.
            All plans include core benefits with additional features in higher tiers.
          </p>
          
          <div className="flex items-center justify-center space-x-4 mb-8">
            <Label htmlFor="billing-toggle" className={`text-sm ${billingCycle === 'monthly' ? 'font-medium' : 'text-muted-foreground'}`}>
              Monthly
            </Label>
            <Switch
              id="billing-toggle"
              checked={billingCycle === "annual"}
              onCheckedChange={(checked) => setBillingCycle(checked ? "annual" : "monthly")}
            />
            <div className="flex items-center">
              <Label htmlFor="billing-toggle" className={`text-sm ${billingCycle === 'annual' ? 'font-medium' : 'text-muted-foreground'}`}>
                Annual
              </Label>
              <Badge variant="outline" className="ml-2 bg-primary/10 text-primary border-primary/30">
                Save 20%
              </Badge>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex"
            >
              <Card className={`w-full flex flex-col relative ${plan.popular ? 'border-primary shadow-lg' : ''}`}>
                {plan.popular && (
                  <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                    <Badge className="bg-primary text-primary-foreground">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="mb-6">
                    <p className="text-4xl font-bold">
                      ${billingCycle === "monthly" ? plan.monthlyPrice : plan.annualPrice}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      per {billingCycle === "monthly" ? "month" : "year"}
                    </p>
                  </div>
                  
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        {feature.included ? (
                          <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                        ) : (
                          <X className="mr-2 h-5 w-5 text-muted-foreground flex-shrink-0" />
                        )}
                        <span className={feature.included ? "" : "text-muted-foreground"}>
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
                    <Link href={`/contact?subject=Membership Inquiry: ${plan.name} Plan`}>
                      {plan.buttonText}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
