"use client";
import Link from "next/link";
import React, { useRef } from "react";
import { reviews } from "../../../data/content";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Reviewcontent from "../common/Reviewcontent";


const Testimonal = () => {
  const ref = useRef();

  const handleSlideNext = () => {
    ref.current.slideNext()
  }
  
  const handleSlidePrev = () => {
    ref.current.slidePrev()
  }
  return (
    <section className="py-20">
      <div className="max-width">
        {/* parents */}
        <div className="flex flex-col gap-y-14">
          {/* 1st div */}
          <div className="flex justify-between items-center ">
            <h3 className="text-5xl max-md:text-2xl w-[30%] max-md:w-3/4 max-md:gap-5 font-semibold">
              What Customers Say About Us?
            </h3>
            <div className="flex gap-5 max-md:gap-3">
              <button
                 onClick={handleSlidePrev}
                 
                className=" border-2 border-solid border-[#22C55E] py-5 px-4 rounded-full max-md:py-4 max-md:px-3"
              >
                {" "}
                <img src="/icons/arrow-left.svg" alt="" className="" />
              </button>
              <button
                 onClick={handleSlideNext}
                className=" border-2 border-solid border-[#22C55E] py-5 px-4 rounded-full max-md:py-4 max-md:px-3"
              >
                {" "}
                <img src="/icons/arrow-right-green.svg" alt="" className="" />
              </button>
            </div>
          </div>
          {/* 2nd div */}

          <Swiper
            spaceBetween={20}
            breakpoints={{
            
              640: {
                slidesPerView: 2,
              },
             
              768: {
                slidesPerView: 3,
              },
              400: {
                slidesPerView: 1,
              }
            }}
            onSlideChange={() => console.log("slide change")}

            onSwiper={(swiper) => ref.current = swiper}
            className="flex gap-5 justify-evenly max-md:flex-col w-full "
          >
            {reviews.map((item, index) => (
              <SwiperSlide key={index} className="w-1/2 ">
                <Reviewcontent item={item}/>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonal;
