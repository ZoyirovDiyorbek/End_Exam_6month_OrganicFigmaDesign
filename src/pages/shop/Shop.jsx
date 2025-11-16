import React from 'react'
import baner from "../../images/banners/ShopBanner.png"
import { PageHeader } from '../../components/PageHeader'
import { items, seasonal } from '../../content/items'
import { ItemCard } from '../../components/ItemCard'

export const Shop = () => {
    return (
        <div>
            <PageHeader image={baner} heading={"Shop"} />
            <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 my-[50px] md:my-[70px] lg:my-[90px]">
                {items.map(item => (
                    <ItemCard key={item.id} product={item} />
                ))}
                {seasonal.map(item => (
                    <ItemCard key={item.id} product={item} />
                ))}
            </div>
        </div>
    )
}
