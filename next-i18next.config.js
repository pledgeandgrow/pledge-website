/**
 * @type {import('next-i18next').UserConfig}
 */
module.exports = {
  // Debug: process.env.NODE_ENV === 'development',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    localeDetection: true,
  },
  localePath: './locales',
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  react: { useSuspense: false },
}
