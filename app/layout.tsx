import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/theme/Providers";
import "@/utils/i18n-client";
import { AnalyticsProvider } from "@/components/analytics";
import ClientCookieConsent from "@/components/shared/ClientCookieConsent";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://pledgeandgrow.com'),
  title: {
    default: "Pledge & Grow | Innovative Digital Solutions & Technology Services",
    template: "%s | Pledge & Grow"
  },
  description: "Pledge & Grow delivers cutting-edge digital solutions including web development, mobile apps, AI integration, and blockchain technology. Partner with us to transform your digital presence.",
  keywords: ["digital solutions", "web development", "mobile apps", "blockchain", "AI integration", "technology services", "software development"],
  authors: [{ name: "Pledge & Grow Team" }],
  creator: "Pledge & Grow",
  publisher: "Pledge & Grow",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logopledge.png" }
    ],
    apple: { url: "/logopledge.png" },
    shortcut: { url: "/logopledge.png" }
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pledgeandgrow.com",
    title: "Pledge & Grow | Innovative Digital Solutions & Technology Services",
    description: "Pledge & Grow delivers cutting-edge digital solutions including web development, mobile apps, AI integration, and blockchain technology.",
    siteName: "Pledge & Grow",
    images: [{
      url: "/images/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Pledge & Grow - Digital Solutions"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pledge & Grow | Innovative Digital Solutions",
    description: "Cutting-edge digital solutions for modern businesses.",
    images: ["/images/twitter-image.jpg"],
    creator: "@pledgeandgrow"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="font-sans" suppressHydrationWarning>
        <Providers>
          <AnalyticsProvider measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}>
            <div className="flex min-h-screen flex-col bg-background text-foreground">
              {children}
              <ClientCookieConsent />
            </div>
          </AnalyticsProvider>
        </Providers>
      </body>
    </html>
  );
}
