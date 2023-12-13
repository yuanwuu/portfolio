

const Contact = () => {
  return (
    <div className='w-full lg:pl-[150px] lg:pr-[150px]'>
    <p className='lg:text-[5rem] lg:font-medium pt-20 font-medium text-[2rem] flex justify-center'>Get in <span className='text-gray-500'> touch</span></p>
    <form action="https://formsubmit.co/wu.yuanf@gmail.com" method="POST" id="form" className=' grid-cols-1 grid'>
      <input required type="text" placeholder='name' className=' rounded-full p-4 border border-gray-300 m-3 focus:outline-none focus:bg-white '/>
      <input required type="email" placeholder='email' className=' rounded-full p-4 border border-gray-300 m-3 focus:outline-none focus:bg-white'/>
      <input required type="subject" placeholder='subject' className=' rounded-full p-4 border border-gray-300 m-3 focus:outline-none focus:bg-white'/>
      <textarea name="message" id="message" cols="30" rows="10" placeholder='message' className='rounded-[30px] p-4 border border-gray-300 m-3 focus:outline-none focus:bg-white'></textarea>
    <button className='rounded-full p-4 bg-black text-white text-xl w-full hover:invert lg:w-1/3' type="submit">Submit</button>
    </form>
    </div>
  )
}

export default Contact