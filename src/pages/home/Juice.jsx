import React from 'react'
import img1 from '../../images/pages/home/Juice1.png'
import img2 from '../../images/pages/home/Juice2.png'
import img3 from '../../images/pages/home/Juice3.png'
import { Button } from '../../components/Button'

export const Juice = () => {
    return (
        <>
            <div className='bg-[#f1f8f4] py-[30px] md:py-[40px] lg:py-45'>
                <div className='flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-10 px-4 md:px-0'>
                    <div className='w-full md:w-[48%] lg:w-[612px] h-[300px] md:h-[400px] lg:h-[563px] flex flex-col justify-center items-center bg-no-repeat bg-center bg-cover'
                        style={{ backgroundImage: `url(${img1})` }}>
                        <Button text={"Organic Juice"} bgcolor={'bg-white'} textcolor={'bg-main'} />
                    </div>

                    <div className='w-full md:w-[48%] lg:w-[612px] h-[300px] md:h-[400px] lg:h-[563px] flex flex-col justify-center items-center bg-no-repeat bg-center bg-cover'
                        style={{ backgroundImage: `url(${img2})` }}>
                        <Button text={"Organic Food"} bgcolor={'bg-white'} textcolor={'bg-main'} />
                    </div>

                    <div className='w-full md:w-[48%] lg:w-[612px] h-[300px] md:h-[400px] lg:h-[563px] flex flex-col justify-center items-center bg-no-repeat bg-center bg-cover'
                        style={{ backgroundImage: `url(${img3})` }}>
                        <Button text={"Nuts Cookis"} bgcolor={'bg-white'} textcolor={'bg-main'} />
                    </div>
                </div>
            </div>
        </>
    )
}
