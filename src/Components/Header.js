import React  from 'react'
import logo from '../images/logo2.png'
import { useState } from 'react'

function Header() {
  const [ navbar , setNavbar] = useState (false)
  const [display , setDisplay ] = useState(false)

  const changebackground = ()=>{
    if(window.scrollY >= 100){
      setNavbar(true)
      setDisplay(false)
    }
    else{
    setNavbar(false)
    setDisplay(true)
    }
  }
  window.addEventListener( 'scroll' , changebackground)
  return (
    <header className= {` ${navbar ? "  bg-black text-white "  : "bg-transparent text-black"} py-7 z-10 w-full  fixed`}>
      <div className="flex justify-between w-[80%] mx-auto ">
      <div className=' '>
      <a href="/">
        <img className={`${display ? "block" : "hidden"} w-16`} src={logo} alt="" />
      </a>
      </div>

      <nav className=''>
        <ul className='   flex  items-center h-full  '>
            <li className='mx-2'>
                <a className='py-2' href="/">Home</a>
            </li>
            <li className='mx-2'>
                <a href="/">About</a>
            </li>
            <li className='mx-2'>
                <a href="/">Services</a>
            </li>
            <li className='mx-2'>
                <a href="/">Contact</a>
            </li>
        </ul>
      </nav>
      </div>
     
    </header>
  )
}

export default Header
