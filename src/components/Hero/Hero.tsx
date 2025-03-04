"use client";

import { useState, useEffect } from "react";
import { HelpCircle, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SparklesText } from "./sparkles-text";
import { motion } from "framer-motion";
import Link from "next/link";
import gsap from "gsap";

const Hero = () => {
  const [isBrowser, setIsBrowser] = useState(false);
  const backgroundImage = `/assets/imgs/patterns/graph.png`;

  // Set the flag to indicate we are on the client side
  useEffect(() => {
    setIsBrowser(true);

   
    // gsap.fromTo(
    //   "#theSvg",
    //   {
    //     opacity: 0,
    //     scale: 1.3,
    //     x: -100,
    //     rotate: 0,
    //   },
    //   {
    //     opacity: 1,
    //     scale: 2,
    //     x: 1100,
    //     rotate: 360,
    //     duration: 3,
    //     delay: 1.4,
    //     repeat: -1,
    //     yoyo: true,
    //   }
    // );

   
    // return () => {
    //   gsap.killTweensOf("#theSvg");
    // };
  }, []);

  if (!isBrowser) {
    return null; // Return nothing or a loading state on SSR render
  }

  return (
    <div className="w-full pt-64 pb-3 relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className="container mx-auto">
        <div className="flex">
          <div className="flex gap-4 flex-col">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25, delay: 0 }}
            >
              <SparklesText
                colors={{ first: "#86EFAC", second: "#3B821C" }}
                className="mt-8 text-7xl mb-8"
                text="Pledge&Grow"
              ></SparklesText>
            </motion.div>
            <div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.10 }}
              >
                <Badge variant="outline">
                  🎉 Vos Idées, Nos Solutions Digitales
                </Badge>
              </motion.div>
            </div>
            <div className="flex gap-4 flex-col">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.25 }}
              >
                <h1 className="text-5xl max-w-7xl md:text-7xl flex flex-row tracking-tighter text-left font-regular">
                  <span className="font-bold">
                    Experts en <span className="text-green-600">Digitalisation</span> de
                    projets Informatiques
                  </span>
                </h1>
              </motion.div>
            </div>
            <div className="flex mt-8 flex-row gap-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 0.25 }}
              >
                <Button size="lg" className="gap-4" variant="outline">
                  Prendre rendez-vous <PhoneCall className="w-4 h-4" />
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2.25, delay: 0.5 }}
              >
                <Button size="lg" className="gap-4">
                  Besoin d&apos;aide ? <HelpCircle className="w-4 h-4" />
                </Button>
              </motion.div>
            </div>
          </div>

          <div className="lg:w-1/3 flex justify-center items-center">
            <Link href="/notre-identite" className="hover:opacity-80">
              <div className="circle-button in-bord hover-anim">
                <div className="rotate-circle text-3xl uppercase">
                  <svg className="textcircle" viewBox="0 0 500 500">
                    <defs>
                      <path
                        id="textcircle"
                        d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
                      ></path>
                    </defs>
                    <text>
                      <textPath xlinkHref="#textcircle" textLength="900">
                        En savoir plus - En savoir plus -
                      </textPath>
                    </text>
                  </svg>
                </div>
                <div className="arrow">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
