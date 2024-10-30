import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section className="py-10 bg-black mt-10">
      <div className="max-width">
        {/* first div */}
        <div className="flex justify-between max-md:justify-evenly gap-10 mb-10">
          <div className="lg:mr-10">
            <img
              src="/images/logo.webp"
              alt=""
              className=" h-[70px] max-md:w-[150px] max-md:h-[90px]"
            />
          </div>

          <div className="flex gap-6 items-center mr-10 flex-wrap text-nowrap text-white">
            {menu.map((item, index) => (
              <ul key={index} className=" text-lg">
                <Link href={item.href}>{item.name}</Link>
              </ul>
            ))}
          </div>
        </div>

        {/* second div */}

        <div className="flex justify-between mb-20 flex-wrap max-md:gap-y-7">
          <div className="flex flex-col max-md:gap-6 gap-y-3 max-md:gap-y-2  items-start  flex-wrap text-nowrap text-white">
            <p className="text-[#848484] text-2xl">Need Help</p>
            {footer1.map((item, index) => (
              <ul key={index} className=" text-lg">
                <Link href={item.href}>{item.name}</Link>
              </ul>
            ))}
          </div>

          <div className="flex flex-col max-md:gap-6 gap-y-3 max-md:gap-y-2  items-start   text-white">
            <p className="text-[#848484] text-2xl">More Info</p>
            {footer2.map((item, index) => (
              <ul key={index} className=" text-lg">
                <Link href={item.href}>{item.name}</Link>
              </ul>
            ))}
          </div>

          <div className="flex flex-col max-md:gap-6 gap-y-3 max-md:gap-y-2  items-start   text-white">
            <p className="text-[#848484] text-2xl">Connect with us</p>
            <p className="text-lg max-md:text-md">+255 757 623333</p>
            <p className="text-lg max-md:text-md">support@alphatechtz.com</p>
            <p className="text-lg max-md:text-md  w-[330px] max-md:w-[300px]">
              1st Floor, City Mall, Dares Salaam,Junction of Bibi Titi Mohamed,
              Morogoro Road
            </p>
          </div>
        </div>

        <hr></hr>

        <div className="flex text-white justify-between gay-5 mt-10  max-md:flex-col-reverse  max-md:gap-y-5">
          <p className="max-md:text-center max-md:text-sm text-lg">
            Copyright © 2024 Alphatechtz.com All rights reserved | Designed &
            Developed by <span className="text-[#22C55E]">DotSyndicate</span>
          </p>
          <div className="flex gap-4 max-md:justify-center">
            <img src="/icons/insta.svg" alt="" className="w-8 h-6" />
            <img src="/icons/facebook.svg" alt="" className="w-8 h-6" />
            <img src="/icons/linkedin.svg" alt="" className="w-8 h-6" />
            <img src="/icons/paypal.svg" alt="" className="w-8 h-6" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

const menu = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/",
    name: "About us",
  },
  {
    href: "/",
    name: "Cart",
  },
  {
    href: "/",
    name: "Wishlist",
  },
];

const footer1 = [
  {
    href: "/",
    name: "Student Discount",
  },
  {
    href: "/",
    name: "How to buy",
  },
  {
    href: "/",
    name: "Customise your order",
  },
  {
    href: "/",
    name: "Certified used technology",
  },
  {
    href: "/",
    name: "FAQ",
  },
];

const footer2 = [
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
