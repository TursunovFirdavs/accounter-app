import React from 'react'
import hero from '../../assets/hero.svg'
const Home = () => {
  return (
    <div className='bg-[#B1E3FA] h-[600px] rounded-[35px] flex justify-between items-center px-6 gap-10 '>
      <div className='w-1/2 flex flex-col gap-6'>
        <h1 style={{ fontFamily: 'Paytone One, sans-serif' }} className='text-[64px] font-normal'>Qarzlarningizni hisoblovchi sayt!</h1>
        <p className='text-xl text-[#011B1F] font-normal'>Lorem ipsum dolor sit amet consectetur. Enim odio id amet convallis faucibus adipiscing a tempor.</p>
      </div>
      <div className='w-1/2 '>
        <img className='w-full ' src={hero} alt="" />
      </div>
    </div>
  )
}

export default Home