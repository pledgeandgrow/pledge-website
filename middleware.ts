import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Supported locales
const locales = ['en', 'fr'];

// Default locale
const defaultLocale = 'en';

// Cookie name for storing the locale
const LOCALE_COOKIE = 'NEXT_LOCALE';

export function middleware(request: NextRequest) {
  // Create response
  const response = NextResponse.next();
  
  // Get current locale from cookie or Accept-Language header
  let locale = request.cookies.get(LOCALE_COOKIE)?.value;
  
  // If no cookie set yet, try to detect from Accept-Language
  if (!locale) {
    const acceptLanguage = request.headers.get('accept-language');
    
    if (acceptLanguage) {
      const preferredLocale = acceptLanguage
        .split(',')
        .map(lang => lang.split(';')[0].trim())
        .find(lang => locales.includes(lang.substring(0, 2)));

      if (preferredLocale) {
        locale = preferredLocale.substring(0, 2);
      }
    }
    
    // If still no locale, use default
    if (!locale) {
      locale = defaultLocale;
    }
    
    // Set the locale cookie if it wasn't set before
    response.cookies.set({
      name: LOCALE_COOKIE,
      value: locale,
      path: '/',
      maxAge: 60 * 60 * 24 * 365, // 1 year
      sameSite: 'lax',
    });
  }

  // Add security headers
  const headers = response.headers;

  // Content Security Policy - Helps prevent XSS attacks
  headers.set(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https://www.google-analytics.com https://www.googletagmanager.com; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com; frame-src 'self';"
  );

  // X-XSS-Protection - Helps prevent XSS attacks in older browsers
  headers.set('X-XSS-Protection', '1; mode=block');

  // X-Content-Type-Options - Prevents MIME type sniffing
  headers.set('X-Content-Type-Options', 'nosniff');

  // Referrer-Policy - Controls how much referrer information is sent
  headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

  // Permissions-Policy - Controls which features and APIs can be used
  headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), interest-cohort=()'
  );

  // X-Frame-Options - Prevents clickjacking attacks
  headers.set('X-Frame-Options', 'SAMEORIGIN');

  // Strict-Transport-Security - Enforces HTTPS
  headers.set(
    'Strict-Transport-Security',
    'max-age=63072000; includeSubDomains; preload'
  );

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     * - locales (translation files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|locales|.*\.png$|.*\.svg$|.*\.jpg$).*)',
  ],
};
