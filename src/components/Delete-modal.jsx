import { useState } from 'react' 
import { Link, useNavigate } from 'react-router-dom'
import { Dialog } from '@headlessui/react'
import { useDeleteDebt } from '../service/mutation/useDeleteDebt';
import { client } from '../config/query-client';


export default function DeleteModal(props) {
  const {isOpen, handleClose, selectedItem} = props
  const { mutate } = useDeleteDebt()
  const navigate = useNavigate()

  const handleDelete = () => {
    mutate(selectedItem?.id, {
      onSuccess: () => {
        handleClose()
        client.invalidateQueries({ queryKey: ['debt-list'] })
        navigate(`/single/${selectedItem?.store}`)
      }
    })
  }


  return (
    <Dialog open={isOpen} onClose={handleClose} className="relative z-50">
      <div className="fixed inset-0 flex w-screen bg-black/60 m-auto items-center justify-center p-4 ">
        <Dialog.Panel className="w-[500px] sm:w-[320px] rounded-2xl bg-white">
          <Dialog.Title>
            <div className='px-[55px] sm:px-8 py-[40px] sm:py-7 text-center '>
              <h2 className='text-xl sm:text-[16px] sm:leading-[22px] font-semibold'>Ushbu ma'lumotning o'chishi umumiy qolgan qarzga hech qanday ta'sir qilmaydi. Haqiqatdan ham bu ma'lumotni o'chirishni hohlaysizmi</h2>
              <div className='flex justify-around sm:justify-center sm:gap-8 mt-5'>
                <button onClick={handleClose} className='bg-gray-300/40 w-[100px] sm:w-[80px] py-1 rounded-2xl font-bold text-lg sm:text-sm'>YOQ</button>
                <button onClick={handleDelete} className='bg-gray-300/40 w-[100px] sm:w-[80px] py-1 rounded-2xl font-bold text-lg sm:text-sm'>HA</button>
              </div>
            </div>
          </Dialog.Title>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}