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
import { Globe, Loader2 } from 'lucide-react';
import { locales, defaultLocale, preloadAllTranslations } from '@/hooks/useTranslations';

// Language options
const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
];

export default function LanguageSwitcher() {
  const [currentLocale, setCurrentLocale] = useState(defaultLocale);
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, setIsPending] = useState(false);

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
          variant="ghost" 
          size="icon" 
          className="relative"
          disabled={isPending}
        >
          <Globe className="h-5 w-5" />
          <span className="sr-only">Switch Language</span>
          <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
            {currentLocale.toUpperCase()}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className={`flex items-center gap-2 ${
              currentLocale === language.code ? 'font-bold bg-accent' : ''
            }`}
          >
            <span className="text-base">{language.flag}</span>
            <span>{language.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
