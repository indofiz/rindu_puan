import ListBerita from '../../components/atoms/Home/Berita/ListBerita'

const Berita = () => {
  return (
    <div className='mt-24 px-6'>
      <h3 className='font-semibold text-xl text-black text-center'>
        Berita <span className='text-primary'>Terbaru</span>
      </h3>
      <div className='mt-6 flex flex-col'>
        <ListBerita />
        <ListBerita />
        <ListBerita />
        <ListBerita />
        <ListBerita />
      </div>
    </div>
  )
}

export default Berita
