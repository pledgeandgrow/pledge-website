"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { 
  ProjectHero, 
  ProjectRequirements, 
  ProjectForm,
  ProjectProcess,
  ProjectSupport
} from "@/components/pages/digital-project";

export default function DigitalProjectPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 bg-background dark:bg-background">
        <ProjectHero />
        <ProjectProcess />
        <ProjectRequirements />
        <ProjectSupport />
        <ProjectForm />
      </main>
      <Footer />
    </>
  );
}
