import { Mail, Phone, MapPin, Clock, Instagram, Facebook, Youtube, MessageCircle } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { FaXTwitter, FaDiscord } from "react-icons/fa6";
import Link from "next/link";

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: "Support Email",
      value: "support@pledgeandgrow.com",
      link: "mailto:support@pledgeandgrow.com"
    },
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      title: "Support Phone",
      value: "+33 7 53 69 58 40 (WhatsApp business)",
      link: "https://wa.me/33753695840"
    },
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: "Commercial Email",
      value: "commercial@pledgeandgrow.com",
      link: "mailto:commercial@pledgeandgrow.com"
    },
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      title: "Commercial Phone",
      value: "+971 50 392 7710 (WhatsApp business)",
      link: "https://wa.me/971503927710"
    },
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      title: "Address",
      value: "16 Rue Théroigne de Méricourt, 75013 Paris",
      link: "https://maps.google.com/?q=16+Rue+Th%C3%A9roigne+de+M%C3%A9ricourt,+75013+Paris,+France"
    },
    {
      icon: <Clock className="h-5 w-5 text-primary" />,
      title: "Business Hours",
      value: "Monday - Friday: 9am - 6pm",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Instagram className="h-5 w-5" />,
      name: "Instagram",
      link: "https://www.instagram.com/pledgeandgrow/"
    },
    {
      icon: <FaTiktok className="h-5 w-5" />,
      name: "TikTok",
      link: "https://www.tiktok.com/@pledgeandgrowfr"
    },
    {
      icon: <FaXTwitter className="h-5 w-5" />,
      name: "X",
      link: "https://x.com/PledgeandGrow"
    },
    {
      icon: <Facebook className="h-5 w-5" />,
      name: "Facebook",
      link: "https://www.facebook.com/100095753672290/"
    },
    {
      icon: <Youtube className="h-5 w-5" />,
      name: "YouTube",
      link: "https://www.youtube.com/@pledgeandgrow"
    },
    {
      icon: <FaDiscord className="h-5 w-5" />,
      name: "Discord",
      link: "https://discord.gg/hVSSMd63"
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      name: "WhatsApp",
      link: "https://wa.me/33753695840"
    }
  ];

  return (
    <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
      <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
        <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
        <div className="space-y-6">
          {contactDetails.map((item, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0 mt-1">{item.icon}</div>
              <div className="ml-4">
                <h3 className="font-medium">{item.title}</h3>
                {item.link ? (
                  <Link 
                    href={item.link} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.value}
                  </Link>
                ) : (
                  <p className="text-muted-foreground">{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
        <h2 className="text-2xl font-bold mb-6">Follow Us</h2>
        <div className="flex flex-wrap gap-4">
          {socialLinks.map((social, index) => (
            <Link 
              key={index}
              href={social.link}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label={`Follow us on ${social.name}`}
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
