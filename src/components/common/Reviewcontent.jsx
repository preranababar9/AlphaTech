import React from "react";

const Reviewcontent = ({ item }) => {
  return (
    <div className="w-full bg-[#F3F6F7] px-5 py-5 h-full flex flex-col items-start justify-start">
      <div className="w-[100px] ">
        <img
          src="/icons/question.svg"
          alt=""
          className="h-[100px] w-[100px] pb-10 object-contain"
        />
      </div>
      <p className="text-md ">{item.review}</p>

      <div className="flex gap-1 pt-10 pb-3">
        <img src="/icons/star.svg" alt="" />
        <img src="/icons/star.svg" alt="" />
        <img src="/icons/star.svg" alt="" />
        <img src="/icons/star.svg" alt="" />
      </div>
      <p>{item.name}</p>
    </div>
  );
};

export default Reviewcontent;
