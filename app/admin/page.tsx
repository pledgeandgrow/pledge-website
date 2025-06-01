"use client";

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  BrowserCompatibility,
  ResponsiveTester,
  LaunchChecklist,
  ColorContrastChecker,
  LinkChecker,
  SecurityChecker,
  DependencyChecker,
  FormTester,
  ContentChecker,
  ContentAudit,
  useTestingVisibility
} from '@/components/testing';
import {
  CheckCircle2,
  Laptop,
  Smartphone,
  Eye,
  Link as LinkIcon,
  Shield,
  Package,
  FormInput,
  FileText,
  Terminal,
  Code,
  Lock,
  Settings, 
  Clipboard,
  Globe,
  Palette
} from 'lucide-react';

export default function AdminPage() {
  // For quick testing, no password protection is implemented
  // In production, this would be protected by proper authentication

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Testing and development tools for the Pledge and Grow website
      </p>
      

      
      <Tabs defaultValue="checklist" className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-9 mb-8">
          <TabsTrigger value="checklist" className="flex flex-col items-center py-3">
            <Clipboard className="h-5 w-5 mb-1" />
            <span className="text-xs">Checklist</span>
          </TabsTrigger>
          <TabsTrigger value="browser" className="flex flex-col items-center py-3">
            <Globe className="h-5 w-5 mb-1" />
            <span className="text-xs">Browser</span>
          </TabsTrigger>
          <TabsTrigger value="responsive" className="flex flex-col items-center py-3">
            <Smartphone className="h-5 w-5 mb-1" />
            <span className="text-xs">Responsive</span>
          </TabsTrigger>
          <TabsTrigger value="contrast" className="flex flex-col items-center py-3">
            <Palette className="h-5 w-5 mb-1" />
            <span className="text-xs">Contrast</span>
          </TabsTrigger>
          <TabsTrigger value="links" className="flex flex-col items-center py-3">
            <LinkIcon className="h-5 w-5 mb-1" />
            <span className="text-xs">Links</span>
          </TabsTrigger>
          <TabsTrigger value="content" className="flex flex-col items-center py-3">
            <FileText className="h-5 w-5 mb-1" />
            <span className="text-xs">Content</span>
          </TabsTrigger>
          <TabsTrigger value="security" className="flex flex-col items-center py-3">
            <Shield className="h-5 w-5 mb-1" />
            <span className="text-xs">Security</span>
          </TabsTrigger>
          <TabsTrigger value="dependencies" className="flex flex-col items-center py-3">
            <Package className="h-5 w-5 mb-1" />
            <span className="text-xs">Dependencies</span>
          </TabsTrigger>
          <TabsTrigger value="forms" className="flex flex-col items-center py-3">
            <FormInput className="h-5 w-5 mb-1" />
            <span className="text-xs">Forms</span>
          </TabsTrigger>

        </TabsList>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6">
          <TabsContent value="checklist">
            <h2 className="text-xl font-semibold mb-4">Launch Checklist</h2>
            <p className="mb-6 text-gray-600 dark:text-gray-400">
              Track the launch readiness of the website with a comprehensive checklist covering SEO, performance, accessibility, security, and more.
            </p>
            <LaunchChecklist />
          </TabsContent>
          
          <TabsContent value="browser">
            <h2 className="text-xl font-semibold mb-4">Browser Compatibility</h2>
            <p className="mb-6 text-gray-600 dark:text-gray-400">
              Test the website across different browsers to ensure consistent functionality and appearance.
            </p>
            <BrowserCompatibility />
          </TabsContent>
          
          <TabsContent value="responsive">
            <h2 className="text-xl font-semibold mb-4">Responsive Testing</h2>
            <p className="mb-6 text-gray-600 dark:text-gray-400">
              Check how the website appears and functions across different device sizes and orientations.
            </p>
            <ResponsiveTester />
          </TabsContent>
          
          <TabsContent value="contrast">
            <h2 className="text-xl font-semibold mb-4">Color Contrast Checker</h2>
            <p className="mb-6 text-gray-600 dark:text-gray-400">
              Ensure text colors meet WCAG accessibility standards for readability across the website.
            </p>
            <ColorContrastChecker />
          </TabsContent>
          
          <TabsContent value="links">
            <h2 className="text-xl font-semibold mb-4">Link Checker</h2>
            <p className="mb-6 text-gray-600 dark:text-gray-400">
              Find and fix broken internal and external links throughout the website.
            </p>
            <LinkChecker />
          </TabsContent>
          
          <TabsContent value="content">
            <h2 className="text-xl font-semibold mb-4">Content Checker</h2>
            <p className="mb-6 text-gray-600 dark:text-gray-400">
              Scan for spelling and grammar errors in website content to ensure professional quality.
            </p>
            <ContentChecker />
          </TabsContent>
          
          <TabsContent value="security">
            <h2 className="text-xl font-semibold mb-4">Security Checker</h2>
            <p className="mb-6 text-gray-600 dark:text-gray-400">
              Analyze the website for common security vulnerabilities and best practices.
            </p>
            <SecurityChecker />
          </TabsContent>
          
          <TabsContent value="dependencies">
            <h2 className="text-xl font-semibold mb-4">Dependency Checker</h2>
            <p className="mb-6 text-gray-600 dark:text-gray-400">
              Review project dependencies for vulnerabilities, updates, and license compliance.
            </p>
            <DependencyChecker />
          </TabsContent>
          
          <TabsContent value="forms">
            <h2 className="text-xl font-semibold mb-4">Form Tester</h2>
            <p className="mb-6 text-gray-600 dark:text-gray-400">
              Test form validation, submission, and error handling across the website.
            </p>
            <FormTester />
          </TabsContent>
          

        </div>
      </Tabs>
    </div>
  );
}
