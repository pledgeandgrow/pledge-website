"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CommunityMember {
  name: string;
  role: string;
  avatar: string;
  badges: string[];
}

export default function DiscordCommunity() {
  const communityMembers: CommunityMember[] = [
    {
      name: "Alex Johnson",
      role: "Community Manager",
      avatar: "/images/discord/member-1.jpg",
      badges: ["Staff", "Moderator"]
    },
    {
      name: "Sarah Chen",
      role: "Technical Support",
      avatar: "/images/discord/member-2.jpg",
      badges: ["Staff", "Developer"]
    },
    {
      name: "Miguel Rodriguez",
      role: "Content Creator",
      avatar: "/images/discord/member-3.jpg",
      badges: ["Partner", "Contributor"]
    },
    {
      name: "Emma Williams",
      role: "Event Coordinator",
      avatar: "/images/discord/member-4.jpg",
      badges: ["Staff", "Events"]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Meet Our Community
          </h2>
          <p className="text-lg text-muted-foreground">
            Our Discord is managed by a dedicated team committed to creating a helpful and welcoming environment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {communityMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col overflow-hidden">
                <CardContent className="p-6 flex-grow flex flex-col items-center text-center">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-primary">
                    <Image
                      src={member.avatar}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                  <p className="text-muted-foreground mb-3">{member.role}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.badges.map((badge, badgeIndex) => (
                      <Badge key={badgeIndex} variant="outline" className="bg-primary/10 text-primary border-primary/30">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
