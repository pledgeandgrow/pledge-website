"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, 
  MessageSquare, 
  Calendar, 
  Headphones, 
  BookOpen, 
  Zap, 
  Globe, 
  Shield 
} from "lucide-react";

export default function DiscordBenefits() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);
  const benefits = [
    {
      title: "Real-time Support",
      description: "Get immediate help from our team and community members whenever you need it.",
      icon: <MessageSquare className="h-6 w-6 text-primary" />
    },
    {
      title: "Networking Opportunities",
      description: "Connect with industry professionals, potential partners, and like-minded individuals.",
      icon: <Users className="h-6 w-6 text-primary" />
    },
    {
      title: "Live Events",
      description: "Participate in AMAs, webinars, and workshops hosted directly in our Discord server.",
      icon: <Calendar className="h-6 w-6 text-primary" />
    },
    {
      title: "Voice Channels",
      description: "Join voice discussions, collaborative sessions, and community meetings.",
      icon: <Headphones className="h-6 w-6 text-primary" />
    },
    {
      title: "Exclusive Resources",
      description: "Access guides, tutorials, and resources shared only with our Discord community.",
      icon: <BookOpen className="h-6 w-6 text-primary" />
    },
    {
      title: "Early Updates",
      description: "Be the first to know about new features, services, and company announcements.",
      icon: <Zap className="h-6 w-6 text-primary" />
    },
    {
      title: "Global Community",
      description: "Join a diverse community of professionals from around the world.",
      icon: <Globe className="h-6 w-6 text-primary" />
    },
    {
      title: "Safe Environment",
      description: "Enjoy a moderated space that promotes respectful and productive discussions.",
      icon: <Shield className="h-6 w-6 text-primary" />
    }
  ];

  return (
    <section id="discord-benefits" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Join Our Discord
          </h2>
          <p className="text-lg text-muted-foreground">
            Our Discord server is more than just a chat platform—it&apos;s a vibrant community where you can learn, connect, and grow with fellow professionals.
          </p>
        </motion.div>

        {/* Mobile Carousel View */}
        {isMobile && (
          <div className="mb-10">
            <div className="overflow-x-auto pb-6">
              <div className="flex space-x-4 w-max px-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="w-[85vw] max-w-[300px] flex-shrink-0">
                    <Card className="h-full flex flex-col">
                      <CardHeader>
                        <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                          {benefit.icon}
                        </div>
                        <CardTitle className="text-xl">{benefit.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <CardDescription className="text-muted-foreground">
                          {benefit.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-4">
                <div className="flex space-x-2">
                  {benefits.map((_, index) => (
                    <div 
                      key={index} 
                      className={`h-2 w-2 rounded-full bg-primary/30`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Desktop Grid View */}
        {!isMobile && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full flex flex-col">
                  <CardHeader>
                    <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      {benefit.icon}
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="text-muted-foreground">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
