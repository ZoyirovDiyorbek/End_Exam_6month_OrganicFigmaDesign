import React from 'react';
import Img from '../../images/pages/about/MarketImg.png'
import { MarketIcon1 } from '../../images/icons/MarketIcon1';
import { MarketIcon2 } from '../../images/icons/MarketIcon2';
import { MarketIcon3 } from '../../images/icons/MarketIcon3';
import { MarketIcon4 } from '../../images/icons/MarketIcon4';

export const services = [
    {
        id: 1,
        icon: <MarketIcon1 />,
        title: 'Return Policy',
        description: 'Simply dummy text of the printintypesetting industry.'
    },

    {
        id: 2,
        icon: <MarketIcon2 />,
        title: '100% Fresh',
        description: 'Simply dummy text of the printing and typesetting industry.'
    },
    {
        id: 3,
        icon: <MarketIcon3 />,
        title: 'Support 24/7',
        description: 'Simply dummy text of the printing and typesetting industry.'
    },
    {
        id: 4,
        icon: <MarketIcon4 />,
        title: 'Secured Payment',
        description: 'Simply dummy text of the printing and typesetting industry.'
    },
];

export const Market = () => {
    return (
        <div className="py-34 bg-gray-50">
            <div className="container px-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center mb-12 md:mb-16 lg:mb-20">
                    <div>
                        <p className='text-2xl md:text-3xl lg:text-4xl font-third-family text-MainGreen mb-2'>Why Choose us?</p>
                        <h2 className='text-[28px] md:text-[38px] lg:text-[50px] font-extrabold mt-2 mb-3'>
                            We do not buy from the open market & traders.
                        </h2>
                        <p className="text-MainGrey mb-6 md:mb-8 text-sm md:text-base">
                            Simply dummy text of the printing and typesetting. Lorem had ceased to been the industry's standard the 1500s, when an unknown
                        </p>

                        <div className="flex items-start mb-4">
                            <span className="inline-flex items-center py-3 md:py-4 px-4 md:px-6 bg-gray-200 rounded-full text-xs md:text-sm font-semibold mr-3 whitespace-nowrap">
                                <div className="w-2 md:w-3 h-2 md:h-3 border-2 border-teal-500 rounded-full flex items-center justify-center mr-2">
                                    <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-teal-500 rounded-full"></div>
                                </div>
                                100% Natural Product
                            </span>
                        </div>

                        <p className="text-xs md:text-sm text-MainGrey mb-2 ml-6 md:ml-8">
                            Filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing
                        </p>

                        <div className="flex items-start mb-4">
                            <span className="inline-flex items-center py-3 md:py-4 px-4 md:px-6 bg-gray-200 rounded-full text-xs md:text-sm font-semibold mr-3 whitespace-nowrap">
                                <div className="w-2 md:w-3 h-2 md:h-3 border-2 border-teal-500 rounded-full flex items-center justify-center mr-2">
                                    <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-teal-500 rounded-full"></div>
                                </div>
                                Increases resistance
                            </span>
                        </div>

                        <div className="flex items-start">
                            <div>
                                <p className="text-xs md:text-sm text-MainGrey mt-1 ml-6 md:ml-8">
                                    Filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative rounded-xl">
                        <img
                            src={Img}
                            alt="img"
                            className="w-full h-auto object-cover rounded-xl"
                        />
                    </div>
                </div>

                <div className="w-full md:w-[90%] lg:w-[1100px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-1">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="bg-white w-full md:w-[240px] lg:w-[260px] p-6 md:p-8 rounded-xl border border-gray-100 text-center mx-auto"
                        >
                            <div className="w-12 md:w-14 lg:w-16 h-12 md:h-14 lg:h-16 mx-auto mb-4 bg-gray-50 rounded-lg flex items-center justify-center text-2xl md:text-3xl border">
                                {service.icon}
                            </div>
                            <h3 className="text-base md:text-lg font-bold mb-2">{service.title}</h3>
                            <p className="text-xs md:text-sm text-MainGrey">{service.description}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};
