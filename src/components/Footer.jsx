import React from 'react'
import logo from '../assets/my_logo.jpg'
import { FaTelegram } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaPhone } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='w-full bg-[#111516] text-white py-3'>
            <div className='container flex items-center justify-between'>
                <img className='w-[80px] xl:w-[120px]' src={logo} alt="" />
                <div className='flex items-center gap-3 xl:gap-7'>
                    <p className='flex items-center text-[10px] xl:text-[14px] ml-4'><FaPhone className='mt-0.5 mr-1' /> <span>+998 99 577 2002</span></p>
                    <div className='flex items-center gap-2 xl:gap-2'>
                        <Link to={'https://t.me/Firdavs_1704'}><FaTelegram className='text-[15px] xl:text-[20px]' /></Link>
                        <Link to={'https://www.instagram.com/firdavs_tursun0v/'}><RiInstagramFill className='text-[16px] xl:text-[22px]' /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
