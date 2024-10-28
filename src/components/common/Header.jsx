"use client";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <section className="max-width py-3 h-[14vh]  flex max-md:justify-between ">
      <div className="lg:mr-10">
        <img src="/images/logo.webp" alt="" className=" h-[70px]" />
      </div>
      <div className="flex items-center w-full justify-between ">
        <img src="/icons/menu.svg" alt="" className="w-7 max-md:hidden md::mr-2" />

        <div className="flex gap-6 items-center mr-10 max-md:hidden text-nowrap">
          {menu.map((item, index) => (
            <ul key={index} className="font-semibold text-md ">
              <Link href={item.href}>{item.name}</Link>
            </ul>
          ))}
        </div>

        <div className="flex  lg:gap-6 max-md:gap-4">
          <img src="/icons/search.svg" alt="" className="w-6" />
          <img src="/icons/bag.svg" alt="" className="w-6" />
        </div>
      </div>
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
