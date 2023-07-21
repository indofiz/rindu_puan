import icon from '../../../../assets/icon/tentang/tentang.png'
import { KekerasanFace } from '../../../../recoil/types/kekerasan'

interface ListAboutFace {
  item: KekerasanFace
}

const ListAbout: React.FC<ListAboutFace> = ({ item }) => {
  return (
    <div className='py-2 px-3 md:py-5 md:px-8 flex gap-5 items-center cursor-pointer border bg-white border-stone-200 rounded-lg bg-tentang-mask bg-topRight1 bg-no-repeat md:bg-[length:90%_120px]'>
      <img src={icon} className='w-12 md:w-16' alt='' />
      <h3 className='text-text text-lg md:text-xl font-semibold capitalize'>
        {item?.kategori}
      </h3>
    </div>
  )
}

export default ListAbout
