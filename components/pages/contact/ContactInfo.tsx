import { Mail, Phone, MapPin, Clock, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";
import Link from "next/link";

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: "Email",
      value: "contact@pledgeandgrow.com",
      link: "mailto:contact@pledgeandgrow.com"
    },
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      title: "Phone",
      value: "+33 7 53 69 58 40",
      link: "tel:+33753695840"
    },
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      title: "Address",
      value: "4Bis Rue Alfred Nobel - 77420 - Ile-de-france",
      link: "https://maps.google.com/?q=4Bis+Rue+Alfred+Nobel,+77420,+Ile-de-france,+France"
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
      icon: <Twitter className="h-5 w-5" />,
      name: "Twitter",
      link: "https://twitter.com"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      name: "LinkedIn",
      link: "https://linkedin.com"
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      name: "Instagram",
      link: "https://instagram.com"
    },
    {
      icon: <Facebook className="h-5 w-5" />,
      name: "Facebook",
      link: "https://facebook.com"
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
