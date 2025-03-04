"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Split from '/src/components/common/Split';
import data from '../../data/home/clients.json';

function Clients() {
  return (
    <div className="clients py-16">
      <div className="text-center mb-12">
        <h3 className="text-4xl font-bold text-white mb-4">
          Nous concevons des <span className="green-text">Expériences</span> <br /> et donnons vie aux <span className="green-text">Idées.</span>
        </h3>
      </div>

      <div className="container mx-auto relative px-4 sm:px-6 lg:px-8">
        <Swiper 
          slidesPerView={1} 
          spaceBetween={20} 
          navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          modules={[Navigation, Pagination, Autoplay]} 
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 }
          }}
          className="clients-slider"
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="p-5 rounded-xl border border-white/30 text-center transition-transform duration-300 overflow-hidden">
                <div className="w-full h-48 flex justify-center items-center">
                  <img 
                    src={`/${item.image}`} 
                    className="w-3/4 sm:w-2/3 lg:w-1/2 h-auto object-contain transition-opacity duration-500 rounded-lg"
                    alt={item.name}
                  />
                </div>
                <Split tag="a" className="block mt-4 text-lg font-bold text-white">
                  {item.name}
                </Split>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons with Better Positioning */}
        <div className="swiper-button-prev text-white hidden sm:block absolute" style={{ color: '#ffffff', left: '-50px' }}></div>
<div className="swiper-button-next text-white hidden sm:block absolute" style={{ color: '#ffffff', right: '-50px' }}></div>

      </div>
    </div>
  );
}

export default Clients;
