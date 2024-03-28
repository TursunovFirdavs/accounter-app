import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-4 py-6'>
        <Link to={'/'} className='text-xl font-semibold'>Company name</Link>
        <div className='flex gap-3'>
            <Link to={'/login'} className='text-xl font-semibold px-6 py-2 border-black border-2 rounded-xl'>Log in</Link>
            {/* <Link to={'/register'} className='text-xl font-semibold px-6 py-2 border-black border-2 rounded-xl'>Sign up</Link> */}
        </div>
    </div>
  )
}

export default Navbar