import React from 'react'
import { Hero } from './Hero'
import { MinHero } from './MinHero'
import { Farmer } from './Farmer'
import { Product } from './Product'
import { Customer } from './Customer'
import { Organic } from './Organic'
import { Store } from './Store'
import { Juice } from './Juice'
import { Discover } from './Discover'

export const Home = () => {
  return (
    <div>
        <Hero />
        <MinHero />
        <Farmer />
        <Product />
        <Customer />
        <Organic />
        <Store />
        <Juice />
        <Discover />
    </div>
  )
}
