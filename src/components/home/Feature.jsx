"use clients"
import React from "react";
import { info } from "../../../data/content";



const Feature = () => {
  return (
    <section className="py-10">
      <div className="max-width">
        <div
          className="flex justify-evenly mySwiper"
        >
          {info.map((item, index) => (
            <div key={index} className="bg-[#F3F6F7] py-10 px-10 w-1/5">
              <img src={item.icon} alt="" className="pb-3 h-1/2 w-1/3" />
              <h3 className="text-xl font-semibold text-nowrap">{item.name}</h3>
              <p className="text-sm text-[#737373]">{item.msg}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
