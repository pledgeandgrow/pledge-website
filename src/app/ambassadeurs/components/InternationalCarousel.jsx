"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import data from '../../../data/carousel.json';

const swiperOptions = {
  modules: [Navigation, Pagination],
  speed: 1000,
  spaceBetween: 80,
  loop: true,
  centeredSlides: true,
  mousewheel: true,
  slidesPerView: 2,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 60,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 60,
    },
    1024: {
      slidesPerView: 2,
    },
  },
  pagination: {
    el: ".work-carsouel .swiper-pagination",
    clickable: true,
  },
  
}

function InternationalCarousel() {
  const [loadSwiper, setLoadSwiper] = useState(false);

  useEffect(() => {
    setLoadSwiper(true);
  }, []);

  return (
    <div>
		<h2 className="fz-55 text-center">Ambassadeurs Actuels </h2>

		<section className={`work-carsouel full-height valign section-padding  `}>
      <div className="container-fluid rest">
        <div className="row">
          <div className="col-lg-12 col-sm-6">
            <div className="work-crus work-crus2">
              {
                loadSwiper &&
                <Swiper {...swiperOptions} id="content-carousel-container-unq-w" className="swiper-container">
                  {
                    data.map((item) => (
                      <SwiperSlide key={item.id}>
                        <div className="item">
                          <div className="img">
                            <img src={item.image} alt="" />
                            <div className="cont">
                              <span className="mb-5">{item.category}</span>
                              <h6 className="fz-18">{item.title}</h6>
                            </div>
                            <Link href="/dark/project-details1" className="plink"></Link>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))
                  }
                </Swiper>
              }
              <div className="swiper-controls work-controls arrow-out">
                <div className="container">
                 
                  <div className="swiper-pagination"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
	</div>
  )
}

export default InternationalCarousel;