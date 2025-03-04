import React from "react";

function IntegrationStats({ data }) {
  return (
    <section className="py-16 mb-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2">
            <h6 className="text-lg text-gray-600 uppercase tracking-wide">
              {data.title}
            </h6>
            <h2 className="text-4xl lg:text-5xl font-bold mt-6 leading-snug text-gray-200">
              {data.subtitle}
            </h2>
            <p className="mt-6 text-lg text-gray-700">{data.text}</p>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2">
            <img
              src={data.image}
              alt="Integration"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntegrationStats;
