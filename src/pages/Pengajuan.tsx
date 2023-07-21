import Footer from '../template/Footer'
import Header from '../template/Pengajuan/Header'
import StepperPengajuan from '../template/Pengajuan/StepperPengajuan'

const Pengajuan = () => {
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
