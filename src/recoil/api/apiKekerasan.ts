import { atom, selector } from 'recoil'
import axios from 'axios'
import { getKekerasanApiUrl } from './baseUrl'
import { ApiKekerasanFace } from '../types/kekerasan'

export const kekerasanQuery = selector({
  key: 'kekerasanQuery',
  get: async () => {
    const kekerasanApiUrl = getKekerasanApiUrl()
    try {
      const response = await axios.get<ApiKekerasanFace>(kekerasanApiUrl)
      return response.data.data || []
    } catch (error: any) {
      throw error.message
    }
  }
})

export const kekerasanListState = atom({
  key: 'kekerasanListState',
  default: kekerasanQuery
})
