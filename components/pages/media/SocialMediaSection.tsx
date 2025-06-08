"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { FaInstagram, FaFacebook, FaTiktok, FaLinkedin, FaYoutube, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useTranslations } from "@/hooks/useTranslations";

interface SocialPlatform {
  platform: string;
  username: string;
  url: string;
  followers: string;
  description: string;
  bgColor: string;
}

interface SocialMediaCardProps {
  platform: string;
  icon: React.ReactNode;
  url: string;
  description: string;
  bgColor: string;
}

const SocialMediaCard = ({
  platform,
  icon,
  url,
  description,
  bgColor
}: SocialMediaCardProps) => {
  const { t } = useTranslations('media');
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // After mounting, we can safely show the UI that depends on the theme
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className="overflow-hidden h-full border border-border hover:shadow-md transition-all duration-300">
        <div className={`h-48 w-full flex items-center justify-center ${bgColor}`}>
          <div className={`text-7xl ${mounted && (theme === 'dark' || resolvedTheme === 'dark') ? 'text-white' : 'text-black'}`}>
            {icon}
          </div>
        </div>
        <CardContent className="p-5">
          <div className="mb-3">
            <h3 className="font-bold text-lg">{platform}</h3>
          </div>
          <p className="text-muted-foreground mb-4 line-clamp-3">{description}</p>
          <Button asChild variant="outline" className="w-full">
            <Link href={url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
              {t('socialMedia.followButton')} <ExternalLink className="h-4 w-4" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

// Mobile-specific card component with a simpler layout
const MobileSocialMediaCard = ({
  platform,
  icon,
  url,
  bgColor
}: Pick<SocialMediaCardProps, 'platform' | 'icon' | 'url' | 'bgColor'>) => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // After mounting, we can safely show the UI that depends on the theme
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <Link 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block w-full"
    >
      <div className={`${bgColor} rounded-lg p-4 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow`}>
        <div className={`text-5xl mb-2 ${mounted && (theme === 'dark' || resolvedTheme === 'dark') ? 'text-white' : 'text-black'}`}>{icon}</div>
        <div className="text-white">
          <div className="font-bold">{platform}</div>
        </div>
      </div>
    </Link>
  );
};

export default function SocialMediaSection() {
  const { t, isLoading, translations } = useTranslations('media');
  // Get social media platforms from translations
  const socialIcons = {
    Instagram: <FaInstagram />,
    Facebook: <FaFacebook />,
    TikTok: <FaTiktok />,
    LinkedIn: <FaLinkedin />,
    YouTube: <FaYoutube />,
    X: <FaXTwitter />,
    Discord: <FaDiscord />
  };
  
  // Create social media accounts from translations
  const socialMediaAccounts = isLoading ? [] : 
    translations?.socialMedia?.platforms?.map((platform: SocialPlatform) => ({
      platform: platform.platform,
      icon: socialIcons[platform.platform as keyof typeof socialIcons],
      username: platform.username,
      url: platform.url,
      followers: platform.followers,
      description: platform.description,
      bgColor: platform.bgColor
    })) || [];

  // Add state management after socialMediaAccounts declaration
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Auto-advance the carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < socialMediaAccounts.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex(0);
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex, socialMediaAccounts.length]);

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            {t('socialMedia.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('socialMedia.description')}
          </p>
        </motion.div>

        {/* Desktop view */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {socialMediaAccounts.map((account: SocialMediaCardProps) => (
            <div key={account.platform} className="col-span-1">
              <SocialMediaCard
                platform={account.platform}
                icon={account.icon}
                url={account.url}
                description={account.description}
                bgColor={account.bgColor}
              />
            </div>
          ))}
        </div>
        
        {/* Mobile view - simple stacked list */}
        <div className="md:hidden space-y-4 px-4">
          {socialMediaAccounts.map((account: Pick<SocialMediaCardProps, 'platform' | 'icon' | 'url' | 'bgColor'>) => (
            <MobileSocialMediaCard
              key={account.platform}
              platform={account.platform}
              icon={account.icon}
              url={account.url}
              bgColor={account.bgColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
