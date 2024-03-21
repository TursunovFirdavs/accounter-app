import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between px-4 py-6'>
        <p className='text-xl font-semibold'>Company name</p>
        <div className='flex gap-3'>
            <Link className='text-xl font-semibold px-6 py-2 border-black border-2 rounded-xl'>Log in</Link>
            <Link className='text-xl font-semibold px-6 py-2 border-black border-2 rounded-xl'>Sign up</Link>
        </div>
    </div>
  )
}

export default Navbar