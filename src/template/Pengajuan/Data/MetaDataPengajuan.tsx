import {
  dataChange,
  dataChangeLocation,
  dataError
} from '../../../components/organism/Form/utils/param'
import { useRecoilState } from 'recoil'
import { dataLaporan, dataErrorField } from '../../../recoil/pengajuan'

const metaDataPengajuan = () => {
  const [data, setData] = useRecoilState<any>(dataLaporan)
  const [dataError, setDataError] = useRecoilState<any>(dataErrorField)

  const handleChange = (param: dataChange) => {
    setData({ ...data, [param.target.name]: param.target.value })
  }

  const handleChangeLocation = (param: dataChangeLocation) => {
    setData({
      ...data,
      [param.target.latitudeId]: String(param.target.valueLatitude),
      [param.target.longitudeId]: String(param.target.valueLongitude)
    })
  }

  const handleError = (param: dataError) => {
    setDataError({ ...dataError, [param.target.name]: param.target.value })
  }

  return { data, dataError, handleChange, handleError, handleChangeLocation }
}

export default metaDataPengajuan
