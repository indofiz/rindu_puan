import {
  dataChange,
  dataError
} from '../../../components/organism/Form/utils/param'
import { useRecoilState } from 'recoil'
import { dataErrorField, dataSementaraKorban } from '../../../recoil/pengajuan'

const metaDataKorban = () => {
  const [data, setData] = useRecoilState<any>(dataSementaraKorban)
  const [dataError, setDataError] = useRecoilState<any>(dataErrorField)

  const handleChange = (param: dataChange) => {
    setData({ ...data, [param.target.name]: param.target.value })
  }

  const handleError = (param: dataError) => {
    setDataError({ ...dataError, [param.target.name]: param.target.value })
  }

  return { data, dataError, handleChange, handleError }
}

export default metaDataKorban
