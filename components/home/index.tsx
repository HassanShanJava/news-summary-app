import React from 'react'
import Navbar from '@/components/home/navbar'
import Category from '@/components/home/category'

const HomePage = () => {
  return (
    <div className='w-full max-w-[1500px] mx-auto '>
        <Navbar/>
        <Category/>
    </div>
  )
}

export default HomePage