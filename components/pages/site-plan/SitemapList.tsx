"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
      title: "Main Pages",
      links: [
        {
          name: "Home",
          path: "/",
          description: "Our homepage with an overview of our services and mission",
        },
        {
          name: "About",
          path: "/about",
          description: "Learn about our company, mission, and values",
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
          name: "Contact",
          path: "/contact",
          description: "Get in touch with our team for inquiries and collaborations",
        },
      ],
    },
    {
      title: "Business & Innovation",
      links: [
        {
          name: "Investors",
          path: "/investors",
          description: "Information for potential investors and investment opportunities",
        },
        {
          name: "Grants & Subsidies",
          path: "/grants-subsidies",
          description: "Available funding opportunities for digital projects",
        },
        {
          name: "Innovation",
          path: "/innovation",
          description: "Our approach to innovation and cutting-edge technologies",
        },
        {
          name: "Business Sectors",
          path: "/business-sectors",
          description: "Industries and sectors we serve with our digital solutions",
        },
        {
          name: "Digital Projects",
          path: "/digital-project",
          description: "Our approach to digital project management and delivery",
        },
      ],
    },
    {
      title: "Company",
      links: [
        {
          name: "Group",
          path: "/groupe",
          description: "Information about our corporate group structure",
        },
        {
          name: "Company Tree",
          path: "/company-tree",
          description: "Organizational structure and company hierarchy",
        },
        {
          name: "Careers",
          path: "/careers",
          description: "Job opportunities and information about working with us",
        },
        {
          name: "Impact",
          path: "/impact",
          description: "Our social and environmental impact initiatives",
        },
        {
          name: "International",
          path: "/international",
          description: "Our global presence and international services",
        },
      ],
    },
    {
      title: "Ecosystem",
      links: [
        {
          name: "Ecosystem",
          path: "/ecosysteme",
          description: "Our digital ecosystem and collaborative approach",
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
      title: "Services",
      links: [
        {
          name: "Web Development",
          path: "/services#web-development",
          description: "Professional website development services",
        },
        {
          name: "Digital Marketing",
          path: "/services#digital-marketing",
          description: "Strategic digital marketing solutions",
        },
        {
          name: "E-commerce",
          path: "/services#ecommerce",
          description: "E-commerce platform development and optimization",
        },
        {
          name: "UI/UX Design",
          path: "/services#design",
          description: "User interface and experience design services",
        },
        {
          name: "SEO & Content",
          path: "/services#seo",
          description: "Search engine optimization and content strategy",
        },
      ],
    },
    {
      title: "Expertise Areas",
      links: [
        {
          name: "Expertise Overview",
          path: "/expertise",
          description: "Overview of our specialized technical expertise areas",
        },
        {
          name: "Web Development",
          path: "/expertise/web-development",
          description: "Professional website and web application development",
        },
        {
          name: "Mobile Development",
          path: "/expertise/mobile-development",
          description: "Native and cross-platform mobile app development",
        },
        {
          name: "E-commerce",
          path: "/expertise/e-commerce",
          description: "Online store and e-commerce platform development",
        },
        {
          name: "Digital Marketing",
          path: "/expertise/digital-marketing",
          description: "Strategic digital marketing and online presence optimization",
        },
      ],
    },
    {
      title: "Media & Resources",
      links: [
        {
          name: "Blog",
          path: "/blog",
          description: "Articles, insights, and updates from our team",
        },
        {
          name: "Media",
          path: "/media",
          description: "Press releases, media kit, and company news",
        },
        {
          name: "References",
          path: "/references",
          description: "Official references and listings for Pledge & Grow",
        },
        {
          name: "Progress",
          path: "/progress",
          description: "Track our company's growth and development milestones",
        },
        {
          name: "Help Center",
          path: "/help-center",
          description: "Support resources, FAQs, and contact options",
        },
      ],
    },
    {
      title: "Legal & Support",
      links: [
        {
          name: "Privacy Policy",
          path: "/legal/privacy",
          description: "Our privacy policy and data protection practices",
        },
        {
          name: "Terms of Service",
          path: "/legal/terms",
          description: "Terms and conditions for using our services",
        },
        {
          name: "Cookie Policy",
          path: "/legal/cookies",
          description: "Information about how we use cookies on our website",
        },
        {
          name: "Legal Notice",
          path: "/legal/notice",
          description: "Legal information about our company and website",
        },
        {
          name: "Site Plan",
          path: "/site-plan",
          description: "Complete overview of all pages on our website",
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {sitePlanData.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl">{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {section.links.map((link) => (
                      <li key={link.path} className="group">
                        <Link 
                          href={link.path}
                          className="flex items-start hover:text-primary transition-colors"
                        >
                          <ChevronRight className="h-5 w-5 mt-0.5 mr-2 text-muted-foreground group-hover:text-primary transition-colors" />
                          <div>
                            <h3 className="font-medium">{link.name}</h3>
                            <p className="text-sm text-muted-foreground">{link.description}</p>
                          </div>
                        </Link>
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
