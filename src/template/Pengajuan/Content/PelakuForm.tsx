import { FC } from 'react'
import InputCondition from '../../../components/organism/Form/InputCondition'
import formPelaku from '../Data/FormPelaku.json'
import metaDataPelaku from '../Data/MetaDataPelaku'
import Button from '../../../components/atoms/Button'
// import { useRecoilValue } from 'recoil'
// import { dataSementaraKorban } from '../../../recoil/pengajuan'
import { requiredCheck } from '../../../utils/requiredheck'

interface PelakuFormProps {
  closeModal: () => void
  onSave: () => void
}
const PelakuForm: FC<PelakuFormProps> = ({ closeModal, onSave }) => {
  const { data, dataError, handleChange, handleError } = metaDataPelaku()

  const isRequired = requiredCheck(data, formPelaku)
  const handleSave = () => {
    onSave()
    closeModal()
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
          disabled={!isRequired}
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
