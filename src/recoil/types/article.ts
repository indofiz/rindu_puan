export interface ArticleFace {
  id: number
  judul: string
  slug: string
  isi?: string
  tanggal: string
  gambar: string
  tampil: string
  created_at: string
  updated_at: string
}

export interface ApiArticleFace {
  status: string
  message: string
  data: ArticleFace[]
  total: number
}
