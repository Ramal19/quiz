import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Favorites.css'
import { MdOutlineQuiz } from 'react-icons/md'

export const Favorites = () => {


    const [data, setData] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:8000/favorites").then(res => res.json()).then(data => setData(data))
    }, [])

    const deleteBtnFav = (id) => {

        axios.delete(`http://localhost:8000/favorites/${id}`)
    }

    return (

        <div className="favContainer">
            <div className="favQuiz">
                {
                    data.map(item => {
                        return (
                            <div key={item.id} className='data'>
                                <div className="favBox">
                                    <MdOutlineQuiz style={{color: '#fff', fontSize: '70px'}} />
                                </div>
                                <h1 style={{textTransform: 'capitalize'}}>{item.name}</h1>
                            </div>
                        )
                    })
                }
                {!data.length &&
                    <div style={{ marginTop: '10%',gap: '20px', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <h1>Heç bir data əlavə olunmayıb !</h1>
                        <button onClick={()=>navigate('/home')} className='favNoneBtn'>Home</button>
                    </div>
                }
            </div>
        </div>
    )
}