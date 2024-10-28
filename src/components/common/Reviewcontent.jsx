import React from 'react'

const Reviewcontent = ({item}) => {
  return (
    <div className="bg-[#F3F6F7] py-6 px-10 w-[500px] rounded-lg">
        <div className='w-full '>
         <img
                  src="/icons/question.svg"
                  alt=""
                  className="h-[100px] w-[100px] pb-10 object-contain"
                /></div>
                <p className="text-md ">{item.review}</p>

                <div className="flex gap-1 pt-10 pb-3">
                  <img src="/icons/star.svg" alt="" />
                  <img src="/icons/star.svg" alt="" />
                  <img src="/icons/star.svg" alt="" />
                  <img src="/icons/star.svg" alt="" />
                </div>
                <p>{item.name}</p>
    </div>
  )
}

export default Reviewcontent