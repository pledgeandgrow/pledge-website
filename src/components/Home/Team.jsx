"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import data from "../../data/notre-identite/team.json";
import Link from "next/link";

function Team() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="py-16 text-white border-b border-gray-100/20">
      <div className="container mx-auto mt-16 px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold">L'Équipe</h2>
        </div>

        <div className="relative">
          {isMobile ? (
            <div className="relative">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={4}
                loop={true}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
                
                breakpoints={{
                  0: { slidesPerView: 1, spaceBetween: 10 },
                  640: { slidesPerView: 4, spaceBetween: 20 },
                  768: { slidesPerView: 4, spaceBetween: 25 },
                  1024: { slidesPerView: 4 },
                }}
                className="swiper-container"
              >
                {data.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="p-4 text-center bg-gray-800 rounded-lg shadow-lg flex flex-col items-center">
                      <div className="w-[50%] overflow-hidden rounded-lg">
                        <img src={item.image} alt={item.name} className=" object-cover" />
                      </div>
                      <h4 className="mt-4 text-lg font-semibold">{item.position}</h4>
                      <p className="text-gray-400">{item.name}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Pagination BELOW the cards */}
              <div className="swiper-pagination mt-6"></div>

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center absolute top-1/2 left-0 right-0 z-10">
                <div className="swiper-button-prev  text-white p-3 rounded-full cursor-pointer hover:bg-gray-600"></div>
                <div className="swiper-button-next  text-white p-3 rounded-full cursor-pointer hover:bg-gray-600"></div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
              {data.map((item) => (
                <div key={item.id} className="bg-gray-800 shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105 flex flex-col items-center">
                  <div className="w-[50%] overflow-hidden rounded-lg">
                        <img src={item.image} alt={item.name} className=""/>
                            </div>

                  <h4 className="mt-4 text-lg font-semibold">{item.position}</h4>
                  <div className="flex justify-center items-center mt-2">
                    <p className="text-gray-400 text-sm">{item.name}</p>
                    <Link target="_blank" href={"https://fr.linkedin.com/company/pledge-and-grow"} className="ml-2 text-blue-400 bg-gray-900 p-3 rounded-full hover:text-blue-600 transition">
                      <svg xmlns="http://www.w3.org/2000/svg" width="0.89em" height="1em" viewBox="0 0 750 850">
                        <path fill="currentColor" d="M165 90q0 35-21 59t-62 24q-37 0-59-24T0 95q0-35 23-61T83 8t60 24t22 58M0 750h165V214H0zm560-528q-32 0-57 8t-45 21t-33 27t-21 27h-4l-9-70H243q0 34 2 74t2 86v355h165V457q0-12 1-22t3-19q4-11 11-23t16-21t22-16t29-6q44 0 64 32t19 83v285h165V445q0-57-14-99t-38-70t-58-41t-72-13" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Team;
