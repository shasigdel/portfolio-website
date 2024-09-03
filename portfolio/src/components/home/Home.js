import React from 'react'


import RightBanner from './RightBanner'
import LeftBanner from './LeftBanner'

const Home = () => {


  return (
    <section id="home"className='w-full pb-10 pt-20 flex items-center font-titleFont border-b-[1px] border-b-black'>
      <LeftBanner />
      <RightBanner />
    </section>  
  )
}

export default Home
