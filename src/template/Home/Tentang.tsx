import { MouseEvent } from 'react'
import ListAbout from '../../components/atoms/Home/Tentang/List'

const Tentang = () => {
  const handleDrag = (e: MouseEvent) => {
    // console.log(e)
  }
  return (
    <div className='mt-8 px-6'>
      <div className='flex flex-col'>
        <h2 className='font-medium text-xl mb-2 text-black'>Tentang</h2>
        <p className='text-text text-sm mr-12'>
          Solusi perlindungan kekerasan kepada anak dan perempuan di kota
          pangkalpinang. Ajukan jika anda mendapatkan kekerasan ini
        </p>
      </div>
      <div
        className='w-full overflow-x-auto py-3 scrollbar-thin scrollbar-thumb-primary scrollbar-track-primary/10'
        onWheel={handleDrag}
      >
        <div className='mt-5 min-w-[600px] grid grid-cols-2 gap-4'>
          <ListAbout />
          <ListAbout />
          <ListAbout />
          <ListAbout />
        </div>
      </div>
    </div>
  )
}

export default Tentang
