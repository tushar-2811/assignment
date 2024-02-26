import React from 'react'
import image from '../assets/1.png'
import image1 from '../assets/2.png'

const Hero = () => {
  return (
    <div className='mt-4 p-8 flex flex-col md:flex-row md:justify-between items-center'>

        <div className='w-2/3  flex justify-center items-center'>
           <img src={image} alt="" className='h-96 flex justify-center md:h-[700px]' />
        </div>

        <div className=' p-4'>
            <h1 className='text-xl font-bold mb-3'> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h1>
            <ol className='gap-2 font-semibold'>
                <li> C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                <li>   C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>
            </ol>

            <img src={image1} alt="" className='my-4' />

            <p className=''>Government of India has awarded the <span className='font-bold'>"National Energy Conservation Award 2018"</span>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
        </div>
      
    </div>
  )
}

export default Hero
