"use client";
import { Store, Earth, MapPinHouse } from "lucide-react";
import React from "react";

function MissionAmbassadeurs() {
  return (
    <section className="mb-20 py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h6 className="text-green-600 text-lg font-semibold uppercase">Rejoignez Notre Communauté</h6>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Vos Missions <span className="text-green-600">d'Ambassadeur</span> :
          </h2>
        </div>

        {/* Mission Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Mission 1 */}
          <div className="bg-gray-800 shadow-lg rounded-lg p-8 text-center">
            <div className="flex justify-center mb-6">
              <Earth className="w-20 h-20 text-green-600" />
            </div>
            <div className="border-b border-gray-300 mb-4"></div>
            <h3 className="text-2xl font-semibold text-gray-200">
              <span className="text-green-600">1.</span> Représentation
            </h3>
            <p className="mt-4 text-gray-600 text-lg">
              Portez fièrement nos valeurs et notre image sur vos plateformes.
            </p>
          </div>

          {/* Mission 2 */}
          <div className="bg-gray-800 shadow-lg rounded-lg p-8 text-center">
            <div className="flex justify-center mb-6">
              <Store className="w-20 h-20 text-green-600" />
            </div>
            <div className="border-b border-gray-300 mb-4"></div>
            <h3 className="text-2xl font-semibold text-gray-200">
              <span className="text-green-600">2.</span> Promotion Active
            </h3>
            <p className="mt-4 text-gray-600 text-lg">
              Créez et partagez du contenu engageant pour promouvoir nos produits et services.
            </p>
          </div>

          {/* Mission 3 */}
          <div className="bg-gray-800 shadow-lg rounded-lg p-8 text-center">
            <div className="flex justify-center mb-6">
              <MapPinHouse className="w-20 h-20 text-green-600" />
            </div>
            <div className="border-b border-gray-300 mb-4"></div>
            <h3 className="text-2xl font-semibold text-gray-200">
              <span className="text-green-600">3.</span> Engagement
            </h3>
            <p className="mt-4 text-gray-600 text-lg">
              Interagissez avec votre audience et la nôtre pour stimuler l'intérêt et la fidélité envers notre marque.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MissionAmbassadeurs;
