import { Dialog } from '@headlessui/react'
import React from 'react'
import { useDeleteUser } from '../service/mutation/useDeleteUser'
import { useNavigate } from 'react-router-dom'

const DeleteUserModal = ({isOpen, handleClose, selectedItem}) => {
    const { mutate } = useDeleteUser()
    const navigate = useNavigate()
    const handleDelete =() => {
        mutate(selectedItem?.id, {
            onSuccess: () => {
                handleClose()
                navigate('/')
            }
        })
    }
    console.log(selectedItem);
    
  return (
    <div>
      <Dialog open={isOpen} onClose={handleClose} className="relative z-50">
      <div className="fixed inset-0 flex w-screen bg-black/60 m-auto items-center justify-center p-4 ">
        <Dialog.Panel className="w-[500px] sm:w-[320px] rounded-2xl bg-white">
          <Dialog.Title>
            <div className='px-[55px] sm:px-8 py-[40px] sm:py-7 text-center '>
              <h2 className='text-xl sm:text-[16px] sm:leading-[22px] font-semibold'>{`Haqiqattan ham ${selectedItem?.name?.slice(0, 1).toUpperCase()+selectedItem?.name?.slice(1, selectedItem?.name?.length)}ni ro'yxatdan o'chirmoqchimisiz ?`}</h2>
              <div className='flex justify-around sm:justify-center sm:gap-8 mt-5'>
                <button onClick={handleClose} className='bg-gray-300/40 w-[100px] sm:w-[80px] py-1 rounded-2xl font-bold text-lg sm:text-sm'>YOQ</button>
                <button onClick={handleDelete} className='bg-gray-300/40 w-[100px] sm:w-[80px] py-1 rounded-2xl font-bold text-lg sm:text-sm'>HA</button>
              </div>
            </div>
          </Dialog.Title>
        </Dialog.Panel>
      </div>
    </Dialog>
    </div>
  )
}

export default DeleteUserModal
