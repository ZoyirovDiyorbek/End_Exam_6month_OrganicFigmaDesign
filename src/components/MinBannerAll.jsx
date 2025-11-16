import React from 'react'

export const MinBannerAll = ({banerImg, title}) => {
    return (
        <>
            <div className="relative h-[250px] md:h-[350px] lg:h-[450px] bg-gray-50 overflow-hidden">
                <div className="absolute inset-0 opacity-90">
                    <img
                        src={banerImg}
                        alt="img"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="relative h-full flex items-center justify-center">
                    <h1 className="text-[35px] md:text-[50px] lg:text-[70px] font-extrabold px-4">{title}</h1>
                </div>
            </div>
        </>
    )
}
