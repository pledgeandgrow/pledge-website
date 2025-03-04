"use client"

import dynamic from 'next/dynamic';
import { React, useLayoutEffect } from 'react'



const InternationalIntro  = dynamic(() => import('../../components/InternationalIntro'), {
	loading: () => <p>Loading...</p>,
	ssr: false,  
});

const Header = dynamic(() => import("../../components/Header/index"), {
	loading: () => <p>Loading...</p>,
	ssr: false,
  });
const CallToAction  = dynamic(() => import('../../components/CallToAction'), {
	loading: () => <p>Loading...</p>,
	ssr: false,  
});
const Ambassadeurs  = dynamic(() => import('../../components/Ambassadeurs'), {
	loading: () => <p>Loading...</p>,
	ssr: false,  
});


function InternationalPage() {

	const headerMetadata = {
		subTitle: "QUI SOMMES-NOUS ?",
		title: "International",
		text: "A PROPOS DE NOUS",
		description: "Pledge and Grow : Connectés au Monde, Portés par la Diversité "
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
	  <InternationalIntro/>
	  <Ambassadeurs/>
      

        {/* CTA Section */}
        <div className="mt-12 text-center">
		<CallToAction text={"Envie de faire partie l'aventure?"}/>
        </div>
      </section>
    </main>
	</>
  )
}

export default InternationalPage