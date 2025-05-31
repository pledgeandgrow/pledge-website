"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// Badge import removed as it was unused
import { MessageSquare, Phone, Clock, Mail, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function ContactSupport() {
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile on component mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: "",
    submitted: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would submit the form data to a backend API
    console.log("Form submitted:", formState);
    // Simulate successful submission
    setFormState({ ...formState, submitted: true });
    // Reset form after 5 seconds
    setTimeout(() => {
      setFormState({
        name: "",
        email: "",
        subject: "",
        category: "",
        message: "",
        submitted: false
      });
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSelectChange = (value: string) => {
    setFormState({ ...formState, category: value });
  };

  return (
    <section id="contact-support" className="py-12 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-10 md:mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
            Contact Support
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Need help with something? Our support team is here to assist you.
          </p>
        </motion.div>

        {isMobile && (
          <div className="mb-8">
            <Card className="mb-6 shadow-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Quick Contact Options</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-0">
                <div className="flex items-center justify-between border-b pb-3">
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm font-medium">Technical Support</span>
                  </div>
                  <Button size="sm" variant="ghost" className="h-8 px-2" asChild>
                    <Link href="tel:+33766580835">Call</Link>
                  </Button>
                </div>
                
                <div className="flex items-center justify-between border-b pb-3">
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm font-medium">Email Support</span>
                  </div>
                  <Button size="sm" variant="ghost" className="h-8 px-2" asChild>
                    <Link href="mailto:support@pledgeandgrow.com">Email</Link>
                  </Button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <MessageSquare className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm font-medium">Live Chat</span>
                  </div>
                  <Button size="sm" variant="ghost" className="h-8 px-2" asChild>
                    <Link href="https://wa.me/33753695840" target="_blank" rel="noopener noreferrer">Chat</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2 order-2 lg:order-1">
            <Card className="h-full shadow-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl">Submit a ticket</CardTitle>
                <CardDescription>
                  Fill out the form below and we&apos;ll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {formState.submitted ? (
                  <div className="flex flex-col items-center justify-center py-8">
                    <CheckCircle className="h-12 w-12 md:h-16 md:w-16 text-green-500 mb-4" />
                    <h3 className="text-lg md:text-xl font-medium mb-2">Message Sent!</h3>
                    <p className="text-center text-muted-foreground text-sm md:text-base">
                      Thank you for reaching out. We&apos;ve received your message and will respond shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Your Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="h-10"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="h-10"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium">
                          Subject
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          placeholder="How can we help?"
                          value={formState.subject}
                          onChange={handleChange}
                          required
                          className="h-10"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="category" className="text-sm font-medium">
                          Category
                        </label>
                        <Select
                          value={formState.category}
                          onValueChange={handleSelectChange}
                        >
                          <SelectTrigger id="category" className="h-10">
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="technical">Technical Support</SelectItem>
                            <SelectItem value="billing">Billing Question</SelectItem>
                            <SelectItem value="feedback">Feedback</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Your Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Please describe your issue or question in detail..."
                        rows={isMobile ? 4 : 5}
                        value={formState.message}
                        onChange={handleChange}
                        required
                        className="resize-none"
                      />
                    </div>
                    
                    <Button type="submit" className="w-full md:w-auto">
                      Submit Ticket
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
          
          {!isMobile && (
            <div className="order-1 lg:order-2">
              <Card className="h-full shadow-sm">
                <CardHeader>
                  <CardTitle className="text-xl">Other Ways to Reach Us</CardTitle>
                  <CardDescription>
                    Choose the contact method that works best for you.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start">
                    <div className="mr-4 bg-primary/10 p-3 rounded-full">
                      <MessageSquare className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Live Chat Support</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Chat with our support team in real-time via WhatsApp Business for immediate assistance with any questions.
                      </p>
                      <Button variant="outline" size="sm" asChild>
                        <Link href="https://wa.me/33753695840" target="_blank" rel="noopener noreferrer">
                          Chat on WhatsApp <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 bg-primary/10 p-3 rounded-full">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Technical Support</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Call our technical support team directly for urgent matters or complex technical issues.
                      </p>
                      <p className="text-sm font-medium">+33 7 66 58 08 35</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 bg-primary/10 p-3 rounded-full">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Email Support</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Email us directly for non-urgent inquiries.
                      </p>
                      <p className="text-sm font-medium">support@pledgeandgrow.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 bg-primary/10 p-3 rounded-full">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Support Hours</h3>
                      <p className="text-sm text-muted-foreground">
                        Monday - Friday: 9:00 AM - 6:00 PM CET<br />
                        Saturday: 10:00 AM - 2:00 PM CET<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
