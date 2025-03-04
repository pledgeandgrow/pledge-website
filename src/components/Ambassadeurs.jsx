"use client";
import React from "react";
import data from "../data/international/ambassadeurs.json";

function Ambassadeurs() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-left">
          <h6 className="text-lg text-gray-200 uppercase tracking-wide">
            Les Promoteurs
          </h6>
          <h2 className="text-4xl font-bold mt-4 text-gray-400">
            Ambassadeurs
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {data.map((member) => (
            <div key={member.id} className="bg-gray-800 p-6 rounded-lg shadow-xl">
              <div className="w-full h-60 overflow-hidden rounded-md">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4 text-center">
                <span className="text-gray-500 text-sm">{member.country}</span>
                <h6 className="text-lg font-semibold text-gray-400">
                  {member.name}
                </h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Ambassadeurs;
