"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [nav, openNav] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = "hidden";
      document.body.style.display = "block";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.display = "hidden";
    }
  }, [toggle]);
  return (
    <section className="max-width py-3 h-[14vh] max-md:h-[10vh] flex max-md:justify-between ">
      <div className="lg:mr-10">
        <img
          src="/images/logo.webp"
          alt=""
          className=" h-[70px] max-md:h-[55px]"
        />
      </div>
      <div className="flex items-center w-full justify-between ">
        
        <button  onClick={() => {
           !nav && openNav(true)
            setToggle(true);
          }}>
        <img
          src="/icons/menu.svg"
          alt=""
          className="w-7 max-md:hidden md::mr-2"
         
        />
        </button>

        <div className="flex gap-6 items-center mr-10 max-md:hidden text-nowrap">
          {menu.map((item, index) => (
            <ul key={index} className="font-semibold text-md ">
              <Link href={item.href}>{item.name}</Link>
            </ul>
          ))}
        </div>

        <div className="flex  lg:gap-6 max-md:gap-4 max-md:absolute max-md:right-5">
          <img src="/icons/search.svg" alt="" className="w-6" />
          <img src="/icons/bag.svg" alt="" className="w-6 max-md:hidden" />
          <button  onClick={() => {
            !nav && openNav(true)
              setToggle(true);
            }}>
          <img
            src="/icons/menu.svg"
            alt=""
            className="w-7 md:hidden md::mr-2 cursor-pointer"
           
          />
          </button>
        </div>
      </div>

      {/* mobile side menu */}
      {nav && (

    
      <div className="max-md:hidden absolute  top-0  bg-[#22C55E] left-0 py-10 h-[100vh] px-20 z-40 text-white">
      <div className="absolute top-0 py-8  right-10 ">
     
     <button onClick={() => {
             openNav(false)
              setToggle(false);
            }}>
          <img src="/icons/close.svg" alt="" className="h-8 cursor-pointer"
            /></button>
        </div>
        <div className="mt-10 ">
          {sideMenu.map((item, index) => (
            <div key={index} className="">
             
                <ul className="font-semibold text-2xl max-md:text-lg pb-5 ">
                  <Link href={item.href}>{item.name}</Link>
                </ul>
             
            </div>
          ))}
        </div>

       
      </div>
        )}
    </section>
  );
};

export default Header;

const menu = [
  {
    href: "/",
    name: "Mac",
  },
  {
    href: "/",
    name: "Windows",
  },
  {
    href: "/",
    name: "Smart TV",
  },
  {
    href: "/",
    name: "iphones",
  },
  {
    href: "/",
    name: "Smartphones",
  },
  {
    href: "/",
    name: "Student Discount",
  },
];

const sideMenu = [
  {
    href: "/",
    name: "How to Buy",
  },
  {
    href: "/",
    name: "Customize your order",
  },
  {
    href: "/",
    name: "Certified used technology",
  },
  {
    href: "/",
    name: "FAQ",
  },
  {
    href: "/",
    name: "Careers",
  },
  {
    href: "/",
    name: "Shipping Policy",
  },
  {
    href: "/",
    name: "Returns and Refunds",
  },
  {
    href: "/",
    name: "Warranty",
  },
  {
    href: "/",
    name: "Privacy Policy",
  },
];
