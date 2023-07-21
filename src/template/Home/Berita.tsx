import { Link } from 'react-router-dom'
import ListBerita from '../../components/atoms/Home/Berita/ListBerita'
import { useRecoilValue } from 'recoil'
import { articleListState } from '../../recoil/api/apiArticle'
import { ArticleFace } from '../../recoil/types/article'

const Berita = () => {
  const article = useRecoilValue(articleListState)

  const mapArticle =
    article && article.length
      ? article
          .slice(0, 8)
          .map((item: ArticleFace, index: number) => (
            <ListBerita key={item.id} item={item} index={index} />
          ))
      : null

  return (
    <div className='mt-24 px-6 md:container md:mx-auto md:mt-40'>
      <h3 className='md:hidden font-semibold text-xl text-black text-center'>
        Berita <span className='text-primary'>Terbaru</span>
      </h3>
      <div className='hidden md:flex md:justify-between md:items-center'>
        <div className='flex flex-col'>
          <span className='tracking-[0.6rem] text-primary'>NEWS</span>
          <h3 className='text-3xl font-semibold text-black'>ARTIKEL TERBARU</h3>
        </div>
        <Link
          to={'/artikel'}
          className='py-2 px-4 border border-primary text-sm text-primary rounded-md hover:bg-primary/10'
        >
          Lihat Semua
        </Link>
      </div>
      <div className='mt-6 flex flex-col md:grid md:grid-cols-12 md:gap-6 md:mt-16'>
        {mapArticle}
      </div>
    </div>
  )
}

export default Berita
