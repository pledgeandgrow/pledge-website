"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Hash, Volume2, Megaphone, MessageSquare, Users, BookOpen, HelpCircle, Code } from "lucide-react";

export default function DiscordChannels() {
  const channels = [
    {
      name: "welcome",
      description: "Introduction to our Discord community and getting started guide.",
      type: "text",
      icon: <Hash className="h-5 w-5 text-primary" />
    },
    {
      name: "announcements",
      description: "Official announcements from Pledge & Grow team about updates and events.",
      type: "text",
      icon: <Megaphone className="h-5 w-5 text-primary" />
    },
    {
      name: "general",
      description: "General discussions about Pledge & Grow and industry topics.",
      type: "text",
      icon: <MessageSquare className="h-5 w-5 text-primary" />
    },
    {
      name: "networking",
      description: "Connect with other professionals and share opportunities.",
      type: "text",
      icon: <Users className="h-5 w-5 text-primary" />
    },
    {
      name: "resources",
      description: "Shared guides, articles, and learning materials.",
      type: "text",
      icon: <BookOpen className="h-5 w-5 text-primary" />
    },
    {
      name: "support",
      description: "Get help with Pledge & Grow services and technical issues.",
      type: "text",
      icon: <HelpCircle className="h-5 w-5 text-primary" />
    },
    {
      name: "code-help",
      description: "Technical discussions and code sharing for developers.",
      type: "text",
      icon: <Code className="h-5 w-5 text-primary" />
    },
    {
      name: "community-voice",
      description: "Voice channel for community discussions and events.",
      type: "voice",
      icon: <Volume2 className="h-5 w-5 text-primary" />
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Explore Our Channels
          </h2>
          <p className="text-lg text-muted-foreground">
            Our Discord server is organized into various channels to help you find exactly what you&apos;re looking for.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {channels.map((channel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full flex flex-col">
                  <CardHeader className="flex flex-row items-center gap-3 pb-2">
                    <div className="bg-primary/10 p-2 rounded-full flex items-center justify-center">
                      {channel.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg flex items-center">
                        {channel.type === "text" ? (
                          <span className="flex items-center">
                            <Hash className="h-4 w-4 mr-1 text-muted-foreground" /> {channel.name}
                          </span>
                        ) : (
                          <span className="flex items-center">
                            <Volume2 className="h-4 w-4 mr-1 text-muted-foreground" /> {channel.name}
                          </span>
                        )}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground">
                      {channel.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
