"use client";

import { 
  ContactForm, 
  ContactInfo,
  Faq,
  Map, 
} from "@/components/pages/contact";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        <div className="bg-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-7">
                <ContactForm />
              </div>
              <div className="lg:col-span-5">
                <ContactInfo />
              </div>
            </div>
          </div>
        </div>
        <Faq />
        <Map />
      </main>
      <Footer />
    </div>
  );
}
