import Hero from '../views/HomeView'
import Work from '../views/WorkView'
import About from '../views/AboutView'
// import Contact from '../views/ContactView'

const Home = () => {
  return (
    <div id="home" className='flex flex-col'>
        <Hero />
        <Work />
        <About />
        {/* <Contact /> */}
    </div>
  )
}

export default Home