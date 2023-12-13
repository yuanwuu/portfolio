import {useState} from 'react'
import { BsArrowRightCircle } from "react-icons/bs"


const Hero = () => {

  return (
    <div id="hero" className='w-full h-screen grid grid-cols-1'>
      <div className="flex flex-col py-10 w-full justify-center">
        <div className="items-start flex mb-10">
          <h1 className='flex flex-col lg:text-[10rem] text-[4.5rem]'>
            Software <span className='text-gray-400 lg:pl-[75px] pl-10'>Engineer</span>
          </h1> 
        </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 items-end gap-4'>
        <div id="button" className="flex items-center rounded-full text-center lg:w-1/3 bg-black text-white border border-white hover:invert duration-700 sm:order-first order-last w-1/2">
          <BsArrowRightCircle size={30} className="m-3"/>
          <button className='text-sm sm:text-lg '>Get in touch</button>
        </div>

        <div>
         <p className='text-2xl text-gray-800'>I am a UX designer, a  Full Stack Devleoper and a Team Player! </p>   
        </div>

      </div>
      
      </div>
   
    </div>
  )
}

export default Hero