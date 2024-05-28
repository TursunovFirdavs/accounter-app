import { Dialog } from '@headlessui/react'
import React from 'react'
import { useDeleteUser } from '../service/mutation/useDeleteUser'
import { useNavigate } from 'react-router-dom'
import moment from 'moment'
import { useGetValyut } from '../service/query/useGetValyut'
import { useSelector } from 'react-redux'

const DataModal = ({ isOpen, handleClose, selectedItem }) => {
    const { data: valyut } = useGetValyut()
  const { isDollar } = useSelector(state => state.isDollar)


    const filteredValyut = valyut?.filter(valyut => valyut.Ccy == 'USD')[0]?.Rate?.slice(0, 5)
    const dollar = parseFloat(filteredValyut)

    const NumberSpacing = (num) => {
        return num?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    }
    console.log(selectedItem);

    return (
        <div>
            <Dialog open={isOpen} onClose={handleClose} className="relative z-50">
                <div className="fixed inset-0 flex w-screen bg-black/60 m-auto items-center justify-center p-4 ">
                    <Dialog.Panel className="w-[500px] sm:w-[320px] rounded-2xl bg-white">
                        <Dialog.Title>
                            <div className='px-[55px] sm:px-8 py-[40px] sm:py-7'>
                                <div className='flex gap-3 justify-between border-b py-1.5'>
                                    <p className='font-semibold'>Sana:</p>
                                    <p>{moment(selectedItem?.created).format("DD-MM-YYYY HH:mm")},</p>
                                </div>
                                <div className='flex gap-3 justify-between border-b py-1.5'>
                                    <p className='font-semibold'>Amalyot:</p>
                                    <p>{`${selectedItem?.type == 'ADD' ? "Qo'shildi" : 'Ayirildi'}`}</p>
                                </div>
                                <div className='flex gap-3 justify-between border-b py-1.5'>
                                    <p className='font-semibold'>Qancha:</p>
                                    <div className={`${selectedItem?.type == 'ADD' ? 'text-green-600' : 'text-red-500'}  xl:flex gap-10 text-end`}>
                                        {selectedItem?.amount_uzs &&
                                            <p className='text-xl font-semibold sm:text-sm'>{`${selectedItem?.type == 'ADD' ? '+' : '-'}${NumberSpacing(Number.parseInt(selectedItem?.amount_uzs))}`}</p>
                                        }
                                        {selectedItem?.amount_usd &&
                                            <p className='text-xl font-semibold sm:text-sm'>{`${selectedItem?.type == 'ADD' ? '+' : '-'}${isDollar ? `$${NumberSpacing(Number.parseInt(selectedItem?.amount_usd))}` : NumberSpacing(Number.parseInt(selectedItem?.amount_usd * dollar))}`}</p>
                                        }
                                    </div>
                                </div>
                                <div className={`${!selectedItem?.info && 'flex gap-3 justify-between border-b py-1.5'}`}>
                                    <p className='font-semibold'>Izoh:</p>
                                    <p>{selectedItem?.info ? selectedItem?.info : 'Kiritilmagan'}</p>
                                </div>
                                <div className='flex items-center justify-center mt-8'>
                                    <button onClick={handleClose} className='bg-gray-300/40 xl:w-[100px] w-[150px] pt-1.5.5 pb-2 shadow rounded-2xl font-bold text-lg sm:text-[16px]'>Yopish</button>
                                </div>
                            </div>
                        </Dialog.Title>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </div>
    )
}

export default DataModal
