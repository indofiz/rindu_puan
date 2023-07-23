import { atom, selector } from 'recoil'

export interface Korban {
  nama_lengkap: string
  email?: string
  nik?: string
  tempat_lahir?: string
  tanggal_lahir?: string
  alamat: string
  jenis_kelamin: string
  no_hp: string
  pekerjaan: string
  status_perkawinan: string
  difabel: string
  tindak_kekerasan: string
  id_kategori: string
}

export interface Pelaku {
  nama_lengkap: string
  nik?: string
  tempat_lahir?: string
  tanggal_lahir?: string
  alamat: string
  jenis_kelamin: string
  no_hp: string
  pekerjaan: string
  status_perkawinan: string
  hubungan_keluarga: string
}

export const dataLaporan = atom({
  key: 'dataLaporan',
  default: {
    nama_lengkap: '',
    tanggal_kejadian: '',
    latitude: '',
    longitude: '',
    alamat: '',
    kronologi: ''
  }
})

export const statusPengajuan = atom({
  key: 'statusPengajuan',
  default: 'initial'
})

export const dataKorban = atom({
  key: 'dataKorban',
  default: [] as Korban[]
})

export const dataPelaku = atom({
  key: 'dataPelaku',
  default: [] as Pelaku[]
})

export const dataSementaraKorban = atom({
  key: 'dataSementaraKorban',
  default: {
    nama_lengkap: '',
    nik: '',
    email: '',
    tempat_lahir: '',
    tanggal_lahir: '',
    alamat: '',
    jenis_kelamin: '',
    no_hp: '',
    pekerjaan: '',
    status_perkawinan: '',
    difabel: '',
    id_kategori: '',
    tindak_kekerasan: ''
  } as Korban
})

export const dataSementaraPelaku = atom({
  key: 'dataSementaraPelaku',
  default: {
    nama_lengkap: '',
    nik: '',
    tempat_lahir: '',
    tanggal_lahir: '',
    alamat: '',
    jenis_kelamin: '',
    no_hp: '',
    pekerjaan: '',
    status_perkawinan: '',
    hubungan_keluarga: ''
  } as Pelaku
})

export const dataErrorField = atom({
  key: 'dataError',
  default: {}
})

export const semuaDataLaporan = selector({
  key: 'semuaDataLaporan',
  get: ({ get }) => {
    const laporan = get(dataLaporan)
    const korban = get(dataKorban)
    const pelaku = get(dataPelaku)
    return { ...laporan, korban: [...korban], pelaku: [...pelaku] }
  }
})

export const isLaporan = selector({
  key: 'isLaporan',
  get: ({ get }) => {
    const {
      nama_lengkap,
      tanggal_kejadian,
      longitude,
      latitude,
      alamat,
      kronologi
    } = get(dataLaporan)
    return nama_lengkap &&
      tanggal_kejadian &&
      latitude &&
      longitude &&
      kronologi &&
      alamat
      ? true
      : false
  }
})

export const isKorban = selector({
  key: 'isKorban',
  get: ({ get }) => {
    const korban = get(dataKorban)
    return korban.length > 0
  }
})

export const isPelaku = selector({
  key: 'isPelaku',
  get: ({ get }) => {
    const pelaku = get(dataPelaku)
    return pelaku.length > 0
  }
})
