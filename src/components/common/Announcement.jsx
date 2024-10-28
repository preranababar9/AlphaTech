import React from 'react'

const Announcement = () => {
  return (
        <section className='py-2  bg-black'>
 <div className='max-width'>
        <div className='text-white text-md flex items-center justify-center gap-2 max-md:gap-1 max-md:text-sm flex-wrap'>
                <img src="/icons/announce.svg" alt="" className='w-6 max-md:w-5 ' />
                <p>30% off storewide — Limited time!</p>
                <a className='cursor-pointer underline'>Shop Now</a>
                <img src="/icons/arrow.svg" alt="" className='w-6 max-md:w-5' />
        </div>

        <div className='text-white absolute top-2 right-20 flex gap-1 max-md:hidden'>
                <p>TZS</p>
                <img src="/icons/arrow.svg" alt="" className='w-5' />
        </div>
 </div>
        </section>
   
  )
}

export default Announcement