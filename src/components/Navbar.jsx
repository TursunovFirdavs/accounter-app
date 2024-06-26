import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/hero.png'
import exchange from '../assets/Exchange.svg'
import { loadState } from '../storage'
import { LuSunMoon } from "react-icons/lu";
import { useDispatch, useSelector } from 'react-redux'
import { changeValyut } from '../redux/all-debt'


const Navbar = () => {
  const token = loadState('access')
  const user = loadState('user')
  const dispatch = useDispatch()
  const { isDollar } = useSelector(state => state.isDollar)
  const handleChangeValyut = () => {
    dispatch(changeValyut())
  }

  return (
    <div className='liner'>
      <div className='container flex justify-between items-center xl:px-4 xl:pt-6 xl:pb-[60px] pt-5 pb-8 px-2.5'>
        <Link to={'/'} className='flex items-center gap-2 sm:gap-1'>
          <img className='w-[50px] sm:w-8' src={logo} alt="" />
          <h1 className='text-xl sm:text-[16px] font-semibold'>Qarzlarim</h1>   
        </Link>
        <div className='flex gap-3'>
          {
            token == undefined ? 
            <Link to={'/login'} className='text-xl font-semibold px-6 py-2 border-black border-2 rounded-xl'>Log in</Link>
            :
            <div className='flex items-center gap-10 sm:gap-5 text-xl sm:text-sm font-semibold'>
              <div className='flex items-center gap-2 cursor-pointer'>
              <LuSunMoon className='xl:pt-1 text-3xl sm:text-xl'  />
              <p className='sm:hidden'>Mode</p>
              </div>
              <div onClick={handleChangeValyut} className='flex items-center gap-2 cursor-pointer'>
                <img className='w-[25px] sm:w-[20px]' src={exchange} alt="" />
                <p className='sm:hidden'>Exchange</p>
              </div>
            </div>
          }
        </div>
        {/* <Link to={'/profile'} className='text-xl font-semibold px-6 py-2 border-black border-2 rounded-xl'>profile</Link> */}

    </div>
    </div>
  )
}

export default Navbar