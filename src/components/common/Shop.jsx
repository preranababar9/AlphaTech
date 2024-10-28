import Link from 'next/link'
import React from 'react'

const Shop = () => {
  return (
        <div className="max-width flex gap-5 max-md:flex-col">
        <div className="bg-black w-1/2 py-2 px-2 max-md:w-full">
          <div className="flex justify-center">
            <img
              src="/images/collection1.png"
              alt=""
              className="object-cover w-[80%]"
            />
          </div>

          <div className="text-white px-10 pb-10">
            <h2 className="text-4xl pb-2 max-md:text-2xl">MacBook</h2>

            <div className="flex gap-2 items-center">
              <Link
                href="/"
                className="text-xl max-md:text-lg underline underline-offset-4"
              >
                Collections
              </Link>
              <img
                src="/icons/arrow.svg"
                alt=""
                className="w-6 max-md:w-5 pt-2"
              />
            </div>
          </div>
        </div>

        <div className="w-1/2 flex flex-col gap-y-5 max-md:w-full">
          {/* first div */}
          <div className="bg-[#F3F6F7] flex gap-10 py-5 px-5 justify-between items-end">
            <div className="w-[100px]">
              <h2 className="text-3xl pb-2 lg:text-nowrap max-md:text-xl ">
                Smartphones
              </h2>

              <div className="flex gap-2 items-center">
                <Link
                  href="/"
                  className="text-xl max-md:text-lg underline underline-offset-4"
                >
                  Collections
                </Link>
                <img
                  src="/icons/arrow-right.svg"
                  alt=""
                  className="w-10 max-md:w-5 h-7 pt-1"
                />
              </div>
            </div>
            <div className="w-1/2">
              <img
                src="/images/slider3.webp"
                alt=""
                className="lg:object-contain h-[280px] w-full"
              />
            </div>
          </div>

          {/* second div */}
          <div className="bg-[#F3F6F7] flex gap-10 py-5 px-5 justify-between items-end">
            <div>
              <h2 className="text-3xl pb-2 lg:text-nowrap max-md:text-xl">
                Accessories
              </h2>

              <div className="flex gap-2 items-center">
                <Link
                  href="/"
                  className="text-xl max-md:text-lg underline underline-offset-4"
                >
                  Collections
                </Link>
                <img
                  src="/icons/arrow-right.svg"
                  alt=""
                  className="w-8 max-md:w-5  h-7 pt-1 "
                />
              </div>
            </div>
            <div>
              <img
                src="/images/drive.png"
                alt=""
                className="lg:object-contain h-[280px]  "
              />
            </div>
          </div>
        </div>
      </div>
  )
}

export default Shop