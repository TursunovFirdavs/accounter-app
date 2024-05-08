import React, { useEffect, useState } from 'react'
import account from '../../assets/User.svg'
import { IoSearch } from "react-icons/io5";
import { IoMdPersonAdd } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import { loadState } from '../../storage';
import { useGetUsers } from '../../service/query/useGetUsers';
import moment from 'moment';
import { useGetValyut } from '../../service/query/useGetValyut';
import { useSelector } from 'react-redux';

const Profile = () => {
    const [search, setSearch] = useState('')
    const { data, isLoading } = useGetUsers()
    const { data: valyut } = useGetValyut()
    const user = loadState('user')
    const navigate = useNavigate()
    const { isDollar } = useSelector(state => state.isDollar)
    useEffect(() => {
        !loadState('access') && navigate('/')
    }, [])

    const filteredValyut = valyut?.filter(valyut => valyut.Ccy == 'USD')[0]?.Rate?.slice(0, 5)
    const dollar = parseFloat(filteredValyut)


    const NumberSpacing = (num) => {
        return num?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    }

    const total_usz = data?.reduce((a, b) => {
        return a + parseFloat(b.total_debt_uzs)
    }, 0)

    const pain_uzs = data?.reduce((a, b) => {
        return a + parseFloat(b.paid_debt_uzs)
    }, 0)
    const unpain_uzs = data?.reduce((a, b) => {
        return a + parseFloat(b.unpaid_debt_uzs)
    }, 0)
    const total_usd = data?.reduce((a, b) => {
        return a + parseFloat(b.total_debt_usd)
    }, 0)
    const pain_usd = data?.reduce((a, b) => {
        return a + parseFloat(b.paid_debt_usd)
    }, 0)
    const unpain_usd = data?.reduce((a, b) => {
        return a + parseFloat(b.unpaid_debt_usd)
    }, 0)


    const filteredData = data?.filter(item =>
        item.name?.toLowerCase().includes(search.toLowerCase())
    );
    console.log(filteredData);


    return isLoading ? <div className='w-full h-[85vh] flex items-center justify-center'><div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div> : (
        <div className='relative'>
            <div className='flex relative gap-[50px] sm:gap-[80px] sm:flex-col'>
                <div className=' bg-blue h-[278px] sm:h-[100px] xl:w-[927px] sm:w-full'></div>
                <div className='absolute top-[162px] sm:top-[40px] flex items-center gap-8 left-[50px] sm:left-[15px]'>
                    <div className=' bg-[#FAFAFA] w-[225px] sm:w-[122px] h-[225px] sm:h-[122px] rounded-full flex items-center justify-center'>
                        <img className='w-[190px] h-[190px sm:w-[80px] sm:h-[80px]' src={account} alt="" />
                    </div>
                    <div>
                        <p className='text-5xl pb-4 sm:pb-0 font-semibold sm:text-[24px]'>{user?.username.slice(0, 1).toUpperCase() + user?.username.slice(1, user?.username.length)}</p>
                        <p className='text-xl font-medium sm:text-[13px]'>2024-yil 21-mart</p>
                    </div>
                </div>
                <div>
                    <p className='text-lg sm:text-md'>Umumiy qarz</p>
                    <div className='flex gap-[30px] sm:gap-5 pr-3 mt-1 mb-3'>
                        <p className='text-3xl w-[195px] sm:w-[160px] font-medium sm:text-[24px]'>{NumberSpacing(total_usz)} </p>
                        <p className='text-3xl w-[195px] sm:w-[160px] font-medium sm:text-[24px]'>{isDollar ? `$${NumberSpacing(total_usd.toFixed(2))}` : NumberSpacing((Number.parseInt(total_usd * dollar)))}</p>
                    </div>
                    <p className='text-lg sm:text-md'>To’langan</p>
                    <div className='flex gap-[30px] sm:gap-5 pr-3 mt-1 mb-3'>
                        <p className='text-3xl w-[195px] sm:w-[160px] font-medium sm:text-[24px]'>{NumberSpacing(pain_uzs)}</p>
                        <p className='text-3xl w-[195px] sm:w-[160px] font-semibold sm:text-[24px]'>{isDollar ? `$${NumberSpacing(pain_usd.toFixed(2))}` : NumberSpacing((Number.parseInt(pain_usd * dollar)))}</p>
                    </div>
                    <p className='text-lg sm:text-md'>Qolgan</p>
                    <div className='flex gap-[30px] sm:gap-5 pr-3 mt-1 mb-3'>
                        <p className='text-3xl w-[195px] sm:w-[160px] font-medium sm:text-[24px]'>{NumberSpacing(unpain_uzs)}</p>
                        <p className='text-3xl w-[195px] sm:w-[160px] font-semibold sm:text-[24px]'>{isDollar ? `$${NumberSpacing(unpain_usd.toFixed(2))}` : NumberSpacing((Number.parseInt(unpain_usd * dollar)))}</p>
                    </div>
                </div>
            </div>

            <div className='flex justify-between px-5 sm:px-3 border mt-[140px] sm:mt-[50px] items-center border-black/40'>
                <input onChange={(e) => setSearch(e.target.value)} className='py-3 sm:py-2 flex-1 outline-none ' type="text" placeholder='Search...' />
                <IoSearch />
            </div>

            <div className='mt-[35px] mb-5 flex flex-col gap-3'>
                {filteredData?.map(item => (
                        <Link to={`/single/${item.id}`} className='flex items-center bg-blue justify-between px-4 py-3 rounded-2xl' key={item.id}>
                            <h3 className='text-xl font-semibold sm:text-[16px]'>{item?.name.slice(0, 1).toUpperCase() + item?.name.slice(1, item?.name.length)}</h3>
                            <div className='flex items-center gap-10 sm:gap-8'>
                                <p className='sm:hidden'>{moment(item.updated).format("YYYY-MM-DD HH:mm:ss")}</p>
                                <p className='text-lg sm:text-[16px] font-semibold text-right w-[90px] sm:w-[80px] '>{`$${NumberSpacing(item.unpaid_debt_usd)}`}</p>
                                <p className='text-lg sm:text-[16px] font-semibold text-right w-[130px] sm:w-[110px] '>{`$${NumberSpacing(item.unpaid_debt_uzs)}`}</p>
                            </div>
                        </Link>
                    ))
                }
            </div>
            <Link to={'/create'} className='w-10 h-10 rounded-full bg-white fixed flex items-center justify-center bottom-6 sm:bottom-[10px] right-[100px] sm:right-[20px]'>
                <IoMdPersonAdd />
            </Link>
        </div>
    )
}

export default Profile