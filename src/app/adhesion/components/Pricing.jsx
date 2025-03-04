"use client";
import React from "react";

function Pricing({ products }) {
  const getPrice = (price) => `${price}€ / an`;

  return (
    <section className="py-20 bg-gray-900 text-white text-center">
      <div className="container mx-auto px-6">
        
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4">Abonnements</h2>
        <p className="mb-6 text-lg max-w-2xl mx-auto">
          Notre communauté privée comprend deux types <span className="text-green-600">d'adhésion</span>, offrant des avantages <span className="text-green-600">exclusifs.</span>
        </p>

        {/* Toggle Button (For Future Use) */}
        <div className="mb-6">
          <button className="px-6 py-2 border border-green-600 text-green-600 rounded-lg transition-all hover:bg-green-600 hover:text-gray-900">
            Membership annuel
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center">
          {products.map((product, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl border transition-all ${
                product.highlight ? "border-green-500 shadow-lg shadow-green-500/50" : "border-gray-400 shadow-md"
              } hover:scale-105`}
            >
              <h3 className="text-2xl font-semibold mb-3">{product.name}</h3>
              <p className="text-lg mb-4">{product.description}</p>
              <p className="text-3xl font-bold text-green-600">{getPrice(product.price)}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Pricing;
