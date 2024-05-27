import './App.css'
import Navbar from './components/Navbar'
import Pages from './pages'

function App() {

  return (
    <div>
      <Navbar />
      <div className='bg-white pt-4 rounded-t-[20px] mt-[-14px]'>
        <div className='container'>
          <Pages />
        </div>
      </div>
    </div>
  )
}

export default App
