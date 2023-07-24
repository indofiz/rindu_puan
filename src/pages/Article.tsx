import { useParams } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { articleDetailQuery } from '../recoil/api/apiArticle'
// import Header from '../template/Pengajuan/Header'
// import Footer from '../template/Footer'
// import ArticleDetail from '../template/Article'
import React from 'react'

const Footer = React.lazy(() => import('../template/Footer'))
const ArticleDetail = React.lazy(() => import('../template/Article'))
const Header = React.lazy(() => import('../template/Pengajuan/Header'))

const Article = () => {
  const { articleId } = useParams()
  const article = useRecoilValue(articleDetailQuery({ id: articleId }))
  return (
    <div className='bg-cream'>
      <div className='bg-background mx-auto min-h-screen md:min-h-screen'>
        <Header />
        <ArticleDetail item={article} />
        <Footer />
      </div>
    </div>
  )
}

export default Article
