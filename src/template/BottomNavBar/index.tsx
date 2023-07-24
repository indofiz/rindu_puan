import { Link } from 'react-router-dom'
import pengajuan_icon from '../../assets/icon/ajukan.svg'
import { Home, Phone } from 'lucide-react'
import { useRecoilValue } from 'recoil'
import { konfigState } from '../../recoil/api/apiKonfigursi'
import { phoneNumber } from '../../utils/phoneNumber'

const BottomNavBar = () => {
  const konfigurasi = useRecoilValue(konfigState)

  const phone = phoneNumber(konfigurasi.nomor_kontak)

  return (
    <div className='fixed z-40 md:hidden border-t-2 border-gray-200 bottom-0 left-0 right-0 max-w-lg mx-auto bg-white'>
      <div className='relative flex justify-between px-12 py-5'>
        <div className='flex flex-col items-center justify-center text-primary  gap-1'>
          <Home />
          <span className='text-sm text-primary'>Beranda</span>
        </div>
        <div className='flex flex-col items-center justify-center gap-1 text-gray-400'>
          <Phone />
          <a
            href={'https://wa.me/' + phone}
            className='text-sm text-gray-400'
            target='_blank'
            rel='noopener noreferrer'
          >
            Whatsapp
          </a>
        </div>
        <button className='w-[70px] aspect-square bg-white p-[2px] border border-primary absolute -top-6 rounded-full mx-auto left-0 right-0 shadow-pink'>
          <div className='w-full aspect-square bg-primary hover:bg-primary-hover rounded-full flex flex-col items-center justify-center'>
            <img src={pengajuan_icon} alt='' />
            <Link className='text-[11px] text-white' to={'/pengajuan'}>
              Ajukan
            </Link>
          </div>
        </button>
      </div>
    </div>
  )
}

export default BottomNavBar
