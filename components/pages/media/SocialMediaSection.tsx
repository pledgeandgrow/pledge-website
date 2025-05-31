"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { FaInstagram, FaFacebook, FaTiktok, FaLinkedin, FaYoutube, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

interface SocialMediaCardProps {
  platform: string;
  icon: React.ReactNode;
  username: string;
  url: string;
  followers: string;
  color: string;
  description: string;
  bgColor: string;
}

const SocialMediaCard = ({
  platform,
  icon,
  username,
  url,
  followers,
  color,
  description,
  bgColor
}: SocialMediaCardProps) => {
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
          <div className="text-7xl text-white">{icon}</div>
        </div>
        <CardContent className="p-5">
          <div className="mb-3">
            <h3 className="font-bold text-lg">{platform}</h3>
          </div>
          <p className="text-muted-foreground mb-4 line-clamp-3">{description}</p>
          <Button asChild variant="outline" className="w-full">
            <Link href={url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
              Follow Us <ExternalLink className="h-4 w-4" />
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
  followers,
  bgColor
}: Pick<SocialMediaCardProps, 'platform' | 'icon' | 'url' | 'followers' | 'bgColor'>) => {
  return (
    <Link 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block w-full"
    >
      <div className={`${bgColor} rounded-lg p-4 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow`}>
        <div className="text-4xl text-white">{icon}</div>
        <div className="text-white">
          <div className="font-bold">{platform}</div>
        </div>
      </div>
    </Link>
  );
};

export default function SocialMediaSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextSlide = () => {
    if (currentIndex < socialMediaAccounts.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  
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
  }, [currentIndex]);

  const socialMediaAccounts = [
    {
      platform: "Instagram",
      icon: <FaInstagram />,
      username: "pledgeandgrow",
      url: "https://instagram.com/pledgeandgrow",
      followers: "12.5K",
      color: "pink-500",
      description: "Follow us for inspiring stories, behind-the-scenes content, and updates on our latest projects and initiatives.",
      bgColor: "bg-gradient-to-r from-purple-500 to-pink-500"
    },
    {
      platform: "Facebook",
      icon: <FaFacebook />,
      username: "pledgeandgrow",
      url: "https://facebook.com/pledgeandgrow",
      followers: "8.3K",
      color: "blue-600",
      description: "Join our community to stay updated on events, announcements, and engaging discussions about technology for good.",
      bgColor: "bg-blue-600"
    },
    {
      platform: "TikTok",
      icon: <FaTiktok />,
      username: "pledgeandgrow",
      url: "https://tiktok.com/@pledgeandgrowfr",
      followers: "15.2K",
      color: "black",
      description: "Watch our short-form videos showcasing tech tips, innovation highlights, and fun moments from our team.",
      bgColor: "bg-black"
    },
    {
      platform: "LinkedIn",
      icon: <FaLinkedin />,
      username: "pledge-and-grow",
      url: "https://linkedin.com/company/pledge-and-grow",
      followers: "5.7K",
      color: "blue-700",
      description: "Connect with us professionally for industry insights, career opportunities, and business partnership discussions.",
      bgColor: "bg-blue-700"
    },
    {
      platform: "YouTube",
      icon: <FaYoutube />,
      username: "PledgeAndGrowOfficial",
      url: "https://www.youtube.com/@pledgeandgrow",
      followers: "7.1K",
      color: "red-600",
      description: "Subscribe to our channel for in-depth tutorials, webinars, event recordings, and impact stories from our projects.",
      bgColor: "bg-red-600"
    },
    {
      platform: "X",
      icon: <FaXTwitter />,
      username: "pledgeandgrow",
      url: "https://x.com/PledgeandGrow",
      followers: "9.3K",
      color: "gray-900",
      description: "Follow us for the latest tech news, industry insights, and quick updates about our projects and initiatives.",
      bgColor: "bg-black"
    },
    {
      platform: "Discord",
      icon: <FaDiscord />,
      username: "pledgeandgrow",
      url: "https://discord.gg/Ud22W3Gp",
      followers: "3.8K",
      color: "indigo-600",
      description: "Join our community to connect with like-minded professionals, participate in discussions, and get real-time support.",
      bgColor: "bg-indigo-600"
    }
  ];

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
            Connect With Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Follow us on social media to stay updated on our latest projects, events, and initiatives. 
            Join our growing community of tech enthusiasts and change-makers.
          </p>
        </motion.div>

        {/* Desktop view */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {socialMediaAccounts.map((account) => (
            <SocialMediaCard
              key={account.platform}
              platform={account.platform}
              icon={account.icon}
              username={account.username}
              url={account.url}
              followers={account.followers}
              color={account.color}
              description={account.description}
              bgColor={account.bgColor}
            />
          ))}
        </div>
        
        {/* Mobile view - simple stacked list */}
        <div className="md:hidden space-y-4 px-4">
          {socialMediaAccounts.map((account) => (
            <MobileSocialMediaCard
              key={account.platform}
              platform={account.platform}
              icon={account.icon}
              url={account.url}
              followers={account.followers}
              bgColor={account.bgColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
