import Link from "next/link";
import React from "react";

const Testimonal = () => {
  return (
    <section className="py-20">
      <div className="max-width">
        {/* parents */}
        <div className="flex flex-col gap-y-14">
          {/* 1st div */}
          <div className="flex justify-between items-center ">
            <h3 className="text-5xl max-md:text-2xl w-[30%] max-md:w-3/4 max-md:gap-5 font-semibold">What Customers Say About Us?</h3>
            <div className="flex gap-5 ">
              <Link
                href=""
                className=" border-2 border-solid border-[#22C55E] py-5 px-4 rounded-full"
              >
                {" "}
                <img src="/icons/arrow-left.svg" alt="" className=""/>
              </Link>
              <Link
                href=""
                className=" border-2 border-solid border-[#22C55E] py-5 px-4 rounded-full"
              >
                {" "}
                <img src="/icons/arrow-right-green.svg" alt="" className=""/>
              </Link>
            </div>
          </div>
          {/* 2nd div */}

          <div className="flex gap-5 max-md:flex-col">
                <div className="bg-[#F3F6F7] py-6 px-10 ">
                        <img src="/icons/question.svg" alt="" className=" w-1/4 pb-10" />
                        <p className="text-md">“I loved visiting the website to get a gauge of the laptops I liked, and when I visited the store I fell in love with it. The laptop was in pristine condition and got a great deal! I highly recommend”</p>

                        <div className="flex gap-1 pt-10 pb-3">
                                <img src="/icons/star.svg" alt="" />
                                <img src="/icons/star.svg" alt="" />
                                <img src="/icons/star.svg" alt="" />
                                <img src="/icons/star.svg" alt="" />
                        </div>
                        <p>Muhammad</p>
                </div>

            

              
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonal;
