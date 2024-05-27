import { Dialog } from '@headlessui/react'
import React from 'react'
import { useGetUsers } from '../service/query/useGetUsers'
import { useSelector } from 'react-redux'
import { useGetValyut } from '../service/query/useGetValyut'
import { CgClose } from "react-icons/cg";



const OverallModal = (props) => {
  const { isOpen, handleClose, selectedItem } = props
  const { data: userData } = useGetUsers()
  const { valyut } = useGetValyut()
  const { isDollar } = useSelector(state => state.isDollar)
  const filteredValyut = valyut?.filter(valyut => valyut.Ccy == 'USD')[0]?.Rate?.slice(0, 5)
  const dollar = parseFloat(filteredValyut)
  const data = userData !== 401 ? userData : undefined

  const lends = data?.filter(item => item.info == 'lend');

  const borrows = data?.filter(item => item.info == 'borrow');

  console.log(data);
  const NumberSpacing = (num) => {
    if (num !== NaN) {
      return num?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    }
    else {
      return 0
    }
  }

  const total_usz = lends?.reduce((a, b) => {
    return a + parseFloat(b.total_debt_uzs)
  }, 0)

  const pain_uzs = lends?.reduce((a, b) => {
    return a + parseFloat(b.paid_debt_uzs)
  }, 0)
  const unpain_uzs = lends?.reduce((a, b) => {
    return a + parseFloat(b.unpaid_debt_uzs)
  }, 0)
  const total_usd = lends?.reduce((a, b) => {
    return a + parseFloat(b.total_debt_usd)
  }, 0)
  const pain_usd = lends?.reduce((a, b) => {
    return a + parseFloat(b.paid_debt_usd)
  }, 0)
  const unpain_usd = lends?.reduce((a, b) => {
    return a + parseFloat(b.unpaid_debt_usd)
  }, 0)
  const my_unpain_usd = borrows?.reduce((a, b) => {
    return a + parseFloat(b.unpaid_debt_usd)
  }, 0)
  const my_unpain_usz = borrows?.reduce((a, b) => {
    return a + parseFloat(b.unpaid_debt_uzs)
  }, 0)


  return (
    <div>
      <Dialog open={isOpen} onClose={handleClose} className="relative z-50">
        <div className="fixed inset-0 flex w-screen bg-black/60 m-auto items-center justify-center p-4 ">
          <Dialog.Panel className="w-[500px] sm:w-[350px] rounded-2xl bg-white">
            <Dialog.Title>
              <div className='px-5 pb-6'>
                <div className='flex items-center justify-between pr-2'>
                  <h2 className='text-[24px] pt-4 pb-5 font-semibold'>Barcha hisobotlar</h2>
                  <CgClose onClick={handleClose} className='text-xl' />
                </div>
                <div className='flex flex-col gap-3'>
                  <div className='bg-main-blue xl:pt-4 xl:pb-10 pt-2.5 pb-6 px-3 rounded-[20px] text-white'>
                    <p className='text-lg sm:text-md font-semibold'>Umumiy qarz</p>
                    <div className='flex gap-[30px] sm:gap-5 pr-3 mb-1.5'>
                      <p className='text-3xl w-[195px] sm:w-[160px] font-medium sm:text-[24px]'>{NumberSpacing(total_usz)} </p>
                      <p className='text-3xl w-[195px] sm:w-[160px] font-medium sm:text-[24px]'>{isDollar ? `$${NumberSpacing(total_usd?.toFixed(2))}` : NumberSpacing((Number.parseInt(total_usd * dollar)))}</p>
                    </div>
                    <p className='text-[13px] font-semibold'>Bu umumiy siz boshqalarga bergan qarzlaringoz</p>
                  </div>
                  <div className='bg-main-green xl:pt-4 xl:pb-10 pt-2.5 pb-6 px-3 rounded-[20px]'>
                    <p className='text-lg sm:text-md font-semibold'>To’langan</p>
                    <div className='flex gap-[30px] sm:gap-5 pr-3 mb-1.5'>
                      <p className='text-3xl w-[195px] sm:w-[160px] font-medium sm:text-[24px]'>{NumberSpacing(pain_uzs)}</p>
                      <p className='text-3xl w-[195px] sm:w-[160px] font-semibold sm:text-[24px]'>{isDollar ? `$${NumberSpacing(pain_usd?.toFixed(2))}` : NumberSpacing((Number.parseInt(pain_usd * dollar)))}</p>
                    </div>
                    <p className='text-[13px] font-semibold'>Siz bergan qarzlarni qanchasini qaytarib olganingiz</p>
                  </div>
                  <div className='bg-main-yellow xl:pt-4 xl:pb-10 pt-2.5 pb-6 px-3 rounded-[20px]'>
                    <p className='text-lg sm:text-md font-semibold'>Qolgan</p>
                    <div className='flex gap-[30px] sm:gap-5 pr-3 mb-1.5'>
                      <p className='text-3xl w-[195px] sm:w-[160px] font-medium sm:text-[24px]'>{NumberSpacing(unpain_uzs)}</p>
                      <p className='text-3xl w-[195px] sm:w-[160px] font-semibold sm:text-[24px]'>{isDollar ? `$${NumberSpacing(unpain_usd?.toFixed(2))}` : NumberSpacing((Number.parseInt(unpain_usd * dollar)))}</p>
                    </div>
                    <p className='text-[13px] font-semibold'>Ayni damda boshqalardan olishengiz kerak bo'lgan mablag'ingiz</p>
                  </div>
                  <div className='bg-main-red xl:pt-4 xl:pb-10 pt-2.5 pb-6 px-3 rounded-[20px] text-white'>
                    <p className='text-lg sm:text-md font-semibold'>Firmadan olingan</p>
                    <div className='flex gap-[30px] sm:gap-5 pr-3 mb-1.5'>
                      <p className='text-3xl w-[195px] sm:w-[160px] font-medium sm:text-[24px]'>{NumberSpacing(parseFloat(my_unpain_usz))}</p>
                      <p className='text-3xl w-[195px] sm:w-[160px] font-semibold sm:text-[24px]'>{isDollar ? `$${NumberSpacing(my_unpain_usd?.toFixed(2))}` : NumberSpacing((Number.parseInt(my_unpain_usd * dollar)))}</p>
                    </div>
                    <p className='text-[13px] font-semibold'>Siz boshqalardan olgan qarzengiz</p>
                  </div>
                </div>
              </div>
            </Dialog.Title>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  )
}

export default OverallModal
