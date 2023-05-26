import { useState } from 'react'
import { dataChange, dataError } from './param'

const formMetaData = () => {
  const [data, setData] = useState<any>({
    nama: '',
    email: '',
    deskripsi: '',
    tgl_lahir: '',
    nik: '',
    kelamin: ''
  })

  const [dataError, setDataError] = useState<any>({
    nama: [],
    email: [],
    deskripsi: [],
    tgl_lahir: []
  })

  const [dataForm, setDataForm] = useState<any>([
    {
      id: 'nama',
      type: 'text',
      label: 'Nama :',
      placeholder: 'Masukan nama'
    },
    {
      id: 'email',
      type: 'email',
      label: 'Email :',
      placeholder: 'Masukan email',
      message: [
        // { id: 'error_email2', state: 'danger', message: 'Hanya boleh angka' }
      ]
    },
    {
      id: 'deskripsi',
      type: 'textarea',
      label: 'Deskripsi :',
      placeholder: 'Masukan deskripsi',
      caption:
        'Masukan Deskripsi masalah kekerasan yang dilakukan pelaku, proses akan dilakukan jika pelaku memang gak gila, bedeg dan gk suka main mobile legend',
      message: [
        // { id: 'error_email2', state: 'danger', message: 'Hanya boleh angka' }
      ]
    },
    {
      id: 'tgl_lahira',
      type: 'date',
      label: 'Tanggal Lahir :',
      withPortal: false,
      format: 'dd-mm-yyyy',
      start: 2000,
      stop: 2014,
      message: [
        // { id: 'error_email2', state: 'danger', message: 'Hanya boleh angka' }
      ]
    },
    {
      id: 'nik',
      type: 'number',
      label: 'NIK :',
      placeholder: 'Masukan nik',
      message: [
        // { id: 'error_email2', state: 'danger', message: 'Hanya boleh angka' }
      ]
    },
    {
      id: 'kelamin',
      type: 'radio_group',
      label: 'Kelamin :',
      list_radio: [
        { id: 'pria', value: 'pria', label: 'Pria' },
        { id: 'wanita', value: 'wanita', label: 'Wanita' },
        { id: 'lainnya', value: 'lainnya', label: 'Lainnya' }
      ]
    }
  ])

  const handleChange = (param: dataChange) => {
    setData({ ...data, [param.target.name]: param.target.value })
  }

  const handleError = (param: dataError) => {
    setDataError({ ...dataError, [param.target.name]: param.target.value })
  }
  return { data, dataForm, dataError, handleChange, handleError }
}

export default formMetaData
