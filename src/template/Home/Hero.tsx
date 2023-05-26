import hero from '../../assets/images/hero_children_women.png'
import Button from '../../components/atoms/Button'

const Hero: React.FC = () => {
  return (
    <div className='mx-6 my-5'>
      <div className='px-4 py-4 rounded-lg bg-primary bg-gradient-to-br from-primary to-primary-hover'>
        <div className='flex justify-between gap-4'>
          <div className='flex flex-col text-white justify-center'>
            <div className='font-thin uppercase text-10 tracking-normal sm:tracking-widest'>
              Aplikasi Perlindungan Perempuan & Anak
            </div>
            <h1 className='font_bebas text-4xl sm:text-6xl'>RINDU PUAN</h1>
            <p className='text-xs'>
              Kami Memberikan Perlindungan Kepada Perempuan dan Anak, Solusi
              perlindungan kekerasan kepada anak dan perempuan di kota
              pangkalpinang.
            </p>
            <div className='mt-4'>
              <Button
                label='Ajukan Perlindungan'
                to='/pengajuan'
                isLink
                variant='noBorder'
              />
            </div>
          </div>
          <img src={hero} className='rounded-xl w-40 object-cover' />
        </div>
      </div>
    </div>
  )
}

export default Hero
