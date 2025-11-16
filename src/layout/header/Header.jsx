import React from 'react'
import { Logo } from '../../images/icons/Logo'
import { Link } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Search } from '../../images/icons/Search'
import { Basket } from '../../images/icons/Basket'

export const Header = () => {
    return (
        <div>
            <div className="container">
                <div className='flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 my-[20px] md:my-[40px] lg:my-[69px]'>
                    <Link to={"/"}> <Logo /> </Link>
                    <Navbar />
                    <div className='flex flex-col md:flex-row gap-2 md:gap-4 w-full md:w-auto'>
                        <div className='flex bg-gray-100 rounded-4xl relative w-full md:w-auto'>
                            <input className='pl-4 pr-12 md:pr-16 rounded-4xl w-full md:w-[250px] lg:w-[370px]' type="text" />
                            <button className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full cursor-pointer">
                                <Search />
                            </button>
                        </div>
                        <div className='flex gap-2 md:gap-3 pr-3 items-center border border-gray-300 rounded-4xl justify-center'>
                            <button className='cursor-pointer'>
                                <Basket />
                            </button>
                            <p className='text-[14px] md:text-[16px] lg:text-[18px] font-semibold'>Cart (0)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
