import React from 'react'
import { community } from '../Data/Data.js';

import 'swiper/css';
import 'swiper/css/navigation';
import InnerSlide from './InnerSlide';


function Slider() {
    const { title, testimonials } = community;
  return (
    <section className='pb-[80px] md:pb-[110px] lg:pb-[180px] relative'>
      <div className='container mx-auto'>
        <div className='flex'>
     
          <div
            className='flex items-center justify-center  mb-[50px] lg:mb-[80px] max-w-[340px] px-4 lg:px-0 lg:ml-0 mx-auto '
            data-aos='fade-up'
            data-aos-offset='200'
            data-aos-delay='200'
          >
            <img src='' alt='' />
            <h2 className=' flex  -space-x-4 text-neutral-500 text-[32px] leading-[40px] lg:text-[50px] lg:leading-[50px] font-extrabold'>{title}
              <span className='text-primary-200'>.</span>
            </h2>
          </div>
         
          <div
            className='absolute right-2  bottom-6 w-[1140px] top-48 lg:top-0'
            data-aos='fade-left'
            data-aos-offset='200'
            data-aos-delay='300'
          >
            <InnerSlide testimonials={testimonials}/>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Slider
