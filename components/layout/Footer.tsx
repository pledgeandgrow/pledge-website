"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Phone, Mail, MapPin, ChevronDown } from "lucide-react";

export default function Footer() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

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
          <div className="mb-6 md:mb-0">
            <h2 className="mb-6 text-sm font-semibold uppercase text-gray-800 dark:text-white">PLEDGE AND GROW</h2>
            <p className="mt-2 max-w-md text-gray-600 dark:text-gray-300">
              Building the future of digital experiences with cutting-edge technology and innovative solutions.
            </p>
            <div className="mt-4 flex items-center text-gray-600 dark:text-gray-300">
              <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
              <span className="text-sm">4Bis Rue Alfred Nobel - 77420 - Ile-de-france</span>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:grid md:grid-cols-3 gap-8 sm:gap-6">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-800 dark:text-white">Enterprise</h2>
              <ul className="text-gray-600 dark:text-gray-300 font-medium">
                <li className="mb-4">
                  <Link href="/impact" className="hover:underline">Impact</Link>
                </li>
                <li className="mb-4">
                  <Link href="/innovation" className="hover:underline">Innovation</Link>
                </li>
                <li className="mb-4">
                  <Link href="/groupe" className="hover:underline">Groupe</Link>
                </li>
                <li className="mb-4">
                  <Link href="/media" className="hover:underline">Media</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-800 dark:text-white">Resources</h2>
              <ul className="text-gray-600 dark:text-gray-300 font-medium">
                <li className="mb-4">
                  <Link href="/help-center" className="hover:underline">Help Center</Link>
                </li>
                <li className="mb-4">
                  <Link href="/references" className="hover:underline">References</Link>
                </li>
                <li className="mb-4">
                  <Link href="/faq" className="hover:underline">FAQ</Link>
                </li>
                <li className="mb-4">
                  <Link href="/site-plan" className="hover:underline">Site Plan</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-800 dark:text-white">Contact</h2>
              <ul className="text-gray-600 dark:text-gray-300 font-medium">
                <li className="mb-4 flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <a href="tel:+33753695840" className="hover:underline">+33 7 53 69 58 40</a>
                </li>
                <li className="mb-4 flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <a href="mailto:contact@pledgeandgrow.com" className="hover:underline">contact@pledgeandgrow.com</a>
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
                <h2 className="text-sm font-semibold uppercase text-gray-800 dark:text-white">Enterprise</h2>
                <ChevronDown className={`h-4 w-4 transition-transform ${expandedSection === 'enterprise' ? 'rotate-180' : ''}`} />
              </button>
              {expandedSection === 'enterprise' && (
                <ul className="text-gray-600 dark:text-gray-300 font-medium mt-4 pl-2 space-y-3">
                  <li>
                    <Link href="/impact" className="hover:underline">Impact</Link>
                  </li>
                  <li>
                    <Link href="/innovation" className="hover:underline">Innovation</Link>
                  </li>
                  <li>
                    <Link href="/groupe" className="hover:underline">Groupe</Link>
                  </li>
                  <li>
                    <Link href="/media" className="hover:underline">Media</Link>
                  </li>
                </ul>
              )}
            </div>
            
            <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
              <button 
                onClick={() => toggleSection('resources')}
                className="flex justify-between items-center w-full text-left"
              >
                <h2 className="text-sm font-semibold uppercase text-gray-800 dark:text-white">Resources</h2>
                <ChevronDown className={`h-4 w-4 transition-transform ${expandedSection === 'resources' ? 'rotate-180' : ''}`} />
              </button>
              {expandedSection === 'resources' && (
                <ul className="text-gray-600 dark:text-gray-300 font-medium mt-4 pl-2 space-y-3">
                  <li>
                    <Link href="/help-center" className="hover:underline">Help Center</Link>
                  </li>
                  <li>
                    <Link href="/references" className="hover:underline">References (Annuaires)</Link>
                  </li>
                  <li>
                    <Link href="/faq" className="hover:underline">FAQ</Link>
                  </li>
                  <li>
                    <Link href="/site-plan" className="hover:underline">Site Plan</Link>
                  </li>
                </ul>
              )}
            </div>
            
            <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
              <button 
                onClick={() => toggleSection('contact')}
                className="flex justify-between items-center w-full text-left"
              >
                <h2 className="text-sm font-semibold uppercase text-gray-800 dark:text-white">Contact</h2>
                <ChevronDown className={`h-4 w-4 transition-transform ${expandedSection === 'contact' ? 'rotate-180' : ''}`} />
              </button>
              {expandedSection === 'contact' && (
                <ul className="text-gray-600 dark:text-gray-300 font-medium mt-4 pl-2 space-y-3">
                  <li className="flex items-center">
                    <Phone className="h-4 w-4 mr-2" />
                    <a href="tel:+33753695840" className="hover:underline">+33 7 53 69 58 40</a>
                  </li>
                  <li className="flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    <a href="mailto:contact@pledgeandgrow.com" className="hover:underline">contact@pledgeandgrow.com</a>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
        
        <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto" />
        
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center mb-4 sm:mb-0">
            {mounted && (
              <Image 
                src={logoSrc} 
                alt="Pledge & Grow Logo" 
                width={160} 
                height={53} 
                className="h-10 w-auto mr-3"
              />
            )}
            <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              &copy; {new Date().getFullYear()} <a href="https://pledgeandgrow.com/" className="hover:underline">Pledge & Grow</a>. All Rights Reserved.
            </span>
          </div>
          
          <div className="flex space-x-5 justify-center">
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                <path fillRule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07a4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clipRule="evenodd"/>
              </svg>
              <span className="sr-only">Twitter page</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd"/>
              </svg>
              <span className="sr-only">GitHub account</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152a9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8a11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02a35.65 35.65 0 0 1 1.819 6.476a8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364a8.56 8.56 0 0 1-3.66 5.73h-.002Z" clipRule="evenodd"/>
              </svg>
              <span className="sr-only">Dribbble account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
