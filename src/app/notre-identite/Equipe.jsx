"use client";

import React from "react";
import data from "../../data/notre-identite/equipe.json";

function Equipe() {
  return (
    <section className="team py-20  text-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="sec-head mb-16">
          <div className="max-w-3xl">
            <h6 className="text-lg text-gray-400 uppercase">15 places</h6>
            <h2 className="text-4xl font-bold mt-4">
              Membres du conseil
            </h2>
          </div>
        </div>

        {/* Team Members */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {data.map((member) => (
            <div key={member.id} className="flex flex-col items-center">
              <div className="w-100 h-100  shadow-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center mt-4">
                <span className="block text-gray-400 text-sm">
                  {member.country}
                </span>
                <h6 className="text-lg font-semibold">{member.name}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Equipe;
