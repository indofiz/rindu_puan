import React from 'react'
import { useRef, useState } from 'react'
// import BottomNavBar from "../template/BottomNavBar";
// import Footer from "../template/Footer";
// import AlurPengaduan from "../template/Home/AlurPengaduan";
// import Berita from "../template/Home/Berita";
// import Hero from "../template/Home/Hero";
// import Info from "../template/Home/Info";
// import Navbar from "../template/Home/Navbar";
// import Tentang from "../template/Home/Tentang";
const BottomNavBar = React.lazy(() => import('../template/BottomNavBar'))
const Footer = React.lazy(() => import('../template/Footer'))
const AlurPengaduan = React.lazy(() => import('../template/Home/AlurPengaduan'))
const Berita = React.lazy(() => import('../template/Home/Berita'))
const Hero = React.lazy(() => import('../template/Home/Hero'))
const Info = React.lazy(() => import('../template/Home/Info'))
const Navbar = React.lazy(() => import('../template/Home/Navbar'))
const Tentang = React.lazy(() => import('../template/Home/Tentang'))
const WaFloat = React.lazy(() => import('../components/atoms/WaFloat'))

const Home = () => {
  const [isSidebar, setisSidebar] = useState<boolean>(false)
  const tentangRef = useRef<HTMLDivElement>(null)
  const alurRef = useRef<HTMLDivElement>(null)
  const artikelRef = useRef<HTMLDivElement>(null)

  const scrollTentang = () => {
    if (tentangRef && tentangRef.current) {
      tentangRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setisSidebar(false)
    }
  }

  const scrollAlur = () => {
    if (alurRef && alurRef.current) {
      alurRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setisSidebar(false)
    }
  }
  const scrollArtikel = () => {
    if (artikelRef && artikelRef.current) {
      artikelRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setisSidebar(false)
    }
  }

  return (
    <div className='bg-cream'>
      <div className='bg-background mx-auto md:min-h-screen'>
        <BottomNavBar />
        <Navbar
          toTentang={scrollTentang}
          toAlur={scrollAlur}
          toArtikel={scrollArtikel}
          setisSidebar={setisSidebar}
          isSidebar={isSidebar}
        />
        <Hero />
        <Tentang ref={tentangRef} />
        <AlurPengaduan ref={alurRef} />
        <Berita ref={artikelRef} />
        <Info />
        <WaFloat />
        <Footer />
      </div>
    </div>
  )
}

export default Home
