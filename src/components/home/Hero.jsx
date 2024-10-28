"use client";
// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper styles

// import required modules
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
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
    modules={[Pagination]}
    onSlideChange={() => console.log("slide change")}
    onSwiper={(swiper) => console.log(swiper)} 
    className="bg-black h-[90vh] pt-14  text-white">

      {detail.map((item, index) => (  
      <SwiperSlide
      key={index} className=" ">
      
   <div
   

   className="flex flex-col justify-center items-center gap-y-6 max-width pt-14">
   <h1 className="text-5xl font-bold max-md:text-4xl">{item.title}</h1>
   <p className="text-2xl font-semibold max-md:text-xl">
    {item.subtitle}
   </p>

   <div className="flex gap-10 my-5">
     <button>
       <Link href="/" clLinkssName="bg-[#22C55E] py-3 px-4 rounded-lg text-white font-semibold">
         Explore Category
       </Link>
     </button>
     <button>
       <Link href="/"  className="text-green-300 py-3  px-9 rounded-lg border border-solid border-[#22C55E] font-semibold">
         Buy Now
       </Link>
     </button>
   </div>

   <div className="flex justify-center h-full w-full">
   <img
     src={item.img}
     alt=""
     className="h-[400px] w-1/3 max-md:w-[400px] object-contain absolute bottom-0"
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
