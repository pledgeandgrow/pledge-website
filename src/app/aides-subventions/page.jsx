"use client"
import dynamic from 'next/dynamic';
import React from 'react'

import TextPartData from '../../data/aides-subventions/textPart.json';




const Header = dynamic(() => import("../../components/Header/index"), {
	loading: () => <p>Loading...</p>,
	ssr: false,
  });
const SubventionAnswers  = dynamic(() => import('../aides-subventions/SubventionAnswers'), {
	loading: () => <p>Loading...</p>,
	ssr: false,  
  });
const CallToAction  = dynamic(() => import('../../components/CallToAction'), {
	loading: () => <p>Loading...</p>,
	ssr: false,  
  });
  const IntegrationStats  = dynamic(() => import('../../components/IntegrationStats'), {
	loading: () => <p>Loading...</p>,
	ssr: false,  
  });

function SubventionsPage() {
	const headerMetadata = {
		title: "Aides & Subventions",
		description: "Vous cherchez des moyens de financer vos projets informatiques ? Découvrez les différentes alternatives et options de financement ainsi que les aides de l'État disponibles pour soutenir vos initiatives technologiques.",
		text: "AIDES & SUBVENTIONS"
	  }


  return (
	<>


	<main className=" min-h-screen">
     
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

      {/* Content Section */}
      <section className="container mx-auto  py-12 space-y-12">

	  <div className="mt-100"><IntegrationStats data={TextPartData}/></div>
      <SubventionAnswers/>
      

        <div className="mt-12 text-center">
		<CallToAction text="Envie d'en savoir plus?"/>
        </div>
      </section>
    </main>

	</>
  )
}

export default SubventionsPage