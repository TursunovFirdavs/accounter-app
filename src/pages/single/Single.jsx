import React, { useState } from 'react'
import account from '../../assets/User.svg'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { TiPlus } from "react-icons/ti";
import { TiMinus } from "react-icons/ti";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import DeleteModal from '../../components/Delete-modal';
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { useDeleteUser } from '../../service/mutation/useDeleteUser';
import { useGetSingleUser } from '../../service/query/useGetSingleUser';
import { RiAccountPinBoxFill } from "react-icons/ri";
import { MdOutlineUpdate } from "react-icons/md";
import moment from 'moment';
import { useGetDebtList } from '../../service/query/useGetDebtList';




const Profile = () => {
  const { id } = useParams()
  const [openDialog, setOpenDialog] = useState(false)
  const { data: user } = useGetSingleUser(id)
  const { data: list } = useGetDebtList()
  const { mutate } = useDeleteUser(id)
  const navigate = useNavigate()

  const deleteUser = () => {
    mutate(id, {
      onSuccess: (res) => {
        console.log(res)
        navigate('/profile')
      },
      onError: err => console.log(err)
    })
  }

  const data = list?.filter(item => item.store == id)
  console.log(data);

  return (
    <div>
      <div className='relative'>
        <div className=' bg-blue h-[278px] sm:h-[100px] w-full'></div>

        <div className='absolute top-[165px] sm:top-[40px] sm:left-[15px] flex items-center gap-8 sm:gap-4 left-[50px]'>
          <div className='bg-[#FAFAFA] w-[225px] sm:w-[122px] sm:h-[122px] h-[225px] rounded-full flex items-center justify-center'>
            <img className='w-[190px] h-[190px sm:w-[80px] sm:h-[80px]' src={account} alt="" />
          </div>
          <div className='flex flex-col mb-7'>
            <p className='text-5xl pb-6 sm:pb-2.5 h-[100px] sm:h-[65px] flex items-end w-[720px] font-semibold sm:text-[22px] sm:w-[200px]'>Jack Bond dfssd.</p>
            <div className='flex gap-[55px]'>
              <div className='text-xl font-medium flex items-center gap-1 mb-[2px] sm:text-sm '>
                <FaPhone className='mt-[2px]' />
                <p>{`+998 ${user?.phone_number}`}</p>
              </div>
              <div className='flex items-center gap-8'>
                <div className="flex items-center gap-2">
                  <Link to={`/single/edit/${id}`}><FaRegEdit className='text-xl sm:text-sm' /></Link>
                  <RiDeleteBin5Line onClick={() => deleteUser(id)} className='text-xl cursor-pointer sm:text-sm text-red-500' />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-[120px] sm:mt-[80px] flex flex-col gap-2 sm:gap-1 mb-4'>
          <div className='text-xl sm:text-[14px] sm:leading-[24px] font-semibold'>
            <FaLocationDot className='text-xl sm:text-sm inline-block mb-2 mr-2 sm:mr-1' />
            <span>Manzil:</span> {user?.location}
          </div>
          <div className='flex items-center gap-2 sm:gap-1'>
            <RiAccountPinBoxFill className='text-xl sm:text-sm' />
            <p className='text-xl sm:text-[14px] sm:leading-[24px] font-semibold'>Ro'yxatdan o'tgan sana: {moment(user?.created).format("DD-MM-YYYY")}</p>
          </div>
          <div className='flex items-center gap-2 sm:gap-1'>
            <MdOutlineUpdate className='text-xl sm:text-sm' />
            <p className='text-xl sm:text-[14px] sm:leading-[24px] font-semibold'>Oxirgi faollik: {moment(user?.updated).format("DD-MM-YYYY HH:mm")}</p>
          </div>
        </div>


        <div className='flex sm:flex-col xl:items-center gap-5 xl:justify-between'>
          <div>
            <p className='text-lg sm:text-md'>Umumiy qarz</p>
            <div className='flex gap-[30px] sm:gap-5 pr-3 mt-1 mb-3'>
              <p className='text-3xl font-medium sm:text-[24px] w-[150px] sm:w-[120px]'>{user?.total_debt_uzs}</p>
              <p className='text-3xl font-semibold sm:text-[24px]'>{`$${user?.total_debt_usd}`}</p>
            </div>
            <p className='text-lg sm:text-md'>To’langan</p>
            <div className='flex gap-[30px] sm:gap-5 pr-3 mt-1 mb-3'>
              <p className='text-3xl font-medium sm:text-[24px] w-[150px] sm:w-[120px]'>{user?.paid_debt_uzs}</p>
              <p className='text-3xl font-semibold sm:text-[24px]'>{`$${user?.paid_debt_usd}`}</p>
            </div>
            <p className='text-lg sm:text-md'>Qolgan</p>
            <div className='flex gap-[30px] sm:gap-5 pr-3 mt-1 mb-3'>
              <p className='text-3xl font-medium sm:text-[24px] w-[150px] sm:w-[120px]'>{user?.unpaid_debt_uzs}</p>
              <p className='text-3xl font-semibold sm:text-[24px]'>{`$${user?.unpaid_debt_usd}`}</p>
            </div>
          </div>

          <div className='flex xl:flex-col gap-5'>
            <Link to={`/add-price/${id}`} className='text-white flex items-center justify-center gap-1 py-4 rounded-3xl text-xl font-medium w-[180px] bg-black'><TiPlus className='text-3xl' /> Qo'shish</Link>
            <Link to={`/remove-price/${id}`} className='text-white flex items-center justify-center gap-1 py-4 rounded-3xl text-xl font-medium w-[180px] bg-[#009FB2]'><TiMinus className='text-3xl' /> Ayirish</Link>
          </div>
        </div>
      </div>

      <div className='mt-[35px] mb-5 flex flex-col gap-3'>
        {
          data?.map(item => (
            <div className='flex bg-blue justify-between items-center pl-4 rounded-2xl overflow-hidden' key={item}>
              <div>
                <h3 className={`text-xl font-semibold sm:text-[16px] ${item.info && 'sm:h-[22px]'}`}>{moment(item.created).format("DD-MM-YYYY")}</h3>
                {item.info && <p title={item.info} className='sm:text-[12px] sm:py-1'>{item.info.length > 25 ? item.info.slice(0, 25) + '...' : item.info}</p>}
              </div>
              <div className='flex items-center xl:gap-10 sm:gap-4'>
                <div className={`${item.type == 'ADD' ? 'text-green-600' : 'text-red-500'} text-right xl:flex gap-10`}>
                  {item.amount_uzs && <p className='text-lg font-semibold sm:text-sm'>{`${item.type == 'ADD' ? '+' : '-'}${item.amount_uzs}`}</p>}
                  {item.amount_usd && <p className='text-lg font-semibold sm:text-sm'>{`${item.type == 'ADD' ? '+' : '-'}$${item.amount_usd}`}</p>}
                </div>
                <button onClick={() => setOpenDialog(true)} className='bg-[#009FB2] text-white py-3.5 sm:px-2 px-4 sm:text-sm font-semibold '><MdDelete className='inline-block mb-[5px] sm:mb-[4px] text-lg mr-1 sm:text-[15px]' />O'chirish</button>
              </div>
            </div>
          ))
        }
      </div>

      <DeleteModal
        isOpen={openDialog}
        handleClose={() => {
          setOpenDialog(false);
        }}
      />
    </div>
  )
}

export default Profile