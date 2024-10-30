import Link from "next/link";
import React from "react";
import { product } from "../../../data/content";

const ProductCard = ({ item, index }) => {
  return (
    <div className="w-[48%] max-md:w-full">
      <div
        className={` h-[80vh]  ${
          index % 2 === 0 ? "bg-black  text-white" : "bg-[#F3F6F7] text-black"
        } py-10 max-md:w-full px-4 `}
      >
        <div className="flex flex-col items-center justify-center gap-y-3 ">
          <h4 className="text-4xl max-md:text-3xl">{item.name}</h4>
          <p className="text-lg max-md:text-sm text-center">{item.des}</p>

          <div className="flex gap-10 max-md:gap-3 mt-8 mb-5">
            <button>
              <Link
                href="/"
                className="bg-[#22C55E] py-3 px-8 rounded-lg text-white font-semibold max-md:px-4 max-md:py-2 "
              >
                Learn more
              </Link>
            </button>
            <button>
              <Link
                href="/"
                className="text-[#22C55E] py-3  px-9 rounded-lg  border-2 border-solid border-[#22C55E] font-semibold max-md:px-4 max-md:py-2"
              >
                Buy Now
              </Link>
            </button>
          </div>

          <Link href="" className="underline underline-offset-2 max-md:pb-5">
            Explore more products
          </Link>
        </div>

        <div className="flex justify-center lg:mt-10  ">
          <img
            src={item.img}
            alt=""
            className="object-contain h-[300px] max-md:h-[260px] w-[80%] max-md:w-[100%] pb-10 max-md:pb-5"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
