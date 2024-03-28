import { useState } from 'react' 
import { Link } from 'react-router-dom'
import { Dialog } from '@headlessui/react'


export default function DeleteModal(props) {
//   let [isOpen, setIsOpen] = useState(true)
  const {isOpen, handleClose} = props


  return (
    <Dialog open={isOpen} onClose={handleClose} className="relative z-50">
      <div className="fixed inset-0 flex w-screen bg-black/60 m-auto items-center justify-center p-4 ">
        <Dialog.Panel className="w-[500px] rounded-2xl bg-white">
          <Dialog.Title>
            <div className='px-[55px] py-[40px] text-center '>
              <h2 className='text-xl font-semibold'>Ushbu ma'lumotning o'chishi umumiy qolgan qarzga hech qanday ta'sir qilmaydi. Haqiqatdan ham bu ma'lumotni o'chirishni hohlaysizmi</h2>
              <div className='flex justify-around mt-5'>
                <button className='bg-gray-300/40 w-[100px] py-1 rounded-2xl font-bold text-lg'>YOQ</button>
                <button className='bg-gray-300/40 w-[100px] py-1 rounded-2xl font-bold text-lg'>HA</button>
              </div>
            </div>
          </Dialog.Title>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}