import React from "react";

const Request = () => {
  return (
    <section className="py-10 max-width">
      <div className=" bg-[#22C55E] py-16 px-3 rounded-lg">
        <div className="flex flex-col gap-y-5 text-white justify-center items-center  ">
          <h2 className="text-5xl font-semibold max-md:text-3xl text-center">
            Request more <span className="text-black">Information</span>
          </h2>
          <p className="text-xl font-semibold pb-5 max-md:text-lg text-center">
            Do You Have Any Question? Feel Free To Contact Us
          </p>
          <button>
            <a className="bg-white text-[#22C55E] rounded-full py-3 px-6 font-semibold text-lg">
              Contact Us
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Request;
