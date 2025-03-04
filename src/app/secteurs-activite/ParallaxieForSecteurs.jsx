"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, Parallax } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import data from "../../data/secteurs-activite/FullSectorsCarousel.json";

// Swiper configuration
const swiperOptions = {
  modules: [Navigation, Autoplay, Pagination, Parallax],
  speed: 1500,
  autoplay: { delay: 5000 },
  loop: true,
  parallax: true,
  slidesPerView: 1, // Show one slide at a time
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className} bg-blue-500 w-4 h-4 inline-block rounded-full mx-1"></span>`; // Custom pagination color
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
};

function ParallaxieForSecteurs() {
  const [loadSwiper, setLoadSwiper] = useState(false);

  useEffect(() => {
    setLoadSwiper(true);
  }, []);

  return (
    <header className="relative w-full h-screen">
      {loadSwiper && (
        <Swiper {...swiperOptions} className="w-full h-full">
          {data.map((item, index) => (
            <SwiperSlide key={item.id || index} className="relative w-full h-full">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.background})` }}
              />
              {/* Overlay & Content */}
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white px-8 text-center">
                <div className="max-w-3xl">
                  <h1 className="text-4xl md:text-6xl font-bold" data-swiper-parallax="-2000">
                    <Link href="/dark/project-details1">
                      <span>{item.title}</span>
                    </Link>
                  </h1>
                  <h6 className="text-lg mt-4 opacity-80" data-swiper-parallax="-2000">
                    {item.tehcnologies}
                  </h6>
                  <hr className="my-4 border-gray-300 w-1/2 mx-auto" />
                  <h6 className="text-lg opacity-80" data-swiper-parallax="-2000">
                    {item.impact}
                  </h6>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* Navigation Buttons */}
      <div className="absolute inset-0 flex justify-between items-center px-8">
        <div className="swiper-button-prev cursor-pointer p-4 rounded-full">
          <i className="fas fa-chevron-left text-white text-2xl"></i>
        </div>
        <div className="swiper-button-next cursor-pointer  p-4 rounded-full">
          <i className="fas fa-chevron-right text-white text-2xl"></i>
        </div>
      </div>

      {/* Pagination */}
      <div className="absolute bottom-8 w-full flex justify-center">
        <div className="swiper-pagination"></div>
      </div>
    </header>
  );
}

export default ParallaxieForSecteurs;
