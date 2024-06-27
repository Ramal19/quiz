import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

import { BsPatchQuestionFill } from 'react-icons/bs';

export const Home = () => {
    return (
        <div className='container'>
            
            <header>
                <button><Link style={{color: '#fff', textDecoration: 'none'}} to={'/home'}>get started</Link>
                </button>
            </header>
        </div>
    )
}
