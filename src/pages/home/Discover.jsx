import React from "react";
import img1 from '../../images/pages/home/Disc1.png'
import img2 from '../../images/pages/home/Disc2.png'
import { Button } from "../../components/Button";

export const Discover = () => {
    const data = [
        {
            id: 1,
            img: img1,
            author: "Rachi Card",
            title: "The Benefits of Vitamin D & How to Get It",
            description: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
        },
        {
            id: 2,
            img: img2,
            author: "Rachi Card",
            title: "Our Favourite Summertime Tommeto",
            description: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
        },
    ];

    return (
        <section className="container py-[30px] md:py-14">
            <div className="mx-auto px-4">

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0 mb-6 md:mb-10">
                    <div>
                        <p className="text-2xl md:text-3xl lg:text-4xl font-normal text-MainGreen font-third-family mb-2">News</p>
                        <h1 className="text-[28px] md:text-[38px] lg:text-5xl font-bold">
                            Discover weekly content about <br className="hidden md:block" /> organic food, & more
                        </h1>
                    </div>
                    <Button text={"More News"} bgcolor="bg-white" textcolor="text-main" classname="border-2" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                    {data.map((item) => (
                        <div key={item.id} className="relative">
                            <img
                                src={item.img}
                                alt="news"
                                className="w-full h-auto md:h-[400px] lg:h-[574px] object-cover rounded-2xl"
                            />
                            <div className="absolute left-1/2 -bottom-8 md:-bottom-14 transform -translate-x-1/2 w-[90%] md:w-[85%] bg-white rounded-2xl shadow-md p-6 md:p-12 lg:p-16">
                                <p className="text-xs md:text-sm text-MainGrey mb-2">By {item.author}</p>
                                <h2 className="font-bold text-lg md:text-xl lg:text-2xl mb-2">
                                    {item.title}
                                </h2>
                                <p className="text-MainGrey text-xs md:text-sm mb-4">
                                    {item.description}
                                </p>
                                <Button text={"Read More"} bgcolor="bg-MainYellow" textcolor="text-main" />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};
