import React from 'react'
import FarmerImg from "../../images/pages/home/Farmer.png"
import { FarmerIcon1 } from '../../images/icons/FarmerIcon1'
import { FarmerIcon2 } from '../../images/icons/FarmerIcon2'
import { Button } from '../../components/Button'

export const Farmer = () => {
    return (
        <div className='relative'>
            <img className='w-full h-auto' src={FarmerImg} alt="img" />
            <div className='w-full md:w-[600px] lg:w-[700px] absolute left-1/2 -translate-x-1/2 md:right-[50px] md:left-auto lg:right-[210px] top-1/2 -translate-y-1/2 px-4 md:px-0'>
                <h3 className='font-third-family text-MainGreen font-normal text-2xl md:text-3xl lg:text-4xl'>About Us</h3>
                <h2 className='w-full md:w-[450px] lg:w-[530px] text-[28px] md:text-[38px] lg:text-[50px] font-bold mt-2 mb-3'>We Believe in Working Accredited Farmers</h2>
                <p className='text-[14px] md:text-[16px] lg:text-[18px] font-normal text-MainGrey mb-[30px] md:mb-[46px]'>
                    Simply dummy text of the printing and typesetting industry. Lorem had ceased to
                    been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                </p>
                <ul className='flex gap-3 md:gap-5'>
                    <li><FarmerIcon1 /></li>
                    <li>
                        <h4 className='text-[18px] md:text-[22px] lg:text-[25px] font-bold'>Organic Foods Only</h4>
                        <p className='w-full md:w-[400px] lg:w-[444px] text-[14px] md:text-[16px] lg:text-[18px] font-normal text-MainGrey'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                    </li>
                </ul>
                <ul className='flex gap-3 md:gap-5 mt-[20px] md:mt-[30px] mb-[30px] md:mb-[46px]'>
                    <li><FarmerIcon2 /></li>
                    <li>
                        <h4 className='text-[18px] md:text-[22px] lg:text-[25px] font-bold'>Organic Foods Only</h4>
                        <p className='w-full md:w-[400px] lg:w-[444px] text-[14px] md:text-[16px] lg:text-[18px] font-normal text-MainGrey'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                    </li>
                </ul>
                <Button text={"Shop Now"} />
            </div>
        </div>
    )
}
