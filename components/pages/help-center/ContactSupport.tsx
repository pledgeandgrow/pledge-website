"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Phone, Clock, Mail, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function ContactSupport() {
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

  const supportChannels = [
    {
      icon: <MessageSquare className="h-10 w-10 text-primary" />,
      title: "Live Chat",
      description: "Chat with our support team in real-time for immediate assistance.",
      availability: "Available 24/7",
      action: "Start Chat",
      url: "#chat"
    },
    {
      icon: <Phone className="h-10 w-10 text-primary" />,
      title: "Phone Support",
      description: "Speak directly with our support specialists for complex issues.",
      availability: "Mon-Fri, 9AM-6PM CET",
      action: "Call Us",
      url: "tel:+33123456789"
    },
    {
      icon: <Mail className="h-10 w-10 text-primary" />,
      title: "Email Support",
      description: "Send us an email for non-urgent inquiries and detailed questions.",
      availability: "Response within 24 hours",
      action: "Email Us",
      url: "mailto:support@pledgeandgrow.com"
    }
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">Contact Support</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our dedicated support team is here to help you with any questions or issues you may have.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {supportChannels.map((channel, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <div className="mb-4">{channel.icon}</div>
                  <CardTitle className="text-xl">{channel.title}</CardTitle>
                  <CardDescription>{channel.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{channel.availability}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href={channel.url} className="flex items-center justify-center gap-2">
                      {channel.action} <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold tracking-tight mb-4">Send Us a Message</h3>
            <p className="text-muted-foreground mb-6">
              Fill out the form below and we&apos;ll get back to you as soon as possible.
            </p>
            
            {formState.submitted ? (
              <div className="bg-green-500/10 text-green-500 p-6 rounded-lg flex items-center gap-4">
                <CheckCircle className="h-6 w-6" />
                <div>
                  <h4 className="font-semibold">Message Sent Successfully</h4>
                  <p>Thank you for contacting us. We&apos;ll respond to your inquiry shortly.</p>
                </div>
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
                      placeholder="Enter your full name"
                      required
                      value={formState.name}
                      onChange={handleChange}
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
                      placeholder="Enter your email"
                      required
                      value={formState.email}
                      onChange={handleChange}
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
                      placeholder="What is your inquiry about?"
                      required
                      value={formState.subject}
                      onChange={handleChange}
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
                      <SelectTrigger id="category">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technical">Technical Support</SelectItem>
                        <SelectItem value="billing">Billing & Payments</SelectItem>
                        <SelectItem value="account">Account Management</SelectItem>
                        <SelectItem value="feature">Feature Request</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Please describe your issue or question in detail"
                    rows={6}
                    required
                    value={formState.message}
                    onChange={handleChange}
                  />
                </div>
                
                <Button type="submit" className="w-full">
                  Submit Support Request
                </Button>
              </form>
            )}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-background border border-border rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold tracking-tight mb-4">Support Information</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold mb-2">Support Hours</h4>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM CET</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM CET</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-2">Response Times</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="bg-red-500/10 text-red-500">Critical</Badge>
                    <span>Response within 2 hours during business hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="bg-orange-500/10 text-orange-500">High</Badge>
                    <span>Response within 4 hours during business hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="bg-yellow-500/10 text-yellow-500">Medium</Badge>
                    <span>Response within 8 hours during business hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="bg-blue-500/10 text-blue-500">Low</Badge>
                    <span>Response within 24 hours</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-2">Support Tiers</h4>
                <p className="text-muted-foreground mb-4">
                  Our support services are available in different tiers based on your service plan.
                </p>
                <Button variant="outline" asChild>
                  <Link href="/pricing" className="flex items-center gap-2">
                    View Support Plans <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
