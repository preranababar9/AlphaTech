"use client"


import OfferTimer from "../../../data/OfferTimer";

const Offer = () => {
  const targetDate = "2024-12-31"; 
  const timeLeft = OfferTimer(targetDate);


  if (!timeLeft) {
    return null; 
  }

  return (
    <section className="py-10">
      <div className="flex ">
        <img
          src="/images/offer.png"
          alt=""
          className="w-1/2 h-[500px]  max-md:h-[300px]  object-cover"
        />

        <div className="py-10 px-20 max-md:px-2 max-md:py-2 flex flex-col gap-y-5 max-md:gap-y-2 max-sm:w-full justify-center items-Start h-[500px] max-md:h-[300px] text-white bg-black w-1/2">
          <p className="text-lg uppercase font-semibold">Promotion</p>
          <h1 className="text-5xl font-bold max-md:text-sm">
            Hurry up! 40% OFF
          </h1>
          <p className="text-lg max-md:xs">
            Thousands of high tech are waiting for you
          </p>
          <p>Offer expires in:</p>

          <div className="flex justify-start gap-5 max-md:gap-2">
            <div className="flex flex-col justify-center items-center ">
              <p className="bg-white text-[#22C55E] py-2 px-3 text-3xl max-md:w-8 font-semibold max-md:text-lg max-md:py-2 max-md:px-2">
              {timeLeft.days}
              </p>
              <p className="text-sm max-md:text-xs font-semibold">Days</p>
            </div>

            <div className="flex flex-col justify-center items-center ">
              <p className="bg-white text-[#22C55E] py-2 px-3 text-3xl max-md:w-8 font-semibold max-md:text-lg max-md:py-2 max-md:px-2">
              {timeLeft.hours}
              </p>
              <p className="text-sm max-md:text-xs font-semibold">Hours</p>
            </div>

            <div className="flex flex-col justify-center items-center ">
              <p className="bg-white text-[#22C55E] py-2 px-3 text-3xl max-md:w-8 font-semibold max-md:text-lg max-md:py-2 max-md:px-2">
              {timeLeft.minutes}
              </p>
              <p className="text-sm max-md:text-xs font-semibold">Minutes</p>
            </div>

            <div className="flex flex-col justify-center items-center ">
              <p className="bg-white text-[#22C55E] py-2 px-3 text-3xl max-md:w-8 font-semibold max-md:text-lg max-md:py-2 max-md:px-2">
              {timeLeft.seconds}
              </p>
              <p className="text-sm max-md:text-xs font-semibold">Seconds</p>
            </div>
          </div>

          <div className="pt-5 max-md:pt-1">
            <button>
              <a className="bg-[#22C55E] text-white rounded-lg px-8 py-3 max-md:px-2 max-md:py-2 max-md:text-xs ">
                Shop Now
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
