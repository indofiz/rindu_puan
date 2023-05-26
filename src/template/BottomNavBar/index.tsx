import pengajuan_icon from '../../assets/icon/ajukan.svg'

const BottomNavBar = () => {
  return (
    <div className='fixed z-40 border-t-2 border-gray-200 bottom-0 left-0 right-0 max-w-lg mx-auto bg-white'>
      <div className='relative px-6 py-5'>
        .
        <button className='w-[70px] aspect-square bg-white p-[2px] border border-primary absolute -top-6 rounded-full mx-auto left-0 right-0 shadow-pink'>
          <div className='w-full aspect-square bg-primary hover:bg-primary-hover rounded-full flex flex-col items-center justify-center'>
            <img src={pengajuan_icon} alt='' />
            <span className='text-[11px] text-white'>Ajukan</span>
          </div>
        </button>
      </div>
    </div>
  )
}

export default BottomNavBar
