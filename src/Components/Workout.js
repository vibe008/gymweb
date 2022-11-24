import React from 'react'

import { workouts } from '../Data/Data.js'

import { Swiper, SwiperSlide } from 'swiper/react';
import '../Components/Workout.css'
import { Navigation } from 'swiper';
function Workout() {
    const { programs } = workouts;
    return (
        <Swiper slidesPerView={2}
            spaceBetween={32}
            navigation={true}
            
            breakpoints={{
                // 400 : {
                //     slidesPerView: 2,
                // },
                768: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 4,
                },
            }}
            modules={[Navigation]}
            className='workoutSlider '>
            {programs.map((program, idx) => {
                const {img , name} = program
                return (
                    <SwiperSlide key={idx} className="max-w-[343px] max-h-[320px] relative bg-purple-400">
                            <img className='object-cover h-full w-full ' src={img} alt="" />
                            <div className="absolute left-[20px] bottom-[20px] bg-white h-[26px] px-[14px] flex items-center justify-center rounded-[1px]">
                                <div className="font-primary font-semibold text-sm text-neutral-500">
                                    {name}
                                </div>
                            </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}

export default Workout
