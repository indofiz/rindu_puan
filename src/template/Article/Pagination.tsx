import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { pageNumber, perPage } from '../../recoil/api/apiArticle'
import { cn } from '../../utils/classMerge'

interface IPagination {
  listLength: number
}

const Pagination: React.FC<IPagination> = ({ listLength }) => {
  const [numsArr, setNumsArr] = useState<number[]>([])
  const [pageNum, setPageNumber] = useRecoilState(pageNumber)
  const perPages = useRecoilValue(perPage)

  useEffect(() => {
    const paginationNums = () => {
      const max = Math.floor(listLength / perPages)
      let nums = []
      for (let i = 0; i <= max; i++) {
        nums.push(max - i)
      }
      setNumsArr(
        nums.sort((a, b) => {
          return a - b
        })
      )
    }
    paginationNums()
  }, [listLength])

  const nextPage = () => {
    if (pageNum < numsArr.length - 1) setPageNumber((prev) => prev + 1)
  }
  const prevPage = () => {
    if (pageNum !== 0) setPageNumber((prev) => prev - 1)
  }

  return (
    <div className='mt-12'>
      <nav aria-label='Page navigation' className=''>
        <ul className='flex items-center gap-2 justify-center -space-x-px h-10 text-base'>
          <li>
            <button
              disabled={pageNum == 0}
              onClick={prevPage}
              className='flex items-center disabled:opacity-40 disabled:cursor-not-allowed justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
            >
              <span className='sr-only'>Previous</span>
              <ArrowLeftIcon />
            </button>
          </li>
          {pageNum > 3 && <li>...</li>}
          {numsArr?.length
            ? numsArr?.map((num) => {
                if (num >= pageNum - 2 && num <= pageNum + 2) {
                  return (
                    <li key={num + 1}>
                      <button
                        onClick={() => setPageNumber(num)}
                        className={cn(
                          'flex items-center justify-center px-4 h-10 leading-tight   border ',
                          pageNum == num
                            ? 'bg-primary/80 text-white border-primary hover:bg-primary/90'
                            : 'bg-white text-gray-500 border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                        )}
                      >
                        {num + 1}
                      </button>
                    </li>
                  )
                }
              })
            : null}
          {pageNum < numsArr.length - 3 && <li>...</li>}
          <li>
            <button
              disabled={numsArr.length - 1 == pageNum}
              onClick={nextPage}
              className='flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
            >
              <span className='sr-only'>Next</span>
              <ArrowRightIcon />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Pagination
