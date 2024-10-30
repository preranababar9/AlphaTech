import React from "react";

const About = () => {
  return (
    <section className="py-10">
      <div className="flex max-md:flex-col">
        <div className="py-10 px-20 max-md:px-4 flex flex-col gap-y-5 justify-center items-Start text-white bg-black w-1/2 max-md:w-full">
          <p className="text-lg uppercase font-semibold">ABOUT ALPHATECH</p>
          <h1 className="text-5xl max-md:text-2xl font-semibold lg:w-[80%] max-md:w-full tracking-wide">
            Know About Our Company and Values
          </h1>
          <p className="text-md max-md:text-sm">
            Born in Tanzania, we are the leaders in providing certified used
            technology in the African marketplace, and we’re just getting
            started! AlphaTech believes in the power of technology to empower
            everyone in whatever sphere of life they’re in or looking to grow
            towards. Technology that’s well taken care of can last beyond a
            user’s needs. We gather this tech, review and ensure we can pass it
            on to a new Alpha. All our products are tested so our Alpha has the
            tech for whatever aspirations lie ahead.
          </p>

          <div className="pt-5">
            <button>
              <a className="bg-[#22C55E] text-white rounded-lg px-8 py-3 ">
                Know more
              </a>
            </button>
          </div>
        </div>
        <img
          src="/images/about.png"
          alt=""
          className="w-1/2  max-md:w-full object-cover max-md:hidden"
        />
        <img
          src="/images/about-mobile.png"
          alt=""
          className="lg:hidden md:hidden object-contain h-"
        />
      </div>
    </section>
  );
};

export default About;
