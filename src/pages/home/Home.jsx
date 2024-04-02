import React from 'react'
import hero from '../../assets/hero.svg'
const Home = () => {
  return (
    <div className='bg-[#B1E3FA] xl:h-[600px] rounded-[35px] flex justify-between items-center px-6 sm:px-3 xl:gap-10 sm:justify-between sm:py-[37px] sm:rounded-2xl '>
      <div className='w-1/2 flex flex-col gap-6 sm:gap-2'>
        <h1 style={{ fontFamily: 'Paytone One, sans-serif' }} className='text-[64px] sm:text-[15px] font-normal'>Qarzlaringizni hisoblovchi sayt!</h1>
        <p className='text-xl text-[#011B1F] font-normal sm:text-[12px] sm:leading-[14px]'>Lorem ipsum dolor sit amet consectetur. Enim odio id amet convallis faucibus adipiscing a tempor.</p>
      </div>
      <div className='w-1/2 sm:w-[180px]'>
        <img className='w-full' src={hero} alt="" />
      </div>
    </div>
  )
}

export default Home