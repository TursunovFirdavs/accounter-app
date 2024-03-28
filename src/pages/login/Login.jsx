import React from 'react'
import { useForm } from 'react-hook-form'

const Login = () => {

  const { register, handleSubmit } = useForm()

  const submit = (data) => {
    console.log(data);
  }

  return (
    <div className='w-[743px] m-auto bg-blue px-[57px] rounded-3xl mt-[50px]'>
      <h2 className='text-3xl font-medium text-center py-7'>Tizimga kirish</h2>
      <form className='flex flex-col' onSubmit={handleSubmit(submit)}>
        <label className='text-lg mb-1' htmlFor="email">Email</label>
        <input className='py-2 px-3 outline-none rounded-lg' {...register('email')} type="text" placeholder='Email' id='email' />
        <label className='text-lg mb-1 mt-4' htmlFor="password">Parol</label>
        <input className='py-2 px-3 outline-none rounded-lg' {...register('password')} type="text" placeholder='Parol' id='password' />
        <button className='bg-white w-[239px] py-3 rounded-3xl m-auto my-[60px]' type='submit'>Tasdiqlash</button>
      </form>
    </div>
  )
}

export default Login