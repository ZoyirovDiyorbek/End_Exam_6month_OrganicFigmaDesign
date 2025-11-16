import React from 'react'

export const PageHeader = ({image = "", heading = "Page Title"}) => {
    return (
        <>
            <div className="relative h-[200px] sm:h-[250px] md:h-[350px] lg:h-[450px] bg-gray-50 overflow-hidden">
                {image && (
                    <div className="absolute inset-0 opacity-90">
                        <img
                            src={image}
                            alt="page banner"
                            className="w-full h-full object-cover"
                        />
                    </div>
                )}
                <div className="relative h-full flex items-center justify-center">
                    <h1 className="text-[28px] sm:text-[35px] md:text-[50px] lg:text-[70px] font-extrabold px-4 text-center">{heading}</h1>
                </div>
            </div>
        </>
    )
}

