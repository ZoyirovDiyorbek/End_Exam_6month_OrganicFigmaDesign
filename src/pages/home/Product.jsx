import React from 'react'
import { ItemCard } from '../../components/ItemCard'
import { items } from '../../content/items'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'

export const Product = () => {
    return (
        <div className="container my-[50px] md:my-[100px] lg:my-[200px]">
            <h3 className='font-third-family text-MainGreen font-normal text-center text-2xl md:text-3xl lg:text-4xl'>Categories</h3>
            <h2 className="text-[30px] md:text-[40px] lg:text-[50px] font-bold text-center mb-4 md:mb-6">Our Products</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-[50px] md:mb-[80px] lg:mb-[113px]">
                {items.map(item => (
                    <ItemCard key={item.id} product={item} />
                ))}
            </div>
            <Link to={"/"} className=''>
                <Button text={"Load More"} classname='mx-auto' />
            </Link>
        </div>
    )
}
