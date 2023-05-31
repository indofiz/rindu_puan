import { FC } from 'react'
import InputCondition from '../../../components/organism/Form/InputCondition'
import formPelaku from '../Data/FormPelaku.json'
import metaDataPelaku from '../Data/MetaDataPelaku'
import Button from '../../../components/atoms/Button'
import { useRecoilValue } from 'recoil'
import { dataSementaraKorban } from '../../../recoil/pengajuan'

interface PelakuFormProps {
  closeModal: () => void
}
const PelakuForm: FC<PelakuFormProps> = ({ closeModal }) => {
  const { data, dataError, handleChange, handleError } = metaDataPelaku()

  const dataSementara = useRecoilValue(dataSementaraKorban)
  console.log(dataSementaraKorban)
  const handleSave = (e: any) => {
    e.preventDefault()
    console.log(dataSementara)
    // closeModal()
  }

  return (
    <div className='w-full flex flex-col gap-3 mt-8'>
      {formPelaku.map((item: any, index: number) => (
        <InputCondition
          tabIndex={index}
          key={item.id}
          item={item}
          onChange={handleChange}
          handleError={handleError}
          errorMessage={dataError[item.id]}
          data={data[item.id]}
        />
      ))}
      <div className='flex w-full items-center justify-center gap-2 mt-8'>
        <Button
          label='Simpan'
          className='flex-1'
          variant='primary'
          onClick={handleSave}
        />
        <Button
          label='Batal'
          className='flex-1'
          variant='secondary'
          onClick={closeModal}
        />
      </div>
    </div>
  )
}

export default PelakuForm
