export interface KekerasanFace {
  id: number
  kategori: string
  created_at: string
  updated_at: string
}

export interface ApiKekerasanFace {
  status: string
  message: string
  data: KekerasanFace[]
  total: number
}
