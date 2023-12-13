import {about,experience} from '../../data'


const About = () => {
  const openInNewWindow = (url) =>{
    window.open(url,'_blank','noreferrer')
  }
 
  return (
    <div id="wrapper" className='grid p-10 lg:grid-cols-1 gap-[100px] '>
      <div className='grid lg:grid-cols-2 gap-8'>
        <img src='' className='h-[500px] w-full border border-black' />
        <div id='about' className='flex flex-col justify-between'>
          <p className='text-[5rem] m-[20px]'>About <span className='text-gray-500'>Me</span></p>
          <div className=''>{about}</div>
        </div>
      </div>
      <div id="experience" className='grid grid-cols-1 gap-20 bg-gray-50 p-10'>
        {experience.map((item,idx) =>(
          <ul>
            <li key={idx} className='text-2xl font-bold mb-2'>{item.company}</li>
            <li>{item.role}</li>
            <li>{item.duration}</li>
            <li className='text-lg font-light text-gray-700'>{item.duties}</li>          
            </ul>
        ))}
      <button className='w-1/4 p-4 bg-black text-white rounded-full mt-5 hover:invert' onClick={() =>openInNewWindow('https://docs.google.com/document/d/18m_N-soIRILea0CLkfq6RNrlvjRWGPZJ/edit?usp=sharing&ouid=104267066064886657477&rtpof=true&sd=true')}>Resume</button>
      </div>
    </div>
  )
}

export default About