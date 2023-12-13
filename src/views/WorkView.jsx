import {work} from '../../data'
import { BsArrowReturnRight } from "react-icons/bs"
import {Link, useNavigate } from 'react-router-dom'


const Work = () => {
  let navigate = useNavigate()

  return (
    <div id='work' className='h-auto w-full'>
      
      <div id="subtitle" className='flex justify-between'>
        <div className='flex items-center'>
        <div className="w-[5px] h-[5px] rounded-full bg-gray-800 mr-1" id="circle"></div>
          <p>SELECTED WORK</p>
        </div>
          

          <div className='flex justify-end items-center' >
          <BsArrowReturnRight size={12} className='mr-1'/>
          <p className='text-sm hover:border-b cursor-pointer duration-300 ease-in border-black' onClick={() => navigate('/work')}>SEE ALL</p>
        </div>
      </div>
        
        
      
     

      
      <div id="work-card" className="grid grid-cols-1 sm:grid-cols-2 ">
      {
        work.map((item,idx)=>(
          <Link to={`/work/${item.title}`}>
          <div className='flex flex-col px-3 py-6' key={idx}>
            <div id="case-img" className='overflow-clip'>
              <img src={item.img} alt="" className='w-full hover:scale-125 transition duration-[2100ms] ease-in-out object-cover'/>
            </div>
            <div className="flex justify-between py-3 ">
              <div >
                <div>{item.subtitle}</div>
              </div>
              <div className='flex items-center'>
                <span id="category">{item.category}</span> <div className='m-[6px] w-[6px] h-[6px] rounded-full bg-gray-400'></div>
                <span id="year" className='text-gray-400'>{item.year}</span>
              </div>
            </div>
          </div>
          </Link>
        ))
      }
      
    </div>
    </div>
   
  )
}

export default Work