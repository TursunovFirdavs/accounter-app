import { useEffect } from 'react'
import hero from '../../assets/hero.png'
import { loadState } from '../../storage'
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const navigate = useNavigate()

  useEffect(() => {
    loadState('access') && navigate('/profile')
  },[])

  return (
    <div>
      <div className='bg-[#B1E3FA] xl:h-[600px] rounded-[35px] flex justify-between items-center px-6 sm:px-5 xl:gap-10 sm:flex-col sm:h-[95vh] sm:py-[37px] sm:rounded-2xl '>
      <div className='w-1/2 flex flex-col gap-6 sm:gap-5 sm:w-full'>
        <h1 style={{ fontFamily: 'Paytone One, sans-serif' }} className='text-[64px] sm:text-[35px] sm:leading-[40px] font-normal'>Qarzlaringizni hisoblovchi sayt!</h1>
        <p className='text-xl text-[#011B1F] font-normal sm:text-[16px] sm:font-semibold'>Ushbu sayt yordamida siz firmangizni umumiy abarotini, kirim, chiqim, chiqimdan qanchasi to'langanlegini, ko'chada hali qancha mablag'ingiz borlegini va omborda qancha mablag'lik tavarengiz qolganlegini juda sodda yo'l bilan hisoblab borishengiz mumkin.</p>
      </div>
      <div className='w-1/2 sm:w-[100%]'>
        <img className='w-full pb-5' src={hero} alt="" />
      </div>
    </div>
    <div className='h-5 xl:h-10'></div>
    </div>
  )
}

export default Home