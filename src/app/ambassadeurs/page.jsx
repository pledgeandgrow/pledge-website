"use client"
import dynamic from 'next/dynamic';
import React from 'react'
import TextPartData from '../../data/ambassadeurs/TextPart.json';
import CardsData from '../../data/ambassadeurs/Cards.json';
import ServicesData from '../../data/ambassadeurs/services.json';

const InternationalCarousel = dynamic(() => import('../ambassadeurs/components/InternationalCarousel'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});
const TextPart = dynamic(() => import('../../components/common/TextPart'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});
const Header = dynamic(() => import("../../components/Header/index"), { ssr: false });

const CallToAction = dynamic(() => import('../../components//CallToAction'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
})
const IntegrationAbout = dynamic(() => import('../../components/IntegrationAbout'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
})
const Ambassadeurs = dynamic(() => import('../../components/Ambassadeurs'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
})
const MissionAmbassadeurs = dynamic(() => import('../ambassadeurs/components/MissionAmbassadeurs'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
})



function AmbassadeursPage() {
  const headerMetadata = {
    title: "Ambassadeurs",
    description: "Ensemble, créons des collaborations durables et innovantes pour une croissance partagée",
    text: "PARTENARIATS"
    }; 

  return (
    <div className='crev-header '>
        <div className="relative min-h-screen flex flex-col justify-center items-center text-center crev-header">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/assets/imgs/patterns/abstact-BG.png')] bg-cover "></div>

        {/* Header Content */}
        <Header data={headerMetadata} />
        <h1 className="text-5xl md:text-[85px] font-bold uppercase tracking-wide text-white relative z-10">
          {headerMetadata.title}
        </h1>
        <div className=" container text-center mt-10">
        <p className='mb-100' style={{fontSize: "1.3rem"}}>{headerMetadata.description}</p>
            </div>

        
      </div>

      <TextPart data={TextPartData} />
      <IntegrationAbout data={CardsData} />
      <MissionAmbassadeurs />
      <Ambassadeurs />
      <CallToAction text="Devenez Ambassadeur P&G" />
    </div>
  )
} 

export default AmbassadeursPage

