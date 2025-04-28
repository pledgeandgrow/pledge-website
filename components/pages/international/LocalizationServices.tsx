"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Languages, Globe, FileText, Code } from "lucide-react";

export default function LocalizationServices() {
  const services = [
    {
      title: "Website & App Localization",
      description: "Comprehensive localization of your digital products for global markets, including UI/UX adaptation, content translation, and cultural optimization.",
      features: [
        "Multi-language interface implementation",
        "Bidirectional text support (RTL/LTR)",
        "Currency, date, and number format adaptation",
        "Cultural UX considerations"
      ],
      icon: <Globe className="h-6 w-6 text-primary" />
    },
    {
      title: "Content Translation",
      description: "Professional translation services for all your digital content, ensuring accurate and culturally appropriate messaging across languages.",
      features: [
        "Website and app content translation",
        "Marketing material localization",
        "Technical documentation translation",
        "SEO-optimized multilingual content"
      ],
      icon: <FileText className="h-6 w-6 text-primary" />
    },
    {
      title: "Multilingual Development",
      description: "Technical implementation of multilingual capabilities in your applications, with proper internationalization (i18n) architecture.",
      features: [
        "i18n framework implementation",
        "Language switching functionality",
        "Content management for multiple languages",
        "Automated translation workflows"
      ],
      icon: <Code className="h-6 w-6 text-primary" />
    },
    {
      title: "Global Compliance",
      description: "Ensuring your digital products comply with regional regulations and standards across different markets.",
      features: [
        "GDPR, CCPA, and other privacy regulations",
        "Accessibility standards compliance",
        "Regional legal requirements",
        "Industry-specific compliance"
      ],
      icon: <Languages className="h-6 w-6 text-primary" />
    }
  ];

  const languages = [
    "English", "French", "German", "Spanish", "Portuguese", "Italian", 
    "Dutch", "Russian", "Chinese", "Japanese", "Korean", "Arabic", 
    "Hindi", "Turkish", "Polish", "Swedish", "Norwegian", "Finnish", 
    "Danish", "Czech", "Greek", "Hungarian", "Romanian", "Thai", 
    "Vietnamese", "Indonesian", "Malay", "Hebrew", "Ukrainian"
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
            Localization Services
          </h2>
          <p className="text-lg text-muted-foreground">
            We help businesses reach global audiences with comprehensive localization services.
            From translation to cultural adaptation, we ensure your digital products resonate worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
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
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-lg p-8"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Supported Languages</h3>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-3 mb-8">
            {languages.map((language, index) => (
              <motion.div
                key={language}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                viewport={{ once: true }}
                className="px-3 py-1.5 bg-muted rounded-full text-sm"
              >
                {language}
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              Don't see your required language? We can support additional languages upon request.
            </p>
            <Button asChild>
              <Link href="/contact?subject=Localization Services Inquiry">
                Request a Localization Consultation
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
