import {Link} from '@react-email/link'

const Contact = () => {
  return (
    <div className='h-[500px] bg-gray-200 flex flex-col items-center justify-center gap-4'>
      <p>LET'S CREATE SOMETHING TOGETHER</p>
      <Link href="test@test.com">test@test.com</Link>
    </div>
  )
}

export default Contact