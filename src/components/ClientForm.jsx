import React from 'react'
import { useForm } from 'react-hook-form'

const ClientForm = ({ submit, initialValue }) => {
  const { register, handleSubmit } = useForm()

  return (
    <div className='w-[743px] form-shadow sm:w-[352px] m-auto border px-[57px] sm:px-5 rounded-3xl mt-[50px] sm:mt-10 mb-[80px] sm:mb-[50px]'>
      <h2 className='text-3xl sm:text-2xl font-medium text-center py-7 sm:py-6 sm:mb-2'>Qarzdor qo'shish</h2>
      <form className='flex flex-col' onSubmit={handleSubmit(submit)}>
        <label className='text-lg mb-1' htmlFor="name">Ism</label>
        <input className='p-3 outline-none border-2 rounded-lg' {...register('name')} type="text" placeholder='Ism' id='name' />
        {
          !initialValue && <>
            <label className='text-lg mb-1 mt-4' htmlFor="debt">Qarz</label>
            <div className='w-full flex justify-between'>
              <input className='w-[47%] p-3 outline-none border-2 rounded-lg' {...register('unpaid_debt_uzs')} type="number" placeholder="So'm" id='debt' />
              <input className='w-[47%] p-3 outline-none border-2 rounded-lg' {...register('unpaid_debt_usd')} type="text" pattern="\d+(\.\d+)?" placeholder='Dollar' id='debt' />
            </div>
          </>
        }
        <label className='text-lg mb-1 mt-4' htmlFor="address">Lokatsiya</label>
        <input className='p-3 outline-none border-2 rounded-lg' {...register('location')} type="text" placeholder='Address' id='address' />
        <label className='text-lg mb-1 mt-4' htmlFor="number">Telefon raqam</label>
        <input className='p-3 outline-none border-2 rounded-lg' {...register('phone_number')} type="text" placeholder='Numer' id='number' />
        <button className='w-full bg-[#00C1CF] text-lg font-medium text-white py-3 rounded-3xl m-auto my-[60px]' type='submit'>{initialValue ? 'O`zgartirish' : 'Qo`shish'}</button>
      </form>
    </div>
  )
}

export default ClientForm