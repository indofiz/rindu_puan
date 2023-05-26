import icon from '../../../../assets/icon/tentang/tentang.png'

const ListAbout = () => {
  return (
    <div className='py-2 px-3 flex gap-5 items-center cursor-pointer border bg-white border-stone-200 rounded-lg bg-tentang-mask bg-topRight1'>
      <img src={icon} className='w-12' alt='' />
      <h3 className='text-text text-lg font-semibold'>Kekerasan Fisik</h3>
    </div>
  )
}

export default ListAbout
