"use client";
import { ContactRound, ArrowDownUp, Handshake } from "lucide-react";
import React from "react";

function ProcessusPartenaires() {
  return (
    <section className="mb-20 py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h6 className="text-green-600 text-lg font-semibold uppercase">Rejoignez Notre Communauté</h6>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Comment devenir <span className="text-green-600">Partenaire P&G</span> ?
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-gray-800 shadow-lg rounded-lg p-8 text-center">
            <div className="flex justify-center mb-6">
              <ContactRound className="w-20 h-20 text-green-600" />
            </div>
            <div className="border-b border-gray-300 mb-4"></div>
            <h3 className="text-2xl font-semibold text-gray-200">
              <span className="text-green-600">1.</span> Prise de Contact
            </h3>
            <p className="mt-4 text-gray-600 text-lg">
              Rien de mieux que de nous envoyer un message pour faire connaissance et discuter des possibilités de collaboration.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-gray-800 shadow-lg rounded-lg p-8 text-center">
            <div className="flex justify-center mb-6">
              <ArrowDownUp className="w-20 h-20 text-green-600" />
            </div>
            <div className="border-b border-gray-300 mb-4"></div>
            <h3 className="text-2xl font-semibold text-gray-200">
              <span className="text-green-600">2.</span> Sélection
            </h3>
            <p className="mt-4 text-gray-600 text-lg">
              Notre équipe examinera votre profil et sélectionnera les candidats qui correspondent le mieux à nos valeurs et objectifs.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-gray-800 shadow-lg rounded-lg p-8 text-center">
            <div className="flex justify-center mb-6">
              <Handshake className="w-20 h-20 text-green-600" />
            </div>
            <div className="border-b border-gray-300 mb-4"></div>
            <h3 className="text-2xl font-semibold text-gray-200">
              <span className="text-green-600">3.</span> Partenariat
            </h3>
            <p className="mt-4 text-gray-600 text-lg">
              Une fois sélectionné, vous recevrez une réponse si nécessaire pour discuter de bénéfices mutuellement avantageux.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProcessusPartenaires;
