"use client";

import React from "react";
import { Star } from "lucide-react";
import data from "../../data/home/testimonials.json";

function Testimonials() {
  return (
    <section className="testim-vrt">
      <div className="container mx-auto">
        <div className="row flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Section */}
          <div className="valign flex flex-col justify-center">
            <div className="cont">
              <h6 className="sub-title text-green-400 text-lg font-semibold mb-4">
                Fondée en 2022
              </h6>
              <h3 className="text-start text-3xl lg:text-5xl font-bold leading-tight">
                Nous cherchons des partenaires durables afin de pouvoir collaborer sur la longévité
              </h3>
              <div className="stauts flex flex-wrap gap-6 mt-6">
                <div className="item flex items-center space-x-4 mt-4">
                  <h2 className="text-4xl font-bold text-green-400 mr-2">86%</h2>
                  <p className="fz-14 text-sm">Retention</p>
                </div>
                <div className="item flex items-center space-x-4 mt-4">
                  <h2 className="text-4xl font-bold text-green-400 mr-2">100%</h2>
                  <p className="fz-14 text-sm">Satisfaction</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Testimonials */}
          <div className="">
            <div className="main-marqv relative overflow-hidden">
              <div className="slide-vertical st1 h-[500px] overflow-hidden">
                <div className="box animate-slideUp infinite-loop">
                  
                  {data.concat(data).map((item, index) => (
                    <div key={index} className="item radius-30 mt-6 px-10 py-10 bg-gray-800 rounded-3xl shadow-lg">
                      <div className="cont mb-4">
                        
                        {/* ⭐ Star Ratings (Using Lucide Icons) */}
                        <div className="rate-stars flex gap-1 text-green-400  mb-3 py-4">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={18} fill="currentColor" className="text-green-400" />
                          ))}
                        </div>

                        <p className="text-2xl text-gray-300 fw-500">{item.content}</p>
                      </div>
                      <div className="flex items-center">
                        <div className="w-16 h-16 rounded-full overflow-hidden">
                          <img src={item.image} alt={item.name} className="w-16 h-16 object-cover circle-img" />
                        </div>
                        <div className="ml-6">
                          <h6 className="text-sm font-semibold">{item.name}</h6>
                        </div>
                      </div>
                    </div>
                  ))}

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Testimonials;