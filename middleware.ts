import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Clone the response
  const response = NextResponse.next();

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
     */
    {
      source: '/((?!api|_next/static|_next/image|favicon.ico|public/).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
};
