/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['flowbite.s3.amazonaws.com', 'images.unsplash.com'],
    unoptimized: process.env.NODE_ENV === 'development',
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
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: '/methodology',
        destination: '/ecosysteme',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
