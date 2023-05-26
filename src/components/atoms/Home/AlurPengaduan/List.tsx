import icon from '../../../../assets/icon/alur_pengaduan/alur.png'

const List = () => {
  return (
    <div className='flex items-center gap-8 bg-white border border-pink-500 rounded-lg py-3 px-6'>
      <img src={icon} alt='' className='w-17 aspect-square' />
      <div className='flex flex-col gap-1'>
        <h4 className='text-lg font-medium text-primary'>
          Ajukan Perlindungan
        </h4>
        <p className='text-sm'>
          Mengisi formulir online untuk melakukan pengajuan perlindungan
          kekerasan kepada perempuan dan anak.
        </p>
      </div>
    </div>
  )
}

export default List
