import { FC } from 'react'
import InputCondition from '../../../components/organism/Form/InputCondition'
import formKorban from '../Data/FormKorban.json'
import metaDataKorban from '../Data/MetaDataKorban'
import Button from '../../../components/atoms/Button'

interface KorbanFormProps {
  closeModal: () => void
  onSave: () => void
}
const KorbanForm: FC<KorbanFormProps> = ({ closeModal, onSave }) => {
  const { data, dataError, handleChange, handleError } = metaDataKorban()

  const handleSave = () => {
    onSave()
    closeModal()
  }

  return (
    <div className='w-full flex flex-col gap-3 mt-8'>
      {formKorban.map((item: any, index: number) => (
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

export default KorbanForm
