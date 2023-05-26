import logo from '../../assets/logo.png'
import Button from '../../components/atoms/Button'

const Info = () => {
  return (
    <div className='mx-6 mt-12'>
      <div className='bg-primary px-6 py-4 flex gap-4 items-center rounded-xl'>
        <img src={logo} className='w-28' alt='' />
        <div className='flex flex-col justify-start gap-2'>
          <h4 className='text-white'>
            DINAS PEMBERDAYAAN PEREMPUAN, PERLINDUNGAN ANAK KOTA PANGKALPINANG
            MEMBERIKAN RUANG INFORMASI PERLINDUNGAN TERHADAP WANITA DAN ANAK
          </h4>
          <div>
            <Button
              label='Ajukan Perlindungan'
              to='/pengajuan'
              isLink
              variant='noBorder'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info
