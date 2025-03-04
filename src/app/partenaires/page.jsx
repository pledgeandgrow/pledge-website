"use client";
import dynamic from 'next/dynamic';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import TextPartData from '../../data/partenaires/TextPart.json';
import CardsData from '../../data/partenaires/cards.json';

const PartenairesTabs = dynamic(() => import('../partenaires/components/partenairesTabs'), { ssr: false });
const Header = dynamic(() => import("../../components/Header/index"), { ssr: false });
const IntegrationAbout = dynamic(() => import('../../components/IntegrationAbout'), { ssr: false });
const TextPart = dynamic(() => import('../../components/common/TextPart'), { ssr: false });
const CallToAction = dynamic(() => import('../../components/CallToAction'), { ssr: false });
const ProcessusPartenaire = dynamic(() => import('../partenaires/components/ProcessusPartenaire'), { ssr: false });

function PartenairesPage() {
  const headerMetadata = {
    title: "Partenariats",
    description: "Ensemble, créons des collaborations durables et innovantes pour une croissance partagée",
    text: "PARTENARIATS"
  };

  // Intersection Observer Hook
  const { ref: sectionRef, inView: sectionVisible } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className='crev-header'>
      {/* Header Section */}
      <div className="relative min-h-screen flex flex-col justify-center items-center text-center crev-header">
        <div className="absolute inset-0 bg-[url('/assets/imgs/patterns/abstact-BG.png')] bg-cover"></div>
        <Header data={headerMetadata} />
        <motion.h1 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className="text-5xl md:text-[85px] font-bold uppercase tracking-wide text-white relative z-10"
        >
          {headerMetadata.title}
        </motion.h1>
        <div className="container text-center mt-10">
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.5, duration: 1 }}
            className='mb-100 text-lg'
          >
            {headerMetadata.description}
          </motion.p>
        </div>
      </div>

      {/* Text Section with Scroll Animation */}
      <motion.div
        ref={sectionRef}
        initial={{ opacity: 0, y: 50 }}
        animate={sectionVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <TextPart data={TextPartData} />
      </motion.div>

      {/* Integration Section */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        whileInView={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 1 }}
      >
        <IntegrationAbout data={CardsData} />
      </motion.div>

      {/* Partners Section */}
      <section className="call-action-center section-padding position-re">
        <div className="container mx-auto">
          <div className="row justify-content-center">
            <div className="col-sm">
              <div className="sec-lg-head text-center typewriter">
                <motion.h2 
                  initial={{ opacity: 0, y: 30 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 1 }}
                  className='text-5xl'
                >
                  Nos Partenaires
                </motion.h2>
                <PartenairesTabs />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessusPartenaire />

      {/* Call to Action */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }} 
        whileInView={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 1 }}
        className='py-10'
      >
        <CallToAction text="Vous voulez aussi en faire partie?" />
      </motion.div>
    </div>
  );
}

export default PartenairesPage;
