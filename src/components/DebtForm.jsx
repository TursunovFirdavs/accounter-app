import React from 'react'
import { useForm } from 'react-hook-form'

const DebtForm = ({ title, onsubmit, initailValue, loading }) => {

  const { register, handleSubmit } = useForm()

  return (
    <div className='w-[743px] form-shadow sm:w-[352px] m-auto border px-[57px] sm:px-4 rounded-3xl mt-[50px] sm:mt-[100px]'>
      <h2 className='text-3xl sm:text-2xl font-medium text-center py-7 sm:py-6 sm:mb-2'>Qarz {title}</h2>
      <form className='flex flex-col' onSubmit={handleSubmit(onsubmit)}>
        <label className='text-lg mb-1' htmlFor="amount">Miqdor</label>
        <div className='w-full flex justify-between'>
              <input className='w-[47%] p-3 outline-none border-2 rounded-lg' {...register('amount_uzs')} type="number" placeholder="So'm" id='debt' />
              <input className='w-[47%] p-3 outline-none border-2 rounded-lg' pattern="\d+(\.\d+)?" {...register('amount_usd')} type="text" placeholder='Dollar' id='debt' />
            </div>
        <label className='text-lg mb-1 mt-4' htmlFor="desc">Izoh</label>
        <input className='p-3 border-2 outline-none rounded-lg' {...register('info')} type="text" placeholder='Izoh...' id='desc' />
        <button disabled={loading ? true : false} className='bg-[#00C1CF] text-white w-full py-3 rounded-3xl m-auto text-xl font-semibold my-[60px]' type='submit'>{title}</button>
      </form>
    </div>
  )
}

export default DebtForm