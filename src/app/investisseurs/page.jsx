"use client"
import React from 'react'
import InvestTabs from './components/investTabs'
import dynamic from 'next/dynamic';
import IntegrationStatsData from '../../data/investisseurs/TextPart.json'


const Header = dynamic(() => import("../../components/Header/index"), {
	loading: () => <p>Loading...</p>,
	ssr: false,
  });
const CallToAction = dynamic(() => import('../../components/CallToAction'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});
const IntegrationStats = dynamic(() => import('../../components/IntegrationStats'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});


function InvestisseursPage() {
    const headerMetadata = {
      title: "Investisseurs",
      description: "Investir aujourd'hui pour bâtir demain, ensemble vers un avenir durable et prospère."
    };
    return (
      <div className='crev-header' >
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
        <div className=''><IntegrationStats data={IntegrationStatsData}/></div>
        <div className='container mx-auto'>
          <h2 className='text-center mb-20' style={{ fontSize: "4.5rem"}}>Notre Plan <span className='main-color'>d'Investissement</span></h2>
          <p className='text-center ' style={{ fontSize: "1.2rem"}}>Chez Pledge and Grow, nous considérons la planification comme un élément essentiel. Voici donc le plan d’action que nous avons mis en place pour aligner nos investissements avec notre vision à long terme.</p>
          <InvestTabs />
        </div>
        <div className='py-10'> <CallToAction text="Batissons le monde de demain ensemble" /> </div>
      </div >

    )
  }

export default InvestisseursPage



