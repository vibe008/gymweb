import React from 'react'
import bg from '../images/background.jpg'

// import AOS from 'aos';
// import 'aos/dist/aos.css';


function Home() {

  return (
    <>

<section className=" h-full relative ">
<div className=" mx-auto h-[100vh]" >
  <div className="flex items-center h-full  " >
    <div className="text-black flex-1  z-20" data-aos="fade-right" >
      <h1 className="text-[40px]  font-extrabold   my-3 mx-3"  >
        Transform <br />
        <span className='text-primary-200 my-3  leading-3' data-aos="fade-up"    data-aos-delay="300">Your Body Now</span>
      </h1>
    </div>
  <div className="bg-purple-50 w-2/3 h-[60vh] -space-x-20 " data-aos="fade-left">
    <img className='h-full w-full object-cover'   src={bg} alt="" />
  </div>
  </div>
</div>


</section>



</>
  )
}

export default Home
