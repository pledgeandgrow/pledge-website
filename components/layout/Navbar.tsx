"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expertiseOpen, setExpertiseOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

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
              alt="Pledge & Grow Logo" 
              width={240} 
              height={80} 
              className="h-16 w-auto"
            />
          )}
          <span className="self-center text-xl font-semibold whitespace-nowrap text-gray-800 dark:text-white hidden sm:block">
            Pledge & Grow
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
            <span className="sr-only">Open main menu</span>
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
                Company
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
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">About</h3>
                    <ul className="space-y-3">
                      <li>
                        <Link href="/about" className="text-gray-700 dark:text-gray-300">
                          Identity
                        </Link>
                      </li>
                      <li>
                        <Link href="/progress" className="text-gray-700 dark:text-gray-300">
                          Progress
                        </Link>
                      </li>
                      <li>
                        <Link href="/international" className="text-gray-700 dark:text-gray-300">
                          International
                        </Link>
                      </li>
                      <li>
                        <Link href="/ecosysteme" className="text-gray-700 dark:text-gray-300">
                          Ecosystem
                        </Link>
                      </li>
                    </ul>
                  </div>
                  
                  {/* Opportunities Column */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Opportunities</h3>
                    <ul className="space-y-3">
                      <li>
                        <Link href="/grants-subsidies" className="text-gray-700 dark:text-gray-300">
                          Grants & Subsidies
                        </Link>
                      </li>
                      <li>
                        <Link href="/business-sectors" className="text-gray-700 dark:text-gray-300">
                          Business Sectors
                        </Link>
                      </li>
                      <li>
                        <Link href="/membership" className="text-gray-700 dark:text-gray-300">
                          Membership
                        </Link>
                      </li>
                      <li>
                        <Link href="/careers" className="text-gray-700 dark:text-gray-300">
                          Careers
                        </Link>
                      </li>
                    </ul>
                  </div>
                  
                  {/* Community Column */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Community</h3>
                    <ul className="space-y-3">
                      <li>
                        <Link href="/partners" className="text-gray-700 dark:text-gray-300">
                          Partners
                        </Link>
                      </li>
                      <li>
                        <Link href="/ambassadors" className="text-gray-700 dark:text-gray-300">
                          Ambassadors
                        </Link>
                      </li>
                      <li>
                        <Link href="/investors" className="text-gray-700 dark:text-gray-300">
                          Investors
                        </Link>
                      </li>
                      <li>
                        <Link href="/join-our-community" className="text-gray-700 dark:text-gray-300">
                          Join Our Community
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
                Services
              </Link>
            </li>
            <li className="relative">
              <button 
                onClick={toggleExpertise}
                className="flex items-center py-2 px-3 text-gray-900 dark:text-white rounded md:p-0"
              >
                Expertise
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
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Creation</h3>
                    <ul className="space-y-3">
                      <li>
                        <Link href="/expertise/website" className="text-gray-700 dark:text-gray-300">
                          Website
                        </Link>
                      </li>
                      <li>
                        <Link href="/expertise/saas" className="text-gray-700 dark:text-gray-300">
                          SaaS
                        </Link>
                      </li>
                      <li>
                        <Link href="/expertise/mobile-application" className="text-gray-700 dark:text-gray-300">
                          Mobile Application
                        </Link>
                      </li>
                      <li>
                        <Link href="/expertise/software" className="text-gray-700 dark:text-gray-300">
                          Software
                        </Link>
                      </li>
                      <li>
                        <Link href="/expertise/video-games" className="text-gray-700 dark:text-gray-300">
                          Video Games
                        </Link>
                      </li>
                    </ul>
                  </div>
                  
                  {/* Integration Column */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Integration</h3>
                    <ul className="space-y-3">
                      <li>
                        <Link href="/expertise/e-commerce" className="text-gray-700 dark:text-gray-300">
                          E-commerce
                        </Link>
                      </li>
                      <li>
                        <Link href="/expertise/ai-automation" className="text-gray-700 dark:text-gray-300">
                          AI & Automation
                        </Link>
                      </li>
                      <li>
                        <Link href="/expertise/blockchain" className="text-gray-700 dark:text-gray-300">
                          Blockchain
                        </Link>
                      </li>
                      <li>
                        <Link href="/expertise/cybersecurity" className="text-gray-700 dark:text-gray-300">
                          Cybersecurity
                        </Link>
                      </li>
                      <li>
                        <Link href="/expertise/cloud-devops" className="text-gray-700 dark:text-gray-300">
                          Cloud / DevOps
                        </Link>
                      </li>
                    </ul>
                  </div>
                  
                  {/* Complementary Column */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Complementary</h3>
                    <ul className="space-y-3">
                      <li>
                        <Link href="/expertise/documentation" className="text-gray-700 dark:text-gray-300">
                          Documentation
                        </Link>
                      </li>
                      <li>
                        <Link href="/expertise/design-ux-ui" className="text-gray-700 dark:text-gray-300">
                          UX/UI Design
                        </Link>
                      </li>
                      <li>
                        <Link href="/expertise/seo" className="text-gray-700 dark:text-gray-300">
                          SEO
                        </Link>
                      </li>
                      <li>
                        <Link href="/expertise/maintenance" className="text-gray-700 dark:text-gray-300">
                          Maintenance
                        </Link>
                      </li>
                      <li>
                        <Link href="/expertise/consulting-training" className="text-gray-700 dark:text-gray-300">
                          Consulting / Training
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
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block py-2 px-3 text-gray-900 dark:text-white rounded md:p-0">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <Button asChild variant="default" size="sm">
            <Link href="/digital-project" className="flex items-center">
              Start My Project
            </Link>
          </Button>
          <ThemeToggle />
        </div>
        
        {/* Mobile menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:hidden`}>
          <ul className="flex flex-col font-medium p-4 mt-4 border border-gray-100 rounded-lg bg-background dark:bg-background dark:border-gray-700">
            <li>
              <button
                onClick={toggleCompany}
                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 dark:text-white"
              >
                Company
                <svg className={`w-2.5 h-2.5 ms-2 transition-transform ${companyOpen ? 'rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                </svg>
              </button>
              {companyOpen && (
                <div className="px-4 py-2 bg-background dark:bg-background rounded-md">
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-primary mb-2">About Us</h3>
                    <ul className="space-y-2 pl-3">
                      <li>
                        <Link href="/about" className="text-gray-700 dark:text-gray-300">
                          Identity
                        </Link>
                      </li>
                      <li>
                        <Link href="/progress" className="text-gray-700 dark:text-gray-300">
                          Progress
                        </Link>
                      </li>
                      <li>
                        <Link href="/international" className="text-gray-700 dark:text-gray-300">
                          International
                        </Link>
                      </li>
                      <li>
                        <Link href="/ecosysteme" className="text-gray-700 dark:text-gray-300">
                          Ecosystem
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-primary mb-2">Opportunities</h3>
                    <ul className="space-y-2 pl-3">
                      <li>
                        <Link href="/grants-subsidies" className="text-gray-700 dark:text-gray-300">
                          Grants & Subsidies
                        </Link>
                      </li>
                      <li>
                        <Link href="/business-sectors" className="text-gray-700 dark:text-gray-300">
                          Business Sectors
                        </Link>
                      </li>
                      <li>
                        <Link href="/membership" className="text-gray-700 dark:text-gray-300">
                          Membership
                        </Link>
                      </li>
                      <li>
                        <Link href="/careers" className="text-gray-700 dark:text-gray-300">
                          Careers
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-primary mb-2">Community</h3>
                    <ul className="space-y-2 pl-3">
                      <li>
                        <Link href="/partners" className="text-gray-700 dark:text-gray-300">
                          Partners
                        </Link>
                      </li>
                      <li>
                        <Link href="/ambassadors" className="text-gray-700 dark:text-gray-300">
                          Ambassadors
                        </Link>
                      </li>
                      <li>
                        <Link href="/investors" className="text-gray-700 dark:text-gray-300">
                          Investors
                        </Link>
                      </li>
                      <li>
                        <Link href="/join-our-community" className="text-gray-700 dark:text-gray-300">
                        Join Our Community
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </li>
            <li>
              <Link href="/services" className="block py-2 px-3 text-gray-900 dark:text-white">
                Services
              </Link>
            </li>
            <li>
              <button
                onClick={toggleExpertise}
                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 dark:text-white"
              >
                Expertise
                <svg className={`w-2.5 h-2.5 ms-2 transition-transform ${expertiseOpen ? 'rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                </svg>
              </button>
              {expertiseOpen && (
                <div className="px-4 py-2 bg-background dark:bg-background rounded-md">
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-primary mb-2">Creation</h3>
                    <ul className="space-y-2 pl-3">
                      <li>
                        <Link href="/expertise/website" className="text-gray-700 dark:text-gray-300">
                          Website
                        </Link>
                      </li>
                      <li>
                        <Link href="/expertise/saas" className="text-gray-700 dark:text-gray-300">
                          SaaS
                        </Link>
                      </li>
                      <li>
                        <Link href="/expertise/mobile-application" className="text-gray-700 dark:text-gray-300">
                          Mobile Application
                        </Link>
                      </li>
                      <li>
                        <Link href="/expertise/software" className="text-gray-700 dark:text-gray-300">
                          Software
                        </Link>
                      </li>
                      <li>
                        <Link href="/expertise/video-games" className="text-gray-700 dark:text-gray-300">
                          Video Games
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-primary mb-2">Integration</h3>
                    <ul className="space-y-2 pl-3">
                      <li>
                        <Link href="/expertise/e-commerce" className="text-gray-700 dark:text-gray-300">
                          E-commerce
                        </Link>
                      </li>
                      <li>
                        <Link href="/expertise/ai-automation" className="text-gray-700 dark:text-gray-300">
                          AI & Automation
                        </Link>
                      </li>
                      <li>
                        <Link href="/expertise/blockchain" className="text-gray-700 dark:text-gray-300">
                          Blockchain
                        </Link>
                      </li>
                      <li>
                        <Link href="/expertise/cybersecurity" className="text-gray-700 dark:text-gray-300">
                          Cybersecurity
                        </Link>
                      </li>
                      <li>
                        <Link href="/expertise/cloud-devops" className="text-gray-700 dark:text-gray-300">
                          Cloud / DevOps
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-primary mb-2">Complementary</h3>
                    <ul className="space-y-2 pl-3">
                      <li>
                        <Link href="/expertise/documentation" className="text-gray-700 dark:text-gray-300">
                          Documentation
                        </Link>
                      </li>
                      <li>
                        <Link href="/expertise/design-ux-ui" className="text-gray-700 dark:text-gray-300">
                          UX/UI Design
                        </Link>
                      </li>
                      <li>
                        <Link href="/expertise/seo" className="text-gray-700 dark:text-gray-300">
                          SEO
                        </Link>
                      </li>
                      <li>
                        <Link href="/expertise/maintenance" className="text-gray-700 dark:text-gray-300">
                          Maintenance
                        </Link>
                      </li>
                      <li>
                        <Link href="/expertise/consulting-training" className="text-gray-700 dark:text-gray-300">
                          Consulting / Training
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </li>
            <li>
              <Link href="/portfolio" className="block py-2 px-3 text-gray-900 dark:text-white">
                Portfolio
              </Link>
            </li>
            <li className="mt-4">
              <Button asChild variant="default" size="sm" className="w-full">
                <Link href="/digital-project" className="flex items-center justify-center">
                  Start My Project
                </Link>
              </Button>
            </li>
            <li className="mt-4 flex justify-center">
              <ThemeToggle />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
