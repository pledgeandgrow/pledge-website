'use client';

import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Globe } from 'lucide-react';
import { locales, defaultLocale, useTranslations } from '@/hooks/useTranslations';

// Language options
const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
];

export default function LanguageSwitcher() {
  const [currentLocale, setCurrentLocale] = useState(defaultLocale);
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const { t } = useTranslations('common');

  useEffect(() => {
    // Get locale from cookie on component mount
    const cookieLocale = Cookies.get('NEXT_LOCALE');
    if (cookieLocale && locales.includes(cookieLocale)) {
      setCurrentLocale(cookieLocale);
    }
  }, []);

  // Handle language change
  const handleLanguageChange = (locale: string) => {
    if (locale === currentLocale) return;
    
    setIsOpen(false);
    setIsPending(true);
    
    // Set cookie
    Cookies.set('NEXT_LOCALE', locale, { expires: 365, path: '/' });
    
    // Update state
    setCurrentLocale(locale);
    
    // Preload translations before reloading
    const preloadTranslations = async () => {
      try {
        // Preload common translations
        await import(`../../locales/${locale}/common.json`);
        // Preload home translations
        await import(`../../locales/${locale}/home.json`);
        // Preload progress translations
        await import(`../../locales/${locale}/progress.json`);
        // Preload international translations
        await import(`../../locales/${locale}/international.json`).catch(() => console.warn(`No international translations for ${locale}`));
        // Preload blog translations
        await import(`../../locales/${locale}/blog.json`).catch(() => console.warn(`No blog translations for ${locale}`));
        
        // Preload blog article translations
        try {
          await import(`../../locales/${locale}/blog/article-1.json`);
          await import(`../../locales/${locale}/blog/article-2.json`);
          await import(`../../locales/${locale}/blog/article-3.json`);
        } catch (err) {
          console.warn(`Error loading blog articles for ${locale}:`, err);
        }
        // Reload page to apply new translations
        window.location.reload();
      } catch (error) {
        console.error('Error preloading translations:', error);
        // Reload anyway if preloading fails
        window.location.reload();
      }
    };
    
    preloadTranslations();
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="sm" 
          className="flex items-center gap-2 px-3 py-1 h-9 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          disabled={isPending}
        >
          <Globe className="h-4 w-4" />
          <span className="text-sm font-medium">{currentLocale === 'en' ? 'English' : 'Français'}</span>
          <span className="sr-only">{t('languageSwitcher.switchLanguage')}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className={`flex items-center gap-2 px-3 py-2 ${currentLocale === language.code 
              ? 'font-medium bg-gray-100 dark:bg-gray-800 text-primary' 
              : 'hover:bg-gray-50 dark:hover:bg-gray-900'}`}
          >
            <span className="text-base">{language.flag}</span>
            <span>{language.name}</span>
            {currentLocale === language.code && (
              <span className="ml-auto rounded-full w-2 h-2 bg-primary"></span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
