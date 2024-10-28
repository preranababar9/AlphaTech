"use client";
import Link from "next/link";
import React from "react";
import { tech } from "../../../data/content";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import Slidercontent from "../common/Slidercontent";

const Slider = () => {
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
              <Link
                href=""
                className=" border-2 border-solid border-[#22C55E] py-5 px-4 rounded-full"
              >
                {" "}
                <img src="/icons/arrow-left.svg" alt="" />
              </Link>
              <Link
                href=""
                className=" border-2 border-solid border-[#22C55E] py-5 px-4 rounded-full"
              >
                {" "}
                <img src="/icons/arrow-right-green.svg" alt="" />
              </Link>
            </div>
          </div>

          {/* 2nd child */}

          <Swiper
            spaceBetween={50}
            slidesPerView={2}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            className="w-[60%] flex gap-10 max-md:flex-col max-md:w-full max-md:overflow-hidden"
          >
            {tech.map((item, index) => (
              <SwiperSlide key={index} >
              <Slidercontent item={item}/>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex gap-5 md:hidden mt-5 justify-center">
            <Link
              href=""
              className=" border-2 border-solid border-[#22C55E] py-5 px-4 rounded-full max-md:py-4 max-md:px-3"
            >
              {" "}
              <img src="/icons/arrow-left.svg" alt="" />
            </Link>
            <Link
              href=""
              className=" border-2 border-solid border-[#22C55E] py-5 px-4 rounded-full max-md:py-4 max-md:px-3"
            >
              {" "}
              <img src="/icons/arrow-right-green.svg" alt="" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
