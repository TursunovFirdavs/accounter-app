import React from 'react'
import account from '../../assets/User.svg'
import { IoSearch } from "react-icons/io5";
import { IoMdPersonAdd } from "react-icons/io";
import { Link } from 'react-router-dom';



const Profile = () => {
    const data = [1,2,3,4,5,6,7,8,9]
  return (
    <div>
        <div className='flex gap-[50px] sm:gap-[80px] sm:flex-col'>
        <div className=' bg-blue h-[278px] sm:h-[100px] xl:w-[927px] sm:w-full'></div>
        <div className='absolute top-[250px] sm:top-[100px] flex items-center gap-8 left-[150px] sm:left-[160px]'>
            <div className=' bg-[#FAFAFA] w-[225px] sm:w-[122px] h-[225px] sm:h-[122px] rounded-full flex items-center justify-center'>
                <img className='w-[190px] h-[190px sm:w-[80px] sm:h-[80px]' src={account} alt="" />
            </div>
            <div>
                <p className='text-5xl pb-4 sm:pb-0 font-semibold sm:text-[24px]'>Jack Bond</p>
                <p className='text-xl font-medium sm:text-[13px]'>2024-yil 21-mart</p>
            </div>
        </div>
        <div>
            <p className='text-lg sm:text-md'>Umumiy qarz</p>
            <div className='flex gap-[30px] pr-3 mt-1 mb-3'>
                <p className='text-3xl font-medium sm:text-[24px]'>$999.999.999</p>    
                <p className='text-3xl font-semibold sm:text-[24px]'>$999.999.999</p>    
            </div>
            <p className='text-lg sm:text-md'>To’langan</p>
            <div className='flex gap-[30px] pr-3 mt-1 mb-3'>
                <p className='text-3xl font-medium sm:text-[24px]'>$999.999.999</p>    
                <p className='text-3xl font-semibold sm:text-[24px]'>$999.999.999</p>    
            </div>
            <p className='text-lg sm:text-md'>Qolgan</p>
            <div className='flex gap-[30px] pr-3 mt-1 mb-3'>
                <p className='text-3xl font-medium sm:text-[24px]'>$999.999.999</p>    
                <p className='text-3xl font-semibold sm:text-[24px]'>$999.999.999</p>    
            </div>
        </div>
        </div>

        <div className='flex justify-between px-5 sm:px-3 border mt-[140px] sm:mt-[50px] items-center border-black/40'>
            <input className='py-3 sm:py-2 flex-1 outline-none ' type="text" placeholder='Search...' />
            <IoSearch />
        </div>

        <div className='mt-[35px] mb-5 flex flex-col gap-3'>
            {
                data?.map(item => (
                    <Link to={'/single'} className='flex items-center bg-blue justify-between px-4 py-3 rounded-2xl' key={item}>
                        <h3 className='text-xl font-semibold sm:text-[16px]'>James Bond</h3>
                        <div className='flex items-center gap-10 sm:gap-8'>
                            <p className='sm:hidden'>25-mart 2024</p>
                            <p className='sm:text-sm'>250000</p>
                            <p className='text-lg sm:text-[16px] font-semibold'>$9.999.999</p>
                        </div>
                    </Link>
                ))
            }
        </div>
        <Link to={'/create'} className='w-10 h-10 rounded-full bg-white fixed flex items-center justify-center bottom-6 sm:bottom-0 right-[100px] sm:right-[150px]'>
            <IoMdPersonAdd />
        </Link>
    </div>
  )
}

export default Profile