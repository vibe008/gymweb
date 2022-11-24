import React from 'react'
import {faq} from '../Data/Data.js'
import Accordian from './Accordian.js';

function Faq() {
    const {  title, accordions } = faq;
  return (
    <section className='   pt-[480px] mb-[80px] pb-[80px] ' >
      <div className=" max-w-[758px] mx-auto lg:h-[1160px] ">
     <div className="flex items-center  mb-[50px] lg:mb-[80px] justify-start lg:justify-center -space-x-4 lg:max-w-[540px] mx-auto px-4 lg:px-0">
    <h2 className='text-[32px] leading-[40px] lg:text-[50px] lg:leading-[50px] font-extrabold '>{title}</h2>
     </div>
     <div className="bg-black">
        {accordions.map((accordions , idx )=>{
          return(<Accordian key={idx} accordions={accordions}/>
          )  
        })}
     </div>
        
      </div>
    </section>
  )
}

export default Faq
