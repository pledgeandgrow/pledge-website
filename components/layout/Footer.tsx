"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Phone, Mail, MapPin, ChevronDown, Instagram, Facebook, Youtube, MessageCircle } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { useTranslations } from "@/hooks/useTranslations";


export default function Footer() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const { t } = useTranslations("common");

  // After mounting, we can safely show the UI that depends on the theme
  useEffect(() => {
    setMounted(true);
  }, []);

  const logoSrc = mounted && (theme === 'dark' || resolvedTheme === 'dark') 
    ? '/logo-white.png' 
    : '/logo-black.png';
  
  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };
  
  return (
    <footer className="bg-white dark:bg-[#000703] text-gray-800 dark:text-white">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 md:max-w-xs">
            <h2 className="mb-4 text-sm font-semibold uppercase text-gray-800 dark:text-white">{t("footer.companyName")}</h2>
            <div className="flex items-center mb-4">
              {mounted && (
                <Image 
                  src={logoSrc} 
                  alt={t("footer.logoAlt")} 
                  width={160} 
                  height={53} 
                  className="h-12 w-auto mr-3"
                />
              )}
            </div>
            <p className="mb-4 text-gray-600 dark:text-gray-300 text-sm">
              {t("footer.companyDescription")}
            </p>
            <div className="flex items-center text-gray-600 dark:text-gray-300">
              <MapPin className="h-3 w-3 mr-2 flex-shrink-0" />
              <span className="text-xs">{t("footer.address")}</span>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:grid md:grid-cols-3 gap-8 sm:gap-6">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-800 dark:text-white">{t("footer.sections.enterprise.title")}</h2>
              <ul className="text-gray-600 dark:text-gray-300 font-medium">
                <li className="mb-4">
                  <Link href="/impact" className="hover:underline">{t("footer.sections.enterprise.impact")}</Link>
                </li>
                <li className="mb-4">
                  <Link href="/innovation" className="hover:underline">{t("footer.sections.enterprise.innovation")}</Link>
                </li>
                <li className="mb-4">
                  <Link href="/groupe" className="hover:underline">{t("footer.sections.enterprise.groupe")}</Link>
                </li>
                <li className="mb-4">
                  <Link href="/media" className="hover:underline">{t("footer.sections.enterprise.media")}</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-800 dark:text-white">{t("footer.sections.resources.title")}</h2>
              <ul className="text-gray-600 dark:text-gray-300 font-medium">
                <li className="mb-4">
                  <Link href="/blog" className="hover:underline">{t("footer.sections.resources.blog")}</Link>
                </li>
                <li className="mb-4">
                  <Link href="/help-center" className="hover:underline">{t("footer.sections.resources.helpCenter")}</Link>
                </li>
                <li className="mb-4">
                  <Link href="/references" className="hover:underline">{t("footer.sections.resources.references")}</Link>
                </li>
                <li className="mb-4">
                  <Link href="/site-plan" className="hover:underline">{t("footer.sections.resources.sitePlan")}</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-800 dark:text-white">{t("footer.sections.contact.title")}</h2>
              <ul className="text-gray-600 dark:text-gray-300 font-medium">
                <li className="mb-4">
                  <p className="font-semibold mb-1">{t("footer.sections.contact.support.title")}:</p>
                  <div className="flex items-center mb-2 ml-2">
                    <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                    <a href="mailto:support@pledgeandgrow.com" className="hover:underline">support@pledgeandgrow.com</a>
                  </div>
                  <div className="flex items-center ml-2">
                    <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                    <a href="https://wa.me/33753695840" className="hover:underline">+33 7 53 69 58 40</a>
                    <span className="text-xs ml-2">({t("footer.sections.contact.whatsapp")})</span>
                  </div>
                </li>
                <li className="mb-4">
                  <p className="font-semibold mb-1">{t("footer.sections.contact.commercial.title")}:</p>
                  <div className="flex items-center mb-2 ml-2">
                    <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                    <a href="mailto:commercial@pledgeandgrow.com" className="hover:underline">commercial@pledgeandgrow.com</a>
                  </div>
                  <div className="flex items-center ml-2">
                    <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                    <a href="tel:+971503927710" className="hover:underline">+971 50 392 7710</a>
                    <span className="text-xs ml-2">({t("footer.sections.contact.whatsapp")})</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Mobile Accordion Menu */}
          <div className="md:hidden space-y-4 mt-6">
            <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
              <button 
                onClick={() => toggleSection('enterprise')}
                className="flex justify-between items-center w-full text-left"
              >
                <h2 className="text-sm font-semibold uppercase text-gray-800 dark:text-white">{t("footer.sections.enterprise.title")}</h2>
                <ChevronDown className={`h-4 w-4 transition-transform ${expandedSection === 'enterprise' ? 'rotate-180' : ''}`} />
              </button>
              {expandedSection === 'enterprise' && (
                <ul className="text-gray-600 dark:text-gray-300 font-medium mt-4 pl-2 space-y-3">
                  <li>
                    <Link href="/impact" className="hover:underline">{t("footer.sections.enterprise.impact")}</Link>
                  </li>
                  <li>
                    <Link href="/innovation" className="hover:underline">{t("footer.sections.enterprise.innovation")}</Link>
                  </li>
                  <li>
                    <Link href="/groupe" className="hover:underline">{t("footer.sections.enterprise.groupe")}</Link>
                  </li>
                  <li>
                    <Link href="/media" className="hover:underline">{t("footer.sections.enterprise.media")}</Link>
                  </li>
                </ul>
              )}
            </div>
            
            <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
              <button 
                onClick={() => toggleSection('resources')}
                className="flex justify-between items-center w-full text-left"
              >
                <h2 className="text-sm font-semibold uppercase text-gray-800 dark:text-white">{t("footer.sections.resources.title")}</h2>
                <ChevronDown className={`h-4 w-4 transition-transform ${expandedSection === 'resources' ? 'rotate-180' : ''}`} />
              </button>
              {expandedSection === 'resources' && (
                <ul className="text-gray-600 dark:text-gray-300 font-medium mt-4 pl-2 space-y-3">
                  <li>
                    <Link href="/blog" className="hover:underline">{t("footer.sections.resources.blog")}</Link>
                  </li>
                  <li>
                    <Link href="/help-center" className="hover:underline">{t("footer.sections.resources.helpCenter")}</Link>
                  </li>
                  <li>
                    <Link href="/references" className="hover:underline">{t("footer.sections.resources.references")}</Link>
                  </li>
                  <li>
                    <Link href="/site-plan" className="hover:underline">{t("footer.sections.resources.sitePlan")}</Link>
                  </li>
                </ul>
              )}
            </div>
            
            <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
              <button 
                onClick={() => toggleSection('contact')}
                className="flex justify-between items-center w-full text-left"
              >
                <h2 className="text-sm font-semibold uppercase text-gray-800 dark:text-white">{t("footer.sections.contact.title")}</h2>
                <ChevronDown className={`h-4 w-4 transition-transform ${expandedSection === 'contact' ? 'rotate-180' : ''}`} />
              </button>
              {expandedSection === 'contact' && (
                <ul className="text-gray-600 dark:text-gray-300 font-medium mt-4 pl-2 space-y-4">
                  <li>
                    <p className="font-semibold mb-1">{t("footer.sections.contact.support.title")}:</p>
                    <div className="flex items-center mb-2 ml-2">
                      <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                      <a href="mailto:support@pledgeandgrow.com" className="hover:underline">support@pledgeandgrow.com</a>
                    </div>
                    <div className="flex items-center ml-2">
                      <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                      <a href="tel:+33753695840" className="hover:underline">+33 7 53 69 58 40</a>
                      <span className="text-xs ml-2">({t("footer.sections.contact.whatsapp")})</span>
                    </div>
                  </li>
                  <li>
                    <p className="font-semibold mb-1">{t("footer.sections.contact.commercial.title")}:</p>
                    <div className="flex items-center mb-2 ml-2">
                      <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                      <a href="mailto:commercial@pledgeandgrow.com" className="hover:underline">commercial@pledgeandgrow.com</a>
                    </div>
                    <div className="flex items-center ml-2">
                      <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                      <a href="tel:+971503927710" className="hover:underline">+971 50 392 7710</a>
                      <span className="text-xs ml-2">({t("footer.sections.contact.whatsapp")})</span>
                    </div>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
        
        <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto" />
        
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="mb-4 sm:mb-0 text-center sm:text-left w-full sm:w-auto">
            <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              &copy; 2025 <a href="https://pledgeandgrow.com/" className="hover:underline">Pledge & Grow</a>. {t("footer.copyright")}
            </span>
          </div>

          {/* Legal Politics Menu */}
          <div className="flex flex-wrap justify-center gap-4 mb-4 sm:mb-0">
            <Link href="/legal/terms-conditions" className="text-xs text-gray-500 dark:text-gray-400 hover:underline">
              {t("footer.legal.termsOfService")}
            </Link>
            <Link href="/legal/privacy-policy" className="text-xs text-gray-500 dark:text-gray-400 hover:underline">
              {t("footer.legal.privacyPolicy")}
            </Link>
            <Link href="/legal/cookie-policy" className="text-xs text-gray-500 dark:text-gray-400 hover:underline">
              {t("footer.legal.cookiePolicy")}
            </Link>
            <Link href="/legal/gdpr" className="text-xs text-gray-500 dark:text-gray-400 hover:underline">
              {t("footer.legal.gdpr")}
            </Link>
            <Link href="/legal-notice" className="text-xs text-gray-500 dark:text-gray-400 hover:underline">
              {t("footer.legal.legalNotice")}
            </Link>
          </div>
          
          <div className="flex space-x-4 justify-center">
            <a href="https://www.instagram.com/pledgeandgrow/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white" aria-label={t("footer.social.instagram")}>
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://www.tiktok.com/@pledgeandgrowfr" className="text-gray-500 hover:text-gray-900 dark:hover:text-white" aria-label={t("footer.social.tiktok")}>
              <FaTiktok className="w-4 h-4" />
            </a>
            <a href="https://www.facebook.com/100095753672290/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white" aria-label={t("footer.social.facebook")}>
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://www.youtube.com/@pledgeandgrow" className="text-gray-500 hover:text-gray-900 dark:hover:text-white" aria-label={t("footer.social.youtube")}>
              <Youtube className="w-4 h-4" />
            </a>
            <a href="https://discord.gg/Ud22W3Gp" className="text-gray-500 hover:text-gray-900 dark:hover:text-white" aria-label={t("footer.social.discord")}>
              <FaDiscord className="w-4 h-4" />
            </a>
            <a href="https://wa.me/33753695840" className="text-gray-500 hover:text-gray-900 dark:hover:text-white" aria-label={t("footer.social.whatsapp")}>
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
