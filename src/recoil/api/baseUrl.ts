export const baseUrl =
  'https://rindupuan.production.pangkalpinangkota.go.id/api/v1/'

//   ARTICLE
export interface ArticleParams {
  length: number
  skip: number
  keyword?: string
}

export const getArticleApiUrl = ({
  length,
  skip,
  keyword = ''
}: ArticleParams) =>
  `${baseUrl}articles/public?skip=${skip}&length=${length}&keyword=${keyword}`

export const getArticleDetailApiUrl = ({ id = '' }: { id: string }) =>
  `${baseUrl}articles/public/${id}`

//   PENGAJUAN
export const postPengajuanApiUrl = () => baseUrl + 'pengajuan'
// KATEGORI KEKERASAN
export const getKekerasanApiUrl = () => baseUrl + 'kategori-kekerasan'

// KONFIGURASI
export const konfigurasiApiUrl = () => baseUrl + 'konfigurasi/public'
// FAQ
export const faqApiUrl = ({
  skip = 0,
  length = 100
}: {
  skip: number
  length: number
}) => `${baseUrl}faqs?skip=${skip}&length=${length}`
