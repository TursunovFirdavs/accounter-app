import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-4 py-6 sm:py-4 sm:px-2.5'>
        <Link to={'/'} className='text-xl sm:text-sm font-semibold'>Company name</Link>
        <div className='flex gap-3'>
            {/* <Link to={'/login'} className='text-xl font-semibold px-6 py-2 border-black border-2 rounded-xl'>Log in</Link> */}
            <Link to={'/profile'} className='text-xl font-semibold px-6 py-2 sm:text-[10px] sm:py-0 sm:px-3 sm:border border-black border-2 rounded-xl'>Profile</Link>
        </div>
    </div>
  )
}

export default Navbar