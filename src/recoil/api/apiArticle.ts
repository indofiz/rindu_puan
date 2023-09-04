import { atom, selector, selectorFamily } from 'recoil'
import axios from 'axios'
import { getArticleApiUrl, getArticleDetailApiUrl } from './baseUrl'
import { ApiArticleFace } from '../types/article'

export const articleQuery = selectorFamily({
  key: 'articleQuery',
  get: (params: any) => async () => {
    const articleApiUrl = getArticleApiUrl(params)
    try {
      const response = await axios.get<ApiArticleFace>(articleApiUrl)
      return response.data.data || []
    } catch (error: any) {
      throw error.message
    }
  }
})

export const articleDetailQuery = selectorFamily({
  key: 'articleDetailQuery',
  get: (params: any) => async () => {
    const articleDetailApiUrl = getArticleDetailApiUrl(params)
    try {
      const response = await axios.get<any>(articleDetailApiUrl)
      return response.data.data || []
    } catch (error: any) {
      throw error.message
    }
  }
})

export const articleListState = atom({
  key: 'articleListState',
  default: articleQuery({ length: 1000, skip: 0 })
})

export const articleLength = selector({
  key: 'articleLength',
  get: ({ get }) => {
    const article = get(articleListState)
    return article.length
  }
})

export const articleDetail = atom({
  key: 'articleDetail',
  default: {}
})

// PAGINATION
export const pageNumber = atom({
  key: 'pageNumber',
  default: 0
})

export const perPage = atom({
  key: 'perPage',
  default: 12
})

export const slicedArticle = selector({
  key: 'slicedArticle',
  get: ({ get }) => {
    const pageNum = get(pageNumber)
    const article = get(articleListState)
    const perPages = get(perPage)

    const arrIndex = pageNum === 0 ? 0 : pageNum * perPages

    return article.slice().splice(arrIndex, perPages)
  }
})
