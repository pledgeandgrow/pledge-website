'use client'
import React, { useEffect } from 'react'
import dynamic from 'next/dynamic';
import TextPartData from '../../data/secteurs-activite/textPart.json';




const ParallaxieForSecteurs = dynamic(() => import('../secteurs-activite/ParallaxieForSecteurs'), {
  loading: () => <p>Loading...</p>,
  ssr: true,  
});

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




function SecteursPage() {
  const metadata={
    page:'page des Secteurs clés',
    subTitle:" Devenez Pionnier de l'Innovation Numérique ",
  }
  const headerMetadata = {
		title: "Secteurs d'activité",
		description: "Nous collaborons étroitement avec des entreprises de divers secteurs et comprenons la richesse et les possibilités d'innovation propres à chacun. Devenez dès maintenant un pionnier de l'innovation numérique dans votre secteur.",
		text: "AIDES & SUBVENTIONS"
	  }


return (

  <>


  <main className=" min-h-screen">
     
     <div className="relative min-h-screen flex flex-col justify-center items-center text-center crev-header">

       <div className="absolute inset-0 bg-[url('/assets/imgs/patterns/abstact-BG.png')] bg-cover "></div>

       <Header data={headerMetadata} />
       <h1 className="text-5xl md:text-[85px] font-bold uppercase tracking-wide text-white relative z-10">
         {headerMetadata.title}
       </h1>
       <div className=" container text-center mt-10">
       <p className='mb-100' style={{fontSize: "1.3rem"}}>{headerMetadata.description}</p>
           </div>

       
     </div>


     <ParallaxieForSecteurs/>
     <section className="container mx-auto  py-12 space-y-12">
     
     <IntegrationStats data={TextPartData}/>

       <div className="mt-12 text-center">
       <CallToAction text="Vous voulez innover dans votre secteur?"/>
       </div>
     </section>
   </main>

  </>
  )
}

export default SecteursPage