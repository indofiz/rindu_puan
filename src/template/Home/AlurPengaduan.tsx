import React from 'react'
import List from '../../components/atoms/Home/AlurPengaduan/List'

interface Number {
  label: number
}

const Number = (props: Number) => {
  return (
    <div className='w-10 relative bg-primary z-10 aspect-square grid place-items-center border border-white rounded-full'>
      <span className='w-8 rounded-full font-semibold grid place-content-center bg-white aspect-square'>
        {props.label}
      </span>
    </div>
  )
}

const AlurPengaduan = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div className='md:container md:mx-auto md:px-4 lg:px-12' ref={ref}>
      <div className='mt-7 bg-primary px-6 py-6 md:mt-24 md:pt-10 md:px-10 md:rounded-3xl'>
        <h3 className='text-xl text-center font-medium text-white md:text-3xl md:uppercase'>
          Alur Pengaduan
        </h3>
        <div className='hidden md:flex justify-around mt-6 relative'>
          <div className='absolute top-[calc(50%-1px)] left-3 mx-auto right-3 h-[2px] w-[calc(100%-(100%/3))] bg-white'></div>
          <Number label={1} />
          <Number label={2} />
          <Number label={3} />
        </div>
        <div className='flex flex-col gap-3 mt-6 md:mt-4 -mb-20 md:flex-row'>
          <List
            image={'/pengajuan/pengajuan.png'}
            title='Ajukan Pengaduan'
            desc='Mengisi formulir online untuk melakukan pengajuan perlindungan kekerasan kepada perempuan dan anak.'
          />
          <List
            image={'/pengajuan/lokasi.png'}
            title='Kelokasi Kejadian'
            desc='Petugas dari dinas pemberdayaan perempuan dan anak kota pangkalinang melakukan cepat tanggap terhadap pengajuan perlindungan yang masuk dan langsung turun ke lokasi kejadian.'
          />
          <List
            image={'/pengajuan/evaluasi.png'}
            title='Melakukan Evaluasi'
            desc='Petugas akan memberikan beberapa pertanyaan kepada korban guna menggali informasi. Dan dalam melakukan identifikasi petugas akan berkoordinasi dengan beberapa bidang terkait dan mitra.'
          />
        </div>
      </div>
    </div>
  )
})

export default AlurPengaduan
