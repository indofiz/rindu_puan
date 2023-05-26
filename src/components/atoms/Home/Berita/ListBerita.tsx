const ListBerita = () => {
  return (
    <div className='py-4 flex gap-5 justify-start border-b-2 border-gray-200'>
      <div className='w-20 text-center'>
        <span className='text-2xl relative font-semibold z-10  flex justify-center items-center flex-col-reverse before:relative before:-z-10 before:-mt-5 before:bg-secondary before:w-6 before:aspect-square before:rounded-full'>
          1
        </span>
      </div>
      <div className='flex flex-col gap-1'>
        <span className='tracking-[0.15rem] text-sm'>23 Maret 2023</span>
        <h4 className='text-md font-medium text-text'>
          Lorem ipsum dolor sit amet consectetur. Nunc eleifend euismod.
        </h4>
      </div>
      <img
        src='/post/1.png'
        className='rounded-2xl w-32 aspect-square'
        alt=''
      />
    </div>
  )
}

export default ListBerita
