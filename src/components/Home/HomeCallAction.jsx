'use client';

import Link from 'next/link';
import React, { useEffect } from 'react';
import { Typewriter } from "react-simple-typewriter";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function HomeCallAction() {
  useEffect(() => {
    gsap.fromTo(
      '.typewriter',
      {
        opacity: 0,
        x: -400,
        scale: 0.4,
      },
      {
        opacity: 1,
        x: 0,
        scale: 1.1,
        duration: 2,
        delay: 0.2,
        scrollTrigger: {
          trigger: '.typewriter',
          start: 'top 100%',
        },
      }
    );
  }, []);

  return (
    <section className="mt-20 pb-16 flex justify-center items-center">
      <div className="text-center">
        <Link
          href="/digitaliser-votre-projet"
          className="text-[50px]  font-bold drop-shadow-md "
        >
          Votre projet mérite d'avancer aussi
        </Link>
        <br />
		<span className="text-green-600 text-[50px]  font-bold shadow-[rgba(34, 197, 89, 0.8) 0px 0px 5px]">
  <Typewriter
    words={["On s'y met tout de suite?"]}
    loop={false}
    cursor
  />
</span>
      </div>
    </section>
  );
}

export default HomeCallAction;
