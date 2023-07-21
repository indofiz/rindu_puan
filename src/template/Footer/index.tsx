import logo from '../../assets/images/logo.png'
import beribu from '../../assets/beribu_senyum.png'
import pgk from '../../assets/pgk.png'

import fb from '../../assets/icon/fb.svg'
import ig from '../../assets/icon/ig.svg'
import yt from '../../assets/icon/yt.svg'

const Footer = () => {
  return (
    <div className='mt-12 bg-primary pt-12 mb-16 md:mb-0 md:mt-28'>
      <div className='px-4 mb-8 text-white grid grid-cols-12 md:container md:mx-auto'>
        <div className='col-span-12 md:col-span-4'>
          <h5 className='text-5xl font_bebas text-center md:text-left'>
            RINDU PUAN
          </h5>
          <p className='font-thin px-5 mt-3 text-center md:text-left md:px-0'>
            Dinas perlindungan anak dan perempuan melindungi hak-hak perempuan
            dan anak dari kekerasan, serta bekerja sama dengan pihak lain untuk
            menciptakan lingkungan yang aman.
          </p>
        </div>
        <div className='col-span-12 md:col-span-4'>
          <div className='bg-white mt-6 rounded-2xl flex gap-2 md:gap-4 flex-wrap justify-center px-5 py-5 mx-4'>
            <img className='h-14 md:h-16' src={logo} alt='' />
            <img className='h-12' src={beribu} alt='' />
            <img className='h-12' src={pgk} alt='' />
          </div>
        </div>
        <div className='mt-6 col-span-12 md:col-span-4 md:pl-16'>
          <h4 className='text-xl font-medium text-center md:text-left'>
            IKUTI KAMI :
          </h4>
          <div className='flex justify-center md:justify-start gap-3 md:gap-6 mt-4'>
            <img src={fb} alt='' />
            <img src={ig} alt='' />
            <img src={yt} alt='' />
          </div>
        </div>
      </div>
      <div className='bg-black text-white py-5 px-8 text-center'>
        &copy; Copyright {new Date().getFullYear()} DPPPAKB Kota Pangkalpinang -
        All Rights Reserved
      </div>
    </div>
  )
}

export default Footer
