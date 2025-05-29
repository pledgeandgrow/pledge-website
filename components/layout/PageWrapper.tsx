"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

interface PageWrapperProps {
  children: ReactNode;
  hideNavbar?: boolean;
  hideFooter?: boolean;
}

export default function PageWrapper({ 
  children, 
  hideNavbar = false, 
  hideFooter = false 
}: PageWrapperProps) {
  return (
    <>
      {!hideNavbar && <Navbar />}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="min-h-screen"
      >
        {children}
      </motion.div>
      {!hideFooter && <Footer />}
    </>
  );
}
