import { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import ListBerita from '../components/atoms/Home/Berita/ListBerita'
import { articleLength, perPage, slicedArticle } from '../recoil/api/apiArticle'
import { ArticleFace } from '../recoil/types/article'
import Footer from '../template/Footer'
import Header from '../template/Pengajuan/Header'
import Pagination from '../template/Article/Pagination'
import no_data from '../assets/images/no-data.png'

const ListArticle = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])

  const article = useRecoilValue(slicedArticle)
  const lengthArticle = useRecoilValue(articleLength)

  const perPages = useRecoilValue(perPage)

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
        <div className='mt-6 mx-8 md:container md:mx-auto md:px-8 flex flex-col md:grid md:grid-cols-12 md:gap-6 md:mt-16'>
          {mapArticle}
        </div>
        {lengthArticle == 0 ? (
          <div className='max-w-md md:container md:mx-auto mt-6 mx-8 flex justify-center items-center flex-col'>
            <img src={no_data} className='w-96' alt='' />
            <h3 className='text-primary font-semibold text-xl mb-2'>
              ARTIKEL BELUM ADA
            </h3>
            <p className='max-w-md text-center text-gray-500'>
              Mohon maaf belum ada artikel yang ditampilkan, silahkan gunakan
              menu lainnya.
            </p>
          </div>
        ) : null}
        {lengthArticle > perPages ? (
          <div>
            <Pagination listLength={lengthArticle} />
          </div>
        ) : null}
        <Footer />
      </div>
    </div>
  )
}

export default ListArticle
