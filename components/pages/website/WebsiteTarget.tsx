"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Building2, 
  ShoppingBag, 
  Briefcase, 
  GraduationCap, 
  Heart, 
  Utensils 
} from "lucide-react";

interface TargetGroup {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
}

export default function WebsiteTarget() {
  const targetGroups: TargetGroup[] = [
    {
      icon: <Building2 className="h-10 w-10" />,
      title: "Corporate & Enterprise",
      description: "Large organizations looking for a professional online presence with advanced functionality.",
      benefits: [
        "Enterprise-grade security and reliability",
        "Custom integrations with internal systems",
        "Scalable architecture for high traffic",
        "Multi-language support for global reach"
      ]
    },
    {
      icon: <ShoppingBag className="h-10 w-10" />,
      title: "E-commerce Businesses",
      description: "Online retailers seeking a high-converting shopping experience for their customers.",
      benefits: [
        "Seamless checkout process optimization",
        "Product catalog management systems",
        "Inventory and order management",
        "Payment gateway integrations"
      ]
    },
    {
      icon: <Briefcase className="h-10 w-10" />,
      title: "Small & Medium Businesses",
      description: "Growing businesses that need a professional website to establish credibility and generate leads.",
      benefits: [
        "Cost-effective solutions with room to grow",
        "Lead generation and contact forms",
        "Local SEO optimization",
        "Content management for easy updates"
      ]
    },
    {
      icon: <GraduationCap className="h-10 w-10" />,
      title: "Educational Institutions",
      description: "Schools, universities, and training centers that need to showcase programs and engage students.",
      benefits: [
        "Course and program catalogs",
        "Student portals and resources",
        "Event calendars and registration",
        "Faculty and staff directories"
      ]
    },
    {
      icon: <Heart className="h-10 w-10" />,
      title: "Nonprofits & Charities",
      description: "Organizations with a mission to make a difference and engage supporters.",
      benefits: [
        "Donation systems and fundraising tools",
        "Volunteer management",
        "Impact reporting and transparency",
        "Event management for fundraisers"
      ]
    },
    {
      icon: <Utensils className="h-10 w-10" />,
      title: "Restaurants & Hospitality",
      description: "Businesses in the food and hospitality industry looking to attract customers and streamline operations.",
      benefits: [
        "Menu displays and updates",
        "Reservation and booking systems",
        "Location maps and hours",
        "Online ordering integration"
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight mb-4">Who Our Website Services Are For</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Our website development services are tailored to meet the specific needs of various industries and business types. We understand that different organizations have unique requirements and goals for their online presence.
            </p>
            <p className="text-lg text-muted-foreground">
              Whether you're a small business looking to establish your first professional website or a large enterprise needing complex functionality, our team has the expertise to deliver a solution that drives results for your specific situation.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden"
          >
            <Image
              src="/images/website/target-audience.jpg"
              alt="Website Target Audience"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {targetGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="mb-4 text-primary">{group.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{group.title}</h3>
                  <p className="text-muted-foreground mb-4">{group.description}</p>
                  
                  <h4 className="font-medium text-sm uppercase tracking-wider text-muted-foreground mb-2">Key Benefits</h4>
                  <ul className="space-y-2">
                    {group.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
