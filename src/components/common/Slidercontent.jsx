import React from 'react'

const Slidercontent = ({item}) => {
  return (
    <div className="flex flex-col gap-y-5">
          <h2 className="text-6xl font-bold text-[#474747] max-md:text-5xl">
                  {item.num}
                </h2>
                <h3 className="text-[#474747] text-2xl">{item.title}</h3>
                <p className="text-md w-[100%] max-md:text-sm max-md:w-full">
                  {item.about}
                </p>

                <div className="h-[300px] w-[400px] max-md:w-full">
                  <img
                    src={item.img}
                    alt=""
                    className=" object-cover  h-[300px] w-full max-md:object-contain "
                  />
                </div>
    </div>
  )
}

export default Slidercontent