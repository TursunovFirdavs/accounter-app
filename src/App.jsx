import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Pages from './pages'

function App() {

  return (
    <div>
      <Navbar />
      <div className='bg-white route-shadow pt-4 xl:pt-10 rounded-t-[20px] xl:rounded-t-[40px] mt-[-14px] xl:mt-[-30px]'>
        <div className='container'>
          <Pages />
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default App
