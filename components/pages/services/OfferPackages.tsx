"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

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
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      // Mobile check is handled by CSS media queries
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const nextSlide = () => {
    if (currentSlide < pricingPlans.length - 1) {
      setCurrentSlide(currentSlide + 1);
      if (sliderRef.current) {
        sliderRef.current.scrollTo({
          left: (currentSlide + 1) * sliderRef.current.offsetWidth,
          behavior: 'smooth'
        });
      }
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
      if (sliderRef.current) {
        sliderRef.current.scrollTo({
          left: (currentSlide - 1) * sliderRef.current.offsetWidth,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleScroll = () => {
    if (sliderRef.current) {
      const scrollPosition = sliderRef.current.scrollLeft;
      const slideWidth = sliderRef.current.offsetWidth;
      const newSlide = Math.round(scrollPosition / slideWidth);
      if (newSlide !== currentSlide) {
        setCurrentSlide(newSlide);
      }
    }
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Special Packages</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose from our pre-designed packages tailored for businesses of all sizes. Get started quickly with our all-inclusive solutions.
          </p>
        </div>
        
        {/* Mobile slider view */}
        <div className="md:hidden relative">
          <div 
            ref={sliderRef}
            className="overflow-x-auto snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none' }}
            onScroll={handleScroll}
          >
            <div className="flex">
              {pricingPlans.map((plan) => (
                <div 
                  key={plan.id}
                  className="min-w-full snap-center px-4"
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
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation controls */}
          <div className="flex justify-between mt-6">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevSlide} 
              disabled={currentSlide === 0}
              className="rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <div className="flex space-x-2">
              {pricingPlans.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    currentSlide === index ? 'bg-primary' : 'bg-muted-foreground/30'
                  }`}
                  onClick={() => {
                    setCurrentSlide(index);
                    if (sliderRef.current) {
                      sliderRef.current.scrollTo({
                        left: index * sliderRef.current.offsetWidth,
                        behavior: 'smooth'
                      });
                    }
                  }}
                />
              ))}
            </div>
            
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextSlide} 
              disabled={currentSlide === pricingPlans.length - 1}
              className="rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        {/* Desktop grid layout */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
