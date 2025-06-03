import { useTranslation as useTranslationOriginal } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

/**
 * Enhanced useTranslation hook with improved TypeScript support
 * @param namespace - Translation namespace or array of namespaces
 * @returns The translation utilities
 */
export const useTranslation = (namespace: string | string[] = 'common') => {
  return useTranslationOriginal(namespace);
};

/**
 * Get server-side translations for Next.js pages
 * @param locale - The current locale
 * @param namespaces - Array of translation namespaces to load
 * @returns Props object with translations
 */
export const getI18nProps = async (locale: string, namespaces: string[] = ['common']) => {
  return {
    ...(await serverSideTranslations(locale, namespaces)),
  };
};

/**
 * Get server-side translations for specific page
 * @param locale - The current locale
 * @param page - The page name to load translations for
 * @returns Props object with translations for the page and common namespace
 */
export const getPageI18nProps = async (locale: string, page: string) => {
  return getI18nProps(locale, [page, 'common']);
};
