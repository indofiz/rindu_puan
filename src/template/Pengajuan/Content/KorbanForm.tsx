import { FC } from 'react'
import InputCondition from '../../../components/organism/Form/InputCondition'
import metaDataKorban from '../Data/MetaDataKorban'
import Button from '../../../components/atoms/Button'
import { requiredCheck } from '../../../utils/requiredheck'
import metaDataFile from '../Data/MetaDataFile'
import { nanoid } from 'nanoid/non-secure'

interface KorbanFormProps {
  closeModal: () => void
  onSave: (uid: string) => void
  form: any
}

const KorbanForm: FC<KorbanFormProps> = ({ closeModal, onSave, form }) => {
  const { data, dataError, handleChange, handleError } = metaDataKorban()

  const { handleChangeFile, handleDeleteFile, file } = metaDataFile()
  const isRequired = requiredCheck(data, form)

  const handleSave = () => {
    onSave(nanoid())
    closeModal()
  }

  const onDeleteFileTemporary = (id: string) => {
    handleDeleteFile(id)
  }

  return (
    <div className='w-full flex flex-col gap-3 mt-8'>
      {form.map((item: any, index: number) => (
        <InputCondition
          tabIndex={index + 1}
          key={item.id}
          item={item}
          onChange={item.type == 'file_image' ? handleChangeFile : handleChange}
          handleError={handleError}
          errorMessage={dataError[item.id]}
          data={item.type == 'file_image' ? '' : data[item.id]}
          file={item.type == 'file_image' && file[item.id]}
          onDeleteFile={onDeleteFileTemporary}
        />
      ))}
      <div className='flex w-full items-center justify-center gap-2 mt-8'>
        <Button
          label='Simpan'
          disabled={!isRequired}
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
