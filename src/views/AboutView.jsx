import { BsArrowReturnRight,BsArrowRightCircle } from "react-icons/bs"
import { useNavigate } from "react-router-dom"

const About = () => {
  let navigate = useNavigate()
  

  return (
    <div id='about' className="lg:flex flex-col w-full h-screen grid grid-cols-1 lg:h-auto lg:my-[100px]">
      <div id="subtitle" className='w-full flex justify-between p-4 ' >
        <div className='flex items-center'>
          <div className="w-[5px] h-[5px] rounded-full bg-gray-800 mr-1 " id="circle"></div>
          <p className="text-[4.5rem] lg:text-lg">ABOUT <span className="text-gray-500 pl-10 lg:pl-0">ME</span></p>
        </div>
        <div className="hidden lg:flex lg:items-center hover:border-b border-black">
          <BsArrowReturnRight size={12} className="mr-1 "/>
          <p onClick={() => navigate('/about')} className="cursor-pointer uppercase text-sm">learn more</p>
        </div>
      </div>

      <div id="content" className='grid grid-cols-1 gap-3 lg:pl-[400px]  lg:text-xl '>
        <p className='py-4'>
            As a skilled UX designer, I take great pride in my ability to create beautiful, user-friendly interfaces. My proficiency in front-end design, combined with my clean, efficient coding skills, enables me to deliver high-quality work that delights users. <span className="text-gray-400">My curiosity and passion for staying current with industry trends keep me continuously learning and improving. I am committed to delivering top-notch work and exceeding expectations in every project I take on.</span>
        </p> 
        <div id="button" className="w-1/2 h-[50px] flex items-center rounded-full text-center bg-black text-white border border-white hover:invert duration-700 lg:w-1/4 " 
        onClick={() => navigate('/contact')}>
          <BsArrowRightCircle size={30} className="m-3"/>
          <button className='text-md sm:text-lg'>Get in touch</button>
          
        </div>
        
      </div>

    </div>
  )
}

export default About