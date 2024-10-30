"use client";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { tech } from "../../../data/content";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Slidercontent from "../common/Slidercontent";

const Slider = () => {
  const [active, setActive] = useState(0);
  const ref = useRef();

  const handleSlideNext = () => {
    ref.current.slideNext();
  };

  const handleSlidePrev = () => {
    ref.current.slidePrev();
  };
  return (
    <section className="py-20">
      <div className="max-width">
        {/* parent div */}
        <div className="flex gap-1 max-md:flex-col">
          {/* 1st child */}
          <div className="w-[40%] max-md:w-full">
            <div className="flex flex-col gap-y-6 max-md:gap-y-3 mb-10 lg:h-[60vh]">
              <h2 className="text-5xl font-semibold max-md:text-3xl max-md:text-center">
                We are Sustainable Tech
              </h2>
              <p className="text-md text-[#737373] w-[85%] max-md:w-full max-md:text-center">
                At Alpha Tech TZ, we integrate sustainability into every aspect
                of our operations, driving positive change through eco-friendly
                technology, community support, and ethical practices.
              </p>
            </div>

            <div className="flex gap-5 max-md:hidden ">
              <button
                onClick={handleSlidePrev}
                className=" border-2 border-solid border-[#22C55E] py-5 px-4 rounded-full"
              >
                {" "}
                <img src="/icons/arrow-left.svg" alt="" />
              </button>
              <button
                onClick={handleSlideNext}
                className=" border-2 border-solid border-[#22C55E] py-5 px-4 rounded-full"
              >
                {" "}
                <img src="/icons/arrow-right-green.svg" alt="" />
              </button>
            </div>
          </div>

          {/* 2nd child */}

          <Swiper
            spaceBetween={50}
            breakpoints={{
              // when window width is >= 640px
              0: {
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 1,
              },
              1280: {
                slidesPerView: 2,
              },
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => (ref.current = swiper)}
            onActiveIndexChange={(swiper) => setActive(swiper.realIndex)}
            className="w-[60%] flex gap-10 max-md:flex-col max-md:w-full max-md:overflow-hidden"
          >
            {tech.map((item, index) => (
              <SwiperSlide key={index}>
                <Slidercontent item={item} index={index} active={active} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex gap-5 md:hidden mt-5 justify-center">
            <button
              onClick={handleSlidePrev}
              className=" border-2 border-solid border-[#22C55E] py-5 px-4 rounded-full max-md:py-4 max-md:px-3"
            >
              {" "}
              <img src="/icons/arrow-left.svg" alt="" />
            </button>
            <button
              onClick={handleSlideNext}
              className=" border-2 border-solid border-[#22C55E] py-5 px-4 rounded-full max-md:py-4 max-md:px-3"
            >
              {" "}
              <img src="/icons/arrow-right-green.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
