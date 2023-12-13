import { Link } from 'react-scroll'



const Nav = ({children, to, offset = -50, mobileMneu = false}) => {
  const className = mobileMneu
  ? 'text-md text-black cursor-pointer hover:border-b-[2px] border-black text-center w-full'
  : 'lg:text-md flex items-bottom h-6 text-black cursor-pointer hover:border-b-[2px] border-black hover:bg-clip-text flex-col '
 
  
  return (

    <Link
    to={to}
    spy={true}
    smooth={true}
    offset={offset}
    duration={1000}
    className={className1}
    >{children}
    </Link>
      
  )
}

export default Nav