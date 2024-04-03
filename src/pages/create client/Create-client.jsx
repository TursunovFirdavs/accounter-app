import React from 'react'
import { useForm } from 'react-hook-form'

const createClient = () => {

  const { register, handleSubmit } = useForm()

  const submit = (data) => {
    console.log(data);
  }

  return (
    <div className='w-[743px] form-shadow sm:w-[352px] m-auto border px-[57px] sm:px-5 rounded-3xl mt-[50px] sm:mt-10 mb-[80px] sm:mb-[50px]'>
      <h2 className='text-3xl sm:text-2xl font-medium text-center py-7 sm:py-6 sm:mb-2'>Qarzdor qo'shish</h2>
      <form className='flex flex-col' onSubmit={handleSubmit(submit)}>
        <label className='text-lg mb-1' htmlFor="name">Ism</label>
        <input className='p-3 outline-none border-2 rounded-lg' {...register('name')} type="text" placeholder='Ism' id='name' />
        <label className='text-lg mb-1 mt-4' htmlFor="debt">Qarz</label>
        <input className='p-3 outline-none border-2 rounded-lg' {...register('dept')} type="text" placeholder='Qarz' id='debt' />
        <label className='text-lg mb-1 mt-4' htmlFor="address">Lokatsiya</label>
        <input className='p-3 outline-none border-2 rounded-lg' {...register('address')} type="text" placeholder='Address' id='address' />
        <label className='text-lg mb-1 mt-4' htmlFor="number">Telefon raqam</label>
        <input className='p-3 outline-none border-2 rounded-lg' {...register('number')} type="text" placeholder='Numer' id='number' />
        <button className='w-full bg-[#00C5D3] text-lg font-medium text-white py-3 rounded-3xl m-auto my-[60px]' type='submit'>Qo'shish</button>
      </form>
    </div>
  )
}

export default createClient