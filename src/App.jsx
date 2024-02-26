
import { Globe, PhoneCall, ScanFace } from 'lucide-react'
import './App.css'
import Footer from './components/footer'
import Header from './components/header'
import Hero from './components/hero'
import MainHero from './components/main'

function App() {


  return (
    <>
      <div className='h-full bg-gradient-to-t from-yellow-100 to-white'>
        <Header />
        <Hero/>
        <MainHero/>

        <Footer/>

        <div className='h-20 bg-red-500 w-full text-white flex flex-col md:flex-row justify-between items-center px-10'>

          <h1 className='font-medium flex gap-x-1'><PhoneCall/> Toll Free 1800 200 1234</h1>
          <a className='flex gap-x-1' href="https://www.facebook.com"> <ScanFace/> www.facebook.com/cripumps</a>
          <a className='flex gap-x-1' href="https://www.facebook.com"><Globe/> www.crigroups.com</a>
        </div>


      </div>
    </>

  )
}

export default App
