"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { ChevronRight } from "lucide-react";
import { useTranslations } from "@/hooks/useTranslations";

interface SitePlanSection {
  title: string;
  links: Array<{
    name: string;
    path: string;
    description: string;
  }>;
}

export default function SitemapList() {
  const { t } = useTranslations('site-plan');
  
  // Build the sitemap data from translations
  const sitePlanData: SitePlanSection[] = [
    {
      title: t('sections.pledgeAndGrow.title'),
      links: [
        {
          name: t('sections.pledgeAndGrow.links.home.name'),
          path: "/",
          description: t('sections.pledgeAndGrow.links.home.description'),
        },
        {
          name: t('sections.pledgeAndGrow.links.contact.name'),
          path: "/contact",
          description: t('sections.pledgeAndGrow.links.contact.description'),
        },
        {
          name: t('sections.pledgeAndGrow.links.services.name'),
          path: "/services",
          description: t('sections.pledgeAndGrow.links.services.description'),
        },
        {
          name: t('sections.pledgeAndGrow.links.portfolio.name'),
          path: "/portfolio",
          description: t('sections.pledgeAndGrow.links.portfolio.description'),
        },
        {
          name: t('sections.pledgeAndGrow.links.startProject.name'),
          path: "/start-project",
          description: t('sections.pledgeAndGrow.links.startProject.description'),
        },
      ],
    },
    {
      title: t('sections.company.title'),
      links: [
        {
          name: t('sections.company.links.identity.name'),
          path: "/about",
          description: t('sections.company.links.identity.description'),
        },
        {
          name: t('sections.company.links.progress.name'),
          path: "/progress",
          description: t('sections.company.links.progress.description'),
        },
        {
          name: t('sections.company.links.international.name'),
          path: "/international",
          description: t('sections.company.links.international.description'),
        },
        {
          name: t('sections.company.links.ecosystem.name'),
          path: "/ecosysteme",
          description: t('sections.company.links.ecosystem.description'),
        },
        {
          name: t('sections.company.links.careers.name'),
          path: "/careers",
          description: t('sections.company.links.careers.description'),
        },
        {
          name: t('sections.company.links.partners.name'),
          path: "/partners",
          description: t('sections.company.links.partners.description'),
        },
        {
          name: t('sections.company.links.ambassadors.name'),
          path: "/ambassadors",
          description: t('sections.company.links.ambassadors.description'),
        },
        {
          name: t('sections.company.links.grantsSubsidies.name'),
          path: "/grants-subsidies",
          description: t('sections.company.links.grantsSubsidies.description'),
        },
        {
          name: t('sections.company.links.businessSectors.name'),
          path: "/business-sectors",
          description: t('sections.company.links.businessSectors.description'),
        },
        {
          name: t('sections.company.links.membership.name'),
          path: "/membership",
          description: t('sections.company.links.membership.description'),
        },
        {
          name: t('sections.company.links.discord.name'),
          path: "/discord",
          description: t('sections.company.links.discord.description'),
        },
      ],
    },
    {
      title: t('sections.expertise.title'),
      links: [
        {
          name: t('sections.expertise.links.website.name'),
          path: "/expertise/website",
          description: t('sections.expertise.links.website.description'),
        },
        {
          name: t('sections.expertise.links.saas.name'),
          path: "/expertise/saas",
          description: t('sections.expertise.links.saas.description'),
        },
        {
          name: t('sections.expertise.links.mobileApplication.name'),
          path: "/expertise/mobile-application",
          description: t('sections.expertise.links.mobileApplication.description'),
        },
        {
          name: t('sections.expertise.links.software.name'),
          path: "/expertise/software",
          description: t('sections.expertise.links.software.description'),
        },
        {
          name: t('sections.expertise.links.videoGames.name'),
          path: "/expertise/video-games",
          description: t('sections.expertise.links.videoGames.description'),
        },
        {
          name: t('sections.expertise.links.ecommerce.name'),
          path: "/expertise/e-commerce",
          description: t('sections.expertise.links.ecommerce.description'),
        },
        {
          name: t('sections.expertise.links.aiAutomation.name'),
          path: "/expertise/ai-automation",
          description: t('sections.expertise.links.aiAutomation.description'),
        },
        {
          name: t('sections.expertise.links.blockchain.name'),
          path: "/expertise/blockchain",
          description: t('sections.expertise.links.blockchain.description'),
        },
        {
          name: t('sections.expertise.links.cybersecurity.name'),
          path: "/expertise/cybersecurity",
          description: t('sections.expertise.links.cybersecurity.description'),
        },
        {
          name: t('sections.expertise.links.cloudDevops.name'),
          path: "/expertise/cloud-devops",
          description: t('sections.expertise.links.cloudDevops.description'),
        },
        {
          name: t('sections.expertise.links.documentation.name'),
          path: "/expertise/documentation",
          description: t('sections.expertise.links.documentation.description'),
        },
        {
          name: t('sections.expertise.links.uxUiDesign.name'),
          path: "/expertise/design-ux-ui",
          description: t('sections.expertise.links.uxUiDesign.description'),
        },
        {
          name: t('sections.expertise.links.seo.name'),
          path: "/expertise/seo",
          description: t('sections.expertise.links.seo.description'),
        },
        {
          name: t('sections.expertise.links.maintenance.name'),
          path: "/expertise/maintenance",
          description: t('sections.expertise.links.maintenance.description'),
        },
        {
          name: t('sections.expertise.links.consultingTraining.name'),
          path: "/expertise/consulting-training",
          description: t('sections.expertise.links.consultingTraining.description'),
        },
      ],
    },
    {
      title: t('sections.enterprise.title'),
      links: [
        {
          name: t('sections.enterprise.links.impact.name'),
          path: "/impact",
          description: t('sections.enterprise.links.impact.description'),
        },
        {
          name: t('sections.enterprise.links.innovation.name'),
          path: "/innovation",
          description: t('sections.enterprise.links.innovation.description'),
        },
        {
          name: t('sections.enterprise.links.groupe.name'),
          path: "/groupe",
          description: t('sections.enterprise.links.groupe.description'),
        },
        {
          name: t('sections.enterprise.links.media.name'),
          path: "/media",
          description: t('sections.enterprise.links.media.description'),
        },
      ],
    },
    {
      title: t('sections.resources.title'),
      links: [
        {
          name: t('sections.resources.links.blog.name'),
          path: "/blog",
          description: t('sections.resources.links.blog.description'),
        },
        {
          name: t('sections.resources.links.helpCenter.name'),
          path: "/help-center",
          description: t('sections.resources.links.helpCenter.description'),
        },
        {
          name: t('sections.resources.links.references.name'),
          path: "/references",
          description: t('sections.resources.links.references.description'),
        },
        {
          name: t('sections.resources.links.sitePlan.name'),
          path: "/site-plan",
          description: t('sections.resources.links.sitePlan.description'),
        },
      ],
    },
    {
      title: t('sections.legal.title'),
      links: [
        {
          name: t('sections.legal.links.termsOfService.name'),
          path: "/legal/terms-conditions",
          description: t('sections.legal.links.termsOfService.description'),
        },
        {
          name: t('sections.legal.links.privacyPolicy.name'),
          path: "/legal/privacy-policy",
          description: t('sections.legal.links.privacyPolicy.description'),
        },
        {
          name: t('sections.legal.links.cookiePolicy.name'),
          path: "/legal/cookie-policy",
          description: t('sections.legal.links.cookiePolicy.description'),
        },
        {
          name: t('sections.legal.links.gdpr.name'),
          path: "/legal/gdpr",
          description: t('sections.legal.links.gdpr.description'),
        },
        {
          name: t('sections.legal.links.legalNotice.name'),
          path: "/legal/legal-notice",
          description: t('sections.legal.links.legalNotice.description'),
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
            {t('title')}
          </h1>
          <p className="text-lg text-muted-foreground">
            {t('description')}
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
