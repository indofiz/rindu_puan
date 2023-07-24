export interface FAQFace {
  id: number
  pertanyaan: string
  jawaban: string
  created_at: string
  updated_at: string
}

export interface ApiFAQFace {
  status: string
  message: string
  data: FAQFace[]
}
