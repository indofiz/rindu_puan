interface ListPengajuanProps {
  image: string
  title: string
  desc: string
}
const List: React.FC<ListPengajuanProps> = ({ title, image, desc }) => {
  return (
    <div className='flex flex-1 items-center gap-4 md:gap-4 md:items-start bg-white border border-pink-500 rounded-lg py-3 px-6 md:py-5 md:shadow'>
      <img src={image} alt='' className='w-14 sm:w-17 md:w-14 aspect-square' />
      <div className='flex flex-col gap-2'>
        <h4 className='text-lg md:text-xl md:font-semibold font-medium text-primary'>
          {title}
        </h4>
        <p className='text-sm text-text md:text-base'>{desc}</p>
      </div>
    </div>
  )
}

export default List
