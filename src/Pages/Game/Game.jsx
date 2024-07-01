import React, { useEffect, useState } from 'react'
import './Game.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { VscDebugStart } from 'react-icons/vsc'
import { MdEdit, MdMenu, MdOutlineFavorite, MdOutlineQuiz } from 'react-icons/md'
import { AiFillDelete } from 'react-icons/ai'
import { FaPlus, FaSearch } from 'react-icons/fa'

export const Game = () => {

  const [data, setData] = useState([])
  const [inpValue, setInpValue] = useState("")

  useEffect(() => {
    fetch("http://localhost:8000/quizzes")
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  const deleteBtn = (id) => {

    axios.delete(`http://localhost:8000/quizzes/${id}`)
  }

  const sortData = () => {

    return [...data]
  }

  let sortedData = sortData()


  const filterData = sortedData.filter((inf) => inf.name.toUpperCase().startsWith(inpValue.toUpperCase()))


  
  const addToFav = (id) => {

    axios.get("http://localhost:8000/quizzes/" + id)
        .then(res => axios.post("http://localhost:8000/favorites/", res.data))
}

  return (
    <div className='container'>

      <h1>My quizzes</h1>

      <div className='sorted'>
        <div className="search">
          <FaSearch />
          <input type="text" onInput={(e) => setInpValue(e.target.value)} placeholder='Search quiz..' />
        </div>

      </div>

      <div className='main'>
        {
          filterData.map(item => {
            return (

              <div className='quizBox' key={item.id} >

                <div className='box'>
                  <MdOutlineQuiz className='boxIcon' />
                  <div className="dropdown">
                    <MdMenu className='boxMenu' />
                    <div className="dropdown-content">
                      <button onClick={() => deleteBtn(item.id)}>
                        <AiFillDelete style={{ fontSize: '24px', color: '#2A971B' }} />
                        <span style={{fontSize: '18px'}}>Delete</span>
                      </button>
                      <button onClick={() => addToFav(item.id)}>
                      <MdOutlineFavorite style={{ fontSize: '24px', color: '#2A971B' }} />
                      <span style={{fontSize: '18px'}}>
                        Add Favorites
                      </span>
                      </button>
                      <button>
                        <MdEdit style={{ fontSize: '24px', color: '#2A971B' }} />
                        <span style={{fontSize: '18px'}}>Edit</span>
                      </button>
                    </div>
                  </div>
                </div>

                <h1 style={{textTransform: 'capitalize'}}>{item.name}</h1>

                <div className="start">
                  <h3>Click to start</h3>
                  <Link className='startIcon' to={`/details/${item.id}`}>
                    <VscDebugStart />
                  </Link>
                </div>

              </div>

            )
          })
        }

        <Link className="addBox" to={'/add'}>
          <span>
            <FaPlus className='addIcon' />
          </span>
          <h1>
            Add a quiz
          </h1>
        </Link>
      </div>
    </div>
  )
}
