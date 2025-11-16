import React from 'react'
import customer from "../../images/pages/home/Customer.png"
import customerIcon from "../../images/pages/home/CustomerIcon.png"
import { CustomerStar } from '../../images/icons/CustomerStar'

export const Customer = () => {
    return (
        <div className='relative'>
            <img className='w-full h-auto' src={customer} alt="img" />
            <div className='w-full md:w-[90%] lg:w-[1108px] absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 px-4 md:px-0'>
                <div className='w-full md:w-[600px] lg:w-[780px] text-center items-center mx-auto'>
                    <h3 className='font-third-family text-MainGreen font-normal text-center text-2xl md:text-3xl lg:text-4xl'>Testimonial</h3>
                    <h2 className="text-[28px] md:text-[38px] lg:text-[50px] font-bold text-center mb-4 md:mb-6">What Our Customer Saying?</h2>
                    <img className='w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[115px] lg:h-[115px] mx-auto mb-3' src={customerIcon} alt="icon" />
                    <div className='mx-auto inline-block'>
                        <CustomerStar />
                    </div>
                    <p className='text-[14px] md:text-[16px] lg:text-[18px] font-normal text-MainGrey my-4 md:my-5'>
                        Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
                    </p>
                    <h4 className='text-[20px] md:text-[22px] lg:text-[25px] font-semibold'>Sara Taylor</h4>
                    <p className='text-[13px] md:text-[14px] lg:text-[15px] font-normal text-MainGrey my-2'>Consumer</p>
                </div>
                <span className='border border-gray-300 block w-full my-[50px] md:my-[70px] lg:my-[102px]'></span>
                <ul className='flex flex-wrap justify-center md:justify-between gap-4 md:gap-0'>
                    <li className='w-[150px] h-[150px] md:w-[180px] md:h-[180px] lg:w-[211px] lg:h-[211px] border-2 border-MainGreen bg-gray-200 text-center flex flex-col justify-center items-center rounded-full'>
                        <h4 className="text-[35px] md:text-[42px] lg:text-[50px] font-bold">100%</h4>
                        <p className='text-[14px] md:text-[16px] lg:text-[18px] font-normal text-MainGrey'>Organic</p>
                    </li>
                    <li className='w-[150px] h-[150px] md:w-[180px] md:h-[180px] lg:w-[211px] lg:h-[211px] border-2 border-MainGreen bg-gray-200 text-center flex flex-col justify-center items-center rounded-full'>
                        <h4 className="text-[35px] md:text-[42px] lg:text-[50px] font-bold">285</h4>
                        <p className='text-[14px] md:text-[16px] lg:text-[18px] font-normal text-MainGrey'>Active Product</p>
                    </li>
                    <li className='w-[150px] h-[150px] md:w-[180px] md:h-[180px] lg:w-[211px] lg:h-[211px] border-2 border-MainGreen bg-gray-200 text-center flex flex-col justify-center items-center rounded-full'>
                        <h4 className="text-[35px] md:text-[42px] lg:text-[50px] font-bold">350+</h4>
                        <p className='text-[14px] md:text-[16px] lg:text-[18px] font-normal text-MainGrey'>Organic Orchads</p>
                    </li>
                    <li className='w-[150px] h-[150px] md:w-[180px] md:h-[180px] lg:w-[211px] lg:h-[211px] border-2 border-MainGreen bg-gray-200 text-center flex flex-col justify-center items-center rounded-full'>
                        <h4 className="text-[35px] md:text-[42px] lg:text-[50px] font-bold">25+</h4>
                        <p className='text-[14px] md:text-[16px] lg:text-[18px] font-normal text-MainGrey'>Years of Farming</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}
