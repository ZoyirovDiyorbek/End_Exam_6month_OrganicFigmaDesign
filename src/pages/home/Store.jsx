import React from "react";
import tabiat from '../../images/pages/home/Store.png'

export const Store = () => {
    return (
        <div className="flex bg-white">
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-center relative">

                <div className="w-full h-[400px] md:h-[600px] lg:h-[900px]">
                    <img
                        src={tabiat}
                        alt="img"
                        className="w-full h-full object-cover"
                    />
                </div>


                <div className="bg-white w-full lg:w-[759px] h-auto lg:h-[703px] lg:ml-[300px] rounded-2xl absolute lg:relative top-1/2 lg:top-0 -translate-y-1/2 lg:translate-y-0 right-0 lg:right-auto">
                    <div className="p-6 md:p-12 lg:p-20">
                        <p className="text-MainGreen font-third-family mb-2 text-2xl md:text-3xl lg:text-4xl">Eco Friendly</p>
                        <h2 className="text-[28px] md:text-[38px] lg:text-5xl font-bold text-main mb-4 md:mb-6 leading-snug">
                            Econs is a Friendly <br className="hidden md:block" /> Organic Store
                        </h2>

                        <div className="space-y-4 md:space-y-6 text-MainGrey">
                            <div>
                                <h3 className="font-semibold text-main mb-2 text-lg md:text-xl">Start with Our Company First</h3>
                                <p className="w-full md:w-[500px] lg:w-[550px] text-sm md:text-base"> Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-main mb-2 text-lg md:text-xl">Learn How to Grow Yourself</h3>
                                <p className="w-full md:w-[500px] lg:w-[550px] text-sm md:text-base"> Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-main mb-2 text-lg md:text-xl">Farming Strategies of Today</h3>
                                <p className="w-full md:w-[500px] lg:w-[550px] text-sm md:text-base">Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};
