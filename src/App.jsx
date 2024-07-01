import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Home/Home'
import { Game } from './Pages/Game/Game'
import { Details } from './Pages/Details/Details'
import Add from './Pages/Add/Add'
import { Layout } from './Layout/Layout'
import { Login } from './Home/Login/Login'
import { Bounce, ToastContainer } from 'react-toastify'
import { Favorites } from './Pages/Favorites/Favorites'

export const App = () => {
  return (
    <>
     <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
/>
      <Routes>
        <Route element={<Layout />} path='/' >
          <Route element={<Home />} index />
          <Route element={<Game />} path='/home' />
          <Route element={<Add />} path='/add' />
          <Route element={<Details />} path='/details/:id' />
          <Route element={<Login />} path='/login' />
          <Route element={<Favorites />} path='/favorites' />
        </Route>
      </Routes>
    </>
  )
}