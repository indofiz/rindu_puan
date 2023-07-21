import { format } from 'date-fns'
import { ArticleFace } from '../../../../recoil/types/article'
import { Link } from 'react-router-dom'

interface ListBeritaFace {
  item: ArticleFace
  index: number
}

const ListBerita: React.FC<ListBeritaFace> = ({ item, index }) => {
  return (
    <div className='py-4 md:p-4 md:pb-8 flex md:flex-col gap-5 justify-start md:col-span-3 border-b-2 border-gray-200 md:border md:border-gray-200 md:shadow md:bg-white md:hover:bg-white/80 md:hover:shadow-none md:rounded-2xl md:relative'>
      <div className='w-9 aspect-square text-center md:absolute md:top-6 md:left-6'>
        <span className='text-2xl md:text-xl md:text-white relative md:bg-secondary md:rounded-full aspect-auto w-full h-full font-semibold z-10 flex justify-center items-center flex-col-reverse before:relative before:-z-10 before:-mt-5 before:bg-secondary md:before:hidden before:w-6 before:aspect-square before:rounded-full'>
          {index + 1}
        </span>
      </div>
      <div className='flex flex-col gap-1 md:order-last'>
        <span className='tracking-[0.15rem] text-sm md:text-xs md:tracking-[0.16rem]'>
          {format(new Date(item?.tanggal), 'dd MMM yyyy')}
        </span>
        <Link
          to={`/artikel/${item?.id}/${item?.slug}`}
          className='text-md font-medium md:font-semibold text-text cursor-pointer after:w-full after:h-full after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0'
        >
          {item?.judul}
        </Link>
      </div>
      <img
        src={item?.gambar}
        className='rounded-2xl md:rounded-xl w-32 md:w-full max-h-52 object-cover'
        alt=''
      />
    </div>
  )
}

export default ListBerita
