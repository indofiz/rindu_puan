import { useRecoilValue } from 'recoil'
import { articleListState } from '../recoil/api/apiArticle'
import { ArticleFace } from '../recoil/types/article'
import ListBerita from '../components/atoms/Home/Berita/ListBerita'
import Header from '../template/Pengajuan/Header'
import Footer from '../template/Footer'

const ListArticle = () => {
  const article = useRecoilValue(articleListState)

  const mapArticle =
    article && article.length
      ? article.map((item: ArticleFace, index: number) => (
          <ListBerita key={item.id} item={item} index={index} />
        ))
      : null
  return (
    <div className='bg-cream'>
      <div className='bg-background mx-auto min-h-screen md:min-h-screen'>
        <Header />
        <div className='flex px-8 justify-between items-center mt-12'>
          <div className='flex flex-col justify-center items-center mx-auto'>
            <span className='tracking-[0.6rem] text-primary'>NEWS</span>
            <h3 className='text-3xl font-semibold text-black'>
              ARTIKEL TERBARU
            </h3>
          </div>
        </div>
        <div className='mt-6 mx-8 flex flex-col md:grid md:grid-cols-12 md:gap-6 md:mt-16'>
          {mapArticle}
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default ListArticle