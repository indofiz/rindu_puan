export interface DataKonfigFace {
  nama_aplikasi: number
  footer: string
  versi: string
  logo: string
  nama_kontak: string
  nomor_kontak: string
  created_at: string
  updated_at: string
}

export interface ApiKonfigFace {
  status: string
  message: string
  data: DataKonfigFace
}
