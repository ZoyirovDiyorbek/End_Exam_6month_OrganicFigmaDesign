import React from 'react'
import pr1 from '../../images/pages/about/Offer1.png'
import pr2 from '../../images/pages/about/Offer2.png'
import pr3 from '../../images/pages/about/Offer3.png'
import pr4 from '../../images/pages/about/Offer4.png'


export const Offer = () => {
    const offers = [
        {
            id: 1,
            img: pr1,
            title: "Spicy"
        },
        {
            id: 2,
            img: pr2,
            title: "Nuts & Feesd"
        },
        {
            id: 3,
            img: pr3,
            title: "Fruits"
        },
        {
            id: 4,
            img: pr4,
            title: "Vegetable"
        }
    ]

    return (
        <div className='bg-main'>
            <div className='container py-[30px] md:py-[40px] lg:py-45'>
                <div className='flex flex-col justify-center items-center text-center'>

                    <p className='text-2xl md:text-3xl lg:text-4xl font-third-family text-MainGreen mb-2'>About Us</p>
                    <h3 className='text-[28px] md:text-[38px] lg:text-5xl font-extrabold text-white'>We Offer Organic For You</h3>

                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mt-6 md:mt-12 text-center text-white text-lg md:text-xl lg:text-2xl font-medium">
                    {offers.map((item) => (
                        <div key={item.id} className='flex flex-col items-center'>
                            <div className='w-full max-w-[324px] h-[250px] md:h-[280px] lg:h-[314px] bg-white mb-3 rounded-2xl overflow-hidden'>
                                <img className='w-full h-full object-cover' src={item.img} alt="img" />
                            </div>
                            <p>{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
