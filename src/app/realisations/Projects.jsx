import React from 'react';
import data from '../../data/realisations/portfolio.json';

function Projects() {
  return (
    <section className="py-16" data-scroll-index="3">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h6 className="text-lg font-semibold text-gray-100  "> <span className='border border-gray-100 px-10 py-5 rounded-full'>Nos Victoires</span> </h6>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {data.map((item) => (
            <div key={item.id} className="border border-gray-100 shadow-lg rounded-lg overflow-hidden">
              <div className="relative">
                <img src={item.image} alt={item.name} className="w-100 h-64 object-cover mx-auto" />
              </div>
              <div className="p-6">
                <h6 className="text-xl font-semibold text-gray-200">{item.name}</h6>
                <p className="mt-2 text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
