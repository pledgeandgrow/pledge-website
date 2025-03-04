"use client";

import React, { useState } from "react";
import Link from "next/link";
import LanguageIcon from "@mui/icons-material/Language";
import AirplayIcon from "@mui/icons-material/Airplay";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";

const tabs = [
  {
    id: "tabs-1",
    title: "Site Web",
    icon: <LanguageIcon className="!text-6xl"  />,
    image: "/assets/img/sass-img/serv/2.png",
    description:
      "Nous construisons des sites web de haute qualité qui incarnent votre vision et renforcent votre présence en ligne avec des designs adaptatifs et des technologies de pointe.",
  },
  {
    id: "tabs-2",
    title: "Logiciel/SaaS",
    icon: <AirplayIcon className="!text-6xl" />,
    image: "/assets/img/sass-img/serv/3.png",
    description:
      "Nous développons des solutions logicielles sur mesure et des plateformes SaaS, offrant des outils personnalisés pour simplifier et optimiser vos processus d'affaires.",
  },
  {
    id: "tabs-3",
    title: "Application Mobile",
    icon: <PhoneIphoneIcon className="!text-6xl" />,
    image: "/assets/img/sass-img/serv/1.png",
    description:
      "Nous concevons des applications mobiles qui enrichissent l'engagement client et étendent votre portée sur les plateformes iOS et Android.",
  },
  {
    id: "tabs-4",
    title: "Jeux Vidéo",
    icon: <SportsEsportsIcon className="!text-6xl" />,
    image: "/assets/img/sass-img/serv/4.png",
    description:
      "Nous développons des jeux vidéo personnalisés, offrant des expériences immersives et uniques adaptées à vos besoins.",
  },
];

function ServicesTab() {
  const [activeTab, setActiveTab] = useState("tabs-1");

  return (
    <section className="min-h-screen py-20 px-5 bg-dark-900 text-white">
      <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
        <h6 className="mb-4 wow fadeIn inline-block px-7 py-2 text-lg uppercase tracking-wide rounded-full border border-white/50">
                    Services
              </h6>
          <h6 className="text-3xl font-semibold mb-4"></h6>
          <p className="text-base mb-6">
            Explorez un éventail de services digitaux conçus pour matérialiser vos ambitions dans le monde numérique.
          </p>
          <ul className="space-y-3">
            {tabs.map((tab) => (
              <li
                key={tab.id}
                className={`cursor-pointer py-2 px-4 rounded-lg text-lg font-medium transition duration-300 ${
      activeTab === tab.id ? "bg-blue-600" : "bg-gray-700 hover:bg-gray-600"
    }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.title}
              </li>
            ))}
          </ul>
        </div>
        <div>
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`transition-opacity duration-500 ${
      activeTab === tab.id ? "block" : "hidden"
    }`}
            >
              <img src={tab.image} alt={tab.title} className="w-full h-64 object-cover rounded-lg mb-6" />
              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="text-center mb-4">{tab.icon}</div>
                <p className="text-base mb-4">{tab.description}</p>
                <Link href="/dark/page-services">
                  <span className="text-blue-400 hover:text-blue-500 transition">En Savoir Plus →</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesTab;