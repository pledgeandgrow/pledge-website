"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, AlertTriangle, CheckCircle, Clock, ThumbsUp, ThumbsDown } from "lucide-react";
import Link from "next/link";

interface TroubleshootingItem {
  id: string;
  title: string;
  description: string;
  category: string;
  severity: "low" | "medium" | "high";
  steps: string[];
  image?: string;
  estimatedTime: string;
  url: string;
}

export default function Troubleshooting() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  const categories = [
    { id: "all", name: "All Issues" },
    { id: "website", name: "Website" },
    { id: "mobile", name: "Mobile Apps" },
    { id: "account", name: "Account & Access" },
    { id: "integration", name: "Integrations" }
  ];

  const troubleshootingItems: TroubleshootingItem[] = [
    {
      id: "website-loading",
      title: "Website Loading Slowly",
      description: "Troubleshoot performance issues that are causing your website to load slowly.",
      category: "website",
      severity: "medium",
      steps: [
        "Clear your browser cache and cookies",
        "Check your internet connection speed",
        "Disable browser extensions that might be interfering",
        "Try accessing the site from a different device or network",
        "Contact our support team if the issue persists"
      ],
      image: "/images/help-center/troubleshooting/website-loading.jpg",
      estimatedTime: "5-10 minutes",
      url: "/help-center/troubleshooting/website-loading"
    },
    {
      id: "mobile-app-crash",
      title: "Mobile App Crashing",
      description: "Resolve issues causing the mobile app to crash or freeze unexpectedly.",
      category: "mobile",
      severity: "high",
      steps: [
        "Force close the app and restart it",
        "Check for app updates in the App Store or Google Play Store",
        "Restart your device",
        "Ensure you have sufficient storage space",
        "Reinstall the app if the issue persists"
      ],
      image: "/images/help-center/troubleshooting/mobile-app-crash.jpg",
      estimatedTime: "10-15 minutes",
      url: "/help-center/troubleshooting/mobile-app-crash"
    },
    {
      id: "login-issues",
      title: "Login Problems",
      description: "Troubleshoot issues with logging into your account or accessing secure areas.",
      category: "account",
      severity: "high",
      steps: [
        "Verify you're using the correct email/username and password",
        "Reset your password using the 'Forgot Password' option",
        "Clear your browser cache and cookies",
        "Ensure your account hasn't been locked due to multiple failed attempts",
        "Contact support if you still can't access your account"
      ],
      image: "/images/help-center/troubleshooting/login-issues.jpg",
      estimatedTime: "5-10 minutes",
      url: "/help-center/troubleshooting/login-issues"
    },
    {
      id: "payment-gateway",
      title: "Payment Gateway Integration Issues",
      description: "Resolve problems with payment processing and gateway integrations.",
      category: "integration",
      severity: "high",
      steps: [
        "Verify your API keys and credentials are correct",
        "Check that your payment gateway account is active",
        "Ensure your integration is configured for the correct environment (test/live)",
        "Review transaction logs for specific error messages",
        "Contact our integration team for assistance"
      ],
      image: "/images/help-center/troubleshooting/payment-gateway.jpg",
      estimatedTime: "15-30 minutes",
      url: "/help-center/troubleshooting/payment-gateway"
    },
    {
      id: "broken-links",
      title: "Broken Links or 404 Errors",
      description: "Fix broken links and 404 errors on your website.",
      category: "website",
      severity: "medium",
      steps: [
        "Identify the specific URLs causing 404 errors",
        "Check if the page has been moved or renamed",
        "Update internal links pointing to the broken page",
        "Set up proper redirects for changed URLs",
        "Contact support if you need assistance with redirects"
      ],
      image: "/images/help-center/troubleshooting/broken-links.jpg",
      estimatedTime: "10-20 minutes",
      url: "/help-center/troubleshooting/broken-links"
    },
    {
      id: "api-connection",
      title: "API Connection Failures",
      description: "Troubleshoot issues with API connections and data retrieval.",
      category: "integration",
      severity: "medium",
      steps: [
        "Verify your API credentials and access tokens",
        "Check API endpoint URLs for accuracy",
        "Ensure your firewall isn't blocking the connection",
        "Review API request logs for specific error messages",
        "Test the API connection using a tool like Postman"
      ],
      image: "/images/help-center/troubleshooting/api-connection.jpg",
      estimatedTime: "15-25 minutes",
      url: "/help-center/troubleshooting/api-connection"
    },
    {
      id: "push-notifications",
      title: "Push Notifications Not Working",
      description: "Resolve issues with push notifications on mobile devices.",
      category: "mobile",
      severity: "low",
      steps: [
        "Ensure notifications are enabled in the app settings",
        "Check device notification settings",
        "Verify you have a stable internet connection",
        "Force close and restart the app",
        "Reinstall the app if the issue persists"
      ],
      image: "/images/help-center/troubleshooting/push-notifications.jpg",
      estimatedTime: "5-10 minutes",
      url: "/help-center/troubleshooting/push-notifications"
    },
    {
      id: "account-settings",
      title: "Can't Update Account Settings",
      description: "Troubleshoot issues with updating your account information or preferences.",
      category: "account",
      severity: "low",
      steps: [
        "Clear your browser cache and cookies",
        "Try using a different browser",
        "Ensure all required fields are completed correctly",
        "Check for any error messages during the update process",
        "Contact support if you continue to experience issues"
      ],
      image: "/images/help-center/troubleshooting/account-settings.jpg",
      estimatedTime: "5-15 minutes",
      url: "/help-center/troubleshooting/account-settings"
    }
  ];

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case "low":
        return <Badge variant="outline" className="bg-yellow-500/10 text-yellow-500">Low</Badge>;
      case "medium":
        return <Badge variant="outline" className="bg-orange-500/10 text-orange-500">Medium</Badge>;
      case "high":
        return <Badge variant="outline" className="bg-red-500/10 text-red-500">High</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  // Filter items based on selected category
  const filteredItems = selectedCategory === "all" 
    ? troubleshootingItems 
    : troubleshootingItems.filter(item => item.category === selectedCategory);

  return (
    <section id="troubleshooting" className="py-16 md:py-24">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">Troubleshooting Guides</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Step-by-step solutions to common issues you might encounter with our products and services.
          </p>
        </motion.div>

        <Tabs defaultValue="all" className="w-full" onValueChange={setSelectedCategory}>
          <TabsList className="flex flex-wrap justify-center mb-8">
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={selectedCategory} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full flex flex-col overflow-hidden hover:shadow-md transition-shadow">
                    {item.image && (
                      <div className="relative aspect-video w-full overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                        {getSeverityBadge(item.severity)}
                      </div>
                      <CardDescription className="line-clamp-2">
                        {item.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>Estimated time: {item.estimatedTime}</span>
                      </div>
                      <h4 className="text-sm font-medium mb-2">Quick Steps:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {item.steps.slice(0, 3).map((step, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{step}</span>
                          </li>
                        ))}
                        {item.steps.length > 3 && (
                          <li className="text-xs text-muted-foreground italic">
                            +{item.steps.length - 3} more steps
                          </li>
                        )}
                      </ul>
                    </CardContent>
                    <CardFooter className="pt-2">
                      <Button asChild className="w-full">
                        <Link href={item.url} className="flex items-center justify-center gap-2">
                          View Full Guide <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-muted/50 rounded-xl p-8 max-w-3xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="bg-primary/10 p-4 rounded-full">
              <AlertTriangle className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Still experiencing issues?</h3>
              <p className="text-muted-foreground mb-4">
                If none of our troubleshooting guides solved your problem, our technical support team is ready to help.
              </p>
              <Button asChild>
                <Link href="#contact">
                  Contact Technical Support
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">Was this troubleshooting section helpful?</p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <ThumbsUp className="h-4 w-4" /> Yes
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <ThumbsDown className="h-4 w-4" /> No
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
