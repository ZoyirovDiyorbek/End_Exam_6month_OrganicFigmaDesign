import React from 'react'
import minhero1 from "../../images/pages/home/MinHero1.png"
import minhero2 from "../../images/pages/home/MinHero2.png"


export const MinHero = () => {
  return (
    <div className="container">
        <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-0 mt-[50px] md:mt-[100px] lg:mt-[154px] mb-[50px] md:mb-[100px] lg:mb-[190px]">
            <div className='relative w-full md:w-[48%]'>
                <img className='w-full h-auto md:h-[250px] lg:h-[367px] object-cover' src={minhero1} alt="img" />
                <div className='w-[80%] md:w-[200px] lg:w-[277px] absolute left-1/2 -translate-x-1/2 lg:left-[189px] lg:-translate-x-0 top-1/2 -translate-y-1/2 px-2 md:px-0'>
                    <h3 className='font-third-family text-white font-normal text-xl md:text-2xl lg:text-4xl'>Natural!!</h3>
                    <h2 className='text-[20px] md:text-[28px] lg:text-[40px] text-white font-bold mt-1'>Get Garden Fresh Fruits</h2>
                </div>
            </div>
            <div className='relative w-full md:w-[48%]'>
                <img className='w-full h-auto md:h-[250px] lg:h-[367px] object-cover' src={minhero2} alt="img" />
                <div className='w-[80%] md:w-[200px] lg:w-[277px] absolute left-1/2 -translate-x-1/2 lg:left-[189px] lg:-translate-x-0 top-1/2 -translate-y-1/2 px-2 md:px-0'>
                    <h3 className='font-third-family text-MainGreen font-normal text-xl md:text-2xl lg:text-4xl'>Offer!!</h3>
                    <h2 className='text-[20px] md:text-[28px] lg:text-[40px] font-bold mt-1'>Get 10% off on Vegetables</h2>
                </div>
            </div>
        </div>
    </div>
  )
}
