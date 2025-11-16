import React from 'react'
import { PageHeader } from '../../components/PageHeader'
import baner from "../../images/banners/AboutBanner.png"
import { Success } from './Success'
import { Offer } from './Offer'
import { Market } from './Market'
import { Expert } from './Expert'

export const About = () => {
  return (
    <div>
      <PageHeader image={baner} heading={"Aboute Us"} />
      <Success />
      <Market />
      <Expert />
      <Offer />
    </div>
  )
}
