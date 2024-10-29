"use client";
// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper styles

// import required modules
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import React from "react";
import { info } from "../../../data/content";

const Feature = () => {
  return (
    <section className="py-10">
      <div className="max-width">
        <Swiper
          spaceBetween={20}
          breakpoints={{
            // when window width is >= 640px
            0: {
              slidesPerView: 2,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          modules={[Pagination]}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="flex justify-evenly "
        >
          {info.map((item, index) => (
            <SwiperSlide
              key={index}
              className="bg-[#F3F6F7] py-10 px-10 max-md:px-4 max-md:py-6 max-md:w-full "
            >
              <img
                src={item.icon}
                alt=""
                className="pb-3 h-[60px]  max-md:h-[60px] "
              />
              <h3 className="text-xl max-md:text-sm font-semibold md:text-nowrap ">
                {item.name}
              </h3>
              <p className="text-sm text-[#737373]">{item.msg}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Feature;
