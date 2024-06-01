import { useEffect, useState } from 'react'
import account from '../../assets/User.svg'
import { IoSearch } from "react-icons/io5";
import { IoMdPersonAdd } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import { loadState } from '../../storage';
import { useGetUsers } from '../../service/query/useGetUsers';
import moment from 'moment';
import { useGetValyut } from '../../service/query/useGetValyut';
import { useDispatch, useSelector } from 'react-redux';
import { TiMinus, TiPlus } from 'react-icons/ti';
import { useGetDebtList } from '../../service/query/useGetDebtList';
import { MdDelete } from 'react-icons/md';
import OverallModal from '../../components/Price-modal';
import lend from '../../assets/lend.jpg'
import borrow from '../../assets/borrow.png'
import { changeFirm } from '../../redux/is-firm';

const Profile = () => {
    const [search, setSearch] = useState('')
    const [isClient, setISClient] = useState(true)
    const [openDialog, setOpenDialog] = useState(false)
    const [modalItem, setModalItem] = useState(null)
    const { data: userData, isLoading } = useGetUsers()
    const { data: valyut } = useGetValyut()
    const { data: list } = useGetDebtList()
    const user = loadState('user')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {isFirm} = useSelector(state => state.isFirm)
    const { isDollar } = useSelector(state => state.isDollar)
    useEffect(() => {
        !loadState('access') && navigate('/')
    }, [])
    if (userData === 401) {
        navigate('/login')
    }
    const data = userData !== 401 ? userData : undefined
    const filteredValyut = valyut?.filter(valyut => valyut.Ccy == 'USD')[0]?.Rate?.slice(0, 5)
    const dollar = parseFloat(filteredValyut)

    const lends = data?.filter(item => item.info == 'lend' &&
        item.name?.toLowerCase().includes(search.toLowerCase())
    );

    const borrows = data?.filter(item => item.info == 'borrow' &&
        item.name?.toLowerCase().includes(search.toLowerCase())
    );

    const NumberSpacing = (num) => {
        if (num !== NaN) {
            return num?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
        }
        else {
            return 0
        }
    }

    if (data?.length) {
        var userLends = data.filter(item => item.info == 'lend')
        var userBorrow = data.filter(item => item.info == 'borrow')
    }

    const unpain_uzs = userLends?.reduce((a, b) => {
        return a + parseFloat(b.unpaid_debt_uzs)
    }, 0)
    const unpain_usd = userLends?.reduce((a, b) => {
        return a + parseFloat(b.unpaid_debt_usd)
    }, 0)
    const my_unpain_usd = userBorrow?.reduce((a, b) => {
        return a + parseFloat(b.unpaid_debt_usd)
    }, 0)
    const my_unpain_usz = userBorrow?.reduce((a, b) => {
        return a + parseFloat(b.unpaid_debt_uzs)
    }, 0)
    const total_usz = userLends?.reduce((a, b) => {
        return a + parseFloat(b.total_debt_uzs)
    }, 0)
    const total_usd = userLends?.reduce((a, b) => {
        return a + parseFloat(b.total_debt_usd)
    }, 0)


    return isLoading ? <div className='w-full h-[85vh] flex items-center justify-center'><div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div> : (
        <div className='relative'>
            <div className='flex relative gap-[50px] sm:gap-[60px] sm:flex-col'>
                <div className=' bg-main-green rounded-t-[20px] h-[278px] sm:h-[100px] xl:w-[927px] sm:w-full'></div>
                <div className='absolute top-[162px] sm:top-[40px] flex items-center gap-8 left-[50px] sm:left-[15px]'>
                    <div className=' bg-[#FAFAFA] w-[225px] shadow sm:w-[122px] h-[225px] sm:h-[122px] rounded-full flex items-center justify-center'>
                        <img className='w-[190px] h-[190px sm:w-[80px] sm:h-[80px]' src={account} alt="" />
                    </div>
                    <div>
                        <p className='text-5xl pb-4 sm:pb-0 font-semibold sm:text-[24px]'>{user?.username.slice(0, 1).toUpperCase() + user?.username.slice(1, user?.username.length)}</p>
                        <select onChange={(e) => dispatch(changeFirm(e.target.value))} className='outline-none bg-white'>
                            <option selected={isFirm == "firma" ? true : false} className='text-[14px]' value="firma">Firma</option>
                            <option selected={isFirm == "do'kon" ? true : false} className='text-[14px]' value="do'kon">Do'kon</option>
                        </select>
                    </div>
                </div>
                <div onClick={() => setOpenDialog(true)}>
                    <div className='flex justify-end'>
                        <button onClick={() => setOpenDialog(true)} className='bg-red xl:hidden pb-1.5 pr-2'>see all</button>
                    </div>
                    <div className='bg-main-yellow xl:pt-4 xl:pb-10 pt-2.5 pb-6 px-3 rounded-t-[20px]'>
                        <p className='text-lg sm:text-md'>{isFirm == 'firma' ? 'Olingan tavarlar' : 'Olingan qarzlar'}</p>
                        <div className='flex gap-[30px] sm:gap-5 pr-3'>
                            <p className='text-3xl w-[195px] sm:w-[160px] font-medium sm:text-[24px]'>{NumberSpacing(parseFloat(my_unpain_usz))}</p>
                            <p className='text-3xl w-[195px] sm:w-[160px] font-semibold sm:text-[24px]'>{isDollar ? `$${NumberSpacing(my_unpain_usd?.toFixed(2))}` : NumberSpacing((Number.parseInt(my_unpain_usd * dollar)))}</p>
                        </div>
                    </div>
                    <div className='bg-main-red xl:pt-4 xl:pb-5 pt-2.5 pb-10 px-3 rounded-[20px] mt-[-20px] text-white'>
                        <p className='text-lg sm:text-md'>{isFirm == 'firma' ? 'Berilgan tavarlar' : 'Berilgan qarzlar'}</p>
                        <div className='flex gap-[30px] sm:gap-5 pr-3 mt-1'>
                            {isFirm == 'firma' ? 
                            <>
                            <p className='text-3xl w-[195px] sm:w-[160px] font-medium sm:text-[24px]'>{NumberSpacing(total_usz)}</p>
                            <p className='text-3xl w-[195px] sm:w-[160px] font-semibold sm:text-[24px]'>{isDollar ? `$${NumberSpacing(total_usd?.toFixed(2))}` : NumberSpacing((Number.parseInt(total_usd * dollar)))}</p></>
                            :
                            <>
                            <p className='text-3xl w-[195px] sm:w-[160px] font-medium sm:text-[24px]'>{NumberSpacing(unpain_uzs)}</p>
                            <p className='text-3xl w-[195px] sm:w-[160px] font-semibold sm:text-[24px]'>{isDollar ? `$${NumberSpacing(unpain_usd?.toFixed(2))}` : NumberSpacing((Number.parseInt(unpain_usd * dollar)))}</p></>
                        }
                        </div>
                        <div className='xl:block hidden mt-10 '>
                            <button onClick={() => setOpenDialog(true)} className='text-xl font-semibold'>See all</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-center xl:justify-end'>
                <div className='sm:mt-5 mt-[40px] xl:w-[450px] w-full flex gap-3 justify-between'>
                    <div onClick={() => setISClient(false)} className={`flex items-center justify-between border  ${!isClient ? 'border-main-yellow border-2' : 'search'} rounded-[8px] pt-1 pb-1.5 w-[170px] xl:w-[280px] px-2`}>
                        <div>
                            <p className={`text-[13px] xl:text-[16px] ${!isClient && 'text-main-yellow'} font-semibold`}>{isFirm == 'firma' ? 'Olingan tavarlar' : 'Olingan qarzlar'}</p>
                            <p className='text-[12px] text-gray-400 font-semibold'>Ro'yxati</p>
                        </div>
                        <img className='w-[38px] mt-0.5 h-[35px] rounded-[5px]' src={lend} alt="" />
                    </div>
                    <div onClick={() => setISClient(true)} className={`flex items-center justify-between border ${isClient ? 'border-main-yellow border-2' : 'search'} rounded-[8px] pt-1 pb-1.5 w-[170px] xl:w-[280px] px-2`}>
                        <div>
                            <p className={`text-[13px] xl:text-[16px] ${isClient && 'text-main-yellow'} font-semibold`} >{isFirm == 'firma' ? 'Berilgan tavarlar' : 'Berilgan qarzlar'}</p>
                            <p className='text-[12px] text-gray-400 font-semibold'>Ro'yxati</p>
                        </div>
                        <img className='w-[38px] mt-0.5 h-[35px] rounded-[5px]' src={borrow} alt="" />
                    </div>
                </div>
            </div>

            <div className='flex justify-between px-5 sm:px-3 search overflow-hidden  rounded-[30px] mt-[70px] sm:mt-[30px] items-center border-black/30'>
                <input onChange={(e) => setSearch(e.target.value)} className='py-3 sm:py-2 flex-1 outline-none ' type="text" placeholder='Search...' />
                <IoSearch />
            </div>
            {isClient ?
                <div className='pb-5'>
                    {lends?.length ?
                        <div className='mt-[35px] mb-5 flex flex-col gap-3'>
                            {lends?.map(item => (
                                <Link to={`/single/${item.id}`} className='flex items-center bg-[#f0efef] shadow-md border justify-between px-4 py-3 rounded-2xl' key={item.id}>
                                    <h3 className='text-xl font-semibold sm:text-[16px]'>{item?.name.slice(0, 1).toUpperCase() + item?.name.slice(1, item?.name.length)}</h3>
                                    <div className='flex items-center gap-10 sm:gap-4'>
                                        <p className='sm:hidden'>{moment(item.updated).format("YYYY-MM-DD HH:mm:ss")}</p>
                                        <p className={`text-lg sm:text-[16px] font-semibold text-right ${isDollar ? 'w-[90px] sm:w-[80px]' : 'w-[130px] sm:w-[94px]'}`}>{`${isDollar ? `$${NumberSpacing(item.unpaid_debt_usd)}` : NumberSpacing(Number.parseInt(item.unpaid_debt_usd * dollar))}`}</p>
                                        <p className='text-lg sm:text-[16px] font-semibold text-right w-[130px] sm:w-[94px] '>{`${NumberSpacing(Number.parseInt(item.unpaid_debt_uzs))}`}</p>
                                    </div>
                                </Link>
                            ))
                            }
                        </div> :
                        <div className='pt-5 xl:pt-[50px] xl:pb-6 w-[250px] xl:w-[590px] m-auto text-center text-[18px] xl:text-[30px] font-bold text-gray-600'>
                            Hali hech qanday qarzdor qo'shilmagan
                        </div>
                    }
                </div>
                :
                <div className='pb-7'>
                    {borrows?.length ?
                        <div className='mt-[35px] mb-5 flex flex-col gap-3'>
                            {borrows?.map(item => (
                                <Link to={`/single/${item.id}`} className='flex items-center bg-[#f0efef] shadow-md border justify-between px-4 py-3 rounded-2xl' key={item.id}>
                                    <h3 className='text-xl font-semibold sm:text-[16px]'>{item?.name.slice(0, 1).toUpperCase() + item?.name.slice(1, item?.name.length)}</h3>
                                    <div className='flex items-center gap-10 sm:gap-4'>
                                        <p className='sm:hidden'>{moment(item.updated).format("YYYY-MM-DD HH:mm:ss")}</p>
                                        <p className={`text-lg sm:text-[16px] font-semibold text-right ${isDollar ? 'w-[90px] sm:w-[80px]' : 'w-[130px] sm:w-[94px]'}`}>{`${isDollar ? `$${NumberSpacing(item.unpaid_debt_usd)}` : NumberSpacing(Number.parseInt(item.unpaid_debt_usd * dollar))}`}</p>
                                        <p className='text-lg sm:text-[16px] font-semibold text-right w-[130px] sm:w-[94px] '>{`${NumberSpacing(Number.parseInt(item.unpaid_debt_uzs))}`}</p>
                                    </div>
                                </Link>
                            ))
                            }
                        </div> :
                        <div className='pt-5 xl:pt-[50px] xl:pb-6 w-[250px] xl:w-[590px] m-auto text-center text-[18px] xl:text-[30px] font-bold text-gray-600'>
                            Hali hech qanday qarz qo'shilmagan
                        </div>
                    }
                </div>
            }
            <Link to={`/create/${isClient}`} className='w-10 h-10 rounded-full search bg-white fixed flex items-center justify-center bottom-[60px] sm:bottom-[70px] right-[100px] sm:right-[20px]'>
                <IoMdPersonAdd />
            </Link>

            <OverallModal
                isOpen={openDialog}
                selectedItem={modalItem}
                handleClose={() => {
                    setOpenDialog(false);
                    setSelectedItem({});
                }}
            />
        </div>
    )
}

export default Profile