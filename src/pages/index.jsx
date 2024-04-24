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
import EditSingle from './single/EditSingle'

const index = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/single/:id' element={<Single />} />
      <Route path='/single/edit/:id' element={<EditSingle />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/create' element={<CreateClient />} />
      <Route path='/add-price/:id' element={<Increase />} />
      <Route path='/remove-price/:id' element={<Decrease />} />
    </Routes>
  )
}

export default index