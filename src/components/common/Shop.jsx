import Link from "next/link";
import React from "react";

const Shop = ({ data, row }) => {
  return (
    <div
      className={`max-width flex gap-5 max-md:flex-col ${
        row && "flex-row-reverse"
      }`}
    >
      <div className="bg-black w-1/2 py-5 px-2 max-md:w-full">
        <div className="flex justify-center items-center h-[80%]">
          <img src={data[0].img} alt="" className="object-cover w-[80%] mb-5" />
        </div>

        <div className="text-white px-10 pb-10">
          <h2 className="text-4xl pb-2 max-md:text-lg">{data[0].title}</h2>

          <div className="flex gap-2 items-center">
            <Link
              href="/"
              className="text-xl max-md:text-xs underline underline-offset-4"
            >
              Collections
            </Link>
            <img
              src="/icons/arrow.svg"
              alt=""
              className="w-6 max-md:w-5 pt-2"
            />
          </div>
        </div>
      </div>

      <div className="w-1/2 flex flex-col gap-y-5 max-md:w-full">
        {/* first div */}
        <div className="bg-[#F3F6F7] flex gap-10 py-5 px-5 justify-between items-end">
          <div className="w-[100px]">
            <h2 className="text-3xl pb-2 lg:text-nowrap max-md:text-lg ">
              {data[1].title}
            </h2>

            <div className="flex gap-2 items-center">
              <Link
                href="/"
                className="text-xl max-md:text-xs underline underline-offset-4"
              >
                Collections
              </Link>
              <img
                src="/icons/arrow-right.svg"
                alt=""
                className="w-10 max-md:w-5 h-7 pt-1"
              />
            </div>
          </div>
          <div className="w-1/2">
            <img
              src={data[1].img}
              alt=""
              className="object-contain h-[280px] max-md:h-[80%] w-full"
            />
          </div>
        </div>

        {/* second div */}
        <div className="bg-[#F3F6F7] flex gap-10 py-5 px-5 justify-between items-end">
          <div>
            <h2 className="text-3xl pb-2 lg:text-nowrap max-md:text-lg">
              {data[2].title}
            </h2>

            <div className="flex gap-2 items-center">
              <Link
                href="/"
                className="text-xl max-md:text-xs underline underline-offset-4"
              >
                Collections
              </Link>
              <img
                src="/icons/arrow-right.svg"
                alt=""
                className="w-8 max-md:w-5  h-7 pt-1 "
              />
            </div>
          </div>
          <div>
            <img
              src={data[2].img}
              alt=""
              className="object-contain h-[280px]  max-md:h-[80%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
