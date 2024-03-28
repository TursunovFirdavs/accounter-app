import React from 'react'
import { useForm } from 'react-hook-form'

const createClient = () => {

  const { register, handleSubmit } = useForm()

  const submit = (data) => {
    console.log(data);
  }

  return (
    <div className='w-[743px] m-auto bg-blue px-[57px] rounded-3xl mt-[50px] mb-[80px]'>
      <h2 className='text-3xl font-medium text-center py-7'>Klent qo'shish</h2>
      <form className='flex flex-col' onSubmit={handleSubmit(submit)}>
        <label className='text-lg mb-1' htmlFor="name">Ism</label>
        <input className='p-3 outline-none rounded-lg' {...register('name')} type="text" placeholder='Ism' id='name' />
        <label className='text-lg mb-1 mt-4' htmlFor="debt">Qarz</label>
        <input className='p-3 outline-none rounded-lg' {...register('dept')} type="text" placeholder='Qarz' id='debt' />
        <label className='text-lg mb-1 mt-4' htmlFor="number">Telefon raqam</label>
        <input className='p-3 outline-none rounded-lg' {...register('number')} type="text" placeholder='Numer' id='number' />
        <label className='text-lg mb-1 mt-4' htmlFor="address">Lokatsiya</label>
        <input className='p-3 outline-none rounded-lg' {...register('address')} type="text" placeholder='Address' id='address' />
        <button className='bg-white w-[239px] py-3 rounded-3xl m-auto my-[60px]' type='submit'>Qo'shish</button>
      </form>
    </div>
  )
}

export default createClient