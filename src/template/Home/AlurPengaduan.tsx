import List from '../../components/atoms/Home/AlurPengaduan/List'

const AlurPengaduan = () => {
  return (
    <div className='mt-7 bg-primary px-6 py-6'>
      <h3 className='text-xl font-medium text-white'>Alur Pengaduan</h3>
      <div className='flex flex-col gap-3 mt-4 -mb-20'>
        <List />
        <List />
        <List />
      </div>
    </div>
  )
}

export default AlurPengaduan
