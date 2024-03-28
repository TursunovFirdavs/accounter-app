import React, { useState } from 'react'
import account from '../../assets/User.svg'
import { Link } from 'react-router-dom';
import { TiPlus } from "react-icons/ti";
import { TiMinus } from "react-icons/ti";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import DeleteModal from '../../components/Delete-modal';




const Profile = () => {
  const[openDialog, setOpenDialog] = useState(false)
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <div>
      <div>
        <div className=' bg-blue h-[278px] w-full'></div>

        <div className='absolute top-[250px] flex items-center gap-8 left-[150px]'>
          <div className='w-[225px] h-[225px] rounded-full border bg-white flex items-center justify-center'>
            <img src={account} alt="" />
          </div>
          <div className='flex flex-col mb-7'>
            <p className='text-5xl pb-4 h-[110px] flex items-end w-[720px] font-semibold'>Jack Bond kdsjfnklore.</p>
            <div>
              <div className='text-xl font-medium flex items-center gap-1 mb-[2px]'>
                <FaPhone className='mt-[2px]' />
                <p>+998 99 999 99 99</p>
              </div>
              <p className='text-xl font-medium'>2024-yil 21-mart</p>
            </div>
          </div>
        </div>

        <div className='mt-[120px] text-xl font-semibold mb-4'>
        <FaLocationDot className='text-xl inline-block mb-2 mr-1' />
        Orom bozor, 10-qator, 17-magazen Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, atque doloremque optio deleniti iusto eum. Minus autem veritatis laborum hic quas omnis delectus voluptates, cupiditate quidem nostrum mollitia, voluptatibus natus.
        </div>

        <div className='flex items-center justify-between'>
        <div>
          <p className='text-lg'>Umumiy qarz</p>
          <div className='flex gap-[30px] pr-3 mt-1 mb-3'>
            <p className='text-3xl font-medium'>$999.999.999</p>
            <p className='text-3xl font-semibold'>$999.999.999</p>
          </div>
          <p className='text-lg'>To’langan</p>
          <div className='flex gap-[30px] pr-3 mt-1 mb-3'>
            <p className='text-3xl font-medium'>$999.999.999</p>
            <p className='text-3xl font-semibold'>$999.999.999</p>
          </div>
          <p className='text-lg'>Qolgan</p>
          <div className='flex gap-[30px] pr-3 mt-1 mb-3'>
            <p className='text-3xl font-medium'>$999.999.999</p>
            <p className='text-3xl font-semibold'>$999.999.999</p>
          </div>
        </div>

        <div className='flex flex-col gap-5'> 
          <Link to={'/add-price'} className='text-white flex items-center justify-center gap-1 py-4 rounded-3xl text-xl font-medium w-[180px] bg-black'><TiPlus  className='text-3xl'/> Qo'shish</Link>
          <Link to={'/remove-price'} className='text-white flex items-center justify-center gap-1 py-4 rounded-3xl text-xl font-medium w-[180px] bg-[#009FB2]'><TiMinus className='text-3xl' /> Ayirish</Link>
        </div>
        </div>
      </div>

      <div className='mt-[35px] mb-5 flex flex-col gap-3'>
        {
          data?.map(item => (
            <div className='flex bg-blue justify-between items-center pl-4 rounded-2xl overflow-hidden' key={item}>
              <h3 className='text-xl font-semibold'>Izoh</h3>
              <div className='flex items-center gap-10'>
                <p>25-mart 2024</p>
                <p className='text-lg font-semibold'>$9.999.999</p>
                <button onClick={() => setOpenDialog(true)} className='bg-[#009FB2] text-white py-3 px-4 font-semibold '><MdDelete className='inline-block mb-[5px] text-lg mr-1' />O'chirish</button>
              </div>
            </div>
          ))
        }
      </div>

      <DeleteModal
                    isOpen={openDialog}
                    // selectedItem={selectedItem}
                    handleClose={() => {
                        setOpenDialog(false);
                        // setSelectedItem({});
                    }}
                />
    </div>
  )
}

export default Profile