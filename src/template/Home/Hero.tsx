import hero from '../../assets/images/hero_children_women.png'
import pgk from '../../assets/icon/pgk.png'
import pangkalpinang from '../../assets/icon/pangkalpinang.png'
import senyum from '../../assets/icon/senyum.png'
import Button from '../../components/atoms/Button'
import Gradient from '../../components/atoms/Gradient'

const Hero: React.FC = () => {
  return (
    <div className='mx-6 my-5 xl:mt-8 md:container md:mx-auto md:px-4 lg:px-12'>
      <div className='px-4 py-4 md:pt-12 md:px-12 md:pb-14 lg:px-28 rounded-lg md:rounded-3xl bg-primary bg-gradient-to-br from-primary to-primary-hover relative overflow-hidden'>
        <Gradient
          rotate='-rotate-45'
          className='absolute -bottom-24 -left-5 h-72 lg:h-96 opacity-70'
        />
        <Gradient
          rotate='rotate-45'
          className='absolute -top-40 -right-5 h-72 lg:h-96 opacity-70'
        />
        <div className='grid grid-cols-12 gap-2 md:gap-8 relative z-10'>
          <div className='col-span-7 flex flex-col text-white justify-center md:justify-end md:pr-10'>
            <div className='hidden sm:block font-thin uppercase text-10 md:text-lg tracking-tighter sm:tracking-widest'>
              Aplikasi Perlindungan Perempuan & Anak
            </div>
            <h1 className='font_bebas text-4xl sm:text-6xl md:text-8xl lg:text-9xl'>
              RINDU PUAN
            </h1>
            <p className='text-[10px] sm:text-12 tracking-tighter sm:tracking-wide md:text-lg lg:text-xl font-light md:leading-relaxed md:tracking-wider'>
              Kami Memberikan Perlindungan Kepada Perempuan dan Anak, Solusi
              perlindungan kekerasan kepada anak dan perempuan di kota
              pangkalpinang.
            </p>
          </div>
          <div className='mt-4 md:mt-0 order-last md:order-2 md:col-span-4 col-span-full w-full'>
            <Button
              label='Ajukan Pengaduan'
              to='/pengajuan'
              isLink
              variant='noBorder'
              className='flex items-center justify-center'
            />
          </div>
          <div className='col-span-5 h-full sm:h-auto row-span-1 flex items-center justify-center xl:max-w-md xl:ml-auto md:row-span-2 relative aspect-square'>
            <img
              src={pgk}
              className='hidden md:block absolute top-12 -right-12'
              alt=''
            />
            <img
              src={pangkalpinang}
              className='hidden md:block absolute top-24 -left-12'
              alt=''
            />
            <img
              src={senyum}
              className='hidden md:block absolute left-[calc(50%-60px)] -bottom-12'
              alt=''
            />
            <img
              src={hero}
              className='rounded-xl md:rounded-[40px] object-cover aspect-square w-full mt-auto'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
