"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { ChevronRight } from "lucide-react";

interface SitePlanSection {
  title: string;
  links: Array<{
    name: string;
    path: string;
    description: string;
  }>;
}

export default function SitePlanList() {
  const sitePlanData: SitePlanSection[] = [
    {
      title: "Pledge & Grow",
      links: [
        {
          name: "Home",
          path: "/",
          description: "Our homepage with an overview of our services and mission",
        },
        {
          name: "Contact",
          path: "/contact",
          description: "Get in touch with our team for inquiries and collaborations",
        },
        {
          name: "Services",
          path: "/services",
          description: "Explore our comprehensive range of digital services",
        },
        {
          name: "Portfolio",
          path: "/portfolio",
          description: "View our past projects and client success stories",
        },
        {
          name: "Start my project",
          path: "/start-project",
          description: "Begin your digital journey with our project creation process",
        },
      ],
    },
    {
      title: "Company",
      links: [
        {
          name: "Identity",
          path: "/about",
          description: "Learn about our company, mission, and values",
        },
        {
          name: "Progress",
          path: "/progress",
          description: "Track our company's growth and development milestones",
        },
        {
          name: "International",
          path: "/international",
          description: "Our global presence and international services",
        },
        {
          name: "Ecosystem",
          path: "/ecosysteme",
          description: "Our digital ecosystem and collaborative approach",
        },
        {
          name: "Careers",
          path: "/careers",
          description: "Join our team and explore career opportunities",
        },
        {
          name: "Partners",
          path: "/partners",
          description: "Our network of partners and collaboration opportunities",
        },
        {
          name: "Ambassadors",
          path: "/ambassadors",
          description: "Our brand ambassadors and advocacy program",
        },
        {
          name: "Grants & Subsidies",
          path: "/grants-subsidies",
          description: "Available funding opportunities for digital projects",
        },
        {
          name: "Business Sectors",
          path: "/business-sectors",
          description: "Industries and sectors we serve with our digital solutions",
        },
        {
          name: "Membership",
          path: "/membership",
          description: "Membership options and benefits for our community",
        },
        {
          name: "Discord",
          path: "/discord",
          description: "Join our Discord community for discussions and support",
        },
      ],
    },
    {
      title: "Expertise",
      links: [
        {
          name: "Website",
          path: "/expertise/website",
          description: "Professional website development services",
        },
        {
          name: "SaaS",
          path: "/expertise/saas",
          description: "Software as a Service development and solutions",
        },
        {
          name: "Mobile Application",
          path: "/expertise/mobile-application",
          description: "Mobile app development for iOS and Android",
        },
        {
          name: "Software",
          path: "/expertise/software",
          description: "Custom software development and solutions",
        },
        {
          name: "Video Games",
          path: "/expertise/video-games",
          description: "Game development and interactive experiences",
        },
        {
          name: "E-commerce",
          path: "/expertise/e-commerce",
          description: "Online store development and optimization",
        },
        {
          name: "AI & Automation",
          path: "/expertise/ai-automation",
          description: "Artificial intelligence and automation solutions",
        },
        {
          name: "Blockchain",
          path: "/expertise/blockchain",
          description: "Blockchain technology and cryptocurrency solutions",
        },
        {
          name: "Cybersecurity",
          path: "/expertise/cybersecurity",
          description: "Digital security and data protection services",
        },
        {
          name: "Cloud / DevOps",
          path: "/expertise/cloud-devops",
          description: "Cloud infrastructure and DevOps solutions",
        },
        {
          name: "Documentation",
          path: "/expertise/documentation",
          description: "Comprehensive documentation and technical writing",
        },
        {
          name: "UX/UI Design",
          path: "/expertise/design-ux-ui",
          description: "User experience and interface design services",
        },
        {
          name: "SEO",
          path: "/expertise/seo",
          description: "Search engine optimization and visibility solutions",
        },
        {
          name: "Maintenance",
          path: "/expertise/maintenance",
          description: "Ongoing maintenance and support services",
        },
        {
          name: "Consulting / Training",
          path: "/expertise/consulting-training",
          description: "Expert consulting and training services",
        },
      ],
    },
    {
      title: "Enterprise",
      links: [
        {
          name: "Impact",
          path: "/impact",
          description: "Our social and environmental impact initiatives",
        },
        {
          name: "Innovation",
          path: "/innovation",
          description: "Our approach to innovation and cutting-edge technologies",
        },
        {
          name: "Groupe",
          path: "/groupe",
          description: "Information about our corporate group structure",
        },
        {
          name: "Media",
          path: "/media",
          description: "Press releases, media kit, and company news",
        },
      ],
    },
    {
      title: "Resources",
      links: [
        {
          name: "Blog",
          path: "/blog",
          description: "Articles, insights, and updates from our team",
        },
        {
          name: "Help Center",
          path: "/help-center",
          description: "Support resources, FAQs, and contact options",
        },
        {
          name: "References",
          path: "/references",
          description: "Official references and listings for Pledge & Grow",
        },
        {
          name: "Site Plan",
          path: "/site-plan",
          description: "Complete overview of all pages on our website",
        },
      ],
    },
    {
      title: "Legal",
      links: [
        {
          name: "Terms of Service",
          path: "/legal/terms-conditions",
          description: "Terms and conditions for using our services",
        },
        {
          name: "Privacy Policy",
          path: "/legal/privacy-policy",
          description: "Our privacy policy and data protection practices",
        },
        {
          name: "Cookie Policy",
          path: "/legal/cookie-policy",
          description: "Information about how we use cookies on our website",
        },
        {
          name: "GDPR",
          path: "/legal/gdpr",
          description: "Our compliance with General Data Protection Regulation",
        },
      ],
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Site Plan
          </h1>
          <p className="text-lg text-muted-foreground">
            A complete overview of all pages available on our website to help you navigate our digital presence.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {sitePlanData.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{section.title}</h2>
              <Separator className="mb-6" />
              
              <ul className="space-y-3 list-none">
                {section.links.map((link) => (
                  <li key={link.path}>
                    <Link 
                      href={link.path}
                      className="group hover:text-primary transition-colors block"
                    >
                      <div className="flex items-start">
                        <ChevronRight className="h-5 w-5 mt-0.5 mr-2 text-muted-foreground group-hover:text-primary transition-colors" />
                        <div>
                          <h3 className="font-medium">{link.name}</h3>
                          <p className="text-sm text-muted-foreground">{link.description}</p>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
