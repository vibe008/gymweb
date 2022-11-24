import React from 'react'
import {workouts}  from '../Data/Data.js'
import Workout from '../Components/Workout'

function Workoutcon() {
    const {title} = workouts
  return (
    <section className=' pb-[80px] md:pb-[110px] lg:pb-[180px] '>
        <div className=" flex items-center justify-center -space-x-20 mb-[50px] lg:mb-[80px] max-w-[540px] mx-auto px-4 lg:px-0"         data-aos='fade-up'
        data-aos-delay='200'>
            <h2 className='flex -space-x-4 text-[32px] leading-[40px] lg:text-[50px] lg:leading-[50px] font-extrabold'>{title}</h2>
        </div>
        <div data-aos='fade-up' data-aos-delay='300'>
     <Workout/>
        </div>
    </section>
  )
}

export default Workoutcon
