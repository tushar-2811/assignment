import React from 'react'
import motors from '../assets/3.png'

const MainHero = () => {
  return (
    <div className='my-2 pl-4 '>
       <p className='font-medium flex justify-center'>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</p>

       <div className='w-5/6 mx-auto mt-2'>
        <img src={motors} alt="" className='flex justify-center items-center '  />
        <p className='flex justify-center flex-wrap font-medium'>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
       </div>
    </div>
  )
}

export default MainHero
