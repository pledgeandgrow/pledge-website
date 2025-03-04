'use client';

import { Store, Earth, MapPinHouse } from 'lucide-react';
import React from 'react';
import data from '../data/international/ambassadeurs.json';

const Section2 = () => {
  return (
    <header className="py-16">
      <div className="container mx-auto px-6 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h6 className="text-lg font-semibold text-gray-700 mb-2">Notre Vision</h6>
            <h2 className="text-6xl font-bold">Une vision tournée vers <span className="text-green-600">l’avenir</span></h2>
          </div>
          <div>
            <p className="text-lg text-gray-700">Notre ambition d’expansion est en constante évolution. Grâce à notre expérience dans 15 pays et notre capacité à anticiper les besoins des marchés internationaux, nous avons la vision et les ressources nécessaires pour réussir à l’international. Nous continuons à identifier de nouvelles opportunités de croissance, renforcer notre réseau mondial, et adapter nos stratégies aux tendances émergentes.</p>
          </div>
        </div>
      </div>
    </header>
  );
};

const Section4 = () => {
  if (!data) return null;
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
          <div>
            <h6 className="text-lg font-semibold text-gray-700 mb-2">Notre ambition internationale</h6>
            <h2 className="text-5xl font-bold mt-2">Notre Force:</h2>
            <p className="text-lg text-gray-700 mt-6">Chez Pledge and Grow, notre équipe multiculturelle nous permet de comprendre les dynamiques mondiales et d'adapter nos stratégies pour soutenir notre expansion internationale.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
            <Earth className="w-20 h-20 mx-auto mb-4 text-green-600" />
            <p className="text-2xl font-semibold"><span className="text-green-600">12 Collaborateurs</span> Polyvalents</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
            <Store className="w-20 h-20 mx-auto mb-4 text-green-600" />
            <p className="text-2xl font-semibold"><span className="text-green-600">Connaissance</span> des marchés locaux</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
            <MapPinHouse className="w-20 h-20 mx-auto mb-4 text-green-600" />
            <p className="text-2xl font-semibold">Une équipe ayant vécu dans <span className="text-green-600">15 pays</span></p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Section5 = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img src="assets/imgs/about/globe.png" alt="Globe" className="rounded-lg shadow-md w-full max-w-md mx-auto" />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6">Une équipe mondiale avec des racines solides</h2>
            <p className="text-lg text-gray-700">Notre conseil de direction est composé de 10 experts aux parcours variés, ayant démontré leur expertise, leur loyauté et leur engagement envers notre marque.</p>
            <p className="text-lg text-gray-700 mt-4">Nous comptons également sur l’accompagnement de 5 Business Angels, présents sur les 5 continents, qui apportent leur connaissance des marchés locaux et leur soutien à notre croissance internationale.</p>
            <a href="/contact" className="inline-block mt-6 text-green-600 text-xl font-semibold hover:underline">Nous rejoindre</a>
          </div>
        </div>
      </div>
    </section>
  );
};

const HomeAbout = () => {
  return (
    <div>
      <Section2 />
      <Section4 />
      <Section5 />
    </div>
  );
};

export default HomeAbout;