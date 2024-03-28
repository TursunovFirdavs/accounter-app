import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './home/Home'
import Login from './login/Login'
import Register from './register/Register'
import Single from './single/Single'
import Profile from './profile/Profile'
import CreateClient from './create client/Create-client'
import Increase from './change-debt/Increase'
import Decrease from './change-debt/Decrease'

const index = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/single' element={<Single/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/create' element={<CreateClient/>} />
        <Route path='/add-price' element={<Increase/>} />
        <Route path='/remove-price' element={<Decrease/>} />
    </Routes>
  )
}

export default index