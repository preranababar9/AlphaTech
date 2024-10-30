import React from "react";
import Marquee from "react-fast-marquee";

const Company = () => {
  return (
    <section className="py-10">
      <div>
        <Marquee direction="right" pauseOnHover>
          <img
            src="/icons/marque1.png"
            alt=""
            className="h-14 w-36 object-contain mr-10 "
          />
          <img
            src="/icons/marque2.png"
            alt=""
            className="h-14 w-36 object-contain mr-10 "
          />
          <img
            src="/icons/marque3.png"
            alt=""
            className="h-14 w-28 object-contain mr-10"
          />
          <img
            src="/icons/marque4.png"
            alt=""
            className="h-14 w-28 object-contain mr-10"
          />
          <img
            src="/icons/marque5.png"
            alt=""
            className="h-14 w-28 object-contain mr-10"
          />
          <img
            src="/icons/marque6.png"
            alt=""
            className="h-20 w-36 object-contain mr-10 "
          />
          <img
            src="/icons/marque7.png"
            alt=""
            className="h-20 w-52 object-contain mr-10 "
          />
          <img
            src="/icons/marque4.png"
            alt=""
            className="h-14 w-28 object-contain mr-10"
          />
          <img
            src="/icons/marque5.png"
            alt=""
            className="h-14 w-28 object-contain mr-10"
          />
          <img
            src="/icons/marque6.png"
            alt=""
            className="h-14 w-36 object-contain mr-10 "
          />
          {/* <img src="/icons/marque7.png" alt="" className="h-14 w-28 object-contain mr-10 " /> */}
        </Marquee>
      </div>
    </section>
  );
};

export default Company;
