import React from 'react'
import { useForm } from 'react-hook-form'

const DebtForm = ({ title, onsubmit, initailValue }) => {

  const { register, handleSubmit } = useForm()

  return (
    <div className='w-[743px] form-shadow sm:w-[352px] m-auto border px-[57px] sm:px-4 rounded-3xl mt-[50px] sm:mt-[100px]'>
      <h2 className='text-3xl sm:text-2xl font-medium text-center py-7 sm:py-6 sm:mb-2'>Qarz {title}</h2>
      <form className='flex flex-col' onSubmit={handleSubmit(onsubmit)}>
        <label className='text-lg mb-1' htmlFor="amount">Miqdor</label>
        <input className='py-2 px-3 border-2 outline-none rounded-lg' {...register('amount')} type="text" placeholder='Pul miqdori' id='amount' />
        <label className='text-lg mb-1 mt-4' htmlFor="desc">Izoh</label>
        <input className='py-2 px-3 border-2 outline-none rounded-lg' {...register('desc')} type="text" placeholder='Izoh...' id='desc' />
        <button className='bg-[#00C1CF] text-white w-full py-3 rounded-3xl m-auto text-xl font-semibold my-[60px]' type='submit'>{title}</button>
      </form>
    </div>
  )
}

export default DebtForm