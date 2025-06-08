import { Mail, Phone, MapPin, Clock, Instagram, Facebook, Youtube, MessageCircle } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { FaXTwitter, FaDiscord } from "react-icons/fa6";
import Link from "next/link";
import { useTranslations } from "@/hooks/useTranslations";

export default function ContactInfo() {
  const { t } = useTranslations('contact');
  // Support contact information
  const supportContacts = [
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      value: "support@pledgeandgrow.com",
      link: "mailto:support@pledgeandgrow.com"
    },
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      value: "+33 7 66 58 08 35 (WhatsApp business)",
      link: "https://wa.me/33766580835"
    }
  ];
  
  // Commercial contact information
  const commercialContacts = [
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      value: "commercial@pledgeandgrow.com",
      link: "mailto:commercial@pledgeandgrow.com"
    },
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      value: "+33 7 53 69 58 40 (WhatsApp business)",
      link: "https://wa.me/33753695840"
    }
  ];
  
  // Location and hours information
  const locationInfo = [
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      title: "Address",
      translationKey: "info.addressText",
      value: "16 Rue Théroigne de Méricourt, 75013 Paris",
      link: "https://maps.google.com/?q=16+Rue+Th%C3%A9roigne+de+M%C3%A9ricourt,+75013+Paris,+France"
    },
    {
      icon: <Clock className="h-5 w-5 text-primary" />,
      title: "Business Hours",
      translationKey: "info.businessHours",
      value: "Monday - Friday: 9am - 6pm",
      link: null
    }
  ];

  // Social media links
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
        <h2 className="text-2xl font-bold mb-6">{t('info.title', { defaultValue: 'Contact Information' })}</h2>
        
        <div className="space-y-8">
          {/* Support Section */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">{t('info.supportTitle', { defaultValue: 'Support' })}</h3>
            <div className="space-y-3">
              {supportContacts.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex-shrink-0 mr-3">{item.icon}</div>
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
              ))}
            </div>
          </div>
          
          {/* Commercial Section */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">{t('info.commercialTitle', { defaultValue: 'Commercial' })}</h3>
            <div className="space-y-3">
              {commercialContacts.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex-shrink-0 mr-3">{item.icon}</div>
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
              ))}
            </div>
          </div>
          
          {/* Location and Hours Information */}
          <div className="space-y-6">
            {locationInfo.map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 mt-1">{item.icon}</div>
                <div className="ml-4">
                  <h3 className="font-medium">{t(`info.${item.title === 'Address' ? 'address' : 'businesshours'}Label`, { defaultValue: item.title })}</h3>
                  {item.link ? (
                    <Link 
                      href={item.link} 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {t(item.translationKey, { defaultValue: item.value })}
                    </Link>
                  ) : (
                    <p className="text-muted-foreground">{t(item.translationKey, { defaultValue: item.value })}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
        <h2 className="text-2xl font-bold mb-6">{t('info.socialTitle', { defaultValue: 'Follow Us' })}</h2>
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
