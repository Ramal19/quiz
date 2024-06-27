import React from 'react'
import './Navbar.css'
import { FaQuestion } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="iconNavbar">
                <FaQuestion className='quiz__icon' />
                <h2>Quiz</h2>
            </div>

            <div className="link">
                <Link className='h1' to={'/home'}>Home</Link>
                <Link className='h1' to={'/login'}>Login</Link>
            </div>
        </nav>
    )
}
