import React from 'react'
import logo from '../assets/logo.png'

const Header = () => {
  return (
      <div className='flex justify-center items-center'>
       <div>
         <img src={logo} className='w-72' />
       </div> 
    </div>
  )
}

export default Header
