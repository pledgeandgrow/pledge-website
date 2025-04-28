"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";

interface TechnologyPartner {
  id: string;
  name: string;
  logo: string;
  description: string;
  partnershipType: string;
  website: string;
  integrations: string[];
}

export default function TechnologyPartners() {
  const partners: TechnologyPartner[] = [
    {
      id: "aws",
      name: "Amazon Web Services",
      logo: "/images/innovation/partners/aws.svg",
      description: "As an AWS Advanced Consulting Partner, we leverage the full suite of AWS cloud services to build scalable, secure, and resilient applications for our clients.",
      partnershipType: "Cloud Services",
      website: "https://aws.amazon.com/partners/",
      integrations: [
        "EC2 for scalable compute resources",
        "S3 for object storage",
        "Lambda for serverless computing",
        "RDS for managed database services",
        "CloudFront for content delivery"
      ]
    },
    {
      id: "microsoft",
      name: "Microsoft",
      logo: "/images/innovation/partners/microsoft.svg",
      description: "Our Microsoft Gold Partnership enables us to deliver enterprise-grade solutions using Azure cloud services, Microsoft 365, and Power Platform.",
      partnershipType: "Enterprise Solutions",
      website: "https://partner.microsoft.com/",
      integrations: [
        "Azure for cloud infrastructure",
        "Microsoft 365 for productivity",
        "Power BI for business intelligence",
        "Dynamics 365 for CRM and ERP",
        "Azure DevOps for development lifecycle"
      ]
    },
    {
      id: "google",
      name: "Google Cloud",
      logo: "/images/innovation/partners/google-cloud.svg",
      description: "As a Google Cloud Partner, we help organizations leverage Google's cutting-edge AI, machine learning, and cloud infrastructure services.",
      partnershipType: "AI & Cloud Services",
      website: "https://cloud.google.com/partners/",
      integrations: [
        "Google Cloud Platform for infrastructure",
        "BigQuery for data analytics",
        "TensorFlow for machine learning",
        "Google Workspace for collaboration",
        "Firebase for mobile and web applications"
      ]
    },
    {
      id: "salesforce",
      name: "Salesforce",
      logo: "/images/innovation/partners/salesforce.svg",
      description: "Our Salesforce partnership allows us to implement and customize CRM solutions that drive sales, improve customer service, and enhance marketing efforts.",
      partnershipType: "CRM Solutions",
      website: "https://partners.salesforce.com/",
      integrations: [
        "Sales Cloud for sales management",
        "Service Cloud for customer support",
        "Marketing Cloud for marketing automation",
        "Commerce Cloud for e-commerce",
        "Salesforce Einstein for AI-powered insights"
      ]
    },
    {
      id: "adobe",
      name: "Adobe",
      logo: "/images/innovation/partners/adobe.svg",
      description: "Our Adobe partnership enables us to deliver premium digital experiences, content management solutions, and marketing automation platforms.",
      partnershipType: "Digital Experience",
      website: "https://partners.adobe.com/",
      integrations: [
        "Adobe Experience Cloud for marketing",
        "Adobe Creative Cloud for design",
        "Adobe Document Cloud for document management",
        "Adobe Analytics for data insights",
        "Adobe Target for personalization"
      ]
    },
    {
      id: "hubspot",
      name: "HubSpot",
      logo: "/images/innovation/partners/hubspot.svg",
      description: "As a HubSpot Solutions Partner, we implement inbound marketing, sales, and service solutions that help businesses grow better.",
      partnershipType: "Marketing & Sales",
      website: "https://www.hubspot.com/partners",
      integrations: [
        "Marketing Hub for inbound marketing",
        "Sales Hub for sales automation",
        "Service Hub for customer service",
        "CMS Hub for content management",
        "Operations Hub for data synchronization"
      ]
    },
    {
      id: "shopify",
      name: "Shopify",
      logo: "/images/innovation/partners/shopify.svg",
      description: "Our Shopify Partnership allows us to build custom e-commerce solutions, themes, and applications for businesses of all sizes.",
      partnershipType: "E-Commerce",
      website: "https://www.shopify.com/partners",
      integrations: [
        "Shopify Storefront for e-commerce websites",
        "Shopify Plus for enterprise clients",
        "Shopify POS for retail solutions",
        "Shopify Apps for extended functionality",
        "Shopify Payments for payment processing"
      ]
    },
    {
      id: "stripe",
      name: "Stripe",
      logo: "/images/innovation/partners/stripe.svg",
      description: "As a Stripe Verified Partner, we implement secure, scalable payment solutions for businesses across various industries.",
      partnershipType: "Payment Solutions",
      website: "https://stripe.com/partners",
      integrations: [
        "Stripe Payments for online transactions",
        "Stripe Billing for subscription management",
        "Stripe Connect for marketplace payments",
        "Stripe Terminal for in-person payments",
        "Stripe Radar for fraud prevention"
      ]
    }
  ];

  return (
    <section id="technology-partners" className="py-16 md:py-24">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">Our Technology Partners</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We collaborate with industry-leading technology providers to deliver cutting-edge solutions for our clients. These strategic partnerships enable us to stay at the forefront of innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader className="pb-2">
                  <div className="h-12 relative mb-4 flex items-center justify-center">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      width={120}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl">{partner.name}</CardTitle>
                  </div>
                  <Badge variant="outline" className="mb-2">
                    {partner.partnershipType}
                  </Badge>
                  <CardDescription className="line-clamp-3">
                    {partner.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <h4 className="text-sm font-medium mb-2">Key Integrations:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {partner.integrations.slice(0, 3).map((integration, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{integration}</span>
                      </li>
                    ))}
                    {partner.integrations.length > 3 && (
                      <li className="text-xs text-muted-foreground italic">
                        +{partner.integrations.length - 3} more integrations
                      </li>
                    )}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" asChild className="w-full">
                    <Link href={partner.website} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      Visit Partner <ExternalLink className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-6">
            Interested in partnering with us? We're always looking to expand our technology ecosystem.
          </p>
          <Button asChild>
            <Link href="/contact?subject=Technology Partnership" className="flex items-center gap-2">
              Become a Partner <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
