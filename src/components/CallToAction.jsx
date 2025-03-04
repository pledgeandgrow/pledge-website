"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import loadBackgroundImages from "../lib/LoadBackgroundImgs";
import AnimatedButton from "../components/button/AnimatedButton";

function CallToAction({ text }) {
  useEffect(() => {
    loadBackgroundImages();
  }, []);

  return (
    <section className="relative flex items-center justify-center py-20 text-center text-white">
      <div className="container mx-auto px-6">
        <div className=" mx-auto flex flex-col items-center">
          <h2 className="text-[4rem] leading-[4.5rem] wow fadeIn font-bold" data-wow-delay="0.2s">
            {text || "Avez-vous un projet en tête?"}
          </h2>
          <Link href="/contact" className="flex justify-center" data-wow-delay="0.4s">
            <AnimatedButton text="Commencer" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
