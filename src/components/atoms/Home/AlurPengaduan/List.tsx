import icon from '../../../../assets/icon/alur_pengaduan/alur.png'

const List = () => {
  return (
    <div className='flex items-center gap-8 md:gap-4 md:items-start bg-white border border-pink-500 rounded-lg py-3 px-6 md:py-5 md:shadow'>
      <img src={icon} alt='' className='w-17 md:w-12 aspect-square' />
      <div className='flex flex-col gap-2'>
        <h4 className='text-lg md:text-xl md:font-semibold font-medium text-primary'>
          Ajukan Perlindungan
        </h4>
        <p className='text-sm text-text md:text-base'>
          Mengisi formulir online untuk melakukan pengajuan perlindungan
          kekerasan kepada perempuan dan anak.
        </p>
      </div>
    </div>
  )
}

export default List
