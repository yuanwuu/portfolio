import { Link } from 'react-router-dom'
import {work} from '../../data'

const WorkIndex = () => {
  
  return (
    <div id="work-card" className="flex flex-col mt-[50px]">
      {
        work.map((item,idx)=>(
          
          <div className='flex flex-col px-3 py-6' key={idx}>
            <Link to={`/work/${item.title}`}>
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
            </Link>
          </div>
          
        ))
      }
      
    </div>
  )
}

export default WorkIndex