"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { usePathname } from "next/navigation";
import { useTranslations } from "@/hooks/useTranslations";
import LanguageSwitcher from "@/components/shared/LanguageSwitcher";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [expertiseOpen, setExpertiseOpen] = useState(false);
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { t } = useTranslations('common');

  // After mounting, we can safely show the UI that depends on the theme
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (expertiseOpen) setExpertiseOpen(false);
    if (companyOpen) setCompanyOpen(false);
  };

  const toggleExpertise = () => {
    setExpertiseOpen(!expertiseOpen);
    if (companyOpen) setCompanyOpen(false);
  };

  const toggleCompany = () => {
    setCompanyOpen(!companyOpen);
    if (expertiseOpen) setExpertiseOpen(false);
  };

  const logoSrc = mounted && (theme === 'dark' || resolvedTheme === 'dark') 
    ? '/logo-white.png' 
    : '/logo-black.png';

  return (
    <nav className="bg-white dark:bg-[#000703] fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          {mounted && (
            <Image 
              src={logoSrc} 
              alt={t('general.companyName')} 
              width={160} 
              height={53} 
              className="h-12 w-auto mr-3"
            />
          )}
          <span className="self-center text-xl font-semibold whitespace-nowrap text-gray-800 dark:text-white hidden sm:block">
            {t('general.companyName')}
          </span>
        </Link>
        
        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button 
            type="button" 
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">{t('general.openMainMenu')}</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
        
        <div className="hidden md:flex md:items-center md:w-auto">
          {/* Desktop Navigation */}
          <ul className="flex flex-row space-x-8 mt-0 font-medium">
            <li className="relative">
              <button 
                onClick={toggleCompany}
                className="flex items-center py-2 px-3 text-gray-900 dark:text-white rounded md:p-0"
              >
                {t('navbar.company')}
                <svg className="w-2.5 h-2.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                </svg>
              </button>
              {/* Company Megamenu */}
              {companyOpen && (
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 z-10 mt-2 w-screen max-w-4xl bg-background dark:bg-background rounded-lg shadow-lg py-5 px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 px-2">
                  {/* About Us Column */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{t('navbar.companyMenu.about.title')}</h3>
                    <ul className="space-y-3">
                      <li>
                        <Link href="/about" className="text-gray-700 dark:text-gray-300">
                          {t('navbar.companyMenu.about.identity')}
                        </Link>
                      </li>
                      <li>
                        <Link href="/progress" className="text-gray-700 dark:text-gray-300">
                          {t('navbar.companyMenu.about.progress')}
                        </Link>
                      </li>
                      <li>
                        <Link href="/international" className="text-gray-700 dark:text-gray-300">
                          {t('navbar.companyMenu.about.international')}
                        </Link>
                      </li>
                      <li>
                        <Link href="/ecosysteme" className="text-gray-700 dark:text-gray-300">
                          {t('navbar.companyMenu.about.ecosystem')}
                        </Link>
                      </li>
                    </ul>
                  </div>
                  
                  {/* Opportunities Column */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{t('navbar.companyMenu.opportunities.title')}</h3>
                    <ul className="space-y-3">
                      <li>
                        <Link href="/grants-subsidies" className="text-gray-700 dark:text-gray-300">
                          {t('navbar.companyMenu.opportunities.grantsSubsidies')}
                        </Link>
                      </li>
                      <li>
                        <Link href="/business-sectors" className="text-gray-700 dark:text-gray-300">
                          {t('navbar.companyMenu.opportunities.businessSectors')}
                        </Link>
                      </li>
                      <li>
                        <Link href="/membership" className="text-gray-700 dark:text-gray-300">
                          {t('navbar.companyMenu.opportunities.membership')}
                        </Link>
                      </li>
                      <li>
                        <Link href="/careers" className="text-gray-700 dark:text-gray-300">
                          {t('navbar.companyMenu.opportunities.careers')}
                        </Link>
                      </li>
                    </ul>
                  </div>
                  
                  {/* Community Column */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{t('navbar.companyMenu.community.title')}</h3>
                    <ul className="space-y-3">
                      <li>
                        <Link href="/partners" className="text-gray-700 dark:text-gray-300">
                          {t('navbar.companyMenu.community.partners')}
                        </Link>
                      </li>
                      <li>
                        <Link href="/ambassadors" className="text-gray-700 dark:text-gray-300">
                          {t('navbar.companyMenu.community.ambassadors')}
                        </Link>
                      </li>
                      <li>
                        <Link href="/investors" className="text-gray-700 dark:text-gray-300">
                          {t('navbar.companyMenu.community.investors')}
                        </Link>
                      </li>
                      <li>
                        <Link href="/discord" className="text-gray-700 dark:text-gray-300">
                          {t('navbar.companyMenu.community.discord')}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              )}
            </li>
            <li>
              <Link href="/services" className="block py-2 px-3 text-gray-900 dark:text-white rounded md:p-0">
                {t('navbar.services')}
              </Link>
            </li>
            <li className="relative">
              <button 
                onClick={toggleExpertise}
                className="flex items-center py-2 px-3 text-gray-900 dark:text-white rounded md:p-0"
              >
                {t('navbar.expertise')}
                <svg className="w-2.5 h-2.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                </svg>
              </button>
              {/* Expertise Megamenu */}
              {expertiseOpen && (
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 z-10 mt-2 w-screen max-w-5xl bg-background dark:bg-background rounded-lg shadow-lg py-5 px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 px-2">
                  {/* Creation Column */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{t('navbar.expertiseMenu.creation.title')}</h3>
                    <ul className="space-y-3">
                      <li>
                        <Link href="/expertise/website" className="text-gray-700 dark:text-gray-300">
                          {t('navbar.expertiseMenu.creation.website')}
                        </Link>
                      </li>
                      <li>
                        <Link href="/expertise/saas" className="text-gray-700 dark:text-gray-300">
                          {t('navbar.expertiseMenu.creation.saas')}
                        </Link>
                      </li>
                      <li>
                        <Link href="/expertise/mobile-application" className="text-gray-700 dark:text-gray-300">
                          {t('navbar.expertiseMenu.creation.mobileApplication')}
                        </Link>
                      </li>
                      <li>
                        <Link href="/expertise/software" className="text-gray-700 dark:text-gray-300">
                          {t('navbar.expertiseMenu.creation.software')}
                        </Link>
                      </li>
                      <li>
                        <Link href="/expertise/video-games" className="text-gray-700 dark:text-gray-300">
                          {t('navbar.expertiseMenu.creation.videoGames')}
                        </Link>
                      </li>
                    </ul>
                  </div>
                  
                  {/* Integration Column */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{t('navbar.expertiseMenu.integration.title')}</h3>
                    <ul className="space-y-3">
                      <li>
                        <Link href="/expertise/e-commerce" className="text-gray-700 dark:text-gray-300">
                          {t('navbar.expertiseMenu.integration.ecommerce')}
                        </Link>
                      </li>
                      <li>
                        <Link href="/expertise/ai-automation" className="text-gray-700 dark:text-gray-300">
                          {t('navbar.expertiseMenu.integration.aiAutomation')}
                        </Link>
                      </li>
                      <li>
                        <Link href="/expertise/blockchain" className="text-gray-700 dark:text-gray-300">
                          {t('navbar.expertiseMenu.integration.blockchain')}
                        </Link>
                      </li>
                      <li>
                        <Link href="/expertise/cybersecurity" className="text-gray-700 dark:text-gray-300">
                          {t('navbar.expertiseMenu.integration.cybersecurity')}
                        </Link>
                      </li>
                      <li>
                        <Link href="/expertise/cloud-devops" className="text-gray-700 dark:text-gray-300">
                          {t('navbar.expertiseMenu.integration.cloudDevops')}
                        </Link>
                      </li>
                    </ul>
                  </div>
                  
                  {/* Complementary Column */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{t('navbar.expertiseMenu.complementary.title')}</h3>
                    <ul className="space-y-3">
                      <li>
                        <Link href="/expertise/documentation" className="text-gray-700 dark:text-gray-300">
                          {t('navbar.expertiseMenu.complementary.documentation')}
                        </Link>
                      </li>
                      <li>
                        <Link href="/expertise/design-ux-ui" className="text-gray-700 dark:text-gray-300">
                          {t('navbar.expertiseMenu.complementary.designUxUi')}
                        </Link>
                      </li>
                      <li>
                        <Link href="/expertise/seo" className="text-gray-700 dark:text-gray-300">
                          {t('navbar.expertiseMenu.complementary.seo')}
                        </Link>
                      </li>
                      <li>
                        <Link href="/expertise/maintenance" className="text-gray-700 dark:text-gray-300">
                          {t('navbar.expertiseMenu.complementary.maintenance')}
                        </Link>
                      </li>
                      <li>
                        <Link href="/expertise/consulting-training" className="text-gray-700 dark:text-gray-300">
                          {t('navbar.expertiseMenu.complementary.consultingTraining')}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              )}
            </li>
            <li>
              <Link href="/portfolio" className="block py-2 px-3 text-gray-900 dark:text-white rounded md:p-0">
                {t('navbar.portfolio')}
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block py-2 px-3 text-gray-900 dark:text-white rounded md:p-0">
                {t('navbar.contact')}
              </Link>
            </li>
          </ul>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <Button asChild variant="default" size="sm">
            <Link href="/digital-project" className="flex items-center">
              {t('navbar.startMyProject')}
            </Link>
          </Button>
          <ThemeToggle />
          <LanguageSwitcher />
        </div>
        
        {/* Mobile menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:hidden`}>
          <ul className="flex flex-col font-medium p-4 mt-4 border border-gray-100 rounded-lg bg-background dark:bg-background dark:border-gray-700">
            <li>
              <button
                onClick={toggleCompany}
                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 dark:text-white"
              >
                {t('navbar.company')}
                <svg className={`w-2.5 h-2.5 ms-2 transition-transform ${companyOpen ? 'rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                </svg>
              </button>
              {companyOpen && (
                <div className="px-4 py-2 bg-background dark:bg-background rounded-md">
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-primary mb-2">{t('navbar.companyMenu.about.title')}</h3>
                    <ul className="space-y-2 pl-3">
                      <li>
                        <Link href="/about" className="text-gray-700 dark:text-gray-300">
                          {t('navbar.companyMenu.about.identity')}
                        </Link>
                      </li>
                      <li>
                        <Link href="/progress" className="text-gray-700 dark:text-gray-300">
                          {t('navbar.companyMenu.about.progress')}
                        </Link>
                      </li>
                      <li>
                        <Link href="/international" className="text-gray-700 dark:text-gray-300">
                          {t('navbar.companyMenu.about.international')}
                        </Link>
                      </li>
                      <li>
                        <Link href="/ecosysteme" className="text-gray-700 dark:text-gray-300">
                          {t('navbar.companyMenu.about.ecosystem')}
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-primary mb-2">{t('navbar.companyMenu.opportunities.title')}</h3>
                    <ul className="space-y-2 pl-3">
                      <li>
                        <Link href="/grants-subsidies" className="text-gray-700 dark:text-gray-300">
                          {t('navbar.companyMenu.opportunities.grantsSubsidies')}
                        </Link>
                      </li>
                      <li>
                        <Link href="/business-sectors" className="text-gray-700 dark:text-gray-300">
                          {t('navbar.companyMenu.opportunities.businessSectors')}
                        </Link>
                      </li>
                      <li>
                        <Link href="/membership" className="text-gray-700 dark:text-gray-300">
                          {t('navbar.companyMenu.opportunities.membership')}
                        </Link>
                      </li>
                      <li>
                        <Link href="/careers" className="text-gray-700 dark:text-gray-300">
                          {t('navbar.companyMenu.opportunities.careers')}
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-primary mb-2">{t('navbar.companyMenu.community.title')}</h3>
                    <ul className="space-y-2 pl-3">
                      <li>
                        <Link href="/partners" className="text-gray-700 dark:text-gray-300">
                          {t('navbar.companyMenu.community.partners')}
                        </Link>
                      </li>
                      <li>
                        <Link href="/ambassadors" className="text-gray-700 dark:text-gray-300">
                          {t('navbar.companyMenu.community.ambassadors')}
                        </Link>
                      </li>
                      <li>
                        <Link href="/investors" className="text-gray-700 dark:text-gray-300">
                          {t('navbar.companyMenu.community.investors')}
                        </Link>
                      </li>
                      <li>
                        <Link href="/discord" className="text-gray-700 dark:text-gray-300">
                          {t('navbar.companyMenu.community.discord')}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </li>
            <li>
              <Link href="/services" className="block py-2 px-3 text-gray-900 dark:text-white">
                {t('navbar.services')}
              </Link>
            </li>
            <li>
              <button
                onClick={toggleExpertise}
                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 dark:text-white"
              >
                {t('navbar.expertise')}
                <svg className={`w-2.5 h-2.5 ms-2 transition-transform ${expertiseOpen ? 'rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                </svg>
              </button>
              {expertiseOpen && (
                <div className="px-4 py-2 bg-background dark:bg-background rounded-md">
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-primary mb-2">{t('navbar.expertiseMenu.creation.title')}</h3>
                    <ul className="space-y-2 pl-3">
                      <li>
                        <Link href="/expertise/website" className="text-gray-700 dark:text-gray-300">
                          {t('navbar.expertiseMenu.creation.website')}
                        </Link>
                      </li>
                      <li>
                        <Link href="/expertise/saas" className="text-gray-700 dark:text-gray-300">
                          {t('navbar.expertiseMenu.creation.saas')}
                        </Link>
                      </li>
                      <li>
                        <Link href="/expertise/mobile-application" className="text-gray-700 dark:text-gray-300">
                          {t('navbar.expertiseMenu.creation.mobileApplication')}
                        </Link>
                      </li>
                      <li>
                        <Link href="/expertise/software" className="text-gray-700 dark:text-gray-300">
                          {t('navbar.expertiseMenu.creation.software')}
                        </Link>
                      </li>
                      <li>
                        <Link href="/expertise/video-games" className="text-gray-700 dark:text-gray-300">
                          {t('navbar.expertiseMenu.creation.videoGames')}
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-primary mb-2">{t('navbar.expertiseMenu.integration.title')}</h3>
                    <ul className="space-y-2 pl-3">
                      <li>
                        <Link href="/expertise/e-commerce" className="text-gray-700 dark:text-gray-300">
                          {t('navbar.expertiseMenu.integration.ecommerce')}
                        </Link>
                      </li>
                      <li>
                        <Link href="/expertise/ai-automation" className="text-gray-700 dark:text-gray-300">
                          {t('navbar.expertiseMenu.integration.aiAutomation')}
                        </Link>
                      </li>
                      <li>
                        <Link href="/expertise/blockchain" className="text-gray-700 dark:text-gray-300">
                          {t('navbar.expertiseMenu.integration.blockchain')}
                        </Link>
                      </li>
                      <li>
                        <Link href="/expertise/cybersecurity" className="text-gray-700 dark:text-gray-300">
                          {t('navbar.expertiseMenu.integration.cybersecurity')}
                        </Link>
                      </li>
                      <li>
                        <Link href="/expertise/cloud-devops" className="text-gray-700 dark:text-gray-300">
                          {t('navbar.expertiseMenu.integration.cloudDevops')}
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-primary mb-2">{t('navbar.expertiseMenu.complementary.title')}</h3>
                    <ul className="space-y-2 pl-3">
                      <li>
                        <Link href="/expertise/documentation" className="text-gray-700 dark:text-gray-300">
                          {t('navbar.expertiseMenu.complementary.documentation')}
                        </Link>
                      </li>
                      <li>
                        <Link href="/expertise/design-ux-ui" className="text-gray-700 dark:text-gray-300">
                          {t('navbar.expertiseMenu.complementary.designUxUi')}
                        </Link>
                      </li>
                      <li>
                        <Link href="/expertise/seo" className="text-gray-700 dark:text-gray-300">
                          {t('navbar.expertiseMenu.complementary.seo')}
                        </Link>
                      </li>
                      <li>
                        <Link href="/expertise/maintenance" className="text-gray-700 dark:text-gray-300">
                          {t('navbar.expertiseMenu.complementary.maintenance')}
                        </Link>
                      </li>
                      <li>
                        <Link href="/expertise/consulting-training" className="text-gray-700 dark:text-gray-300">
                          {t('navbar.expertiseMenu.complementary.consultingTraining')}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </li>
            <li>
              <Link href="/portfolio" className="block py-2 px-3 text-gray-900 dark:text-white">
                {t('navbar.portfolio')}
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block py-2 px-3 text-gray-900 dark:text-white">
                {t('navbar.contact')}
              </Link>
            </li>
            <li className="mt-4">
              <Button asChild variant="default" size="sm" className="w-full">
                <Link href="/digital-project" className="flex items-center justify-center">
                  {t('navbar.startMyProject')}
                </Link>
              </Button>
            </li>
            <li className="mt-4 flex justify-center space-x-4">
              <ThemeToggle />
              <LanguageSwitcher />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
