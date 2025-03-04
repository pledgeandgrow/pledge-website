"use client";
import React from "react";
import dynamic from "next/dynamic";
import TextPartData from "../../data/notre-identite/textPart.json";

// Dynamic imports
const Header = dynamic(() => import("../../components/Header/index"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});
const TextPart = dynamic(() => import("../../components/common/TextPart"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});
const IdentityAbout = dynamic(() => import("../notre-identite/IdentityAbout"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});
const Equipe = dynamic(() => import("../notre-identite/Equipe"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});
const CallToAction = dynamic(() => import("../../components/CallToAction"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

function IdentityPage() {
  const headerMetadata = {
    subTitle: "QUI SOMMES-NOUS ?",
    title: "Notre Identité",
    text: "A PROPOS DE NOUS",
    description:
      "Une histoire peu commune, portée par une mission profonde et ambitieuse : Offrir des solutions innovantes et sur mesure, créées par une équipe d'experts passionnés",
  };

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
        <TextPart data={TextPartData} />
        <IdentityAbout />

        {/* Team Section */}
        <div className="py-12">
          <Equipe />
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <CallToAction text="Envie d'en savoir plus?" />
        </div>
      </section>
    </main>
  );
}

export default IdentityPage;
