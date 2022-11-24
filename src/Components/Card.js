import React, { useState } from 'react'
import { BsCheckCircleFill } from 'react-icons/bs';




function Card({ plans }) {

  const [index, setIndex] = useState(0);

  return (
    <section className=' flex flex-col lg:flex-row justify-center items-center max-w-[1200px] mx-auto gap-y-4'>
      {plans.map((plan, currentIndex) => {
        const { name, price, list, delay } = plan;
        return (
          <div key={currentIndex} onClick={() => setIndex(currentIndex)} className="w-full md:max-w-[620px] lg:max-w-[405px] rounded-sm px-4 lg:min-h-[550px] ">
            <div className={`${currentIndex === index ? "bg-black text-white" : "bg-white text-black"} flex justify-center items-center py-[40px] px-[30px] lg:min-h-[550px] transition duration-100 `}>
              <div className="flex flex-row lg:flex-col gap-x-8 gap-y-8 lg:gap-x-0 items-center">


                <div className="boxone">

                  <div className={`${currentIndex === index ? "bg-white text-black opacity-100 " : "bg-black text-white opacity-5"}h-[26px]  font-primary text-sm font-semibold max-w-min mx-auto px-[14px] flex items-center justify-center mb-8  `}>
                    {name}
                  </div>

                  <div className="flex flex-col justify-center items-center text-center text-[40px] lg:text-[50px] font-primary font-extrabold ">
                    <div className="leading-none">
                      <span className='tracking-[0.1px]'> {price}</span>
                      <span className='text-[30px] font-extrabold'>$</span>
                    </div>
                    <span className='text-sm font-medium'>/month</span>

                  </div>
                </div>

                <div className="boxtwo">
                  <ul className='flex flex-col gap-y-4 mb-8'>
                    {list.map((item, idx) => {
                      return (
                        <li key={idx} className="flex items-center gap-x-10">
                          <div>
                            <BsCheckCircleFill className='text-lg' />
                          </div>
                          <div>{item.name}</div>
                        </li>
                      )
                    })}
                  </ul>
                  <button className={`${currentIndex === index ? "bg-white text-black" : "border border-black"} flex justify-center items-center rounded-[1px] font-primary font-bold uppercase text-[14px] leading-[18px] h-[46px] px-[40px] tracking-[1px] lg:mx-auto`}>
                    join now
                  </button>
                </div>



              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default Card
