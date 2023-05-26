import logo from '../../assets/images/logo.png'
import beribu from '../../assets/beribu_senyum.png'
import pgk from '../../assets/pgk.png'

import fb from '../../assets/icon/fb.svg'
import ig from '../../assets/icon/ig.svg'
import yt from '../../assets/icon/yt.svg'

const Footer = () => {
  return (
    <div className='text-center mt-12 bg-primary pt-12 mb-16'>
      <div className='px-4 mb-8 text-white'>
        <h5 className='text-5xl font_bebas'>RINDU PUAN</h5>
        <p className='font-thin px-5 mt-3'>
          Dinas perlindungan anak dan perempuan melindungi hak-hak perempuan dan
          anak dari kekerasan, serta bekerja sama dengan pihak lain untuk
          menciptakan lingkungan yang aman.
        </p>
        <div className='bg-white mt-6 rounded-2xl flex gap-2 justify-between px-5 py-5 mx-4'>
          <img className='h-12' src={logo} alt='' />
          <img className='h-12' src={beribu} alt='' />
          <img className='h-12' src={pgk} alt='' />
        </div>
        <div className='mt-6'>
          <h4 className='text-xl font-medium'>IKUTI KAMI :</h4>
          <div className='flex justify-center gap-3 mt-4'>
            <img src={fb} alt='' />
            <img src={ig} alt='' />
            <img src={yt} alt='' />
          </div>
        </div>
      </div>
      <div className='bg-black text-white py-5'>
        &copy; Copyright {new Date().getFullYear()} DPPPAKB Kota Pangkalpinang -
        All Rights Reserved
      </div>
    </div>
  )
}

export default Footer
