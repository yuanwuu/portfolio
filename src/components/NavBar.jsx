import {navList} from '../../data'
import logo from '../assets/logo.svg'
import {Link, useNavigate} from 'react-router-dom'
import { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx"
import {AnimatePresence, motion} from 'framer-motion'

const NavBar = () => {
  const [mobileView,setMobileView] = useState(false)
  const navigate = useNavigate()
  const menuVars = {
    initial:{
      scaleY:0,
    },
    animate:{
      scaleY:1,
      transition:{
        duration:0.7,
        // ease:[0.12, 0, 0.30, 0]
      }
    },
    exit:{
      scaleY:0,
      transition:{
        duration:0.7,
        // ease:[0.2, 1, 0.36, 1]
      }
    },
  }

  return (
    <div>
      {/* desktop view*/}
      <div id='nav' className='flex justify-between w-full mx-auto px-10 mt-4'> 
        <img src={logo} className='w-max-[100px] w-[70px] hidden cursor-pointer lg:flex' onClick={() => navigate('/')}/>
        
        <div id="nav-bar" className='hidden lg:flex'>
            <ul className='flex'>
            {navList.map((nav,idx)=>(
                <li className='text-md' key={idx}>
                    <Link to={nav.link} className='cursor-pointer px-2'>{nav.nav}</Link>
                </li>
            ))}
            </ul>
            <RxHamburgerMenu size={30} className='block md:hidden cursor-pointer text-black' onClick={() => setShowMobileMenu((prev) =>!prev)} />
        </div>
    
    </div>


      {/* mobile view */}
      <div id="mobileView" className='lg:hidden  bg-white '>
        <div className='flex justify-between'>
          <img src={logo} className='w-[50px]' />
          <RxHamburgerMenu size={30} onClick={() =>setMobileView(!mobileView)}/>
          </div>

        <div className='lg:hidden origin-top shadow-md rounded-xl w-full'>
          <AnimatePresence>
          {mobileView && (
            <motion.div 
            variants={menuVars}
            initial='initial'
            animate='animate'
            exit='exit'
            id="mobileNav" className='origin-top'>
            
              <ul className='pt-10'>
              {navList.map((nav,idx)=>(
                  <li key={idx} className='pb-10 flex justify-center'>
                      <Link to={nav.link} className='cursor-pointer' onClick={() => setMobileView(!mobileView)}>{nav.nav}</Link>
                  </li>
              ))}
              </ul>
              

            </motion.div>
          ) }
          </AnimatePresence>
        </div>
      </div>

      


    </div>
  )
}

export default NavBar