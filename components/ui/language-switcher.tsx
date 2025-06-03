"use client";

import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { Button } from "@/components/ui/button";
import { locales, defaultLocale } from '@/hooks/useTranslations';

export default function LanguageSwitcher() {
  const [currentLocale, setCurrentLocale] = useState(defaultLocale);

  useEffect(() => {
    // Get locale from cookie on component mount
    const cookieLocale = Cookies.get('NEXT_LOCALE');
    if (cookieLocale && locales.includes(cookieLocale)) {
      setCurrentLocale(cookieLocale);
    }
  }, []);

  const switchLanguage = (locale: string) => {
    if (locales.includes(locale)) {
      // Set cookie
      Cookies.set('NEXT_LOCALE', locale, { expires: 365, path: '/' });
      
      // Update state
      setCurrentLocale(locale);
      
      // Reload page to apply new translations
      window.location.reload();
    }
  };

  return (
    <div className="flex items-center space-x-2">
      {locales.map((locale) => (
        <Button
          key={locale}
          variant={locale === currentLocale ? "default" : "outline"}
          size="sm"
          onClick={() => switchLanguage(locale)}
          className="uppercase"
        >
          {locale}
        </Button>
      ))}
    </div>
  );
}
