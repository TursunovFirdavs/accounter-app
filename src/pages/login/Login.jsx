import React from 'react'
import { useForm } from 'react-hook-form'

const Login = () => {

  const { register, handleSubmit } = useForm()

  const submit = (data) => {
    console.log(data);
  }

  return (
    <div className='w-[743px] sm:w-[352px] border m-auto px-[57px] sm:px-4 rounded-3xl mt-[50px] sm:mt-[100px]'>
      <h2 className='text-3xl sm:text-2xl font-medium text-center py-7 sm:py-5 sm:mb-3'>Tizimga kirish</h2>
      <form className='flex flex-col' onSubmit={handleSubmit(submit)}>
        <label className='text-lg sm:text-[18px] mb-1' htmlFor="email">Email</label>
        <input className='py-2 px-3 border-2 outline-none rounded-lg' {...register('email')} type="text" placeholder='Email' id='email' />
        <label className='text-lg sm:text-[18px] mb-1 mt-4' htmlFor="password">Parol</label>
        <input className='py-2 px-3 border-2 outline-none rounded-lg' {...register('password')} type="text" placeholder='Parol' id='password' />
        <button className='bg-[#00C5D3] text-white w-[239px] text-lg font-medium sm:w-full py-3 rounded-3xl m-auto my-[60px]' type='submit'>Tasdiqlash</button>
      </form>
    </div>
  )
}

export default Login