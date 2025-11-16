import React from 'react'
import { organicItems } from '../../content/items'
import { Button } from '../../components/Button';
import { ItemCard } from '../../components/ItemCard';


export const Organic = () => {
    return (
        <>
            <div className='bg-main'>
                <div className='container py-[30px] md:py-[40px] lg:py-50'>
                    <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0'>
                        <div>
                            <p className='text-2xl md:text-3xl lg:text-4xl font-third-family text-MainGreen mb-2'>Offer</p>
                            <h3 className='text-[28px] md:text-[38px] lg:text-5xl font-extrabold text-white'>We Offer Organic For You</h3>
                        </div>
                        <Button text={"View All Product"} bgcolor='bg-MainYellow' textcolor='text-main' />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mt-6 md:mt-12">
                        {organicItems.map((item) => (
                            <ItemCard key={item.id} product={item} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
