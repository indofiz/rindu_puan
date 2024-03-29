import { atom, selectorFamily } from 'recoil'
import axios from 'axios'
import { postPengajuanApiUrl } from './baseUrl'

export const pengajuanQuery = selectorFamily({
  key: 'pengajuanQuery',
  get: (params: any) => async () => {
    const pengajuanApiUrl = postPengajuanApiUrl()
    try {
      const response = await axios.post<any>(pengajuanApiUrl, params)
      return response || {}
    } catch (error: any) {
      throw error.message
    }
  }
})

export const articleListState = atom({
  key: 'pengajuanQuery',
  default: pengajuanQuery
})
