"use client";

import { ShieldCheck, Lightbulb, TimerIcon, Blocks, Sprout } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import WOW from 'wow.js';

const Section1 = () => {
  return (
    <section className="py-20 text-white">
      <h2 className="text-4xl font-bold border-b border-white/50 py-4">NOS ORIGINES</h2>
     <div className="container mx-auto  grid lg:grid-cols-3 gap-12 items-center">
  <div className="lg:col-span-2">
    
    <p className="mt-4 text-2xl">
      Il y a deux ans, nous avons débuté en tant que freelance, deux frères passionnés d'informatique, avec une vision claire : accompagner les entrepreneurs dans leur digitalisation. Partant de projets individuels, nous avons rapidement gagné en expérience et en savoir-faire, tout en bâtissant des relations solides avec nos premiers clients.
    </p>
  </div>
  <div className="relative lg:col-span-1 mt-24">
    <Sprout className="absolute -bottom-8 right-8 w-48 h-48 text-green-400" />
  </div>
</div>


    </section>
  );
};

const Section2 = () => {
  useEffect(() => {
    new WOW().init();
  }, []);

  return (
    <section className="py-20  text-white">
      <div className="container mx-auto  grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-lg leading-relaxed">
          Passionnés et engagés, depuis plus de deux ans, nous unissons nos forces pour propulser l’informatique et la digitalisation dans chaque recoin de la société.
          Nous croyons fermement que la technologie devrait être accessible à tous, et c’est pourquoi nous repoussons constamment les frontières pour offrir des solutions innovantes et inclusives.          </p>
        </div>
        <div>
          <h2 className="text-4xl font-bold inline-block px-7 py-2 text-lg uppercase tracking-wide rounded-full border border-white/50">Notre Objectif</h2>
          <p className="mt-4 text-4xl">Des Entrepreneurs Unis par une Mission : Démocratiser l’Informatique</p>
        </div>
      </div>
    </section>
  );
};

const Section3 = () => {
  return (
    <section className="py-20  text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold">NOS ENGAGEMENTS</h2>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {[
            { icon: ShieldCheck, title: "Sécurité et Fiabilité", description: "Nous garantissons la sécurité maximale de vos données." },
            { icon: Blocks, title: "Intégration et Compatibilité", description: "Nous assurons une parfaite harmonie entre vos outils numériques." },
            { icon: TimerIcon, title: "Agilité et Rapidité", description: "Nos méthodes agiles nous permettent de livrer rapidement des solutions adaptées." },
          ].map((item, index) => (
            <div key={index} className="p-6 bg-gray-800 rounded-lg shadow-md text-center">
              <item.icon className="w-12 h-12 mx-auto text-green-400" />
              <h6 className="mt-4 text-xl font-semibold">{item.title}</h6>
              <p className="mt-2 text-lg">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Section4 = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20  text-white">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
  <div>
    <img 
      src="assets/imgs/about/sq1.png" 
      alt="" 
      className="w-[300px] max-w-sm rounded-lg shadow-lg" 
    />
  </div>
  <div>
    <h2 className="text-4xl font-bold inline-block px-7 py-2 text-lg uppercase tracking-wide rounded-full border border-white/50">Nos Valeurs</h2>
    <div className="mt-6 space-y-6">
      {["Excellence et Éthique", "Culture & Patrimoine", "Loyauté & Exclusivité"].map((value, index) => (
        <div key={index} className="bg-black rounded-lg shadow-md overflow-hidden">
          <button 
            className="w-full text-left p-4 text-xl font-semibold flex justify-between items-center" 
            onClick={() => toggleAccordion(index)}
          >
            {value}
            <span>{activeIndex === index ? "-" : "+"}</span>
          </button>
          <div 
            className={`transition-all duration-300 overflow-hidden ${activeIndex === index ? "max-h-40 p-4" : "max-h-0"}`}
          >
            <p className="text-lg">
              {index === 0 && "Nous nous engageons à fournir une qualité irréprochable et un suivi rigoureux pour garantir le succès de vos projets."}
              {index === 1 && "Nous célébrons le savoir-faire Made in France en alliant tradition et innovation pour promouvoir le patrimoine culturel français."}
              {index === 2 && "Fidèles à nos engagements, nous offrons l'exclusivité de nos services pour garantir des partenariats solides."}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

    </section>
  );
};

const HomeAbout = () => {
  return (
    <div>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
};

export default HomeAbout;
