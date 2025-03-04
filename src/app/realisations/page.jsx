"use client"
import React from 'react'
import dynamic from 'next/dynamic';




const Header = dynamic(() => import("../../components/Header/index"), {
	loading: () => <p>Loading...</p>,
	ssr: false,
  });

const Portfolio  = dynamic(() => import('../realisations/Projects'), {
	loading: () => <p>Loading...</p>,
	ssr: false,  
});
const ServicesGrid  = dynamic(() => import('../../components/ServicesGrid'), {
	loading: () => <p>Loading...</p>,
	ssr: false,  
});
const CallToAction  = dynamic(() => import('../../components/CallToAction'), {
	loading: () => <p>Loading...</p>,
	ssr: false,  
});

function RealisationsPage() {
	const headerMetadata = {
		title: "Nos Réalisations",
		description: "Fiers de nos collaborations, nous créons des projets uniques qui incarnent innovation et satisfaction client."
	}
  return (


	

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
	 <Portfolio/>
	   
	

	   {/* CTA Section */}
	   <div className="mt-12 text-center">
	   <CallToAction text="Je veux en faire partie!"/>

	   </div>
	 </section>
   </main>

	
  )
}

export default RealisationsPage