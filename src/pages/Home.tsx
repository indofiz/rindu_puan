import BottomNavBar from '../template/BottomNavBar'
import Footer from '../template/Footer'
import AlurPengaduan from '../template/Home/AlurPengaduan'
import Berita from '../template/Home/Berita'
import Hero from '../template/Home/Hero'
import Info from '../template/Home/Info'
import Navbar from '../template/Home/Navbar'
import Tentang from '../template/Home/Tentang'

const Home = () => {
  return (
    <div className='bg-cream'>
      <div className='bg-background mx-auto md:min-h-screen'>
        <BottomNavBar />
        <Navbar />
        <Hero />
        <Tentang />
        <AlurPengaduan />
        <Berita />
        <Info />
        <Footer />
      </div>
    </div>
  )
}

export default Home
