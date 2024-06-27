import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../Home/Navbar/Navbar'

export const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}
