import { atom, selector } from 'recoil'

export interface Korban {
  nama_lengkap: string
  nik: string
  tempat_lahir: string
  tgl_lahir: string
  alamat_lengkap_korban: string
  jenis_kelamin: string
  no_telpon: string
  pekerjaan: string
  status_perkawinan: string
  apakah_difabel: string
  kategori_kekerasan: string
  tindak_kekerasan_dialami: string
}

export const dataLaporan = atom({
  key: 'dataLaporan',
  default: {
    nama_pelapor: '',
    tgl_pelaporan: '',
    tgl_kejadian: '',
    alamat_lengkap: '',
    deskripsi_kronologi: ''
  }
})

export const dataKorban = atom({
  key: 'dataKorban',
  default: [] as Korban[]
})

export const dataPelaku = atom({
  key: 'dataPelaku',
  default: []
})

export const dataSementaraKorban = atom({
  key: 'dataSementaraKorban',
  default: {
    nama_lengkap: '',
    nik: '',
    tempat_lahir: '',
    tgl_lahir: '',
    alamat_lengkap_korban: '',
    jenis_kelamin: '',
    no_telpon: '',
    pekerjaan: '',
    status_perkawinan: '',
    apakah_difabel: '',
    kategori_kekerasan: '',
    tindak_kekerasan_dialami: ''
  } as Korban
})

export const dataSementaraPelaku = atom({
  key: 'dataSementaraPelaku',
  default: {
    nama_lengkap: '',
    nik: '',
    tempat_lahir: '',
    tanggal_lahir: '',
    alamat_lengkap_korban: '',
    jenis_kelamin: '',
    no_telpon: '',
    pekerjaan: '',
    status_perkawinan: '',
    hubungan_dengan_korban: ''
  }
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
    return { ...laporan, korban: { ...korban }, pelaku: { ...pelaku } }
  }
})

export const isLaporan = selector({
  key: 'isLaporan',
  get: ({ get }) => {
    const {
      nama_pelapor,
      tgl_kejadian,
      tgl_pelaporan,
      alamat_lengkap,
      deskripsi_kronologi
    } = get(dataLaporan)
    return nama_pelapor &&
      tgl_kejadian &&
      tgl_pelaporan &&
      alamat_lengkap &&
      deskripsi_kronologi
      ? true
      : false
  }
})
