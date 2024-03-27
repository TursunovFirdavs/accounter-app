import React from 'react'
import account from '../../assets/User.svg'
import { IoSearch } from "react-icons/io5";
import { IoMdPersonAdd } from "react-icons/io";
import { Link } from 'react-router-dom';



const Profile = () => {
    const data = [1,2,3,4,5,6,7,8,9]
  return (
    <div>
        <div className='flex gap-[50px]'>
        <div className=' bg-blue h-[278px] w-[927px]'></div>
        <div className='absolute top-[250px] flex items-center gap-8 left-[150px]'>
            <div className='w-[225px] h-[225px] rounded-full border bg-white flex items-center justify-center'>
                <img src={account} alt="" />
            </div>
            <div>
                <p className='text-5xl pb-4 font-semibold'>Jack Bond</p>
                <p className='text-xl font-medium'>2024-yil 21-mart</p>
            </div>
        </div>
        <div>
            <p className='text-lg'>Umumiy qarz</p>
            <div className='flex gap-[30px] pr-3 mt-1 mb-3'>
                <p className='text-3xl font-medium'>$999.999.999</p>    
                <p className='text-3xl font-semibold'>$999.999.999</p>    
            </div>
            <p className='text-lg'>To’langan</p>
            <div className='flex gap-[30px] pr-3 mt-1 mb-3'>
                <p className='text-3xl font-medium'>$999.999.999</p>    
                <p className='text-3xl font-semibold'>$999.999.999</p>    
            </div>
            <p className='text-lg'>Qolgan</p>
            <div className='flex gap-[30px] pr-3 mt-1 mb-3'>
                <p className='text-3xl font-medium'>$999.999.999</p>    
                <p className='text-3xl font-semibold'>$999.999.999</p>    
            </div>
        </div>
        </div>

        <div className='flex justify-between px-5 border mt-[140px] items-center border-black/40'>
            <input className='py-3 flex-1 outline-none ' type="text" placeholder='Search...' />
            <IoSearch />
        </div>

        <div className='mt-[35px] mb-5 flex flex-col gap-3'>
            {
                data?.map(item => (
                    <Link to={'/single'} className='flex bg-blue justify-between px-4 py-3 rounded-2xl' key={item}>
                        <h3 className='text-xl font-semibold'>James Bond</h3>
                        <div className='flex gap-10'>
                            <p>25-mart 2024</p>
                            <p>250000</p>
                            <p className='text-lg font-semibold'>$9.999.999</p>
                        </div>
                    </Link>
                ))
            }
        </div>
        <Link to={'/create'} className='w-10 h-10 rounded-full bg-white fixed flex items-center justify-center bottom-6 right-[100px]'>
            <IoMdPersonAdd />
        </Link>
    </div>
  )
}

export default Profile