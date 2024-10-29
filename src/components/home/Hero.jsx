"use client";
// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper styles
import "swiper/css/effect-fade";
// import required modules
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { detail } from "../../../data/content";
import Link from "next/link";
const Hero = () => {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      pagination={{
        dynamicBullets: true,
      }}
      autoplay={{
        delay: 3000,
      }}
      effect="fade"
      modules={[Pagination, Autoplay, EffectFade]}
      loop={true}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className=" h-[90vh] pt-14  text-white"
    >
      {detail.map((item, index) => (
        <SwiperSlide key={index} className=" ">
          <div className="flex flex-col justify-center items-center gap-y-6 pt-14 h-full bg-black">
            <h1 className="text-6xl font-bold max-md:text-4xl">{item.title}</h1>
            <p className="text-2xl font-semibold max-md:text-xl text-center">
              {item.subtitle}
            </p>

            <div className="flex gap-10 my-5 max-md:gap-3">
              <button>
                <Link
                  href="/"
                  className="bg-[#22C55E] py-3 px-4 rounded-lg max-md:text-sm  text-white font-semibold max-md:px-3"
                >
                  Explore Category
                </Link>
              </button>
              <button>
                <Link
                  href="/"
                  className="text-green-300 py-3 max-md:px-7 max-md:text-sm px-9 rounded-lg border border-solid border-[#22C55E] font-semibold"
                >
                  Buy Now
                </Link>
              </button>
            </div>

            <div className="flex justify-center h-full w-full">
              <img
                src={item.img}
                alt=""
                className="h-[400px] w-1/2 max-md:w-[400px] object-contain absolute bottom-0 max-md:h-[260px] md:h-[320px]"
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
      {/* <SwiperSlide className=" ">
        <div className="flex flex-col justify-center items-center gap-y-4 ">
          <h1 className="text-5xl font-bold max-md:text-4xl">iphone 15 Pro</h1>
          <p className="text-2xl font-semibold max-md:text-xl">
            Beyond Pro: Experience Perfection
          </p>

          <div className="flex gap-10 my-5">
            <button>
              <a className="bg-[#22C55E] py-3 px-4 rounded-lg text-white font-semibold">
                Explore Category
              </a>
            </button>
            <button>
              <a className="text-green-300 py-3  px-9 rounded-lg border border-solid border-[#22C55E] font-semibold">
                Buy Now
              </a>
            </button>
          </div>
          <img
            src="/images/hero.webp"
            alt=""
            className="h-[332px] w-1/3 max-md:w-[400px] object-cover"
          />
        </div>
      </SwiperSlide> */}
    </Swiper>
  );
};

export default Hero;
