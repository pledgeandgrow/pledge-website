"use client";
import dynamic from "next/dynamic";
import { Hourglass, ShieldCheck, Lightbulb, TimerIcon, Blocks } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Dynamic Imports
const Pricing = dynamic(() => import("../adhesion/components/Pricing"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});
const Header = dynamic(() => import("../../components/Header/index"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

// Pricing Data
const products = [
  {
    name: "Premium",
    description: "Une offre idéale pour les petites structures qui ont besoin d’un support occasionnel, avec des interventions à la demande.",
    price: 287,
  },
  {
    name: "Prestige",
    description: "Une solution complète qui inclut un support prioritaire, des interventions illimitées, et une gestion avancée de vos infrastructures.",
    price: 4789,
  }
];

// Features Data
const features = [
  { icon: ShieldCheck, title: "Accès prioritaire", description: "Les membres VIP reçoivent une attention prioritaire pour tous les services, garantissant une prise en charge rapide et efficace." },
  { icon: Blocks, title: "Tarifs préférentiels", description: "Profitez de réductions exclusives sur nos prestations, vous permettant d'optimiser votre budget tout en bénéficiant de services de haute qualité." },
  { icon: TimerIcon, title: "Événements exclusifs", description: "Participez à des ateliers, webinaires et séminaires réservés aux membres VIP, favorisant le réseautage et le partage de connaissances." },
];

function CentrePage() {
  const headerMetadata = {
    title: "Adhésion",
    description: "Accédez à des ressources exclusives, des opportunités de collaboration et un réseau d'experts en rejoignant les programmes d'adhésion de Pledge and Grow.",
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="relative min-h-screen flex flex-col justify-center items-center text-center crev-header"
      >
        <div className="absolute inset-0 bg-[url('/assets/imgs/patterns/abstact-BG.png')] bg-cover "></div>
        <Header data={headerMetadata} />
        <h1 className="text-5xl md:text-[85px] font-bold uppercase tracking-wide text-white relative z-10">
          {headerMetadata.title}
        </h1>
        <div className="container text-center mt-10">
          <p className='mb-100 text-lg'>{headerMetadata.description}</p>
        </div>
      </motion.div>

      <section className="py-16">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10">
          <motion.div 
            initial={{ opacity: 0, x: -100 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <img src="assets/imgs/serv-icons/relations.png" alt="" className="w-full" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 100 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 text-right"
          >
            <h6 className="text-lg font-semibold text-gray-400">Notre communauté</h6>
            <h2 className="text-4xl font-bold mt-4">Créez des <span className="text-green-600">Liens étroits</span> et des <span className="text-green-600">Synergies</span></h2>
            <p className="text-lg mt-4">Bénéficiez d'un accès privilégié à un réseau d’affaires, permettant aux entreprises membres d'interagir, de partager des conseils, et de créer des synergies commerciales pour des projets communs.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold">Pourquoi nous rejoindre ?</h2>
          <p className="mt-4 text-lg max-w-3xl mx-auto">
            Bénéficiez d'un accès privilégié à un réseau d’affaires, permettant aux entreprises membres d'interagir, partager des conseils et créer des synergies commerciales.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {features.map((item, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, scale: 0.9 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="p-6 rounded-lg bg-gray-800 shadow-lg transition-transform hover:scale-105"
              >
                <item.icon className="w-16 h-16 mx-auto text-green-600" />
                <h3 className="mt-4 text-2xl font-bold">{item.title}</h3>
                <p className="mt-2 text-lg">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <Pricing products={products} />
      </section>

      <section className="py-20 bg-gray-800 text-center">
        <Hourglass className="w-24 h-24 mx-auto text-green-600" />
        <h3 className="mt-6 text-3xl">Rendez-vous en <span className="text-green-600">2025</span> pour nos programmes d'adhésion...</h3>
      </section>
    </div>
  );
}

export default CentrePage;