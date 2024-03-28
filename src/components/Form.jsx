import React from 'react'
import { useForm } from 'react-hook-form'

const Form = ({ title, onsubmit }) => {

  const { register, handleSubmit } = useForm()

//   const submit = (data) => {
//     console.log(data);
//   }

  return (
    <div className='w-[743px] m-auto bg-blue px-[57px] rounded-3xl mt-[50px]'>
      <h2 className='text-3xl font-medium text-center py-7'>Qarz {title}</h2>
      <form className='flex flex-col' onSubmit={handleSubmit(onsubmit)}>
        <label className='text-lg mb-1' htmlFor="amount">Miqdor</label>
        <input className='py-2 px-3 outline-none rounded-lg' {...register('amount')} type="text" placeholder='Pul miqdori' id='amount' />
        <label className='text-lg mb-1 mt-4' htmlFor="desc">Izoh</label>
        <input className='py-2 px-3 outline-none rounded-lg' {...register('desc')} type="text" placeholder='Izoh...' id='desc' />
        <button className='bg-white w-[239px] py-3 rounded-3xl m-auto text-xl font-semibold my-[60px]' type='submit'>{title}</button>
      </form>
    </div>
  )
}

export default Form