import { atom, selectorFamily } from 'recoil'
import { faqApiUrl } from './baseUrl'
import { ApiFAQFace } from '../types/faq'
import axios from 'axios'

export const faqQuery = selectorFamily({
  key: 'faqQuery',
  get: (params: any) => async () => {
    const faqApiUrls = faqApiUrl(params)
    try {
      const response = await axios.get<ApiFAQFace>(faqApiUrls)
      return response.data.data || []
    } catch (error: any) {
      throw error.message
    }
  }
})

export const faqState = atom({
  key: 'faqState',
  default: faqQuery({ length: 20, skip: 0 })
})
