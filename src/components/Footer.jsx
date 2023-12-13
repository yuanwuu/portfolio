import {navList} from '../../data'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
      <div id='footer' className='items-center gap-6 mt-10 lg:grid hidden grid-rows-1 '> 
        <div id="footer-nav" className='w-full flex justify-center '>
            <ul className='lg:flex justify-center '>
            {navList.map((nav,idx)=>(
                <li key={idx} className='p-2 hover:bg-slate-100 rounded-lg'>
                    <Link to={nav.link} className='cursor-pointer px-2'>{nav.nav}</Link>
                </li>
            ))}
            </ul>
            <div className='w-auto h-auto rounded-full border border-black absolute right-[15%] z-2 cursor-pointer'>
            </div>
        
        </div>
    
    </div>
  )
}

export default Footer