import {Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar.jsx'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import WorkIndex from './pages/WorkIndex'
import WorkDetail from './pages/WorkDetail.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
  
  return (
    <div className='mx-auto px-5 w-full lg:flex flex-col
    lg:px-[200px] grid grid-cols-1 gap-[20px]'>
      <NavBar />
      <Routes>
        <Route path='*' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/work' element={<WorkIndex />} />
        <Route path='/work/:title' element={<WorkDetail/>} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App