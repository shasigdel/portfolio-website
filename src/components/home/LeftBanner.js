import React from 'react'
import {contactImage} from '../../assets/index'

const LeftBanner = () => {
  return (
    <div className='w-1/2 flex justify-center items-center relative'>
      <img 
        className='w-[500px] h-[500px] z-10'
      src={contactImage} alt='bannerImg'/>
      <div className='absolute bottom-0 w-[600px] h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center'>

      </div>
    </div>
  )
}

export default LeftBanner
