import { atom, selector } from 'recoil'
import axios from 'axios'
import { konfigurasiApiUrl } from './baseUrl'
import { ApiKonfigFace } from '../types/konfigurasi'

export const konfigQuery = selector({
  key: 'konfigQuery',
  get: async () => {
    const configApiUrl = konfigurasiApiUrl()
    try {
      const response = await axios.get<ApiKonfigFace>(configApiUrl)
      return response.data.data || []
    } catch (error: any) {
      throw error.message
    }
  }
})

export const konfigState = atom({
  key: 'konfigState',
  default: konfigQuery
})
