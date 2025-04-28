"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Heart, MessageCircle, Share2, Eye } from "lucide-react";
import { 
  SiInstagram, 
  SiLinkedin, 
  SiX, 
  SiFacebook, 
  SiYoutube, 
  SiTiktok 
} from "react-icons/si";
import Link from "next/link";

interface SocialPost {
  id: string;
  platform: string;
  content: string;
  image: string;
  date: string;
  likes: number;
  comments: number;
  shares: number;
  views?: number;
  url: string;
}

export default function SocialMediaSection() {
  const platforms = [
    { id: "all", name: "All Platforms", icon: null },
    { id: "instagram", name: "Instagram", icon: <SiInstagram className="h-4 w-4" /> },
    { id: "linkedin", name: "LinkedIn", icon: <SiLinkedin className="h-4 w-4" /> },
    { id: "twitter", name: "Twitter", icon: <SiX className="h-4 w-4" /> },
    { id: "facebook", name: "Facebook", icon: <SiFacebook className="h-4 w-4" /> },
    { id: "youtube", name: "YouTube", icon: <SiYoutube className="h-4 w-4" /> },
    { id: "tiktok", name: "TikTok", icon: <SiTiktok className="h-4 w-4" /> },
  ];

  const socialPosts: SocialPost[] = [
    {
      id: "insta1",
      platform: "instagram",
      content: "Celebrating our team's success at the Annual Digital Innovation Awards! 🏆 #DigitalExcellence #PledgeAndGrow",
      image: "/images/media/social/instagram-awards.jpg",
      date: "April 15, 2025",
      likes: 1243,
      comments: 89,
      shares: 56,
      url: "https://instagram.com/pledgeandgrow"
    },
    {
      id: "linkedin1",
      platform: "linkedin",
      content: "Excited to announce our new partnership with TechVentures to expand our digital transformation services across Europe. This collaboration will enable us to deliver even more innovative solutions to our clients.",
      image: "/images/media/social/linkedin-partnership.jpg",
      date: "March 28, 2025",
      likes: 876,
      comments: 124,
      shares: 215,
      url: "https://linkedin.com/company/pledgeandgrow"
    },
    {
      id: "twitter1",
      platform: "twitter",
      content: "Just released our latest case study on how we helped FinTech startup SecurePay increase conversion rates by 45% through UX optimization. Check it out! #UXDesign #ConversionOptimization",
      image: "/images/media/social/twitter-casestudy.jpg",
      date: "April 2, 2025",
      likes: 432,
      comments: 28,
      shares: 87,
      url: "https://twitter.com/pledgeandgrow"
    },
    {
      id: "facebook1",
      platform: "facebook",
      content: "We're hiring! Join our growing team of digital experts and help shape the future of technology. Check out our Careers page for open positions in web development, UX/UI design, and digital marketing.",
      image: "/images/media/social/facebook-hiring.jpg",
      date: "March 10, 2025",
      likes: 543,
      comments: 76,
      shares: 124,
      url: "https://facebook.com/pledgeandgrow"
    },
    {
      id: "youtube1",
      platform: "youtube",
      content: "Watch our CEO's keynote speech at the Digital Transformation Summit 2025, discussing the future of AI in business applications and how companies can prepare for the next wave of innovation.",
      image: "/images/media/social/youtube-keynote.jpg",
      date: "February 18, 2025",
      likes: 1876,
      comments: 234,
      shares: 412,
      views: 24567,
      url: "https://youtube.com/pledgeandgrow"
    },
    {
      id: "tiktok1",
      platform: "tiktok",
      content: "Behind the scenes at Pledge & Grow: Watch our design team's creative process in action! #DesignProcess #CreativeTech",
      image: "/images/media/social/tiktok-behindscenes.jpg",
      date: "April 10, 2025",
      likes: 3421,
      comments: 187,
      shares: 876,
      views: 45678,
      url: "https://tiktok.com/@pledgeandgrow"
    },
    {
      id: "insta2",
      platform: "instagram",
      content: "Our office culture in one photo: collaboration, creativity, and coffee! ☕ #AgencyLife #TeamWork",
      image: "/images/media/social/instagram-office.jpg",
      date: "March 22, 2025",
      likes: 987,
      comments: 45,
      shares: 23,
      url: "https://instagram.com/pledgeandgrow"
    },
    {
      id: "linkedin2",
      platform: "linkedin",
      content: "Proud to share that our client's e-commerce platform has reached €1M in monthly sales after our recent redesign and optimization project. A testament to the power of user-centered design and data-driven decision making.",
      image: "/images/media/social/linkedin-success.jpg",
      date: "April 5, 2025",
      likes: 1432,
      comments: 156,
      shares: 287,
      url: "https://linkedin.com/company/pledgeandgrow"
    },
    {
      id: "twitter2",
      platform: "twitter",
      content: "Join us next week for our free webinar on 'Optimizing Mobile UX for Conversion' with our Head of UX Design, Marie Laurent. Register now! #UXDesign #MobileFirst",
      image: "/images/media/social/twitter-webinar.jpg",
      date: "April 12, 2025",
      likes: 321,
      comments: 43,
      shares: 98,
      url: "https://twitter.com/pledgeandgrow"
    }
  ];

  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    } else {
      return num.toString();
    }
  };

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'instagram':
        return <SiInstagram className="h-5 w-5 text-pink-600" />;
      case 'linkedin':
        return <SiLinkedin className="h-5 w-5 text-blue-600" />;
      case 'twitter':
        return <SiX className="h-5 w-5 text-blue-400" />;
      case 'facebook':
        return <SiFacebook className="h-5 w-5 text-blue-700" />;
      case 'youtube':
        return <SiYoutube className="h-5 w-5 text-red-600" />;
      case 'tiktok':
        return <SiTiktok className="h-5 w-5 text-black dark:text-white" />;
      default:
        return null;
    }
  };

  return (
    <section id="social-media" className="py-16 md:py-24">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">Social Media Presence</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Follow us across our social media channels to stay updated with our latest news, insights, and behind-the-scenes content.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {platforms.slice(1).map((platform) => (
            <Button 
              key={platform.id}
              variant="outline" 
              asChild
              className="flex items-center gap-2"
            >
              <Link href={`https://${platform.id}.com/${platform.id === 'twitter' ? '' : 'company/'}pledgeandgrow`} target="_blank" rel="noopener noreferrer">
                {platform.icon}
                <span>Follow on {platform.name}</span>
              </Link>
            </Button>
          ))}
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="flex flex-wrap justify-center mb-8">
            {platforms.map((platform) => (
              <TabsTrigger key={platform.id} value={platform.id} className="flex items-center gap-2">
                {platform.icon}
                <span>{platform.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {platforms.map((platform) => (
            <TabsContent key={platform.id} value={platform.id} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {socialPosts
                  .filter(post => platform.id === "all" || post.platform === platform.id)
                  .map((post) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <Card className="h-full flex flex-col overflow-hidden hover:shadow-md transition-shadow">
                        <CardHeader className="pb-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              {getPlatformIcon(post.platform)}
                              <span className="font-medium">{post.platform.charAt(0).toUpperCase() + post.platform.slice(1)}</span>
                            </div>
                            <span className="text-sm text-muted-foreground">{post.date}</span>
                          </div>
                        </CardHeader>
                        <CardContent className="flex-grow p-0">
                          <div className="relative aspect-video w-full overflow-hidden">
                            <Image
                              src={post.image}
                              alt={`${post.platform} post`}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="p-4">
                            <p className="text-sm mb-4">{post.content}</p>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Heart className="h-4 w-4" />
                                <span>{formatNumber(post.likes)}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MessageCircle className="h-4 w-4" />
                                <span>{formatNumber(post.comments)}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Share2 className="h-4 w-4" />
                                <span>{formatNumber(post.shares)}</span>
                              </div>
                              {post.views && (
                                <div className="flex items-center gap-1">
                                  <Eye className="h-4 w-4" />
                                  <span>{formatNumber(post.views)}</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="pt-2">
                          <Button variant="outline" size="sm" asChild className="w-full">
                            <Link href={post.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                              View on {post.platform.charAt(0).toUpperCase() + post.platform.slice(1)}
                              <ExternalLink className="h-4 w-4" />
                            </Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
