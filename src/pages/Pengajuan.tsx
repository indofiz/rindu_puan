import React, { useEffect } from 'react'
// import Footer from '../template/Footer'
// import Header from '../template/Pengajuan/Header'
// import StepperPengajuan from '../template/Pengajuan/StepperPengajuan'

const Footer = React.lazy(() => import('../template/Footer'))
const Header = React.lazy(() => import('../template/Pengajuan/Header'))
const StepperPengajuan = React.lazy(
  () => import('../template/Pengajuan/StepperPengajuan')
)

const Pengajuan = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])

  return (
    <div className='bg-cream'>
      <div className='bg-background mx-auto md:min-h-screen'>
        <Header />
        <StepperPengajuan />
        <Footer />
      </div>
    </div>
  )
}

export default Pengajuan
