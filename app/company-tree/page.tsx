import React from 'react';
import { Metadata } from 'next';
import CompanyTree from '@/components/pages/company-tree/CompanyTree';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: 'Company Tree | Pledge',
  description: 'View the organizational structure of Pledge',
};

export default function CompanyTreePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        <CompanyTree />
      </main>
      <Footer />
    </div>
  );
}
