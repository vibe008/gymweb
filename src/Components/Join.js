import React from 'react'
import img from '../images/boxing.jpg'

function Join() {
  return (
    <section className='bg-black min-h-[537px]'>
      <div className="container mx-auto ">
        <div className="flex flex-col md:flex-row  md:items-center md:-space-y-12 -space-y-20">

            <div className="-mt-[80px] lg:w-[400px] max-w-[276px] md:max-w-[442px] lg:max-w-full ">
                <img className='w-full h-full' src={img} alt="" />
            </div>

            <div className="max-w-[320px] ml-[13px]">
                <h2 className='text-[40px] leading-[40px] font-extrabold text-white'>wanna join <span>&</span> have fun</h2>
                <p className= 'font-secondary font-normal text-[16px] leading-[26px] md:text-[20px] md:leading-[32px] text-white max-w-[348px] md:max-w-[470px] lg:max-w-[492px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit facilis praesentium incidunt eos sequi quae ad eligendi aut harum. </p>
                <button className='flex justify-center items-center rounded-[1px] bg-white text-black hover:bg-black hover:text-white transition font-primary font-bold uppercase text-[14px] leading-[18px] h-[46px] px-[40px] tracking-[1px]'> join now</button>
            </div>

        </div>
      </div>
    </section>
  )
}

export default Join
