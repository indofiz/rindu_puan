import React from 'react'
import { ArticleFace } from '../../recoil/types/article'
import { format } from 'date-fns'
import { id } from 'date-fns/locale'

interface ArticleProps {
  item: ArticleFace
}

const ArticleDetail: React.FC<ArticleProps> = ({ item }) => {
  const tanggal = format(new Date(item.created_at), 'MMMM dd, yyyy', {
    locale: id
  })
  return (
    <div className='mt-12 px-1 md:px-4 md:container md:mx-auto'>
      <div className='bg-white py-6 md:py-12 px-2 rounded-lg md:shadow'>
        <div className='mb-2 text-center flex justify-center items-center gap-1 md:gap-2'>
          <span className='text-primary'>Rindu Puan</span>
          <span className='text-2xl text-gray-400'>&bull;</span>
          <span className='text-gray-500'>Published {tanggal.toString()}</span>
        </div>
        <h2 className='max-w-2xl mx-auto text-center text-2xl md:text-4xl font-semibold text-gray-800'>
          {item.judul}
        </h2>
        <div className='mt-8 md:mt-12 max-w-lg mx-auto'>
          <div className='w-full max-h-96 flex justify-center overflow-hidden'>
            <img src={item.gambar} className='object-cover' alt='' />
          </div>
          <p className='mt-4 md:mt-8 indent-8 px-2 md:px-0 text-justify text-gray-600'>
            {item.isi}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ArticleDetail
