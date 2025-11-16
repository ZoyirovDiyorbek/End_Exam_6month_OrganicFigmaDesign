import React from 'react'
import Img from "../../images/pages/about/SuccessImg.png"
import { SuccessIcon1 } from '../../images/icons/SuccessIcon1'
import { SuccessIcon2 } from '../../images/icons/SuccessIcon2'
import { Button } from '../../components/Button'

export const Success = () => {
    return (
        <div className='flex flex-col md:flex-row items-center gap-6 px-4 md:px-0'>
            <div className='w-full md:w-[400px] lg:w-[600px] xl:w-[900px] h-auto md:h-[500px] lg:h-[700px] xl:h-[900px]'>
                <img className='w-full h-full object-cover' src={Img} alt="img" />
            </div>
            <div className='w-full md:w-[500px] lg:w-[700px]'>
                <h3 className='font-third-family text-MainGreen font-normal text-2xl md:text-3xl lg:text-4xl'>About Us</h3>
                <h2 className='w-full md:w-[450px] lg:w-[530px] text-[28px] md:text-[38px] lg:text-[50px] font-extrabold mt-2 mb-3'>We do Creative Things for Success</h2>
                <p className='text-[14px] md:text-[16px] lg:text-[18px] font-normal text-MainGrey mb-[30px] md:mb-[46px]'>
                    Simply dummy text of the printing and typesetting industry. Lorem had ceased to
                    been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                </p>
                <p className='text-[14px] md:text-[16px] lg:text-[18px] font-normal text-MainGrey mb-[30px] md:mb-[46px]'>
                    Simply dummy text of the printing and typesetting industry. Lorem had ceased to
                    been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                </p>
                <div className='flex flex-col md:flex-row gap-6 md:gap-[40px] lg:gap-[65px] mt-[20px] md:mt-[30px] mb-[30px] md:mb-[46px]'>
                    <ul className='flex gap-4 md:gap-5 w-full md:w-[280px] lg:w-[302px]'>
                        <li><SuccessIcon1 /></li>
                        <li>
                            <h4 className='text-[18px] md:text-[22px] lg:text-[25px] font-medium'>
                                Modern Agriculture Equipment
                            </h4>
                        </li>
                    </ul>
                    <ul className='flex gap-4 md:gap-5 w-full md:w-[280px] lg:w-[302px]'>
                        <li><SuccessIcon2 /></li>
                        <li>
                            <h4 className='text-[18px] md:text-[22px] lg:text-[25px] font-medium'>
                                No growth hormones are used
                            </h4>
                        </li>
                    </ul>
                </div>
                <Button text={"Explore More"} />
            </div>
        </div>
    )
}
