import { dataChange } from '../../../components/organism/Form/utils/param'
import { useRecoilState } from 'recoil'
import { Berkas, dataFileSementara } from '../../../recoil/pengajuan'

const metaDataFile = () => {
  const [file, setDataFile] = useRecoilState<any>(dataFileSementara)

  const handleChangeFile = (param: dataChange) => {
    setDataFile((prev: Berkas) => {
      return { ...prev, [param.target.name]: param.target.value }
    })
  }

  const handleDeleteFile = (id: string) => {
    const { [id]: removedValue, ...rest } = Object.assign({}, file)
    setDataFile(rest)
  }

  return { file, handleChangeFile, handleDeleteFile }
}

export default metaDataFile
