import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div className='flex gap-10 font-bold text-[20px]'>
            <Link to={"/"}><p>Home</p></Link>
            <Link to={"/about"}><p>About</p></Link>
            <Link to={"/"}><p>Pages</p></Link>
            <Link to={"/shop"}><p>Shop</p></Link>
            <Link to={"/"}><p>Projects</p></Link>
            <Link to={"/"}><p>News</p></Link>
        </div>
    )
}
