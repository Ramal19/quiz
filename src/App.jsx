import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Home/Home'
import { Game } from './Pages/Game/Game'
import { Details } from './Pages/Details/Details'
import Add from './Pages/Add/Add'
import { Layout } from './Layout/Layout'
import { Login } from './Home/Login/Login'

export const App = () => {
  return (
    <Routes>
      <Route element={<Layout/>} path='/' >
        <Route element={<Home />} path='/' />
        <Route element={<Game />} path='/home' />
        <Route element={<Add />} path='/add' />
        <Route element={<Details />} path='/details/:id' />
        <Route element={<Login />} path='/login' />
      </Route>
    </Routes>
  )
}