import React from 'react'
import { Footer } from './footer/Footer'
import { Header } from './header/Header'
import { Outlet } from 'react-router-dom'

export const MainLayout = () => {
    return (
        <>
            <header>
                <Header />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}
