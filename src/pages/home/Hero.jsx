import React from 'react'
import hero from "../../images/pages/home/Hero.png"
import { Button } from '../../components/Button'

export const Hero = () => {
    return (
        <div className='relative'>
            <img className='w-full h-auto' src={hero} alt="img" />
            <div className='w-full md:w-[400px] lg:w-[530px] absolute left-1/2 -translate-x-1/2 lg:left-[462px] lg:-translate-x-0 top-1/2 -translate-y-1/2 px-4 md:px-0'>
                <h3 className='font-third-family text-MainGreen font-normal text-2xl md:text-3xl lg:text-4xl'>
                    100% Natural Food
                </h3>
                <h1 className='text-[30px] md:text-[45px] lg:text-[70px] font-bold mb-4 md:mb-6 mt-2'>
                    Choose the best healthier way of life
                </h1>
                <Button text={"Explore Now"} bgcolor='bg-MainYellow' textcolor='text-main' />
            </div>
        </div>
    );
}
