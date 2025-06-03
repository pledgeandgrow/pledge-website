/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['flowbite.s3.amazonaws.com', 'images.unsplash.com'],
    unoptimized: process.env.NODE_ENV === 'development',
    // Optimize images more aggressively
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    formats: ['image/webp', 'image/avif'],
  },
  typescript: {
    // During deployment on Vercel, we want to build even if there are TypeScript errors
    ignoreBuildErrors: true,
  },
  eslint: {
    // During deployment on Vercel, we want to build even if there are ESLint errors
    ignoreDuringBuilds: true,
  },
  // swcMinify is now enabled by default in Next.js 15
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Optimize for production
  productionBrowserSourceMaps: false, // Disable source maps in production for better performance
  poweredByHeader: false, // Remove the X-Powered-By header for security
  compress: true, // Enable gzip compression
  // Cache optimization
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2,
  },
  // Optimize bundle size
  experimental: {
    optimizeCss: true, // Enable CSS optimization
    optimizePackageImports: ['@radix-ui', 'lucide-react', 'tailwindcss'],
    optimizeServerReact: true,
    serverMinification: true,
    scrollRestoration: true,
  },
  // i18n is now handled by the middleware and App Router
  serverExternalPackages: ['sharp'],
  async redirects() {
    return [
      {
        source: '/methodology',
        destination: '/ecosysteme',
        permanent: true,
      },
    ];
  },
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(self)',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
