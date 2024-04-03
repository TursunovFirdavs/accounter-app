import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/hero.svg'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-4 py-6 sm:py-4 sm:px-2.5'>
        <Link to={'/'} className='flex items-center gap-2 sm:gap-1'>
          <img className='w-[50px] sm:w-8' src={logo} alt="" />
          <h1 className='text-xl sm:text-[16px] font-semibold'>Company name</h1>   
        </Link>
        <div className='flex gap-3'>
            <Link to={'/login'} className='text-xl font-semibold px-6 py-2 border-black border-2 rounded-xl'>Log in</Link>
            <Link to={'/profile'} className='text-xl font-semibold px-6 py-2 sm:text-[14px] sm:py-0 sm:px-3 sm:border border-black border-2 rounded-xl'>Profile</Link>
        </div>
    </div>
  )
}

export default Navbar