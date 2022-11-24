import React, { useState } from 'react'
import { FaChevronCircleUp, FaChevronCircleDown } from 'react-icons/fa';

function Accordian({ accordions }) {
    const [isopen, setIsopen] = useState(false)
    const { question, answer } = accordions;
    return (
        <div onClick={() => setIsopen(!isopen)} className='cursor-pointer '>
            <div className='bg-white border rounded-sm '>
                <div className='min-h-[68px] flex items-center justify-between px-[30px]'>
                    <h6 className=' text-[18px] leading-[28px] font-bold'>{question} </h6>
                    <div>{isopen ? (<FaChevronCircleUp className='text-[20px] text-black' />) : (<FaChevronCircleDown className='text-[20px] text-black' />)}
                    </div>
                </div>
                <div className={`${isopen ? "min-h-[200px] lg:min-h-[120px]  " : " min-h-0"} max-h-0  overflow-hidden flex justify-center transition-all px-[30px]`}>
                    <div className='mt-6'>{answer}</div>
                </div>
            </div>
        </div>
    )
}

export default Accordian
