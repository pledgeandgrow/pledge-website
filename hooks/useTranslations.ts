'use client';

import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

// Define available locales
export const locales = ['en', 'fr'];

// Define default locale
export const defaultLocale = 'en';

// Cache for preloaded translations
const translationCache: Record<string, Record<string, any>> = {};

// Preload all translations for a specific locale
export async function preloadAllTranslations(locale: string) {
  if (!locales.includes(locale)) return;
  
  try {
    // Preload common translations
    await import(`../locales/${locale}/common.json`)
      .then(module => {
        translationCache[`${locale}:common`] = module.default;
      })
      .catch(error => {
        console.error(`Failed to preload common translations for ${locale}:`, error);
      });
    
    // Preload home translations
    await import(`../locales/${locale}/home.json`)
      .then(module => {
        translationCache[`${locale}:home`] = module.default;
      })
      .catch(error => {
        console.error(`Failed to preload home translations for ${locale}:`, error);
      });
  } catch (error) {
    console.error(`Failed to preload translations for ${locale}:`, error);
  }
}

/**
 * Custom hook to get translations for the current locale and namespace
 * @param namespace - The translation namespace to use
 * @returns Translation functions and current locale
 */
export function useTranslations(namespace: string = 'common') {
  const [translations, setTranslations] = useState<Record<string, any>>({});
  const [locale, setLocale] = useState(defaultLocale);
  const [isLoading, setIsLoading] = useState(true);

  // Get locale from cookie
  useEffect(() => {
    const cookieLocale = Cookies.get('NEXT_LOCALE');
    if (cookieLocale && locales.includes(cookieLocale)) {
      setLocale(cookieLocale);
    }
  }, []);
  
  // Load translations
  useEffect(() => {
    const isMounted = true;
    setIsLoading(true);
    
    async function loadTranslations() {
      const cacheKey = `${locale}:${namespace}`;
      
      // Check if we have this translation in cache
      if (translationCache[cacheKey]) {
        if (isMounted) {
          setTranslations(translationCache[cacheKey]);
          setIsLoading(false);
        }
        return;
      }
      
      try {
        // Try to load translations for current locale
        const localeModule = await import(`../locales/${locale}/${namespace}.json`);
        translationCache[cacheKey] = localeModule.default;
        
        if (isMounted) {
          setTranslations(localeModule.default);
          setIsLoading(false);
        }
        
        // Preload other namespaces for the same locale
        if (namespace === 'common') {
          // Preload home translations if we're loading common
          import(`../locales/${locale}/home.json`)
            .then(module => {
              translationCache[`${locale}:home`] = module.default;
            })
            .catch(error => {
              console.error(`Failed to preload home translations for ${locale}:`, error);
            });
        }
        
      } catch (error) {
        console.error(`Failed to load translations for ${locale}/${namespace}:`, error);
        
        // Fallback to English if the current locale fails
        if (locale !== 'en') {
          console.log(`Falling back to English translations for ${namespace}`);
          try {
            const fallbackModule = await import(`../locales/en/${namespace}.json`);
            if (fallbackModule.default) {
              setTranslations(fallbackModule.default);
              console.log(`Successfully loaded fallback English translations for ${namespace}`);
            } else {
              console.error(`English fallback translations for ${namespace} are empty or invalid`);
              setTranslations({});
            }
          } catch (fallbackError) {
            console.error(`Failed to load English fallback translations for ${namespace}:`, fallbackError);
            setTranslations({});
          }
        } else {
          // If we're already trying to load English and it failed, set empty translations
          console.error(`Failed to load English translations for ${namespace}`);
          setTranslations({});
        }
      } finally {
        setIsLoading(false);
      }
    }

    loadTranslations();
  }, [locale, namespace]);

  /**
   * Get a translation by key with optional interpolation
   * @param key - The translation key (supports dot notation for nested keys)
   * @param params - Optional parameters for interpolation
   * @returns The translated string, array, or the key if translation not found
   */
  const t = (key: string, params?: Record<string, any>): any => {
    // If translations are still loading, return the key
    if (isLoading) {
      return key;
    }
    
    // Special case for returnObjects parameter
    const returnObjects = params?.returnObjects === true;
    
    // Split the key by dots to support nested keys
    const keys = key.split('.');
    let value: any = translations;

    // Navigate through the nested keys
    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) {
        console.warn(`Translation key not found: ${key}`);
        return key; // Return the key itself if translation not found
      }
    }

    // If returnObjects is true, return the value as is (could be array or object)
    if (returnObjects) {
      return value;
    }
    
    // If the value is not a string and we're not returning objects, log a warning
    if (typeof value !== 'string' && !Array.isArray(value)) {
      console.warn(`Translation value for key ${key} is not a string or array:`, value);
      return key;
    }

    // If it's a string and we have parameters, replace them
    if (typeof value === 'string' && params) {
      return Object.entries(params).reduce((acc, [paramKey, paramValue]) => {
        if (paramKey !== 'returnObjects') { // Skip the returnObjects parameter
          return acc.replace(new RegExp(`{{${paramKey}}}`, 'g'), paramValue);
        }
        return acc;
      }, value);
    }

    return value;
  };

  return { t, locale, isLoading, translations };
}
